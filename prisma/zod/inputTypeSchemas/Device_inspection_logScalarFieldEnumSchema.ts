import { z } from 'zod';

export const Device_inspection_logScalarFieldEnumSchema = z.enum(['device_inspection_log_id','device_id','inspector_id','inspection_date','visit_type','call_id','FL','FS','BL','BS','toner_count_YE','toner_count_MA','toner_count_CY','toner_count_BK','toner_stock_YE','toner_stock_MA','toner_stock_CY','toner_stock_BK','toner_deliver_YE','toner_deliver_CY','toner_deliver_MA','toner_deliver_BK','drum_count_YE','drum_count_MA','drum_count_CY','drum_count_BK','drum_replacement_detail','status']);

export default Device_inspection_logScalarFieldEnumSchema;
