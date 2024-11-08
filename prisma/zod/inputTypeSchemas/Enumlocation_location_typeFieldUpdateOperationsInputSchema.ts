import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { location_location_typeSchema } from './location_location_typeSchema';

export const Enumlocation_location_typeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.Enumlocation_location_typeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => location_location_typeSchema).optional()
}).strict();

export default Enumlocation_location_typeFieldUpdateOperationsInputSchema;
