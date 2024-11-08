import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';

export const clientOrderByWithRelationInputSchema: z.ZodType<Prisma.clientOrderByWithRelationInput> = z.object({
  client_id: z.lazy(() => SortOrderSchema).optional(),
  parent_client_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  default_client_branch_rate_id: z.lazy(() => SortOrderSchema).optional(),
  client_name: z.lazy(() => SortOrderSchema).optional(),
  is_active: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default clientOrderByWithRelationInputSchema;
