import { LoaderFunctionArgs, redirect } from '@remix-run/node';
import { getSession, isLoggedIn } from '~/lib/session.server';

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request.headers.get('Cookie'));
  if (!isLoggedIn(session)) return redirect('/');
  return null;
}
