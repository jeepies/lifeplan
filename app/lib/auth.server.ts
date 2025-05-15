import bcrypt from 'bcrypt';
import { prisma } from './prisma';
import { UserSchema } from '~/schema/user';

export async function registerUser(username: string, password: string) {
  const hashedPassword = await bcrypt.hash(password, 10);
  return prisma.user.create({
    data: { username, password: hashedPassword },
  });
}

export async function loginUser(username: string, password: string) {
  const user = await prisma.user.findUnique({ where: { username } });
  if (!user) return null;

  const isValid = await bcrypt.compare(password, user.password);
  return isValid ? user : null;
}

export async function isRequestValid(request: Request) {
  const formData = await request.formData();
  const payload = Object.fromEntries(formData);
  const result = UserSchema.safeParse(payload);
  return result;
}
