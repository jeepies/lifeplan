import { LoaderFunctionArgs, redirect } from '@remix-run/node';
import { Outlet, useLoaderData } from '@remix-run/react';
import { Sidebar } from '~/components/sidebar';
import { getSession, getUserBySession, isLoggedIn } from '~/lib/session.server';

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request.headers.get('Cookie'));
  if (!isLoggedIn(session)) return redirect('/');
  const user = await getUserBySession(session);
  return user!;
}

export default function App() {
  const user = useLoaderData<typeof loader>();

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar className="border-r" user={{ username: user?.username }} />
      <div className="flex-grow rounded w-full h-full overflow-auto">
        <div className="flex h-screen">
          <main className="flex-1 p-8 overflow-y-auto">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
