import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';

export const sidoOrderByWithRelationInputSchema: z.ZodType<Prisma.sidoOrderByWithRelationInput> = z.object({
  sido_id: z.lazy(() => SortOrderSchema).optional(),
  sido_name: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export default sidoOrderByWithRelationInputSchema;
