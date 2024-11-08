import { z } from 'zod';

export const user_permissionSchema = z.enum(['user','manager','admin']);

export type user_permissionType = `${z.infer<typeof user_permissionSchema>}`

export default user_permissionSchema;
