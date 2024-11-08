import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_approval_typeCreateInputSchema } from '../inputTypeSchemas/device_approval_typeCreateInputSchema'
import { device_approval_typeUncheckedCreateInputSchema } from '../inputTypeSchemas/device_approval_typeUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const device_approval_typeSelectSchema: z.ZodType<Prisma.device_approval_typeSelect> = z.object({
  approval_type_id: z.boolean().optional(),
  approval_type_name: z.boolean().optional(),
}).strict()

export const device_approval_typeCreateArgsSchema: z.ZodType<Prisma.device_approval_typeCreateArgs> = z.object({
  select: device_approval_typeSelectSchema.optional(),
  data: z.union([ device_approval_typeCreateInputSchema,device_approval_typeUncheckedCreateInputSchema ]),
}).strict() ;

export default device_approval_typeCreateArgsSchema;
