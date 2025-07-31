import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

export default function DepotPage() {
  return (
    <>
      <div className="rounded-xl bg-muted/50 p-4">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Briefcase className="h-6 w-6" />
          Depot Übersicht
        </h1>
        <p className="text-muted-foreground">
          Verwalten Sie Ihr Trading-Portfolio und überwachen Sie Ihre Positionen
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Portfolio Status</CardTitle>
          <CardDescription>
            Aktuelle Übersicht Ihrer Depot-Positionen
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Ihre Depot-Seite ist bereit für weitere Entwicklung.</p>
        </CardContent>
      </Card>
    </>
  );
}