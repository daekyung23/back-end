import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const user_role_assignmentUpdateManyMutationInputSchema: z.ZodType<Prisma.user_role_assignmentUpdateManyMutationInput> = z.object({
  role_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  approver_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default user_role_assignmentUpdateManyMutationInputSchema;
