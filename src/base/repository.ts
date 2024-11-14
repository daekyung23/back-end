import { Container } from '@base/container'
import { PrismaModels } from '@lib/prisma'

//역할: 데이터베이스 조작, 데이터 조회, 데이터 수정, 데이터 삭제
export class Repository<
  ModelType extends keyof PrismaModels,
  ViewType extends keyof PrismaModels = ModelType
> extends Container<ModelType, ViewType> {

  constructor(
    model: PrismaModels[ModelType],
    view?: PrismaModels[ViewType]
  ) {
    super(model, view)
  }

  //타입 안전성 일부 손실
  create = (this.model.create as any).bind(this.model)
  findMany = (this.view ?? this.model.findMany as any).bind(this.view)
  findOne = (this.view ?? this.model.findUnique as any).bind(this.view)
  update = (this.model.update as any).bind(this.model)
  delete = (this.model.delete as any).bind(this.model)
  count = (this.view ?? this.model.count as any).bind(this.view)
} 