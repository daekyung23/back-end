import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_approval_typeWhereInputSchema } from '../inputTypeSchemas/device_approval_typeWhereInputSchema'
import { device_approval_typeOrderByWithAggregationInputSchema } from '../inputTypeSchemas/device_approval_typeOrderByWithAggregationInputSchema'
import { Device_approval_typeScalarFieldEnumSchema } from '../inputTypeSchemas/Device_approval_typeScalarFieldEnumSchema'
import { device_approval_typeScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/device_approval_typeScalarWhereWithAggregatesInputSchema'

export const device_approval_typeGroupByArgsSchema: z.ZodType<Prisma.device_approval_typeGroupByArgs> = z.object({
  where: device_approval_typeWhereInputSchema.optional(),
  orderBy: z.union([ device_approval_typeOrderByWithAggregationInputSchema.array(),device_approval_typeOrderByWithAggregationInputSchema ]).optional(),
  by: Device_approval_typeScalarFieldEnumSchema.array(),
  having: device_approval_typeScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default device_approval_typeGroupByArgsSchema;
