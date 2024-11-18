
import { Container } from '@base/container'
import { 
  ModelDelegates, 
  ModelName, 
  CreateInputData,
  FindUniqueInput, 
  UncheckedUpdateInput, 
  UpdateInputUnique,
  DeleteInput,
  CountInput
} from '@lib/prisma'

import type { Request, Response } from 'express'
import { Service } from '@base/service'
import type { Search } from '@base/types'
import type { Activation } from '@schemas'
import type { Fields } from '@lib/prisma'


// Controller 역할: 응답 json 포맷팅, HTTP 상태 코드 반환, service 호출
export class Controller<
  M extends ModelName,
  V extends ModelName = M
>  extends Container<M, V> {
  service: Service<M, V>

  constructor(
    model: ModelDelegates[M],
    view?: ModelDelegates[V],
  ) {
    super(model, view)
    this.service = new Service<M, V>(model, view)
  }
  
  setService(service: Service<M, V>) {
    this.service = service
    return this
  }

  // CRUD
  create = async (req: Request, res: Response) => {
    const result = await this.service.create(req.validated.body as CreateInputData<M>)
    res.status(201).json(result)
  }

  getAll = async (req: Request, res: Response) => {
    const result = await this.service.getAll()
    res.json(result)
  }

  findOneByUnique = async<U extends keyof FindUniqueInput<V>>(req: Request, res: Response) => {
    const result = await this.service.findOneByUnique(req.validated.query as Record<U, FindUniqueInput<V>[U]>)
    res.json(result)
  }

  findEachByUniqueArray = async<U extends keyof FindUniqueInput<V>>(req: Request, res: Response) => {
    const result = await this.service.findEachByUniqueArray(req.validated.query as Record<U, FindUniqueInput<V>[U][]>)
    res.json(result)
  }

  update = async<U extends keyof UpdateInputUnique<M>> (req: Request, res: Response) => {
    const result = await this.service.update<U>(req.validated.body as UncheckedUpdateInput<M>)
    res.json(result)
  }

  delete = async<U extends keyof DeleteInput<M>> (req: Request, res: Response) => { 
    const result = await this.service.delete<U>(req.validated.query as Record<U, DeleteInput<M>[U]>)
    res.json(result)  
  }

  // override Service 필수, Controller 선택
  search = async (req: Request, res: Response) => {
    const result = await this.service.search(req.validated.query as Search & Fields<V>)
    res.json(result)
  }

  exists = async (req: Request, res: Response) => {
    const result = await this.service.exists(req.validated.query as CountInput<M>)
    res.json(result)
  }

  changeActivation = async<U extends keyof UpdateInputUnique<M>>(req: Request, res: Response) => {
    const result = await this.service.changeActivation<U>(
      req.validated.body as Record<U, UpdateInputUnique<M>[U]> & Activation
    )
    res.json(result)
  }
}