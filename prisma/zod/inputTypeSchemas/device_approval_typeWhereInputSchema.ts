import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFilterSchema } from './IntFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';

export const device_approval_typeWhereInputSchema: z.ZodType<Prisma.device_approval_typeWhereInput> = z.object({
  AND: z.union([ z.lazy(() => device_approval_typeWhereInputSchema),z.lazy(() => device_approval_typeWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => device_approval_typeWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => device_approval_typeWhereInputSchema),z.lazy(() => device_approval_typeWhereInputSchema).array() ]).optional(),
  approval_type_id: z.union([ z.lazy(() => IntFilterSchema),z.number() ]).optional(),
  approval_type_name: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
}).strict();

export default device_approval_typeWhereInputSchema;
