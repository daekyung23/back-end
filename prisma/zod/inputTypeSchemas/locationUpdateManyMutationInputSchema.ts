import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { location_location_typeSchema } from './location_location_typeSchema';
import { Enumlocation_location_typeFieldUpdateOperationsInputSchema } from './Enumlocation_location_typeFieldUpdateOperationsInputSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';

export const locationUpdateManyMutationInputSchema: z.ZodType<Prisma.locationUpdateManyMutationInput> = z.object({
  location_type: z.union([ z.lazy(() => location_location_typeSchema),z.lazy(() => Enumlocation_location_typeFieldUpdateOperationsInputSchema) ]).optional(),
  warehouse_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  client_branch_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export default locationUpdateManyMutationInputSchema;
