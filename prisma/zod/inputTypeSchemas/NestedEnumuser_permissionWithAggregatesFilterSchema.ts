import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { user_permissionSchema } from './user_permissionSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumuser_permissionFilterSchema } from './NestedEnumuser_permissionFilterSchema';

export const NestedEnumuser_permissionWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumuser_permissionWithAggregatesFilter> = z.object({
  equals: z.lazy(() => user_permissionSchema).optional(),
  in: z.lazy(() => user_permissionSchema).array().optional(),
  notIn: z.lazy(() => user_permissionSchema).array().optional(),
  not: z.union([ z.lazy(() => user_permissionSchema),z.lazy(() => NestedEnumuser_permissionWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumuser_permissionFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumuser_permissionFilterSchema).optional()
}).strict();

export default NestedEnumuser_permissionWithAggregatesFilterSchema;
