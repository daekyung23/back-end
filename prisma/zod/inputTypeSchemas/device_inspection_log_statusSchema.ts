import { z } from 'zod';

export const device_inspection_log_statusSchema = z.enum(['normal','pending']);

export type device_inspection_log_statusType = `${z.infer<typeof device_inspection_log_statusSchema>}`

export default device_inspection_log_statusSchema;
