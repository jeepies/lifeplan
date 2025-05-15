import { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getSession, getUserBySession } from '~/lib/session.server';

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request.headers.get('Cookie'));
  const user = await getUserBySession(session);

  return user!;
}

export default function Dashboard() {
  const user = useLoaderData<typeof loader>();

  return <>{user.username}</>;
}
