import { z } from 'zod';

export const Device_optionScalarFieldEnumSchema = z.enum(['device_option_id','option_model_id','serial','is_active','location_type','location_warehouse_id','location_device_id']);

export default Device_optionScalarFieldEnumSchema;
