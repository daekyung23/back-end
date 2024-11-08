import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { deptWhereInputSchema } from '../inputTypeSchemas/deptWhereInputSchema'
import { deptOrderByWithRelationInputSchema } from '../inputTypeSchemas/deptOrderByWithRelationInputSchema'
import { deptWhereUniqueInputSchema } from '../inputTypeSchemas/deptWhereUniqueInputSchema'
import { DeptScalarFieldEnumSchema } from '../inputTypeSchemas/DeptScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const deptSelectSchema: z.ZodType<Prisma.deptSelect> = z.object({
  dept_id: z.boolean().optional(),
  parent_dept_id: z.boolean().optional(),
  dept_name: z.boolean().optional(),
}).strict()

export const deptFindManyArgsSchema: z.ZodType<Prisma.deptFindManyArgs> = z.object({
  select: deptSelectSchema.optional(),
  where: deptWhereInputSchema.optional(),
  orderBy: z.union([ deptOrderByWithRelationInputSchema.array(),deptOrderByWithRelationInputSchema ]).optional(),
  cursor: deptWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DeptScalarFieldEnumSchema,DeptScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default deptFindManyArgsSchema;
