import { z } from 'zod';

/////////////////////////////////////////
// V DEPT SCHEMA
/////////////////////////////////////////

export const v_deptSchema = z.object({
  dept_id: z.number().int(),
  dept_name: z.string(),
  parent_dept_id: z.number().int().nullable(),
  parent_dept_name: z.string().nullable(),
})

export type v_dept = z.infer<typeof v_deptSchema>

export default v_deptSchema;
