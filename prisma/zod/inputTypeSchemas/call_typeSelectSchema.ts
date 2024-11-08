import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const call_typeSelectSchema: z.ZodType<Prisma.call_typeSelect> = z.object({
  call_type_id: z.boolean().optional(),
  call_type_name: z.boolean().optional(),
  parent_call_type_id: z.boolean().optional(),
}).strict()

export default call_typeSelectSchema;
