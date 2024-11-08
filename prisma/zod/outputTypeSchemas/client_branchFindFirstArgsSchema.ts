import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { client_branchWhereInputSchema } from '../inputTypeSchemas/client_branchWhereInputSchema'
import { client_branchOrderByWithRelationInputSchema } from '../inputTypeSchemas/client_branchOrderByWithRelationInputSchema'
import { client_branchWhereUniqueInputSchema } from '../inputTypeSchemas/client_branchWhereUniqueInputSchema'
import { Client_branchScalarFieldEnumSchema } from '../inputTypeSchemas/Client_branchScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const client_branchSelectSchema: z.ZodType<Prisma.client_branchSelect> = z.object({
  client_branch_id: z.boolean().optional(),
  sigungu_id: z.boolean().optional(),
  mgmt_dept_id: z.boolean().optional(),
  client_id: z.boolean().optional(),
  client_branch_name: z.boolean().optional(),
  client_branch_rate_id: z.boolean().optional(),
  branch_mgr_name: z.boolean().optional(),
  branch_mgr_mobile_num: z.boolean().optional(),
  branch_mgr_office_num: z.boolean().optional(),
  branch_mgr_email: z.boolean().optional(),
  is_active: z.boolean().optional(),
  remote_support: z.boolean().optional(),
  push_alert: z.boolean().optional(),
}).strict()

export const client_branchFindFirstArgsSchema: z.ZodType<Prisma.client_branchFindFirstArgs> = z.object({
  select: client_branchSelectSchema.optional(),
  where: client_branchWhereInputSchema.optional(),
  orderBy: z.union([ client_branchOrderByWithRelationInputSchema.array(),client_branchOrderByWithRelationInputSchema ]).optional(),
  cursor: client_branchWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Client_branchScalarFieldEnumSchema,Client_branchScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default client_branchFindFirstArgsSchema;
