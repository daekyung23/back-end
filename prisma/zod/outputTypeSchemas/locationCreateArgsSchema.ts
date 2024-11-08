import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { locationCreateInputSchema } from '../inputTypeSchemas/locationCreateInputSchema'
import { locationUncheckedCreateInputSchema } from '../inputTypeSchemas/locationUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const locationSelectSchema: z.ZodType<Prisma.locationSelect> = z.object({
  location_id: z.boolean().optional(),
  location_type: z.boolean().optional(),
  warehouse_id: z.boolean().optional(),
  client_branch_id: z.boolean().optional(),
}).strict()

export const locationCreateArgsSchema: z.ZodType<Prisma.locationCreateArgs> = z.object({
  select: locationSelectSchema.optional(),
  data: z.union([ locationCreateInputSchema,locationUncheckedCreateInputSchema ]),
}).strict() ;

export default locationCreateArgsSchema;
