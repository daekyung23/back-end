import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { device_inspection_log_statusSchema } from './device_inspection_log_statusSchema';

export const NullableEnumdevice_inspection_log_statusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.NullableEnumdevice_inspection_log_statusFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => device_inspection_log_statusSchema).optional().nullable()
}).strict();

export default NullableEnumdevice_inspection_log_statusFieldUpdateOperationsInputSchema;
