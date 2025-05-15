import { Outlet } from '@remix-run/react';

export default function Auth() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="relative w-full max-w-md">
        <Outlet />
      </div>
    </div>
  );
}
