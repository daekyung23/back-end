import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';

export const call_typeOrderByWithRelationInputSchema: z.ZodType<Prisma.call_typeOrderByWithRelationInput> = z.object({
  call_type_id: z.lazy(() => SortOrderSchema).optional(),
  call_type_name: z.lazy(() => SortOrderSchema).optional(),
  parent_call_type_id: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
}).strict();

export default call_typeOrderByWithRelationInputSchema;
