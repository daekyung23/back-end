import { z } from 'zod';

/////////////////////////////////////////
// DEVICE INSTALL INFO SCHEMA
/////////////////////////////////////////

export const device_install_infoSchema = z.object({
  device_id: z.number().int(),
  installer_id: z.number().int(),
  mgmt_num: z.string(),
  ip_address: z.string().nullable(),
  subnet_mask: z.string().nullable(),
  gateway: z.string().nullable(),
  dns1: z.string().nullable(),
  dns2: z.string().nullable(),
})

export type device_install_info = z.infer<typeof device_install_infoSchema>

export default device_install_infoSchema;
