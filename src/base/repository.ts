import { Container } from '@base/container'
import { ModelDelegates, ModelName } from '@lib/prisma'

// Repository 역할: 데이터베이스 조작, 데이터 조회, 데이터 수정, 데이터 삭제
export class Repository<
  M extends ModelName,
  V extends ModelName = M
> extends Container<M, V> {

  constructor(
    model: ModelDelegates[M],
    view?: ModelDelegates[V]
  ) {
    super(model, view)
  }

  // 타입 안전성 일부 손실
  create = (this.model.create as any).bind(this.model)
  findMany = this.view 
      ? (this.view.findMany as any).bind(this.view)
      : (this.model.findMany as any).bind(this.model)
  findOne = this.view 
      ? (this.view.findUnique as any).bind(this.view)
      : (this.model.findUnique as any).bind(this.model)
  update = (this.model.update as any).bind(this.model)
  delete = (this.model.delete as any).bind(this.model)
  count = this.view 
      ? (this.view.count as any).bind(this.view)
      : (this.model.count as any).bind(this.model)
  exists = async <T extends Parameters<(typeof this.model)['count']>[0]>(args: T) => {
    return (await (this.model.count as any).bind(this.model)(args)) > 0
  }
} 