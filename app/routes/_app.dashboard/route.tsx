import { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { CookingPot, Dumbbell, FileQuestion, Weight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import WeightChart from '~/components/weight-chart';
import { getSession, getUserBySession } from '~/lib/session.server';

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request.headers.get('Cookie'));
  const user = await getUserBySession(session);

  return {
    user: user!,
    weightDataSample: [
      { date: '2025-01-01', weightKg: 70 },
      { date: '2025-02-01', weightKg: 68 },
      { date: '2025-03-01', weightKg: 66 },
    ],
  };
}

export default function Dashboard() {
  const { user, weightDataSample } = useLoaderData<typeof loader>();

  return (
    <>
      <h1 className="text-2xl font-bold pb-4">
        Welcome, <span className="text-primary">{user.username}</span>!
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>15th May, 2025</CardTitle>
            <CookingPot className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Stir fry</div>
            <p className="text-xs text-muted-foreground">Next Meal</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>15th May, 2025</CardTitle>
            <Dumbbell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Situps</div>
            <p className="text-xs text-muted-foreground">Next exercise</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>15th May, 2025</CardTitle>
            <Weight className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0 days</div>
            <p className="text-xs text-muted-foreground">Next weight check</p>
          </CardContent>
        </Card>
      </div>

      <Card className="w-full">
        <CardHeader>
          <CardTitle>Weight</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-full h-64">
            <WeightChart data={weightDataSample} />
          </div>
        </CardContent>
      </Card>
    </>
  );
}
