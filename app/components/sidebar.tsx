import { Separator } from '@radix-ui/react-separator';
import { Link } from '@remix-run/react';
import {
  Book,
  Calendar,
  CookingPot,
  Dumbbell,
  Home,
  LogOut,
  PillBottle,
  User,
} from 'lucide-react';
import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';
import { ThemeToggle } from './theme-toggle';

interface SidebarProps {
  className?: string;
  user: {
    username: string;
  };
}

export function Sidebar({ className, user }: SidebarProps) {
  return (
    <div className={cn('pb-12 w-64 relative', className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-100">
            Lifeplan
          </h2>
          <Separator className="my-4" />
          <div className="space-y-1">
            <Button
              asChild
              variant="ghost"
              className="w-full justify-start text-gray-900 dark:text-gray-100"
            >
              <Link to="/dashboard">
                <Home className="mr-2 h-4 w-4" />
                Home
              </Link>
            </Button>
          </div>
          <div className="space-y-1">
            <Button
              asChild
              variant="ghost"
              className="w-full justify-start text-gray-900 dark:text-gray-100"
            >
              <Link to="/dashboard/calendar">
                <Calendar className="mr-2 h-4 w-4" />
                Calendar
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="w-full justify-start text-gray-900 dark:text-gray-100"
            >
              <Link to="/dashboard/meals">
                <CookingPot className="mr-2 h-4 w-4" />
                Meals
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="w-full justify-start text-gray-900 dark:text-gray-100"
            >
              <Link to="/dashboard/exercise">
                <Dumbbell className="mr-2 h-4 w-4" />
                Exercise
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="w-full justify-start text-gray-900 dark:text-gray-100"
            >
              <Link to="/dashboard/medication">
                <PillBottle className="mr-2 h-4 w-4" />
                Medication
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              className="w-full justify-start text-gray-900 dark:text-gray-100"
            >
              <Link to="/dashboard/journal">
                <Book className="mr-2 h-4 w-4" />
                Journal
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 left-0 right-0 px-3">
        <div className="space-y-1">
          <Button
            asChild
            variant="ghost"
            className="w-full justify-start text-gray-900 dark:text-gray-100"
          >
            <Link to="#">
              <User className="mr-2 h-4 w-4" />
              {user.username}
            </Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="w-full justify-start text-gray-900 dark:text-gray-100"
          >
            <ThemeToggle />
          </Button>
          <Button
            asChild
            variant="ghost"
            className="w-full justify-start hover:bg-red-700 hover:text-white text-gray-900 dark:text-gray-100"
          >
            <Link to="/logout">
              <LogOut className="mr-2 h-4 w-4" />
              Log out
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
