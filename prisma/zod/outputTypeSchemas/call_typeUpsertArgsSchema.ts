import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { call_typeWhereUniqueInputSchema } from '../inputTypeSchemas/call_typeWhereUniqueInputSchema'
import { call_typeCreateInputSchema } from '../inputTypeSchemas/call_typeCreateInputSchema'
import { call_typeUncheckedCreateInputSchema } from '../inputTypeSchemas/call_typeUncheckedCreateInputSchema'
import { call_typeUpdateInputSchema } from '../inputTypeSchemas/call_typeUpdateInputSchema'
import { call_typeUncheckedUpdateInputSchema } from '../inputTypeSchemas/call_typeUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const call_typeSelectSchema: z.ZodType<Prisma.call_typeSelect> = z.object({
  call_type_id: z.boolean().optional(),
  call_type_name: z.boolean().optional(),
  parent_call_type_id: z.boolean().optional(),
}).strict()

export const call_typeUpsertArgsSchema: z.ZodType<Prisma.call_typeUpsertArgs> = z.object({
  select: call_typeSelectSchema.optional(),
  where: call_typeWhereUniqueInputSchema,
  create: z.union([ call_typeCreateInputSchema,call_typeUncheckedCreateInputSchema ]),
  update: z.union([ call_typeUpdateInputSchema,call_typeUncheckedUpdateInputSchema ]),
}).strict() ;

export default call_typeUpsertArgsSchema;
