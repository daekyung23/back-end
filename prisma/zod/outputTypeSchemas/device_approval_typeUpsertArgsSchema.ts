import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_approval_typeWhereUniqueInputSchema } from '../inputTypeSchemas/device_approval_typeWhereUniqueInputSchema'
import { device_approval_typeCreateInputSchema } from '../inputTypeSchemas/device_approval_typeCreateInputSchema'
import { device_approval_typeUncheckedCreateInputSchema } from '../inputTypeSchemas/device_approval_typeUncheckedCreateInputSchema'
import { device_approval_typeUpdateInputSchema } from '../inputTypeSchemas/device_approval_typeUpdateInputSchema'
import { device_approval_typeUncheckedUpdateInputSchema } from '../inputTypeSchemas/device_approval_typeUncheckedUpdateInputSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const device_approval_typeSelectSchema: z.ZodType<Prisma.device_approval_typeSelect> = z.object({
  approval_type_id: z.boolean().optional(),
  approval_type_name: z.boolean().optional(),
}).strict()

export const device_approval_typeUpsertArgsSchema: z.ZodType<Prisma.device_approval_typeUpsertArgs> = z.object({
  select: device_approval_typeSelectSchema.optional(),
  where: device_approval_typeWhereUniqueInputSchema,
  create: z.union([ device_approval_typeCreateInputSchema,device_approval_typeUncheckedCreateInputSchema ]),
  update: z.union([ device_approval_typeUpdateInputSchema,device_approval_typeUncheckedUpdateInputSchema ]),
}).strict() ;

export default device_approval_typeUpsertArgsSchema;
