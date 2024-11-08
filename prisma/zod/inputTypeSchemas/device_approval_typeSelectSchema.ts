import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const device_approval_typeSelectSchema: z.ZodType<Prisma.device_approval_typeSelect> = z.object({
  approval_type_id: z.boolean().optional(),
  approval_type_name: z.boolean().optional(),
}).strict()

export default device_approval_typeSelectSchema;
