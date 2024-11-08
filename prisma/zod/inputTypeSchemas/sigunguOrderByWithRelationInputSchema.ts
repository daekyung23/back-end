import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const sigunguOrderByWithRelationInputSchema: z.ZodType<Prisma.sigunguOrderByWithRelationInput> = z.object({
  sigungu_id: z.lazy(() => SortOrderSchema).optional(),
  sigungu_name: z.lazy(() => SortOrderSchema).optional(),
  sido_id: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default sigunguOrderByWithRelationInputSchema;
