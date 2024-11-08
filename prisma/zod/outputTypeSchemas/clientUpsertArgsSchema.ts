import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { clientWhereUniqueInputSchema } from '../inputTypeSchemas/clientWhereUniqueInputSchema'
import { clientCreateInputSchema } from '../inputTypeSchemas/clientCreateInputSchema'
import { clientUncheckedCreateInputSchema } from '../inputTypeSchemas/clientUncheckedCreateInputSchema'
import { clientUpdateInputSchema } from '../inputTypeSchemas/clientUpdateInputSchema'
import { clientUncheckedUpdateInputSchema } from '../inputTypeSchemas/clientUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const clientSelectSchema: z.ZodType<Prisma.clientSelect> = z.object({
  client_id: z.boolean().optional(),
  parent_client_id: z.boolean().optional(),
  default_client_branch_rate_id: z.boolean().optional(),
  client_name: z.boolean().optional(),
  is_active: z.boolean().optional(),
}).strict()

export const clientUpsertArgsSchema: z.ZodType<Prisma.clientUpsertArgs> = z.object({
  select: clientSelectSchema.optional(),
  where: clientWhereUniqueInputSchema,
  create: z.union([ clientCreateInputSchema,clientUncheckedCreateInputSchema ]),
  update: z.union([ clientUpdateInputSchema,clientUncheckedUpdateInputSchema ]),
}).strict() ;

export default clientUpsertArgsSchema;
