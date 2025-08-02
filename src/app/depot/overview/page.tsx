"use client"

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { TrendingUp, Building2, Coins, Banknote, PiggyBank, ChevronDown, ChevronUp } from "lucide-react";

const portfolioData = [
  {
    category: "Einzelaktien",
    value: 50973.00,
    percentage: 40,
    color: "#3b82f6",
    icon: TrendingUp,
    holdings: [
      { name: "AAPL", value: 15291.80, weight: "12%" },
      { name: "NVDA", value: 12746.60, weight: "10%" },
      { name: "TSLA", value: 10194.60, weight: "8%" },
      { name: "META", value: 7645.95, weight: "6%" },
      { name: "MSFT", value: 5093.85, weight: "4%" }
    ]
  },
  {
    category: "ETFs",
    value: 44601.38,
    percentage: 35,
    color: "#10b981",
    icon: Building2,
    holdings: [
      { name: "SPDR S&P 500", value: 17873.48, weight: "14%" },
      { name: "Invesco QQQ", value: 14318.78, weight: "11.2%" },
      { name: "iShares Europe", value: 8954.99, weight: "7%" },
      { name: "Vanguard Total World", value: 3454.13, weight: "2.8%" }
    ]
  },
  {
    category: "Anleihen",
    value: 19114.88,
    percentage: 15,
    color: "#8b5cf6",
    icon: Banknote,
    holdings: [
      { name: "Deutsche Staatsanleihen", value: 9557.44, weight: "7.5%" },
      { name: "US Treasury Bonds", value: 6371.63, weight: "5%" },
      { name: "Corporate Bonds EUR", value: 3185.81, weight: "2.5%" }
    ]
  },
  {
    category: "Rohstoffe",
    value: 8920.28,
    percentage: 7,
    color: "#f59e0b",
    icon: Coins,
    holdings: [
      { name: "Gold ETF", value: 6371.63, weight: "5%" },
      { name: "Silber ETF", value: 2548.65, weight: "2%" }
    ]
  },
  {
    category: "Cash & Geldmarkt",
    value: 3822.98,
    percentage: 3,
    color: "#6b7280",
    icon: PiggyBank,
    holdings: [
      { name: "Tagesgeld", value: 2548.65, weight: "2%" },
      { name: "Geldmarkt-ETF", value: 1274.33, weight: "1%" }
    ]
  }
];

const totalValue = 127432.52;

const performanceData = {
  "3M": [
    { category: "Einzelaktien", performance: "+8.4%", color: "text-green-600" },
    { category: "ETFs", performance: "+5.2%", color: "text-green-600" },
    { category: "Anleihen", performance: "-1.8%", color: "text-red-600" },
    { category: "Rohstoffe", performance: "+12.1%", color: "text-green-600" },
    { category: "Cash", performance: "+0.3%", color: "text-green-600" },
  ],
  "6M": [
    { category: "Einzelaktien", performance: "+15.7%", color: "text-green-600" },
    { category: "ETFs", performance: "+9.8%", color: "text-green-600" },
    { category: "Anleihen", performance: "-3.2%", color: "text-red-600" },
    { category: "Rohstoffe", performance: "+18.5%", color: "text-green-600" },
    { category: "Cash", performance: "+1.1%", color: "text-green-600" },
  ],
  "9M": [
    { category: "Einzelaktien", performance: "+22.3%", color: "text-green-600" },
    { category: "ETFs", performance: "+14.6%", color: "text-green-600" },
    { category: "Anleihen", performance: "-2.1%", color: "text-red-600" },
    { category: "Rohstoffe", performance: "+25.8%", color: "text-green-600" },
    { category: "Cash", performance: "+1.8%", color: "text-green-600" },
  ],
  "1J": [
    { category: "Einzelaktien", performance: "+28.9%", color: "text-green-600" },
    { category: "ETFs", performance: "+19.4%", color: "text-green-600" },
    { category: "Anleihen", performance: "+1.2%", color: "text-green-600" },
    { category: "Rohstoffe", performance: "+32.7%", color: "text-green-600" },
    { category: "Cash", performance: "+2.5%", color: "text-green-600" },
  ],
  "3J": [
    { category: "Einzelaktien", performance: "+78.5%", color: "text-green-600" },
    { category: "ETFs", performance: "+52.3%", color: "text-green-600" },
    { category: "Anleihen", performance: "-8.7%", color: "text-red-600" },
    { category: "Rohstoffe", performance: "+89.2%", color: "text-green-600" },
    { category: "Cash", performance: "+7.8%", color: "text-green-600" },
  ],
  "5J": [
    { category: "Einzelaktien", performance: "+156.7%", color: "text-green-600" },
    { category: "ETFs", performance: "+98.4%", color: "text-green-600" },
    { category: "Anleihen", performance: "+12.3%", color: "text-green-600" },
    { category: "Rohstoffe", performance: "+134.8%", color: "text-green-600" },
    { category: "Cash", performance: "+18.9%", color: "text-green-600" },
  ],
  "Gesamt": [
    { category: "Einzelaktien", performance: "+234.5%", color: "text-green-600" },
    { category: "ETFs", performance: "+187.3%", color: "text-green-600" },
    { category: "Anleihen", performance: "+45.7%", color: "text-green-600" },
    { category: "Rohstoffe", performance: "+298.1%", color: "text-green-600" },
    { category: "Cash", performance: "+34.2%", color: "text-green-600" },
  ],
};

interface TooltipProps {
  active?: boolean;
  payload?: Array<{
    payload: {
      category: string;
      value: number;
      percentage: number;
    };
  }>;
}

