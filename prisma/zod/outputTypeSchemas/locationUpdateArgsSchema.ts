import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { locationUpdateInputSchema } from '../inputTypeSchemas/locationUpdateInputSchema'
import { locationUncheckedUpdateInputSchema } from '../inputTypeSchemas/locationUncheckedUpdateInputSchema'
import { locationWhereUniqueInputSchema } from '../inputTypeSchemas/locationWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const locationSelectSchema: z.ZodType<Prisma.locationSelect> = z.object({
  location_id: z.boolean().optional(),
  location_type: z.boolean().optional(),
  warehouse_id: z.boolean().optional(),
  client_branch_id: z.boolean().optional(),
}).strict()

export const locationUpdateArgsSchema: z.ZodType<Prisma.locationUpdateArgs> = z.object({
  select: locationSelectSchema.optional(),
  data: z.union([ locationUpdateInputSchema,locationUncheckedUpdateInputSchema ]),
  where: locationWhereUniqueInputSchema,
}).strict() ;

export default locationUpdateArgsSchema;