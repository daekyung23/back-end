import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { device_optionWhereInputSchema } from '../inputTypeSchemas/device_optionWhereInputSchema'

export const device_optionDeleteManyArgsSchema: z.ZodType<Prisma.device_optionDeleteManyArgs> = z.object({
  where: device_optionWhereInputSchema.optional(),
}).strict() ;

export default device_optionDeleteManyArgsSchema;
