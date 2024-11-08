import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const device_approval_typeScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.device_approval_typeScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => device_approval_typeScalarWhereWithAggregatesInputSchema),z.lazy(() => device_approval_typeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_approval_typeScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_approval_typeScalarWhereWithAggregatesInputSchema),z.lazy(() => device_approval_typeScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  approval_type_id: z.union([ z.lazy(() => IntWithAggregatesFilterSchema),z.number() ]).optional(),
  approval_type_name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
}).strict();

export default device_approval_typeScalarWhereWithAggregatesInputSchema;
