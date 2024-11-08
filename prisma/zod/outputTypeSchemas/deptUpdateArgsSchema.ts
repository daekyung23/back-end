import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { deptUpdateInputSchema } from '../inputTypeSchemas/deptUpdateInputSchema'
import { deptUncheckedUpdateInputSchema } from '../inputTypeSchemas/deptUncheckedUpdateInputSchema'
import { deptWhereUniqueInputSchema } from '../inputTypeSchemas/deptWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const deptSelectSchema: z.ZodType<Prisma.deptSelect> = z.object({
  dept_id: z.boolean().optional(),
  parent_dept_id: z.boolean().optional(),
  dept_name: z.boolean().optional(),
}).strict()

export const deptUpdateArgsSchema: z.ZodType<Prisma.deptUpdateArgs> = z.object({
  select: deptSelectSchema.optional(),
  data: z.union([ deptUpdateInputSchema,deptUncheckedUpdateInputSchema ]),
  where: deptWhereUniqueInputSchema,
}).strict() ;

export default deptUpdateArgsSchema;
