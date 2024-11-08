import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { v_clientWhereUniqueInputSchema } from '../inputTypeSchemas/v_clientWhereUniqueInputSchema'
import { v_clientCreateInputSchema } from '../inputTypeSchemas/v_clientCreateInputSchema'
import { v_clientUncheckedCreateInputSchema } from '../inputTypeSchemas/v_clientUncheckedCreateInputSchema'
import { v_clientUpdateInputSchema } from '../inputTypeSchemas/v_clientUpdateInputSchema'
import { v_clientUncheckedUpdateInputSchema } from '../inputTypeSchemas/v_clientUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const v_clientSelectSchema: z.ZodType<Prisma.v_clientSelect> = z.object({
  client_id: z.boolean().optional(),
  client_name: z.boolean().optional(),
  parent_client_id: z.boolean().optional(),
  default_client_branch_rate_id: z.boolean().optional(),
  is_active: z.boolean().optional(),
  parent_client_name: z.boolean().optional(),
  rate_type: z.boolean().optional(),
  rate_detail: z.boolean().optional(),
  branch_count: z.boolean().optional(),
}).strict()

export const v_clientUpsertArgsSchema: z.ZodType<Prisma.v_clientUpsertArgs> = z.object({
  select: v_clientSelectSchema.optional(),
  where: v_clientWhereUniqueInputSchema,
  create: z.union([ v_clientCreateInputSchema,v_clientUncheckedCreateInputSchema ]),
  update: z.union([ v_clientUpdateInputSchema,v_clientUncheckedUpdateInputSchema ]),
}).strict() ;

export default v_clientUpsertArgsSchema;
