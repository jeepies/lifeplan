import { Form, redirect, useActionData, useSubmit } from '@remix-run/react';
import { FormProvider, useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { UserSchema } from '~/schema/user';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from '~/components/ui/form';
import { Input } from '~/components/ui/input';
import { useState } from 'react';
import { Button } from '~/components/ui/button';
import { Loader2 } from 'lucide-react';
import { ActionFunctionArgs } from '@remix-run/node';
import { isRequestValid, registerUser } from '~/lib/auth.server';
import { commitSession, getSession } from '~/lib/session.server';

type FormData = z.infer<typeof UserSchema>;

export async function action({ request }: ActionFunctionArgs) {
  const payload = await isRequestValid(request);
  if (!payload.success || payload.error) return payload;

  try {
    const user = await registerUser(
      payload.data.username,
      payload.data.password,
    );
    const session = await getSession(request.headers.get('session'));
    session.set('userID', user.id);

    return redirect('/dashboard', {
      headers: {
        'Set-Cookie': await commitSession(session),
      },
    });
  } catch (e) {
    return { error: 'This username already exists.' };
  }

  return null;
}

export default function Register() {
  const [loading, setLoading] = useState(false);
  const submit = useSubmit();
  const methods = useForm<FormData>({
    mode: 'onSubmit',
    resolver: zodResolver(UserSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);
      await new Promise((r) => {
        setTimeout(r, 1200);
        submit(data, { method: 'POST', encType: 'multipart/form-data' });
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold">Register</h1>
        <p className="text-muted-foreground">Starting fresh!</p>
      </div>

      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmit)}>
          <FormField
            name="username"
            control={methods.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            name="password"
            control={methods.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Password" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full mt-2" disabled={loading}>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Create an Account
          </Button>
        </Form>
      </FormProvider>
    </div>
  );
}
