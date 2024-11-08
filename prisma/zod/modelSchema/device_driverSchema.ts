import { z } from 'zod';

/////////////////////////////////////////
// DEVICE DRIVER SCHEMA
/////////////////////////////////////////

export const device_driverSchema = z.object({
  device_driver_id: z.number().int(),
  device_model_id: z.number().int(),
  manufacturer: z.string().nullable(),
  printer_language: z.string().nullable(),
  install_file_address: z.string().nullable(),
})

export type device_driver = z.infer<typeof device_driverSchema>

export default device_driverSchema;
