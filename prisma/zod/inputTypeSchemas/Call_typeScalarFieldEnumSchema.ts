import { z } from 'zod';

export const Call_typeScalarFieldEnumSchema = z.enum(['call_type_id','call_type_name','parent_call_type_id']);

export default Call_typeScalarFieldEnumSchema;
