import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { v_clientWhereInputSchema } from '../inputTypeSchemas/v_clientWhereInputSchema'
import { v_clientOrderByWithRelationInputSchema } from '../inputTypeSchemas/v_clientOrderByWithRelationInputSchema'
import { v_clientWhereUniqueInputSchema } from '../inputTypeSchemas/v_clientWhereUniqueInputSchema'
import { V_clientScalarFieldEnumSchema } from '../inputTypeSchemas/V_clientScalarFieldEnumSchema'
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

export const v_clientFindFirstOrThrowArgsSchema: z.ZodType<Prisma.v_clientFindFirstOrThrowArgs> = z.object({
  select: v_clientSelectSchema.optional(),
  where: v_clientWhereInputSchema.optional(),
  orderBy: z.union([ v_clientOrderByWithRelationInputSchema.array(),v_clientOrderByWithRelationInputSchema ]).optional(),
  cursor: v_clientWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ V_clientScalarFieldEnumSchema,V_clientScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default v_clientFindFirstOrThrowArgsSchema;
