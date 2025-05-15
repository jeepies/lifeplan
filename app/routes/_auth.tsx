import { LoaderFunctionArgs } from '@remix-run/node';
import { Outlet } from '@remix-run/react';

export async function loader({ request }: LoaderFunctionArgs) {
  return null;
}

export default function Auth() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="relative w-full max-w-md">
        <Outlet />
      </div>
    </div>
  );
}
