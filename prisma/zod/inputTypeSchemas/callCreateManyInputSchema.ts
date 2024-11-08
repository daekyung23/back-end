import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const callCreateManyInputSchema: z.ZodType<Prisma.callCreateManyInput> = z.object({
  call_id: z.number().int().optional(),
  call_type_id: z.number().int(),
  client_branch_id: z.number().int(),
  requester_name: z.string(),
  requester_num: z.string(),
  requester_black_consumer: z.number().int().optional(),
  device_id: z.number().int().optional().nullable(),
  detail: z.string(),
  state: z.string(),
  received_at: z.coerce.date(),
  receiver_id: z.number().int(),
  transferred_at: z.coerce.date().optional().nullable(),
  transferred_dept_id: z.number().int().optional().nullable(),
  assigner_id: z.number().int().optional().nullable(),
  completed_at: z.coerce.date().optional().nullable()
}).strict();

export default callCreateManyInputSchema;
