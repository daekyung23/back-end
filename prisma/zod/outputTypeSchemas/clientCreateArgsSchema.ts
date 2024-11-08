import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { clientCreateInputSchema } from '../inputTypeSchemas/clientCreateInputSchema'
import { clientUncheckedCreateInputSchema } from '../inputTypeSchemas/clientUncheckedCreateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const clientSelectSchema: z.ZodType<Prisma.clientSelect> = z.object({
  client_id: z.boolean().optional(),
  parent_client_id: z.boolean().optional(),
  default_client_branch_rate_id: z.boolean().optional(),
  client_name: z.boolean().optional(),
  is_active: z.boolean().optional(),
}).strict()

export const clientCreateArgsSchema: z.ZodType<Prisma.clientCreateArgs> = z.object({
  select: clientSelectSchema.optional(),
  data: z.union([ clientCreateInputSchema,clientUncheckedCreateInputSchema ]),
}).strict() ;

export default clientCreateArgsSchema;
