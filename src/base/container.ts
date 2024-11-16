import type { ModelDelegates, ModelName } from '@lib/prisma'
import primaryKey from '@utils/primary-key'

export class Container<
  M extends ModelName,
  V extends ModelName = M
> {
  protected model: ModelDelegates[M]
  protected view?: ModelDelegates[V]
  protected readonly primaryKey: string

  constructor(
    model: ModelDelegates[M],
    view?: ModelDelegates[V]
  ) {
    this.model = model
    this.view = view
    this.primaryKey = primaryKey.get(this.model) as string
  }
} 
