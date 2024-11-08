import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { deviceWhereInputSchema } from '../inputTypeSchemas/deviceWhereInputSchema'
import { deviceOrderByWithRelationInputSchema } from '../inputTypeSchemas/deviceOrderByWithRelationInputSchema'
import { deviceWhereUniqueInputSchema } from '../inputTypeSchemas/deviceWhereUniqueInputSchema'
import { DeviceScalarFieldEnumSchema } from '../inputTypeSchemas/DeviceScalarFieldEnumSchema'
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

export const deviceFindFirstOrThrowArgsSchema: z.ZodType<Prisma.deviceFindFirstOrThrowArgs> = z.object({
  select: deviceSelectSchema.optional(),
  where: deviceWhereInputSchema.optional(),
  orderBy: z.union([ deviceOrderByWithRelationInputSchema.array(),deviceOrderByWithRelationInputSchema ]).optional(),
  cursor: deviceWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ DeviceScalarFieldEnumSchema,DeviceScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default deviceFindFirstOrThrowArgsSchema;
