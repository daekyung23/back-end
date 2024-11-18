import { PrismaClient } from '@prisma/client'
import { PrismaSchemaParser } from '../lib/zod/parser'
import { SchemaGenerator } from '../lib/zod'

const prisma = new PrismaClient()
const parser = new PrismaSchemaParser(prisma)
const dmmf = await parser.getDMMF()
const models = dmmf

export const schemas = {
  user: new SchemaGenerator(models.find((m:any) => m.name === 'user')!).generate(),
  v_user: new SchemaGenerator(models.find((m:any) => m.name === 'v_user')!).generate(),
  client: new SchemaGenerator(models.find((m: any) => m.name === 'client')!).generate(),
  v_client: new SchemaGenerator(models.find((m: any) => m.name === 'v_client')!).generate(),
  deviceModel: new SchemaGenerator(models.find((m: any) => m.name === 'device_model')!).generate(),
  v_device_model: new SchemaGenerator(models.find((m: any) => m.name === 'v_device_model')!).generate(),
  clientBranch: new SchemaGenerator(models.find((m: any) => m.name === 'client_branch')!).generate(),
  v_client_branch: new SchemaGenerator(models.find((m: any) => m.name === 'v_client_branch')!).generate(),
  consumableModel: new SchemaGenerator(models.find((m: any) => m.name === 'consumable_model')!).generate(),
  v_consumable_model: new SchemaGenerator(models.find((m: any) => m.name === 'v_consumable_model')!).generate(),
  dept: new SchemaGenerator(models.find((m: any) => m.name === 'dept')!).generate(),
  deviceDriver: new SchemaGenerator(models.find((m: any) => m.name === 'device_driver')!).generate(),
  device: new SchemaGenerator(models.find((m: any) => m.name === 'device')!).generate(),
  userPosition: new SchemaGenerator(models.find((m: any) => m.name === 'user_position')!).generate(),
  warehouse: new SchemaGenerator(models.find((m: any) => m.name === 'warehouse')!).generate(),
}
export type Schemas = typeof schemas
export * from './common'
