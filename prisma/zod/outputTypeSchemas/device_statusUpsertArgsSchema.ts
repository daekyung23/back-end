import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_statusWhereUniqueInputSchema } from '../inputTypeSchemas/device_statusWhereUniqueInputSchema'
import { device_statusCreateInputSchema } from '../inputTypeSchemas/device_statusCreateInputSchema'
import { device_statusUncheckedCreateInputSchema } from '../inputTypeSchemas/device_statusUncheckedCreateInputSchema'
import { device_statusUpdateInputSchema } from '../inputTypeSchemas/device_statusUpdateInputSchema'
import { device_statusUncheckedUpdateInputSchema } from '../inputTypeSchemas/device_statusUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const device_statusSelectSchema: z.ZodType<Prisma.device_statusSelect> = z.object({
  status_id: z.boolean().optional(),
  status_name: z.boolean().optional(),
}).strict()

export const device_statusUpsertArgsSchema: z.ZodType<Prisma.device_statusUpsertArgs> = z.object({
  select: device_statusSelectSchema.optional(),
  where: device_statusWhereUniqueInputSchema,
  create: z.union([ device_statusCreateInputSchema,device_statusUncheckedCreateInputSchema ]),
  update: z.union([ device_statusUpdateInputSchema,device_statusUncheckedUpdateInputSchema ]),
}).strict() ;

export default device_statusUpsertArgsSchema;
