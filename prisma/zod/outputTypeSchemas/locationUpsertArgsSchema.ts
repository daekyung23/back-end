import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { locationWhereUniqueInputSchema } from '../inputTypeSchemas/locationWhereUniqueInputSchema'
import { locationCreateInputSchema } from '../inputTypeSchemas/locationCreateInputSchema'
import { locationUncheckedCreateInputSchema } from '../inputTypeSchemas/locationUncheckedCreateInputSchema'
import { locationUpdateInputSchema } from '../inputTypeSchemas/locationUpdateInputSchema'
import { locationUncheckedUpdateInputSchema } from '../inputTypeSchemas/locationUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const locationSelectSchema: z.ZodType<Prisma.locationSelect> = z.object({
  location_id: z.boolean().optional(),
  location_type: z.boolean().optional(),
  warehouse_id: z.boolean().optional(),
  client_branch_id: z.boolean().optional(),
}).strict()

export const locationUpsertArgsSchema: z.ZodType<Prisma.locationUpsertArgs> = z.object({
  select: locationSelectSchema.optional(),
  where: locationWhereUniqueInputSchema,
  create: z.union([ locationCreateInputSchema,locationUncheckedCreateInputSchema ]),
  update: z.union([ locationUpdateInputSchema,locationUncheckedUpdateInputSchema ]),
}).strict() ;

export default locationUpsertArgsSchema;
