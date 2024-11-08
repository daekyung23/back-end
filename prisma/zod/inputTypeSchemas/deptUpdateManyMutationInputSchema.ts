import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';

export const deptUpdateManyMutationInputSchema: z.ZodType<Prisma.deptUpdateManyMutationInput> = z.object({
  parent_dept_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  dept_name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
}).strict();

export default deptUpdateManyMutationInputSchema;
