import { z } from 'zod';

export const Device_install_infoScalarFieldEnumSchema = z.enum(['device_id','installer_id','mgmt_num','ip_address','subnet_mask','gateway','dns1','dns2']);

export default Device_install_infoScalarFieldEnumSchema;
