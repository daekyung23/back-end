import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { callUpdateInputSchema } from '../inputTypeSchemas/callUpdateInputSchema'
import { callUncheckedUpdateInputSchema } from '../inputTypeSchemas/callUncheckedUpdateInputSchema'
import { callWhereUniqueInputSchema } from '../inputTypeSchemas/callWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const callSelectSchema: z.ZodType<Prisma.callSelect> = z.object({
  call_id: z.boolean().optional(),
  call_type_id: z.boolean().optional(),
  client_branch_id: z.boolean().optional(),
  requester_name: z.boolean().optional(),
  requester_num: z.boolean().optional(),
  requester_black_consumer: z.boolean().optional(),
  device_id: z.boolean().optional(),
  detail: z.boolean().optional(),
  state: z.boolean().optional(),
  received_at: z.boolean().optional(),
  receiver_id: z.boolean().optional(),
  transferred_at: z.boolean().optional(),
  transferred_dept_id: z.boolean().optional(),
  assigner_id: z.boolean().optional(),
  completed_at: z.boolean().optional(),
}).strict()

export const callUpdateArgsSchema: z.ZodType<Prisma.callUpdateArgs> = z.object({
  select: callSelectSchema.optional(),
  data: z.union([ callUpdateInputSchema,callUncheckedUpdateInputSchema ]),
  where: callWhereUniqueInputSchema,
}).strict() ;

export default callUpdateArgsSchema;
