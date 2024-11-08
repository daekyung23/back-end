import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { user_permissionSchema } from './user_permissionSchema';

export const Enumuser_permissionFieldUpdateOperationsInputSchema: z.ZodType<Prisma.Enumuser_permissionFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => user_permissionSchema).optional()
}).strict();

export default Enumuser_permissionFieldUpdateOperationsInputSchema;
