import { PrismaClient } from '@prisma/client'
import { PrismaSchemaParser } from '../lib/zod/parser'
import { SchemaGenerator } from '../lib/zod'

const prisma = new PrismaClient()
const parser = new PrismaSchemaParser(prisma)
const dmmf = await parser.getDMMF()
const models = dmmf

function createSchema(tableName: string) {
  const model = models.find((m: any) => m.name === tableName)
  if (!model) {
    throw new Error(`Table "${tableName}" not found in database schema`)
  }
  return new SchemaGenerator(model).generate()
}

export const schemas = {
  user: createSchema('user'),
  v_user: createSchema('v_user'),
  client: createSchema('client'),
  v_client: createSchema('v_client'),
  deviceModel: createSchema('device_model'),
  clientBranch: createSchema('client_branch'),
  v_client_branch: createSchema('v_client_branch'),
  consumableModel: createSchema('consumable_model'),
  v_consumable_model: createSchema('v_consumable_model'),
  dept: createSchema('dept'),
  deviceDriver: createSchema('device_driver'),
  device: createSchema('device'),
  v_device: createSchema('v_device'),
  sido: createSchema('sido'),
  v_sido: createSchema('v_sido'),
  sigungu: createSchema('sigungu'),
  userPosition: createSchema('user_position'),
  warehouse: createSchema('warehouse'),
  deviceLocationLog: createSchema('device_location_log'),
}
export type Schemas = typeof schemas
export * from './common'
