import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { call_typeCreateInputSchema } from '../inputTypeSchemas/call_typeCreateInputSchema'
import { call_typeUncheckedCreateInputSchema } from '../inputTypeSchemas/call_typeUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const call_typeSelectSchema: z.ZodType<Prisma.call_typeSelect> = z.object({
  call_type_id: z.boolean().optional(),
  call_type_name: z.boolean().optional(),
  parent_call_type_id: z.boolean().optional(),
}).strict()

export const call_typeCreateArgsSchema: z.ZodType<Prisma.call_typeCreateArgs> = z.object({
  select: call_typeSelectSchema.optional(),
  data: z.union([ call_typeCreateInputSchema,call_typeUncheckedCreateInputSchema ]),
}).strict() ;

export default call_typeCreateArgsSchema;
