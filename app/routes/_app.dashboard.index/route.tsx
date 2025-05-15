import { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { CookingPot, Dumbbell, Weight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import WeightChart from '~/routes/_app.dashboard.index/weight-chart';
import { getSession, getUserBySession } from '~/lib/session.server';
import { getInspirationalQuote } from '~/lib/zenquote.server';

export async function loader({ request }: LoaderFunctionArgs) {
  const session = await getSession(request.headers.get('Cookie'));
  const user = await getUserBySession(session);

  const quote = await getInspirationalQuote();

  return {
    user: user!,
    quote: quote,
    weightDataSample: [
      { date: '2024-09-01', weightKg: 70 },
      { date: '2024-10-01', weightKg: 68 },
      { date: '2024-11-01', weightKg: 66 },
      { date: '2024-12-01', weightKg: 68 },
      { date: '2025-01-01', weightKg: 70 },
      { date: '2025-02-01', weightKg: 72 },
      { date: '2026-03-01', weightKg: 74 },
      { date: '2027-04-01', weightKg: 76 },
      { date: '2026-05-01', weightKg: 75 },
    ],
  };
}

export default function Dashboard() {
  const { user, quote, weightDataSample } = useLoaderData<typeof loader>();

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

      <Card className="w-full mb-4">
        <CardHeader>
          <CardTitle>Weight</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-full h-64">
            <WeightChart data={weightDataSample} />
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>Out of 0</CardTitle>
            <CookingPot className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Not enough data</div>
            <p className="text-xs text-muted-foreground">Favorite Meal</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>Out of 0</CardTitle>
            <Dumbbell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Not enough data</div>
            <p className="text-xs text-muted-foreground">Favorite Exercise</p>
          </CardContent>
        </Card>
      </div>

      <Card className="w-full mb-4">
        <CardHeader>
          <CardTitle>Inspirational Quote</CardTitle>
        </CardHeader>
        <CardContent>{quote}</CardContent>
      </Card>
    </>
  );
}
