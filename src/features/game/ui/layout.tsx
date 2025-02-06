import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";

export function GameLayout({
  status,
  field,
  players,
}: {
  status?: React.ReactNode;
  field?: React.ReactNode;
  players?: React.ReactNode;
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Крестики нолики 3х3</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {players}
        {status}
        <div className="flex items-center justify-center">{field}</div>
      </CardContent>
    </Card>
  );
}
