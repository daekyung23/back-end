import { z } from 'zod';

export const LocationScalarFieldEnumSchema = z.enum(['location_id','location_type','warehouse_id','client_branch_id']);

export default LocationScalarFieldEnumSchema;
