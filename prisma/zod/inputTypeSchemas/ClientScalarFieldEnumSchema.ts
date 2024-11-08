import { z } from 'zod';

export const ClientScalarFieldEnumSchema = z.enum(['client_id','parent_client_id','default_client_branch_rate_id','client_name','is_active']);

export default ClientScalarFieldEnumSchema;
