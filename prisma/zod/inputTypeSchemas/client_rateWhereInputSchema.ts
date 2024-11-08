import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';

export const client_rateWhereInputSchema: z.ZodType<Prisma.client_rateWhereInput> = z.object({
  AND: z.union([ z.lazy(() => client_rateWhereInputSchema),z.lazy(() => client_rateWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => client_rateWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => client_rateWhereInputSchema),z.lazy(() => client_rateWhereInputSchema).array() ]).optional(),
  client_rate_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  rate_type: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  rate_detail: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
}).strict();

export default client_rateWhereInputSchema;
