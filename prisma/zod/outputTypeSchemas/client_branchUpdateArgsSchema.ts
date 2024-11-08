import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { client_branchUpdateInputSchema } from '../inputTypeSchemas/client_branchUpdateInputSchema'
import { client_branchUncheckedUpdateInputSchema } from '../inputTypeSchemas/client_branchUncheckedUpdateInputSchema'
import { client_branchWhereUniqueInputSchema } from '../inputTypeSchemas/client_branchWhereUniqueInputSchema'
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

export const client_branchUpdateArgsSchema: z.ZodType<Prisma.client_branchUpdateArgs> = z.object({
  select: client_branchSelectSchema.optional(),
  data: z.union([ client_branchUpdateInputSchema,client_branchUncheckedUpdateInputSchema ]),
  where: client_branchWhereUniqueInputSchema,
}).strict() ;

export default client_branchUpdateArgsSchema;
