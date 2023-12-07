import { z } from 'zod';

const createUserValidationSchema = z.object({
  id: z.string(),
  password: z.string(),
  role: z.enum(['student', 'faculty', 'admin']).optional(),
  status: z.enum(['in-progress', 'blocked']).default('in-progress'),
  isDeleted: z.boolean().default(false),
});

export const UserValidation = {
  createUserValidationSchema,
};
