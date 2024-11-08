import { z } from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['user_id','user_name','login_id','password','mobile_num','office_num','email','modified_at','dept_id','approval_role_id','position_id','created_at','is_active','permission']);

export default UserScalarFieldEnumSchema;
