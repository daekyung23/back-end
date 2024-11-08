import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';

export const approval_roleOrderByWithRelationInputSchema: z.ZodType<Prisma.approval_roleOrderByWithRelationInput> = z.object({
  role_id: z.lazy(() => SortOrderSchema).optional(),
  role_name: z.lazy(() => SortOrderSchema).optional(),
  upper_role_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export default approval_roleOrderByWithRelationInputSchema;
