import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { device_option_location_typeSchema } from './device_option_location_typeSchema';
import { Enumdevice_option_location_typeFieldUpdateOperationsInputSchema } from './Enumdevice_option_location_typeFieldUpdateOperationsInputSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';

export const device_optionUncheckedUpdateManyInputSchema: z.ZodType<Prisma.device_optionUncheckedUpdateManyInput> = z.object({
  device_option_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  option_model_id: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  serial: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  is_active: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  location_type: z.union([ z.lazy(() => device_option_location_typeSchema),z.lazy(() => Enumdevice_option_location_typeFieldUpdateOperationsInputSchema) ]).optional(),
  location_warehouse_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  location_device_id: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
}).strict();

export default device_optionUncheckedUpdateManyInputSchema;
