import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const option_modelOrderByWithRelationInputSchema: z.ZodType<Prisma.option_modelOrderByWithRelationInput> = z.object({
  option_model_id: z.lazy(() => SortOrderSchema).optional(),
  option_model_name: z.lazy(() => SortOrderSchema).optional(),
  option_type: z.lazy(() => SortOrderSchema).optional(),
  manufacturer: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default option_modelOrderByWithRelationInputSchema;
