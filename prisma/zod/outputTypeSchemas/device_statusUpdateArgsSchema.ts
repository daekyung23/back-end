import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_statusUpdateInputSchema } from '../inputTypeSchemas/device_statusUpdateInputSchema'
import { device_statusUncheckedUpdateInputSchema } from '../inputTypeSchemas/device_statusUncheckedUpdateInputSchema'
import { device_statusWhereUniqueInputSchema } from '../inputTypeSchemas/device_statusWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const device_statusSelectSchema: z.ZodType<Prisma.device_statusSelect> = z.object({
  status_id: z.boolean().optional(),
  status_name: z.boolean().optional(),
}).strict()

export const device_statusUpdateArgsSchema: z.ZodType<Prisma.device_statusUpdateArgs> = z.object({
  select: device_statusSelectSchema.optional(),
  data: z.union([ device_statusUpdateInputSchema,device_statusUncheckedUpdateInputSchema ]),
  where: device_statusWhereUniqueInputSchema,
}).strict() ;

export default device_statusUpdateArgsSchema;
