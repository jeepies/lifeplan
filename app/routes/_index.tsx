import { Link } from '@remix-run/react'
import { Button } from '~/components/ui/button'

export default function Index() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Lifeplan</h1>
      <div className="flex gap-4">
        <Link to="/login">
          <Button >
            Login
          </Button>
        </Link>
        <Link to="/register">
          <Button>
            Register
          </Button>
        </Link>
      </div>
    </div>
  )
}
