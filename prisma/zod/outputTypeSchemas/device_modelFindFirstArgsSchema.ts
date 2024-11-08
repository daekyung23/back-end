import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_modelWhereInputSchema } from '../inputTypeSchemas/device_modelWhereInputSchema'
import { device_modelOrderByWithRelationInputSchema } from '../inputTypeSchemas/device_modelOrderByWithRelationInputSchema'
import { device_modelWhereUniqueInputSchema } from '../inputTypeSchemas/device_modelWhereUniqueInputSchema'
import { Device_modelScalarFieldEnumSchema } from '../inputTypeSchemas/Device_modelScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const device_modelSelectSchema: z.ZodType<Prisma.device_modelSelect> = z.object({
  device_model_id: z.boolean().optional(),
  model_name: z.boolean().optional(),
  manufacturer: z.boolean().optional(),
  color_support: z.boolean().optional(),
}).strict()

export const device_modelFindFirstArgsSchema: z.ZodType<Prisma.device_modelFindFirstArgs> = z.object({
  select: device_modelSelectSchema.optional(),
  where: device_modelWhereInputSchema.optional(),
  orderBy: z.union([ device_modelOrderByWithRelationInputSchema.array(),device_modelOrderByWithRelationInputSchema ]).optional(),
  cursor: device_modelWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Device_modelScalarFieldEnumSchema,Device_modelScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default device_modelFindFirstArgsSchema;
