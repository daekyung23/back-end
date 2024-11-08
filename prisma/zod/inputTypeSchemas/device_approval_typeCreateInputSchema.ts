import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const device_approval_typeCreateInputSchema: z.ZodType<Prisma.device_approval_typeCreateInput> = z.object({
  approval_type_name: z.string()
}).strict();

export default device_approval_typeCreateInputSchema;
