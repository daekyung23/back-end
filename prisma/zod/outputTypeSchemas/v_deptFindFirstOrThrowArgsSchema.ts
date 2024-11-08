import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { v_deptWhereInputSchema } from '../inputTypeSchemas/v_deptWhereInputSchema'
import { v_deptOrderByWithRelationInputSchema } from '../inputTypeSchemas/v_deptOrderByWithRelationInputSchema'
import { v_deptWhereUniqueInputSchema } from '../inputTypeSchemas/v_deptWhereUniqueInputSchema'
import { V_deptScalarFieldEnumSchema } from '../inputTypeSchemas/V_deptScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const v_deptSelectSchema: z.ZodType<Prisma.v_deptSelect> = z.object({
  dept_id: z.boolean().optional(),
  dept_name: z.boolean().optional(),
  parent_dept_id: z.boolean().optional(),
  parent_dept_name: z.boolean().optional(),
}).strict()

export const v_deptFindFirstOrThrowArgsSchema: z.ZodType<Prisma.v_deptFindFirstOrThrowArgs> = z.object({
  select: v_deptSelectSchema.optional(),
  where: v_deptWhereInputSchema.optional(),
  orderBy: z.union([ v_deptOrderByWithRelationInputSchema.array(),v_deptOrderByWithRelationInputSchema ]).optional(),
  cursor: v_deptWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ V_deptScalarFieldEnumSchema,V_deptScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default v_deptFindFirstOrThrowArgsSchema;
