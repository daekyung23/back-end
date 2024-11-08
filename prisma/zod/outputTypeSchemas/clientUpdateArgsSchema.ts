import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { clientUpdateInputSchema } from '../inputTypeSchemas/clientUpdateInputSchema'
import { clientUncheckedUpdateInputSchema } from '../inputTypeSchemas/clientUncheckedUpdateInputSchema'
import { clientWhereUniqueInputSchema } from '../inputTypeSchemas/clientWhereUniqueInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const clientSelectSchema: z.ZodType<Prisma.clientSelect> = z.object({
  client_id: z.boolean().optional(),
  parent_client_id: z.boolean().optional(),
  default_client_branch_rate_id: z.boolean().optional(),
  client_name: z.boolean().optional(),
  is_active: z.boolean().optional(),
}).strict()

export const clientUpdateArgsSchema: z.ZodType<Prisma.clientUpdateArgs> = z.object({
  select: clientSelectSchema.optional(),
  data: z.union([ clientUpdateInputSchema,clientUncheckedUpdateInputSchema ]),
  where: clientWhereUniqueInputSchema,
}).strict() ;

export default clientUpdateArgsSchema;
