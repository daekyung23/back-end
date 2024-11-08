import { z } from 'zod';

export const DeviceScalarFieldEnumSchema = z.enum(['device_id','device_model_id','owner_dept_id','mgmt_dept_id','serial','regi_date','mac','last_inspection_log_id','last_location_log_id','status_id']);

export default DeviceScalarFieldEnumSchema;