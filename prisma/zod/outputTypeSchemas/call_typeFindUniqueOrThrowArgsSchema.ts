import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { call_typeWhereUniqueInputSchema } from '../inputTypeSchemas/call_typeWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const call_typeSelectSchema: z.ZodType<Prisma.call_typeSelect> = z.object({
  call_type_id: z.boolean().optional(),
  call_type_name: z.boolean().optional(),
  parent_call_type_id: z.boolean().optional(),
}).strict()

export const call_typeFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.call_typeFindUniqueOrThrowArgs> = z.object({
  select: call_typeSelectSchema.optional(),
  where: call_typeWhereUniqueInputSchema,
}).strict() ;

export default call_typeFindUniqueOrThrowArgsSchema;
