import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';

export const user_role_assignmentUncheckedUpdateManyInputSchema: z.ZodType<Prisma.user_role_assignmentUncheckedUpdateManyInput> = z.object({
  role_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  approver_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default user_role_assignmentUncheckedUpdateManyInputSchema;
