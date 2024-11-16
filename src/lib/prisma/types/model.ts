import { Prisma,PrismaClient } from '@prisma/client'
import type { Simplify } from 'type-fest'

export type Models = Prisma.TypeMap['model']
export type ModelName = keyof Models
export type ModelDelegates = {
  [K in keyof Models]: PrismaClient[K & string]
}
export type Fields<M extends keyof Models> = 
  Omit<Models[M]['payload']['scalars'], never>
  
// repository args
export type CreateArgs<M extends ModelName> = NonNullable<Parameters<ModelDelegates[M]['create']>[0]> 
export type CountArgs<M extends ModelName> = NonNullable<Parameters<ModelDelegates[M]['count']>[0]>
export type FindUniqueArgs<M extends ModelName> = NonNullable<Parameters<ModelDelegates[M]['findUnique']>[0]>
export type FindManyArgs<M extends ModelName> = NonNullable<Parameters<ModelDelegates[M]['findMany']>[0]>
export type UpdateArgs<M extends ModelName> = NonNullable<Parameters<ModelDelegates[M]['update']>[0]>
export type DeleteArgs<M extends ModelName> = NonNullable<Parameters<ModelDelegates[M]['delete']>[0]>

// where args
// create does not have where
export type CountWhere<M extends ModelName> = NonNullable<CountArgs<M>['where']>
export type FindUniqueWhere<M extends ModelName> = NonNullable<FindUniqueArgs<M>['where']>
export type FindManyWhere<M extends ModelName> = NonNullable<FindManyArgs<M>['where']>
export type UpdateWhere<M extends ModelName> = NonNullable<UpdateArgs<M>['where']>
export type DeleteWhere<M extends ModelName> = NonNullable<DeleteArgs<M>['where']>

// input type == where args
export type CreateInputData<M extends ModelName> = CreateArgs<M>['data']
export type CountInput<M extends ModelName> = CountWhere<M>
export type FindUniqueInput<M extends ModelName> = FindUniqueWhere<M>
export type FindManyInput<M extends ModelName> = FindManyWhere<M>
export type UpdateInputUnique<M extends ModelName> = UpdateWhere<M> 
export type UpdateInputData<M extends ModelName> = UpdateArgs<M>['data']
export type DeleteInput<M extends ModelName> = DeleteWhere<M>

export type UncheckedUpdateInput<M extends ModelName> =
  UpdateInputUnique<M> & 
  UpdateInputData<M>


export type { Prisma, PrismaClient } from '@prisma/client'
