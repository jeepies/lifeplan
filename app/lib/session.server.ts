import { createCookieSessionStorage, Session } from '@remix-run/node';
import config from './config.server';
import { prisma } from './prisma';

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: '_session',
    sameSite: 'lax',
    path: '/',
    httpOnly: true,
    secrets: [config.SESSION_SECRET],
    secure: config.ENVIRONMENT === 'production',
  },
});

export async function getUserBySession(session: Session) {
  return await prisma.user.findUnique({
    where: { id: session.get('userID') },
    select: {
      id: true,
      username: true,
      createdAt: true,
      updatedAt: true,
      ingredients: true,
      meals: true,
      calendar: true,
    },
  });
}

export async function isLoggedIn(session: Session) {
  if (!session.has('userID')) return false;
  const user = await getUserBySession(session);
  return user !== null;
}

export const { getSession, commitSession, destroySession } = sessionStorage;
