import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_approvalWhereInputSchema } from '../inputTypeSchemas/device_approvalWhereInputSchema'
import { device_approvalOrderByWithAggregationInputSchema } from '../inputTypeSchemas/device_approvalOrderByWithAggregationInputSchema'
import { Device_approvalScalarFieldEnumSchema } from '../inputTypeSchemas/Device_approvalScalarFieldEnumSchema'
import { device_approvalScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/device_approvalScalarWhereWithAggregatesInputSchema'

export const device_approvalGroupByArgsSchema: z.ZodType<Prisma.device_approvalGroupByArgs> = z.object({
  where: device_approvalWhereInputSchema.optional(),
  orderBy: z.union([ device_approvalOrderByWithAggregationInputSchema.array(),device_approvalOrderByWithAggregationInputSchema ]).optional(),
  by: Device_approvalScalarFieldEnumSchema.array(),
  having: device_approvalScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default device_approvalGroupByArgsSchema;
