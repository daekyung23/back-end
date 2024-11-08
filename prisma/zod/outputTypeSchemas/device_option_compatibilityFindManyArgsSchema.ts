import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_option_compatibilityWhereInputSchema } from '../inputTypeSchemas/device_option_compatibilityWhereInputSchema'
import { device_option_compatibilityOrderByWithRelationInputSchema } from '../inputTypeSchemas/device_option_compatibilityOrderByWithRelationInputSchema'
import { device_option_compatibilityWhereUniqueInputSchema } from '../inputTypeSchemas/device_option_compatibilityWhereUniqueInputSchema'
import { Device_option_compatibilityScalarFieldEnumSchema } from '../inputTypeSchemas/Device_option_compatibilityScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const device_option_compatibilitySelectSchema: z.ZodType<Prisma.device_option_compatibilitySelect> = z.object({
  device_model_id: z.boolean().optional(),
  option_model_id: z.boolean().optional(),
}).strict()

export const device_option_compatibilityFindManyArgsSchema: z.ZodType<Prisma.device_option_compatibilityFindManyArgs> = z.object({
  select: device_option_compatibilitySelectSchema.optional(),
  where: device_option_compatibilityWhereInputSchema.optional(),
  orderBy: z.union([ device_option_compatibilityOrderByWithRelationInputSchema.array(),device_option_compatibilityOrderByWithRelationInputSchema ]).optional(),
  cursor: device_option_compatibilityWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Device_option_compatibilityScalarFieldEnumSchema,Device_option_compatibilityScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default device_option_compatibilityFindManyArgsSchema;
