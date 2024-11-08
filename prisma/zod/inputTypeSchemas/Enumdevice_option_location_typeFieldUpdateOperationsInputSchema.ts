import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { device_option_location_typeSchema } from './device_option_location_typeSchema';

export const Enumdevice_option_location_typeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.Enumdevice_option_location_typeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => device_option_location_typeSchema).optional()
}).strict();

export default Enumdevice_option_location_typeFieldUpdateOperationsInputSchema;
