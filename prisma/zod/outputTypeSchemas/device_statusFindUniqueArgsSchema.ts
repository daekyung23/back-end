import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_statusWhereUniqueInputSchema } from '../inputTypeSchemas/device_statusWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const device_statusSelectSchema: z.ZodType<Prisma.device_statusSelect> = z.object({
  status_id: z.boolean().optional(),
  status_name: z.boolean().optional(),
}).strict()

export const device_statusFindUniqueArgsSchema: z.ZodType<Prisma.device_statusFindUniqueArgs> = z.object({
  select: device_statusSelectSchema.optional(),
  where: device_statusWhereUniqueInputSchema,
}).strict() ;

export default device_statusFindUniqueArgsSchema;
