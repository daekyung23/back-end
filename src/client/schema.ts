import { z } from 'zod'
import { String, Natural, Boolean } from '@lib/zod'
import { Client } from './entity'
import { ClientView } from './view'
import { getMetadataArgsStorage } from 'typeorm'

const createZodSchema = (entity: typeof Client | typeof ClientView) => {
  const metadata = getMetadataArgsStorage()
  const columns = metadata.columns.filter(col => col.target === entity)
  const pks = metadata.columns.filter(col => 
    col.target === entity && 
    col.options?.primary
  ).map(col => col.propertyName)

  const baseSchema = columns.reduce((schema, column) => {
    if (pks.includes(column.propertyName)) return schema

    let field
    switch(column.options?.type) {
      case 'varchar':
        field = String.max(column.options.length || 255)
        break
      case 'tinyint':
        field = Boolean
        break
      default:
        field = Natural
    }
    return { ...schema, [column.propertyName]: field }
  }, {})

  return {
    create: z.object(baseSchema),
    update: z.object(
      Object.entries(baseSchema).reduce((schema, [key, field]) => ({
        ...schema,
        [key]: field.optional()
      }), {})
    ),
    search: z.object({
      searchTerm: String.max(45).optional(),
      isActive: Boolean.optional(),
      parentClientId: Natural.optional()
    })
  }
}

// Client Schemas
const clientSchema = createZodSchema(Client)
export const ClientSchema = {
  schema: {
    create: clientSchema.create,
    update: clientSchema.update,
  },
  request: {
    create: {} as z.infer<typeof clientSchema.create>,
    update: {} as z.infer<typeof clientSchema.update>,
  }
}

// ClientView Schemas
const clientViewSchema = createZodSchema(ClientView)
export const ClientViewSchema = {
  schema: {
    search: clientViewSchema.search
  },
  request: {
    search: {} as z.infer<typeof clientViewSchema.search>
  }
}