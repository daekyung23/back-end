import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_install_infoWhereInputSchema } from '../inputTypeSchemas/device_install_infoWhereInputSchema'
import { device_install_infoOrderByWithRelationInputSchema } from '../inputTypeSchemas/device_install_infoOrderByWithRelationInputSchema'
import { device_install_infoWhereUniqueInputSchema } from '../inputTypeSchemas/device_install_infoWhereUniqueInputSchema'

export const device_install_infoAggregateArgsSchema: z.ZodType<Prisma.device_install_infoAggregateArgs> = z.object({
  where: device_install_infoWhereInputSchema.optional(),
  orderBy: z.union([ device_install_infoOrderByWithRelationInputSchema.array(),device_install_infoOrderByWithRelationInputSchema ]).optional(),
  cursor: device_install_infoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default device_install_infoAggregateArgsSchema;
