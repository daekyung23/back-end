import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { device_option_location_typeSchema } from './device_option_location_typeSchema';

export const device_optionCreateInputSchema: z.ZodType<Prisma.device_optionCreateInput> = z.object({
  option_model_id: z.number().int(),
  serial: z.string().optional().nullable(),
  is_active: z.number().int().optional(),
  location_type: z.lazy(() => device_option_location_typeSchema),
  location_warehouse_id: z.number().int().optional().nullable(),
  location_device_id: z.number().int().optional().nullable()
}).strict();

export default device_optionCreateInputSchema;
