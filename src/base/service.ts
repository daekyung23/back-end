import { Container } from '@base/container'
import { PrismaModels } from '@lib/prisma'
import { Repository } from '@base/repository'

//역할: 비즈니스 로직 처리, repository 호출
export class Service<
  ModelType extends keyof PrismaModels,
  ViewType extends keyof PrismaModels = ModelType
> extends Container<ModelType, ViewType> {
  repository: Repository<ModelType, ViewType>

  constructor(
    model: PrismaModels[ModelType],
    view?: PrismaModels[ViewType]
  ) {
    super(model, view)
    this.repository = new Repository(model, view)
  }

  public create = (args: Parameters<PrismaModels[ModelType]['create']>[0]) => {
    return this.repository.create(args)
  }

  public findOne = <T extends Parameters<PrismaModels[ModelType]['findUnique']>[0]>(args: T) => {
    return this.repository.findOne(args)
  }

  public findMany = <T extends Parameters<PrismaModels[ModelType]['findMany']>[0]>(args: T) => {
    return this.repository.findMany(args)
  }

  public update = <T extends Parameters<PrismaModels[ModelType]['update']>[0]>(args: T) => {
    return this.repository.update(args)
  }

  public delete = <T extends Parameters<PrismaModels[ModelType]['delete']>[0]>(args: T) => {
    return this.repository.delete(args)
  }
}
