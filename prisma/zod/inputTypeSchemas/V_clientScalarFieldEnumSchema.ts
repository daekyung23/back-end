import { z } from 'zod';

export const V_clientScalarFieldEnumSchema = z.enum(['client_id','client_name','parent_client_id','default_client_branch_rate_id','is_active','parent_client_name','rate_type','rate_detail','branch_count']);

export default V_clientScalarFieldEnumSchema;
