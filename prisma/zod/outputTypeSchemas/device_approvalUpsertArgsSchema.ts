import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_approvalWhereUniqueInputSchema } from '../inputTypeSchemas/device_approvalWhereUniqueInputSchema'
import { device_approvalCreateInputSchema } from '../inputTypeSchemas/device_approvalCreateInputSchema'
import { device_approvalUncheckedCreateInputSchema } from '../inputTypeSchemas/device_approvalUncheckedCreateInputSchema'
import { device_approvalUpdateInputSchema } from '../inputTypeSchemas/device_approvalUpdateInputSchema'
import { device_approvalUncheckedUpdateInputSchema } from '../inputTypeSchemas/device_approvalUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const device_approvalSelectSchema: z.ZodType<Prisma.device_approvalSelect> = z.object({
  approval_id: z.boolean().optional(),
  approval_type_id: z.boolean().optional(),
  sub_approval_id: z.boolean().optional(),
  requester_id: z.boolean().optional(),
  request_at: z.boolean().optional(),
  approver_role_id: z.boolean().optional(),
  origin_location_id: z.boolean().optional(),
  destination_location_id: z.boolean().optional(),
  approver_id: z.boolean().optional(),
  approve_at: z.boolean().optional(),
  is_approved: z.boolean().optional(),
}).strict()

export const device_approvalUpsertArgsSchema: z.ZodType<Prisma.device_approvalUpsertArgs> = z.object({
  select: device_approvalSelectSchema.optional(),
  where: device_approvalWhereUniqueInputSchema,
  create: z.union([ device_approvalCreateInputSchema,device_approvalUncheckedCreateInputSchema ]),
  update: z.union([ device_approvalUpdateInputSchema,device_approvalUncheckedUpdateInputSchema ]),
}).strict() ;

export default device_approvalUpsertArgsSchema;
