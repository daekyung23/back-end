import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_install_infoWhereInputSchema } from '../inputTypeSchemas/device_install_infoWhereInputSchema'
import { device_install_infoOrderByWithAggregationInputSchema } from '../inputTypeSchemas/device_install_infoOrderByWithAggregationInputSchema'
import { Device_install_infoScalarFieldEnumSchema } from '../inputTypeSchemas/Device_install_infoScalarFieldEnumSchema'
import { device_install_infoScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/device_install_infoScalarWhereWithAggregatesInputSchema'

export const device_install_infoGroupByArgsSchema: z.ZodType<Prisma.device_install_infoGroupByArgs> = z.object({
  where: device_install_infoWhereInputSchema.optional(),
  orderBy: z.union([ device_install_infoOrderByWithAggregationInputSchema.array(),device_install_infoOrderByWithAggregationInputSchema ]).optional(),
  by: Device_install_infoScalarFieldEnumSchema.array(),
  having: device_install_infoScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default device_install_infoGroupByArgsSchema;
