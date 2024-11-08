import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_approval_typeWhereInputSchema } from '../inputTypeSchemas/device_approval_typeWhereInputSchema'
import { device_approval_typeOrderByWithRelationInputSchema } from '../inputTypeSchemas/device_approval_typeOrderByWithRelationInputSchema'
import { device_approval_typeWhereUniqueInputSchema } from '../inputTypeSchemas/device_approval_typeWhereUniqueInputSchema'
import { Device_approval_typeScalarFieldEnumSchema } from '../inputTypeSchemas/Device_approval_typeScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const device_approval_typeSelectSchema: z.ZodType<Prisma.device_approval_typeSelect> = z.object({
  approval_type_id: z.boolean().optional(),
  approval_type_name: z.boolean().optional(),
}).strict()

export const device_approval_typeFindManyArgsSchema: z.ZodType<Prisma.device_approval_typeFindManyArgs> = z.object({
  select: device_approval_typeSelectSchema.optional(),
  where: device_approval_typeWhereInputSchema.optional(),
  orderBy: z.union([ device_approval_typeOrderByWithRelationInputSchema.array(),device_approval_typeOrderByWithRelationInputSchema ]).optional(),
  cursor: device_approval_typeWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Device_approval_typeScalarFieldEnumSchema,Device_approval_typeScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default device_approval_typeFindManyArgsSchema;
