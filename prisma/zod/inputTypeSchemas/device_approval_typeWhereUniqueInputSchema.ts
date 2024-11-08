import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { device_approval_typeWhereInputSchema } from './device_approval_typeWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';

export const device_approval_typeWhereUniqueInputSchema: z.ZodType<Prisma.device_approval_typeWhereUniqueInput> = z.object({
  approval_type_id: z.number().int()
})
.and(z.object({
  approval_type_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => device_approval_typeWhereInputSchema),z.lazy(() => device_approval_typeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_approval_typeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_approval_typeWhereInputSchema),z.lazy(() => device_approval_typeWhereInputSchema).array() ]).optional(),
  approval_type_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict());

export default device_approval_typeWhereUniqueInputSchema;
