import { Link } from '@remix-run/react';
import { CookingPot, Dumbbell, Plus, Weight } from 'lucide-react';
import { Badge } from '~/components/ui/badge';
import { Button } from '~/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Input } from '~/components/ui/input';

export default function Meals() {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Meals</h2>
        <Button asChild>
          <Link to="/admin/event/create">
            <Plus className="mr-2 h-4 w-4" /> Create Meal
          </Link>
        </Button>
      </div>
      <Input
        placeholder="Search for a meal..."
        aria-label="Search for a meal"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        <Card className="h-28">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="grid grid-cols-1 md:grid-cols-3 gap-2">
              Total Cost: £4.35
            </CardTitle>
            <CookingPot className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-ellipsis">
              Chicken Tikka Masala with Rice
            </div>
            <p className="text-xs text-muted-foreground">Last ate: Never</p>
          </CardContent>
        </Card>
        <Card className="h-28">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="grid grid-cols-1 md:grid-cols-3 gap-2">
              Total Cost: £2.55
            </CardTitle>
            <CookingPot className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-ellipsis">
              Stir fry with chicken
            </div>
            <p className="text-xs text-muted-foreground">Last ate: Never</p>
          </CardContent>
        </Card>
        <Card className="h-28">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="grid grid-cols-1 md:grid-cols-3 gap-2">
              Total Cost: £7.43
            </CardTitle>
            <CookingPot className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-ellipsis">
              M&S burgers with brioche buns
            </div>
            <p className="text-xs text-muted-foreground">Last ate: Never</p>
          </CardContent>
        </Card>
        <Card className="h-28">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="grid grid-cols-1 md:grid-cols-3 gap-2">
              Total Cost: £1.43
            </CardTitle>
            <CookingPot className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-ellipsis">
              Instant Noodles
            </div>
            <p className="text-xs text-muted-foreground">Last ate: Never</p>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
