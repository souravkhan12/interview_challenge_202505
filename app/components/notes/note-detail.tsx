import { type Note } from "~/db/schema";
import { formatDate } from "~/utils/date";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

type SerializedNote = Omit<Note, "createdAt"> & { createdAt: string };

interface NoteDetailProps {
  note: SerializedNote;
}

export function NoteDetail({ note }: NoteDetailProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{note.title}</CardTitle>
        <CardDescription>Created {formatDate(note.createdAt)}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground whitespace-pre-wrap">
          {note.description || ""}
        </p>
      </CardContent>
    </Card>
  );
}
