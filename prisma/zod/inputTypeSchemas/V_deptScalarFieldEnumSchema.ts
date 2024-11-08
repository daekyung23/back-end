import { z } from 'zod';

export const V_deptScalarFieldEnumSchema = z.enum(['dept_id','dept_name','parent_dept_id','parent_dept_name']);

export default V_deptScalarFieldEnumSchema;
