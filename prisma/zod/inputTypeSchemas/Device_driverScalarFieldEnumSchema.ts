import { z } from 'zod';

export const Device_driverScalarFieldEnumSchema = z.enum(['device_driver_id','device_model_id','manufacturer','printer_language','install_file_address']);

export default Device_driverScalarFieldEnumSchema;
