import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { deviceWhereInputSchema } from '../inputTypeSchemas/deviceWhereInputSchema'
import { deviceOrderByWithAggregationInputSchema } from '../inputTypeSchemas/deviceOrderByWithAggregationInputSchema'
import { DeviceScalarFieldEnumSchema } from '../inputTypeSchemas/DeviceScalarFieldEnumSchema'
import { deviceScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/deviceScalarWhereWithAggregatesInputSchema'

export const deviceGroupByArgsSchema: z.ZodType<Prisma.deviceGroupByArgs> = z.object({
  where: deviceWhereInputSchema.optional(),
  orderBy: z.union([ deviceOrderByWithAggregationInputSchema.array(),deviceOrderByWithAggregationInputSchema ]).optional(),
  by: DeviceScalarFieldEnumSchema.array(),
  having: deviceScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default deviceGroupByArgsSchema;
