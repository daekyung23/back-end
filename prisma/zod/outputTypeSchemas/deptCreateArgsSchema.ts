import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { deptCreateInputSchema } from '../inputTypeSchemas/deptCreateInputSchema'
import { deptUncheckedCreateInputSchema } from '../inputTypeSchemas/deptUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const deptSelectSchema: z.ZodType<Prisma.deptSelect> = z.object({
  dept_id: z.boolean().optional(),
  parent_dept_id: z.boolean().optional(),
  dept_name: z.boolean().optional(),
}).strict()

export const deptCreateArgsSchema: z.ZodType<Prisma.deptCreateArgs> = z.object({
  select: deptSelectSchema.optional(),
  data: z.union([ deptCreateInputSchema,deptUncheckedCreateInputSchema ]),
}).strict() ;

export default deptCreateArgsSchema;
