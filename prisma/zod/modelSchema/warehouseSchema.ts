import { z } from 'zod';

/////////////////////////////////////////
// WAREHOUSE SCHEMA
/////////////////////////////////////////

export const warehouseSchema = z.object({
  warehouse_id: z.number().int(),
  warehouse_name: z.string(),
  mgmt_dept_id: z.number().int(),
})

export type warehouse = z.infer<typeof warehouseSchema>

export default warehouseSchema;
