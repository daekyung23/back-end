import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const device_approval_typeUncheckedCreateInputSchema: z.ZodType<Prisma.device_approval_typeUncheckedCreateInput> = z.object({
  approval_type_id: z.number().int().optional(),
  approval_type_name: z.string()
}).strict();

export default device_approval_typeUncheckedCreateInputSchema;
