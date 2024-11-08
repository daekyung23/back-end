import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { deptWhereUniqueInputSchema } from '../inputTypeSchemas/deptWhereUniqueInputSchema'
import { deptCreateInputSchema } from '../inputTypeSchemas/deptCreateInputSchema'
import { deptUncheckedCreateInputSchema } from '../inputTypeSchemas/deptUncheckedCreateInputSchema'
import { deptUpdateInputSchema } from '../inputTypeSchemas/deptUpdateInputSchema'
import { deptUncheckedUpdateInputSchema } from '../inputTypeSchemas/deptUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const deptSelectSchema: z.ZodType<Prisma.deptSelect> = z.object({
  dept_id: z.boolean().optional(),
  parent_dept_id: z.boolean().optional(),
  dept_name: z.boolean().optional(),
}).strict()

export const deptUpsertArgsSchema: z.ZodType<Prisma.deptUpsertArgs> = z.object({
  select: deptSelectSchema.optional(),
  where: deptWhereUniqueInputSchema,
  create: z.union([ deptCreateInputSchema,deptUncheckedCreateInputSchema ]),
  update: z.union([ deptUpdateInputSchema,deptUncheckedUpdateInputSchema ]),
}).strict() ;

export default deptUpsertArgsSchema;
