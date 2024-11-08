import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_consumable_compatibilityWhereInputSchema } from '../inputTypeSchemas/device_consumable_compatibilityWhereInputSchema'
import { device_consumable_compatibilityOrderByWithRelationInputSchema } from '../inputTypeSchemas/device_consumable_compatibilityOrderByWithRelationInputSchema'
import { device_consumable_compatibilityWhereUniqueInputSchema } from '../inputTypeSchemas/device_consumable_compatibilityWhereUniqueInputSchema'
import { Device_consumable_compatibilityScalarFieldEnumSchema } from '../inputTypeSchemas/Device_consumable_compatibilityScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const device_consumable_compatibilitySelectSchema: z.ZodType<Prisma.device_consumable_compatibilitySelect> = z.object({
  device_model_id: z.boolean().optional(),
  consumable_model_id: z.boolean().optional(),
}).strict()

export const device_consumable_compatibilityFindFirstOrThrowArgsSchema: z.ZodType<Prisma.device_consumable_compatibilityFindFirstOrThrowArgs> = z.object({
  select: device_consumable_compatibilitySelectSchema.optional(),
  where: device_consumable_compatibilityWhereInputSchema.optional(),
  orderBy: z.union([ device_consumable_compatibilityOrderByWithRelationInputSchema.array(),device_consumable_compatibilityOrderByWithRelationInputSchema ]).optional(),
  cursor: device_consumable_compatibilityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Device_consumable_compatibilityScalarFieldEnumSchema,Device_consumable_compatibilityScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default device_consumable_compatibilityFindFirstOrThrowArgsSchema;
