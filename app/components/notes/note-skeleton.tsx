import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "~/components/ui/card";
import { Skeleton } from "~/components/ui/skeleton";

export function NoteSkeleton() {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader className="flex-none space-y-2">
        <Skeleton className="h-4 w-3/4" />
      </CardHeader>
      <CardContent className="flex-1 space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
      </CardContent>
      <CardFooter className="flex-none border-t pt-4">
        <Skeleton className="h-3 w-24" />
      </CardFooter>
    </Card>
  );
}

export function NotesGridSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <NoteSkeleton key={i} />
      ))}
    </div>
  );
}
