import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { v_deptCreateInputSchema } from '../inputTypeSchemas/v_deptCreateInputSchema'
import { v_deptUncheckedCreateInputSchema } from '../inputTypeSchemas/v_deptUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const v_deptSelectSchema: z.ZodType<Prisma.v_deptSelect> = z.object({
  dept_id: z.boolean().optional(),
  dept_name: z.boolean().optional(),
  parent_dept_id: z.boolean().optional(),
  parent_dept_name: z.boolean().optional(),
}).strict()

export const v_deptCreateArgsSchema: z.ZodType<Prisma.v_deptCreateArgs> = z.object({
  select: v_deptSelectSchema.optional(),
  data: z.union([ v_deptCreateInputSchema,v_deptUncheckedCreateInputSchema ]),
}).strict() ;

export default v_deptCreateArgsSchema;
