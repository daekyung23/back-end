import type { PrismaModels } from '@lib/prisma'
import primaryKey from '@utils/primary-key'

export class Container<
  ModelType extends keyof PrismaModels,
  ViewType extends keyof PrismaModels = ModelType
>   {
  protected model: PrismaModels[ModelType]
  protected view?: PrismaModels[ViewType]
  protected readonly primaryKey: string

  constructor(
    model: PrismaModels[ModelType],
    view?: PrismaModels[ViewType]
  ) {
    this.model = model
    this.view = view
    this.primaryKey = primaryKey.get(this.model) as string
  }
} 
