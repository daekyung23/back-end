import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_approval_typeUpdateInputSchema } from '../inputTypeSchemas/device_approval_typeUpdateInputSchema'
import { device_approval_typeUncheckedUpdateInputSchema } from '../inputTypeSchemas/device_approval_typeUncheckedUpdateInputSchema'
import { device_approval_typeWhereUniqueInputSchema } from '../inputTypeSchemas/device_approval_typeWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const device_approval_typeSelectSchema: z.ZodType<Prisma.device_approval_typeSelect> = z.object({
  approval_type_id: z.boolean().optional(),
  approval_type_name: z.boolean().optional(),
}).strict()

export const device_approval_typeUpdateArgsSchema: z.ZodType<Prisma.device_approval_typeUpdateArgs> = z.object({
  select: device_approval_typeSelectSchema.optional(),
  data: z.union([ device_approval_typeUpdateInputSchema,device_approval_typeUncheckedUpdateInputSchema ]),
  where: device_approval_typeWhereUniqueInputSchema,
}).strict() ;

export default device_approval_typeUpdateArgsSchema;
