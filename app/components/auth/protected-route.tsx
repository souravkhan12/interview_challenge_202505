import { useRouteLoaderData } from "@remix-run/react";
import { type AuthContext } from "~/middleware/auth";

interface ProtectedRouteProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

/**
 * Wrap any route that requires authentication with this component
 * It will show the children only if the user is authenticated
 * Otherwise, it will show the fallback or null
 */
export function ProtectedRoute({
  children,
  fallback = null,
}: ProtectedRouteProps) {
  const auth = useRouteLoaderData("root") as { auth: AuthContext | null };

  if (!auth?.auth) {
    return fallback;
  }

  return children;
}
