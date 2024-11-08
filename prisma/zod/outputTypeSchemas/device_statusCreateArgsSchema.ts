import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_statusCreateInputSchema } from '../inputTypeSchemas/device_statusCreateInputSchema'
import { device_statusUncheckedCreateInputSchema } from '../inputTypeSchemas/device_statusUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const device_statusSelectSchema: z.ZodType<Prisma.device_statusSelect> = z.object({
  status_id: z.boolean().optional(),
  status_name: z.boolean().optional(),
}).strict()

export const device_statusCreateArgsSchema: z.ZodType<Prisma.device_statusCreateArgs> = z.object({
  select: device_statusSelectSchema.optional(),
  data: z.union([ device_statusCreateInputSchema,device_statusUncheckedCreateInputSchema ]),
}).strict() ;

export default device_statusCreateArgsSchema;
