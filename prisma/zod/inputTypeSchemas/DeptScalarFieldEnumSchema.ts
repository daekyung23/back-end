import { z } from 'zod';

export const DeptScalarFieldEnumSchema = z.enum(['dept_id','parent_dept_id','dept_name']);

export default DeptScalarFieldEnumSchema;
