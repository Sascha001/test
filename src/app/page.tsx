import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp, 
  Brain, 
  Database, 
  Users, 
  AlertTriangle,
  CheckCircle,
  XCircle,
  DollarSign,
  Briefcase,
  Eye
} from "lucide-react";

export default function TradingDashboard() {
  return (
    <div className="space-y-3">
      {/* Welcome Section */}
      <div className="rounded-xl bg-muted/50 p-3">
        <h1 className="text-xl font-bold">AI Trading Dashboard</h1>
        <p className="text-sm text-muted-foreground">
          Überwachen Sie KI-Empfehlungen und deren Unsicherheiten in Echtzeit
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
            <CardTitle className="text-xs font-medium">Portfolio Wert</CardTitle>
            <DollarSign className="h-3 w-3 text-muted-foreground" />
          </CardHeader>
          <CardContent className="pt-1">
            <div className="text-lg font-bold">€127,432.50</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="mr-1 h-2 w-2" />
              +2.34% heute
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
            <CardTitle className="text-xs font-medium">Aktive Positionen</CardTitle>
            <Briefcase className="h-3 w-3 text-muted-foreground" />
          </CardHeader>
          <CardContent className="pt-1">
            <div className="text-lg font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              8 neue Empfehlungen
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
            <CardTitle className="text-xs font-medium">KI Vertrauen</CardTitle>
            <Brain className="h-3 w-3 text-muted-foreground" />
          </CardHeader>
          <CardContent className="pt-1">
            <div className="text-lg font-bold">87%</div>
            <p className="text-xs text-muted-foreground">
              Durchschnittliche Konfidenz
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1">
            <CardTitle className="text-xs font-medium">Unsicherheits-Score</CardTitle>
            <AlertTriangle className="h-3 w-3 text-muted-foreground" />
          </CardHeader>
          <CardContent className="pt-1">
            <div className="text-lg font-bold">Medium</div>
            <p className="text-xs text-yellow-600">
              3 Risiko-Alerts
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-7">
        {/* Trading Empfehlungen */}
        <Card className="col-span-4">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Aktuelle KI-Empfehlungen</CardTitle>
            <CardDescription className="text-xs">
              Neueste Trading-Signale mit Unsicherheitsanalyse
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-2">
              {[
                {
                  symbol: "AAPL",
                  action: "KAUFEN",
                  confidence: 92,
                  price: 178.32,
                  uncertainty: "Niedrig",
                  uncertaintyColor: "text-green-600",
                  actionColor: "text-green-600"
                },
                {
                  symbol: "TSLA",
                  action: "VERKAUFEN",
                  confidence: 78,
                  price: 242.68,
                  uncertainty: "Mittel",
                  uncertaintyColor: "text-yellow-600",
                  actionColor: "text-red-600"
                }
              ].map((rec, i) => (
                <div key={i} className="flex items-center justify-between border-b pb-2 last:border-b-0">
                  <div className="flex items-center space-x-4">
                    <div className="font-medium">{rec.symbol}</div>
                    <div className={`text-sm font-medium ${rec.actionColor}`}>
                      {rec.action}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      ${rec.price.toFixed(2)}
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <div className="text-sm font-medium">{rec.confidence}% Konfidenz</div>
                      <div className={`text-xs ${rec.uncertaintyColor}`}>
                        {rec.uncertainty} Unsicherheit
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      <Eye className="h-4 w-4 mr-1" />
                      Details
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Unsicherheits-Übersicht */}
        <Card className="col-span-3">
          <CardHeader className="pb-2">
            <CardTitle className="text-base">Unsicherheits-Quellen</CardTitle>
            <CardDescription className="text-xs">
              Analyse der verschiedenen Unsicherheitsfaktoren
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Brain className="h-3 w-3 text-blue-500" />
                  <span className="text-sm font-medium">Modell-Unsicherheit</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-1.5 bg-blue-200 rounded-full">
                    <div className="w-3/4 h-1.5 bg-blue-500 rounded-full"></div>
                  </div>
                  <span className="text-xs text-muted-foreground">25%</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Database className="h-3 w-3 text-yellow-500" />
                  <span className="text-sm font-medium">Daten-Unsicherheit</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-12 h-1.5 bg-yellow-200 rounded-full">
                    <div className="w-2/3 h-1.5 bg-yellow-500 rounded-full"></div>
                  </div>
                  <span className="text-xs text-muted-foreground">35%</span>
                </div>
              </div>

              <div className="pt-2 border-t">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium">Gesamt-Unsicherheit</span>
                  <span className="text-xs font-medium text-yellow-600">Mittel</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full">
                  <div className="w-3/5 h-2 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

    </div>
  );
}
