import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings } from "lucide-react";

export default function SettingsPage() {
  return (
    <>
      <div className="rounded-xl bg-muted/50 p-4">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Settings className="h-6 w-6" />
          Einstellungen
        </h1>
        <p className="text-muted-foreground">
          Konfigurieren Sie Ihre AI Trading Hub Einstellungen
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Allgemeine Einstellungen</CardTitle>
          <CardDescription>
            Grundlegende Konfiguration für Ihr Trading-Dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Einstellungen-Seite ist bereit für weitere Entwicklung.</p>
        </CardContent>
      </Card>
    </>
  );
}