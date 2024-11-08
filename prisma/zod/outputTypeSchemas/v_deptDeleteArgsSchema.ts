import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { v_deptWhereUniqueInputSchema } from '../inputTypeSchemas/v_deptWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const v_deptSelectSchema: z.ZodType<Prisma.v_deptSelect> = z.object({
  dept_id: z.boolean().optional(),
  dept_name: z.boolean().optional(),
  parent_dept_id: z.boolean().optional(),
  parent_dept_name: z.boolean().optional(),
}).strict()

export const v_deptDeleteArgsSchema: z.ZodType<Prisma.v_deptDeleteArgs> = z.object({
  select: v_deptSelectSchema.optional(),
  where: v_deptWhereUniqueInputSchema,
}).strict() ;

export default v_deptDeleteArgsSchema;
