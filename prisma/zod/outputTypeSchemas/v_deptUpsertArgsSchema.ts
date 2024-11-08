import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { v_deptWhereUniqueInputSchema } from '../inputTypeSchemas/v_deptWhereUniqueInputSchema'
import { v_deptCreateInputSchema } from '../inputTypeSchemas/v_deptCreateInputSchema'
import { v_deptUncheckedCreateInputSchema } from '../inputTypeSchemas/v_deptUncheckedCreateInputSchema'
import { v_deptUpdateInputSchema } from '../inputTypeSchemas/v_deptUpdateInputSchema'
import { v_deptUncheckedUpdateInputSchema } from '../inputTypeSchemas/v_deptUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const v_deptSelectSchema: z.ZodType<Prisma.v_deptSelect> = z.object({
  dept_id: z.boolean().optional(),
  dept_name: z.boolean().optional(),
  parent_dept_id: z.boolean().optional(),
  parent_dept_name: z.boolean().optional(),
}).strict()

export const v_deptUpsertArgsSchema: z.ZodType<Prisma.v_deptUpsertArgs> = z.object({
  select: v_deptSelectSchema.optional(),
  where: v_deptWhereUniqueInputSchema,
  create: z.union([ v_deptCreateInputSchema,v_deptUncheckedCreateInputSchema ]),
  update: z.union([ v_deptUpdateInputSchema,v_deptUncheckedUpdateInputSchema ]),
}).strict() ;

export default v_deptUpsertArgsSchema;
