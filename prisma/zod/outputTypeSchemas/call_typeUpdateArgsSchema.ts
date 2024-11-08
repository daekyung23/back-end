import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { call_typeUpdateInputSchema } from '../inputTypeSchemas/call_typeUpdateInputSchema'
import { call_typeUncheckedUpdateInputSchema } from '../inputTypeSchemas/call_typeUncheckedUpdateInputSchema'
import { call_typeWhereUniqueInputSchema } from '../inputTypeSchemas/call_typeWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const call_typeSelectSchema: z.ZodType<Prisma.call_typeSelect> = z.object({
  call_type_id: z.boolean().optional(),
  call_type_name: z.boolean().optional(),
  parent_call_type_id: z.boolean().optional(),
}).strict()

export const call_typeUpdateArgsSchema: z.ZodType<Prisma.call_typeUpdateArgs> = z.object({
  select: call_typeSelectSchema.optional(),
  data: z.union([ call_typeUpdateInputSchema,call_typeUncheckedUpdateInputSchema ]),
  where: call_typeWhereUniqueInputSchema,
}).strict() ;

export default call_typeUpdateArgsSchema;
