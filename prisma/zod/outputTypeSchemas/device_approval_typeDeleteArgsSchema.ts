import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_approval_typeWhereUniqueInputSchema } from '../inputTypeSchemas/device_approval_typeWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const device_approval_typeSelectSchema: z.ZodType<Prisma.device_approval_typeSelect> = z.object({
  approval_type_id: z.boolean().optional(),
  approval_type_name: z.boolean().optional(),
}).strict()

export const device_approval_typeDeleteArgsSchema: z.ZodType<Prisma.device_approval_typeDeleteArgs> = z.object({
  select: device_approval_typeSelectSchema.optional(),
  where: device_approval_typeWhereUniqueInputSchema,
}).strict() ;

export default device_approval_typeDeleteArgsSchema;
