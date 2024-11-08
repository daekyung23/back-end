import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_statusWhereInputSchema } from '../inputTypeSchemas/device_statusWhereInputSchema'
import { device_statusOrderByWithRelationInputSchema } from '../inputTypeSchemas/device_statusOrderByWithRelationInputSchema'
import { device_statusWhereUniqueInputSchema } from '../inputTypeSchemas/device_statusWhereUniqueInputSchema'
import { Device_statusScalarFieldEnumSchema } from '../inputTypeSchemas/Device_statusScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const device_statusSelectSchema: z.ZodType<Prisma.device_statusSelect> = z.object({
  status_id: z.boolean().optional(),
  status_name: z.boolean().optional(),
}).strict()

export const device_statusFindFirstArgsSchema: z.ZodType<Prisma.device_statusFindFirstArgs> = z.object({
  select: device_statusSelectSchema.optional(),
  where: device_statusWhereInputSchema.optional(),
  orderBy: z.union([ device_statusOrderByWithRelationInputSchema.array(),device_statusOrderByWithRelationInputSchema ]).optional(),
  cursor: device_statusWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Device_statusScalarFieldEnumSchema,Device_statusScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default device_statusFindFirstArgsSchema;
