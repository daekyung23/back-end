import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_install_infoWhereInputSchema } from '../inputTypeSchemas/device_install_infoWhereInputSchema'
import { device_install_infoOrderByWithRelationInputSchema } from '../inputTypeSchemas/device_install_infoOrderByWithRelationInputSchema'
import { device_install_infoWhereUniqueInputSchema } from '../inputTypeSchemas/device_install_infoWhereUniqueInputSchema'
import { Device_install_infoScalarFieldEnumSchema } from '../inputTypeSchemas/Device_install_infoScalarFieldEnumSchema'
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const device_install_infoSelectSchema: z.ZodType<Prisma.device_install_infoSelect> = z.object({
  device_id: z.boolean().optional(),
  installer_id: z.boolean().optional(),
  mgmt_num: z.boolean().optional(),
  ip_address: z.boolean().optional(),
  subnet_mask: z.boolean().optional(),
  gateway: z.boolean().optional(),
  dns1: z.boolean().optional(),
  dns2: z.boolean().optional(),
}).strict()

export const device_install_infoFindFirstOrThrowArgsSchema: z.ZodType<Prisma.device_install_infoFindFirstOrThrowArgs> = z.object({
  select: device_install_infoSelectSchema.optional(),
  where: device_install_infoWhereInputSchema.optional(),
  orderBy: z.union([ device_install_infoOrderByWithRelationInputSchema.array(),device_install_infoOrderByWithRelationInputSchema ]).optional(),
  cursor: device_install_infoWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ Device_install_infoScalarFieldEnumSchema,Device_install_infoScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default device_install_infoFindFirstOrThrowArgsSchema;
