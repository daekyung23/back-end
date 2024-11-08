import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';

export const sidoUpdateManyMutationInputSchema: z.ZodType<Prisma.sidoUpdateManyMutationInput> = z.object({
  sido_name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export default sidoUpdateManyMutationInputSchema;
