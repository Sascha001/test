import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  TrendingDown,
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

// Trading Metrics Cards Component
function TradingMetricsCards() {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Portfolio Wert</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            €127,432.50
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Badge variant="outline">
              <TrendingUp className="mr-1 h-3 w-3" />
              +2.34%
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Trending up today <TrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Performance heute
          </div>
        </CardContent>
      </Card>

      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Aktive Positionen</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            24
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Badge variant="outline">
              <TrendingUp className="mr-1 h-3 w-3" />
              +8 neu
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            8 neue Empfehlungen <Briefcase className="size-4" />
          </div>
          <div className="text-muted-foreground">
            KI-Signale aktiv
          </div>
        </CardContent>
      </Card>

      <Card className="@container/card">
        <CardHeader>
          <CardDescription>KI Vertrauen</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            87%
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Badge variant="outline">
              <Brain className="mr-1 h-3 w-3" />
              Hoch
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Starke KI Konfidenz <Brain className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Durchschnittliche Sicherheit
          </div>
        </CardContent>
      </Card>

      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Unsicherheits-Score</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            Medium
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Badge variant="outline">
              <AlertTriangle className="mr-1 h-3 w-3" />
              3 Alerts
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            3 Risiko-Alerts <AlertTriangle className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Überwachung aktiv
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Trading Dashboard Component
function TradingDashboardContent() {
  return (
    <div className="px-4 lg:px-6">
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-7">
        {/* Trading Empfehlungen */}
        <Card className="col-span-4">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Aktuelle KI-Empfehlungen</CardTitle>
            <CardDescription className="text-xs">
              Neueste Trading-Signale mit Unsicherheitsanalyse
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-3">
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
                },
                {
                  symbol: "NVDA",
                  action: "HALTEN",
                  confidence: 65,
                  price: 459.12,
                  uncertainty: "Hoch",
                  uncertaintyColor: "text-red-600",
                  actionColor: "text-blue-600"
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
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Unsicherheits-Quellen</CardTitle>
            <CardDescription className="text-xs">
              Analyse der verschiedenen Unsicherheitsfaktoren
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Brain className="h-4 w-4 text-blue-500" />
                  <span className="font-medium">Modell-Unsicherheit</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-16 h-2 bg-blue-200 rounded-full">
                    <div className="w-3/4 h-2 bg-blue-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-muted-foreground">25%</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Database className="h-4 w-4 text-yellow-500" />
                  <span className="font-medium">Daten-Unsicherheit</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-16 h-2 bg-yellow-200 rounded-full">
                    <div className="w-2/3 h-2 bg-yellow-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-muted-foreground">35%</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-green-500" />
                  <span className="font-medium">Experten-Einschätzung</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-16 h-2 bg-green-200 rounded-full">
                    <div className="w-1/2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-muted-foreground">15%</span>
                </div>
              </div>

              <div className="pt-4 border-t">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Gesamt-Unsicherheit</span>
                  <span className="text-sm font-medium text-yellow-600">Mittel</span>
                </div>
                <div className="w-full h-3 bg-gray-200 rounded-full">
                  <div className="w-3/5 h-3 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-full"></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

// Risk Management and Activity Feed Component
function RiskManagementAndActivitySection() {
  return (
    <div className="grid gap-3 md:grid-cols-2 px-4 lg:px-6">
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Risiko-Management</CardTitle>
          <CardDescription className="text-xs">
            Aktuelle Warnungen und Empfehlungen
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-2">
            <div className="flex items-center space-x-2 p-2 rounded-lg bg-red-50 dark:bg-red-950/10">
              <XCircle className="h-4 w-4 text-red-500" />
              <div className="flex-1">
                <p className="text-sm font-medium">Hohe Volatilität erkannt</p>
                <p className="text-xs text-muted-foreground">TSLA zeigt ungewöhnliche Kursbewegungen</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 p-2 rounded-lg bg-yellow-50 dark:bg-yellow-950/10">
              <AlertTriangle className="h-4 w-4 text-yellow-500" />
              <div className="flex-1">
                <p className="text-sm font-medium">Datenqualität-Warnung</p>
                <p className="text-xs text-muted-foreground">Verzögerung bei Realtime-Daten für NVDA</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 p-2 rounded-lg bg-green-50 dark:bg-green-950/10">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <div className="flex-1">
                <p className="text-sm font-medium">Portfolio ausbalanciert</p>
                <p className="text-xs text-muted-foreground">Diversifikation innerhalb der Zielwerte</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Aktivitäts-Feed</CardTitle>
          <CardDescription className="text-xs">
            Letzte Trading-Aktivitäten und KI-Updates
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">AAPL Position eröffnet</p>
                <p className="text-xs text-muted-foreground">vor 15 Minuten • Kauforder ausgeführt</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">KI-Modell aktualisiert</p>
                <p className="text-xs text-muted-foreground">vor 32 Minuten • Neue Gewichtungen aktiv</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Markt-Anomalie erkannt</p>
                <p className="text-xs text-muted-foreground">vor 1 Stunde • Erhöhte Überwachung aktiv</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm font-medium">Stop-Loss ausgelöst</p>
                <p className="text-xs text-muted-foreground">vor 2 Stunden • META Position geschlossen</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default function TradingDashboard() {
  return (
    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
      <div className="md:col-span-3">
        <TradingMetricsCards />
      </div>
      <div className="md:col-span-2">
        <TradingDashboardContent />
      </div>
      <div className="md:col-span-1">
        <RiskManagementAndActivitySection />
      </div>
    </div>
  );
}