import { Container } from '@base/container'
import type { 
  ModelDelegates, 
  ModelName, 
  FindUniqueInput, 
  CreateInputData,
  UncheckedUpdateInput,
  UpdateInputUnique,
  DeleteInput,
  CountInput,
} from '@lib/prisma'
import { Repository } from '@base/repository'
import { NotImplementedError } from '@utils/errors'
import type { Search, SearchResult } from '@base/types'
import type { Activation } from '@lib/zod-prisma-types'
import type { Fields } from '@lib/prisma'

// Service 역할: 비즈니스 로직 처리, repository 호출
export class Service<
  M extends ModelName,
  V extends ModelName = M
> extends Container<M, V> {
  repository: Repository<M, V>

  constructor(
    model: ModelDelegates[M],
    view?: ModelDelegates[V],
  ) {
    super(model, view)
    this.repository = new Repository<M, V>(model, view)
  }

  // 기본 CRUD 메서드
  create = (body: CreateInputData<M>) => {
    return this.repository.create({ data: body })
  }

  getAll = () => {
    return this.repository.findMany()
  }

  findOneByUnique<U extends keyof FindUniqueInput<V>>(where: Record<U, FindUniqueInput<V>[U]>) {
    return this.repository.findOne({ where })
  }

  findEachByUniqueArray<U extends keyof FindUniqueInput<V>>(where: Record<U, FindUniqueInput<V>[U][]>) {
    const uniqueKey = Object.keys(where)[0] as U
    return this.repository.findMany({
      where: { [uniqueKey]: { in: where[uniqueKey] } }
    })
  }

  update<U extends keyof UpdateInputUnique<M>>(body: UncheckedUpdateInput<M>) {
    const [uniqueKey] = Object.keys(body) as U[]
    const { [uniqueKey]: uniqueValue, ...data } = body
    return this.repository.update({ where: { [uniqueKey]: uniqueValue }, data })
  }

  delete = <U extends keyof DeleteInput<M>>(where: Record<U, DeleteInput<M>[U]>) => {
    return this.repository.delete({ where })
  }

  // 필수 override 메서드
  search = async(query: Search & Fields<V>): Promise<SearchResult<M, V>> => {
    throw new NotImplementedError(undefined, 'search method is not implemented')
  }

  exists = async (query: CountInput<M>): Promise<{ isExist: boolean }> => {
    throw new NotImplementedError(undefined, 'exists method is not implemented')
  }

  changeActivation = async<U extends keyof UpdateInputUnique<M>>(
    body: Record<U, UpdateInputUnique<M>[U]> & Activation
  ): Promise<{ [K in M]: ModelDelegates[M] }> => {
    throw new NotImplementedError(undefined, 'changeActivation method is not implemented')
  }
}