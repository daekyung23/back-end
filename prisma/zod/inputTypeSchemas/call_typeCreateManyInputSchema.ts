import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const call_typeCreateManyInputSchema: z.ZodType<Prisma.call_typeCreateManyInput> = z.object({
  call_type_id: z.number().int().optional(),
  call_type_name: z.string(),
  parent_call_type_id: z.number().int().optional().nullable()
}).strict();

export default call_typeCreateManyInputSchema;
