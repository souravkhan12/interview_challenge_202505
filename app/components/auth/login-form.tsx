import { Form } from "@remix-run/react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { type LoginForm } from "~/schemas/auth";

interface LoginFormProps {
  redirectTo: string;
  errors?: {
    email?: string[];
    password?: string[];
  };
  isSubmitting: boolean;
}

export function LoginForm({
  redirectTo,
  errors,
  isSubmitting,
}: LoginFormProps) {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl text-center">Welcome back</CardTitle>
        <CardDescription className="text-center">
          Enter your email and password to sign in
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form method="post" className="space-y-4">
          <input type="hidden" name="redirectTo" value={redirectTo} />

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="name@example.com"
              autoComplete="email"
              required
              aria-describedby={errors?.email ? "email-error" : undefined}
            />
            {errors?.email && (
              <p className="text-sm text-destructive" id="email-error">
                {errors.email[0]}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="••••••••"
              autoComplete="current-password"
              required
              aria-describedby={errors?.password ? "password-error" : undefined}
            />
            {errors?.password && (
              <p className="text-sm text-destructive" id="password-error">
                {errors.password[0]}
              </p>
            )}
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Signing in..." : "Sign in"}
          </Button>
        </Form>
      </CardContent>
    </Card>
  );
}
