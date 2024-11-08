import { z } from 'zod';

export const WarehouseScalarFieldEnumSchema = z.enum(['warehouse_id','warehouse_name','mgmt_dept_id']);

export default WarehouseScalarFieldEnumSchema;
