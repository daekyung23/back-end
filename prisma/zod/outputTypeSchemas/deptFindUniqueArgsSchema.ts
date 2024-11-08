import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { deptWhereUniqueInputSchema } from '../inputTypeSchemas/deptWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const deptSelectSchema: z.ZodType<Prisma.deptSelect> = z.object({
  dept_id: z.boolean().optional(),
  parent_dept_id: z.boolean().optional(),
  dept_name: z.boolean().optional(),
}).strict()

export const deptFindUniqueArgsSchema: z.ZodType<Prisma.deptFindUniqueArgs> = z.object({
  select: deptSelectSchema.optional(),
  where: deptWhereUniqueInputSchema,
}).strict() ;

export default deptFindUniqueArgsSchema;
