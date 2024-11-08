import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { deviceWhereUniqueInputSchema } from '../inputTypeSchemas/deviceWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const deviceSelectSchema: z.ZodType<Prisma.deviceSelect> = z.object({
  device_id: z.boolean().optional(),
  device_model_id: z.boolean().optional(),
  owner_dept_id: z.boolean().optional(),
  mgmt_dept_id: z.boolean().optional(),
  serial: z.boolean().optional(),
  regi_date: z.boolean().optional(),
  mac: z.boolean().optional(),
  last_inspection_log_id: z.boolean().optional(),
  last_location_log_id: z.boolean().optional(),
  status_id: z.boolean().optional(),
}).strict()

export const deviceFindUniqueArgsSchema: z.ZodType<Prisma.deviceFindUniqueArgs> = z.object({
  select: deviceSelectSchema.optional(),
  where: deviceWhereUniqueInputSchema,
}).strict() ;

export default deviceFindUniqueArgsSchema;
