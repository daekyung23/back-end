import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { client_rateWhereInputSchema } from './client_rateWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const client_rateWhereUniqueInputSchema: z.ZodType<Prisma.client_rateWhereUniqueInput> = z.object({
  client_rate_id: z.number().int()
})
.and(z.object({
  client_rate_id: z.number().int().optional(),
  AND: z.union([ z.lazy(() => client_rateWhereInputSchema),z.lazy(() => client_rateWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => client_rateWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => client_rateWhereInputSchema),z.lazy(() => client_rateWhereInputSchema).array() ]).optional(),
  rate_type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  rate_detail: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict());

export default client_rateWhereUniqueInputSchema;
