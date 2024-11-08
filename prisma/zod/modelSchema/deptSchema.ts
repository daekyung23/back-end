import { z } from 'zod';

/////////////////////////////////////////
// DEPT SCHEMA
/////////////////////////////////////////

export const deptSchema = z.object({
  dept_id: z.number().int(),
  parent_dept_id: z.number().int().nullable(),
  dept_name: z.string(),
})

export type dept = z.infer<typeof deptSchema>

export default deptSchema;
