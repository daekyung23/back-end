import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { user_permissionSchema } from './user_permissionSchema';

export const NestedEnumuser_permissionFilterSchema: z.ZodType<Prisma.NestedEnumuser_permissionFilter> = z.object({
  equals: z.lazy(() => user_permissionSchema).optional(),
  in: z.lazy(() => user_permissionSchema).array().optional(),
  notIn: z.lazy(() => user_permissionSchema).array().optional(),
  not: z.union([ z.lazy(() => user_permissionSchema),z.lazy(() => NestedEnumuser_permissionFilterSchema) ]).optional(),
}).strict();

export default NestedEnumuser_permissionFilterSchema;