const CustomTooltip = ({ active, payload }: TooltipProps) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-background border rounded-lg p-3 shadow-lg">
        <p className="font-medium">{data.category}</p>
        <p className="text-sm text-muted-foreground">
          €{data.value.toLocaleString('de-DE', { minimumFractionDigits: 2 })} ({data.percentage}%)
        </p>
      </div>
    );
  }
  return null;
};

export default function PortfolioOverviewPage() {
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});
  const [selectedTimePeriod, setSelectedTimePeriod] = useState<keyof typeof performanceData>("3M");

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col space-y-4 overflow-hidden">
      {/* Header */}
      <div className="rounded-xl bg-muted/50 p-4 flex-shrink-0">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Building2 className="h-6 w-6" />
          Portfolio Übersicht
        </h1>
        <p className="text-muted-foreground">
          Detaillierte Aufschlüsselung Ihrer Vermögensallokation
        </p>
      </div>

      {/* Portfolio Summary */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 flex-shrink-0">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Gesamt Portfolio</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">€{totalValue.toLocaleString('de-DE', { minimumFractionDigits: 2 })}</div>
            <div className="flex items-center text-xs text-green-600">
              <TrendingUp className="mr-1 h-3 w-3" />
              +2.34% heute
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Anzahl Positionen</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">
              5 Kategorien
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Größte Position</CardTitle>
            <Coins className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12%</div>
            <p className="text-xs text-muted-foreground">
              AAPL (€15,291.80)
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Diversifikation</CardTitle>
            <PiggyBank className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Gut</div>
            <p className="text-xs text-green-600">
              Ausgewogene Allokation
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Chart and Details - Scrollable */}
      <div className="grid gap-4 md:grid-cols-2 flex-1 min-h-0">
        {/* Pie Chart */}
        <Card className="flex flex-col">
          <CardHeader className="flex-shrink-0">
            <CardTitle>Vermögensallokation</CardTitle>
            <CardDescription>
              Verteilung nach Anlageklassen
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 min-h-0 flex items-center justify-center">
            <div className="h-full w-full max-h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={portfolioData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {portfolioData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip content={<CustomTooltip />} />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Category Legend & Details */}
        <Card className="flex flex-col">
          <CardHeader className="flex-shrink-0">
            <CardTitle>Kategorien Details</CardTitle>
            <CardDescription>
              Aufschlüsselung nach Anlageklassen
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1 min-h-0">
            <div className="h-full overflow-y-auto space-y-4 pr-2">
              {portfolioData.map((category, index) => {
                const Icon = category.icon;
                const isExpanded = expandedCategories[category.category];
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: category.color }}
                        />
                        <Icon className="h-4 w-4" />
                        <span className="font-medium">{category.category}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="text-right">
                          <div className="font-medium">€{category.value.toLocaleString('de-DE')}</div>
                          <div className="text-xs text-muted-foreground">{category.percentage}%</div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleCategory(category.category)}
                          className="h-6 w-6 p-0"
                        >
                          {isExpanded ? (
                            <ChevronUp className="h-3 w-3" />
                          ) : (
                            <ChevronDown className="h-3 w-3" />
                          )}
                        </Button>
                      </div>
                    </div>
                    
                    {/* Individual Holdings - Collapsible */}
                    {isExpanded && (
                      <div className="ml-5 space-y-1">
                        {category.holdings.map((holding, holdingIndex) => (
                          <div key={holdingIndex} className="flex justify-between text-sm">
                            <span className="text-muted-foreground">{holding.name}</span>
                            <div className="text-right">
                              <span className="text-muted-foreground">€{holding.value.toLocaleString('de-DE')}</span>
                              <span className="ml-2 text-xs text-muted-foreground">({holding.weight})</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Show/Hide Button */}
                    {!isExpanded && (
                      <div className="ml-5">
                        <button
                          onClick={() => toggleCategory(category.category)}
                          className="text-xs text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          {category.holdings.length} Positionen anzeigen
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Performance Overview - Scrollable */}
              <div className="space-y-4 pt-6 border-t">
                <div>
                  <h3 className="font-semibold mb-2">Performance Übersicht</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Entwicklung der einzelnen Kategorien über verschiedene Zeiträume
                  </p>
                </div>

                {/* Time Period Selector */}
                <div className="flex flex-wrap gap-2 p-3 bg-muted/30 rounded-lg">
                  {Object.keys(performanceData).map((period) => (
                    <Button
                      key={period}
                      variant={selectedTimePeriod === period ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedTimePeriod(period as keyof typeof performanceData)}
                      className="text-xs"
                    >
                      {period === "1J" ? "1 Jahr" : 
                       period === "3J" ? "3 Jahre" : 
                       period === "5J" ? "5 Jahre" :
                       period === "Gesamt" ? "Gesamtzeit" :
                       period}
                    </Button>
                  ))}
                </div>

                {/* Performance Data */}
                <div className="grid gap-3 grid-cols-2">
                  {performanceData[selectedTimePeriod].map((item, index) => (
                    <div key={index} className="text-center p-3 rounded-lg bg-muted/50">
                      <div className="text-sm font-medium">{item.category}</div>
                      <div className={`text-lg font-bold ${item.color}`}>
                        {item.performance}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {selectedTimePeriod === "3M" ? "3 Monate" :
                         selectedTimePeriod === "6M" ? "6 Monate" :
                         selectedTimePeriod === "9M" ? "9 Monate" :
                         selectedTimePeriod === "1J" ? "1 Jahr" :
                         selectedTimePeriod === "3J" ? "3 Jahre" :
                         selectedTimePeriod === "5J" ? "5 Jahre" :
                         "Gesamtzeit"}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}