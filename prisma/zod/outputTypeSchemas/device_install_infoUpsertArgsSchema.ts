import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_install_infoWhereUniqueInputSchema } from '../inputTypeSchemas/device_install_infoWhereUniqueInputSchema'
import { device_install_infoCreateInputSchema } from '../inputTypeSchemas/device_install_infoCreateInputSchema'
import { device_install_infoUncheckedCreateInputSchema } from '../inputTypeSchemas/device_install_infoUncheckedCreateInputSchema'
import { device_install_infoUpdateInputSchema } from '../inputTypeSchemas/device_install_infoUpdateInputSchema'
import { device_install_infoUncheckedUpdateInputSchema } from '../inputTypeSchemas/device_install_infoUncheckedUpdateInputSchema'
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

export const device_install_infoUpsertArgsSchema: z.ZodType<Prisma.device_install_infoUpsertArgs> = z.object({
  select: device_install_infoSelectSchema.optional(),
  where: device_install_infoWhereUniqueInputSchema,
  create: z.union([ device_install_infoCreateInputSchema,device_install_infoUncheckedCreateInputSchema ]),
  update: z.union([ device_install_infoUpdateInputSchema,device_install_infoUncheckedUpdateInputSchema ]),
}).strict() ;

export default device_install_infoUpsertArgsSchema;
