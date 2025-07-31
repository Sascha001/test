# 🚀 AI Trading Hub - Uncertainty Analysis Dashboard

Ein professionelles Trading-Dashboard zur Visualisierung von Unsicherheiten in KI-Trading-Empfehlungen. Entwickelt mit Next.js 15, TypeScript und shadcn/ui.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Sascha001/my-nextjs-app)

## ✨ Features

### 📊 **Trading Dashboard**
- **Portfolio-Metriken**: Echtzeit-Anzeige von Wert, Positionen und Performance
- **KI-Empfehlungen**: Intelligente Kauf/Verkauf/Halten-Signale mit Konfidenz-Levels
- **Unsicherheits-Analyse**: Visualisierung von Modell-, Daten- und Experten-Unsicherheit
- **Risiko-Management**: Live-Warnungen und automatische Alerts

### 🎨 **Design & UX**
- **Retraktable Sidebar**: Strukturierte Navigation mit Icon-Modus
- **Erweiterte Suche**: Intelligente Wertpapier-Suche mit Echtzeit-Filtering  
- **Violet-Bloom Theme**: Moderne, professionelle Farbpalette
- **Vollständig Responsiv**: Optimiert für Mobile und Desktop

### 🧠 **Unsicherheits-Visualisierung**
- **🤖 Modell-Unsicherheit** (25%): KI-Algorithmus Vertrauen
- **📊 Daten-Unsicherheit** (35%): Datenqualität und -verfügbarkeit
- **👥 Experten-Bewertung** (15%): Menschliche Expertise-Faktoren

## 🛠️ Tech Stack

- **Framework**: Next.js 15 mit App Router
- **Styling**: Tailwind CSS v4 + shadcn/ui
- **TypeScript**: Vollständige Typsicherheit
- **Icons**: Lucide React
- **Deployment**: Vercel (optimiert für Deutschland)

## 🚀 Quick Start

### Lokal Entwickeln

```bash
# Projekt klonen
git clone https://github.com/Sascha001/my-nextjs-app.git
cd my-nextjs-app

# Dependencies installieren
npm install

# Development Server starten
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000) im Browser.

### Vercel Deployment

1. **One-Click Deploy**: Nutze den "Deploy with Vercel" Button oben
2. **Manuell**: 
   - Repo zu Vercel importieren
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Node.js Version: 18.x

## 📁 Projekt Struktur

```
src/
├── app/                 # Next.js App Router
│   ├── globals.css     # Globale Styles & Theme
│   ├── layout.tsx      # Root Layout mit Sidebar
│   └── page.tsx        # Dashboard Hauptseite
├── components/         
│   ├── app-sidebar.tsx # Hauptnavigation
│   ├── search-bar.tsx  # Wertpapier-Suche
│   └── ui/             # shadcn/ui Komponenten
└── hooks/              # Custom React Hooks
```

## 🎯 Navigation

- **Dashboard**: Hauptübersicht mit Portfolio-Metriken
- **Depot**: Portfolio-Verwaltung (Übersicht, Positionen, Performance)
- **Statistik**: Trading-Statistiken und Unsicherheits-Analyse  
- **Überprüfung**: KI-Modell, Datenqualität, Experten-Einschätzung
- **Einstellungen**: Konfiguration und Präferenzen
- **Profil**: Benutzer-Management

## 🔧 Konfiguration

### Vercel Settings
- **Region**: Frankfurt (fra1) für optimale Performance in Deutschland
- **Build Command**: `npm run build`
- **Node.js**: 18.x
- **Security Headers**: Automatisch konfiguriert

### Environment Variables
Für Produktions-Deployment können folgende Environment Variables gesetzt werden:
- `NEXT_PUBLIC_API_URL`: Backend API URL
- `NEXT_PUBLIC_WS_URL`: WebSocket URL für Realtime-Updates

## 📱 Responsive Design

Das Dashboard ist vollständig responsiv und optimiert für:
- **Desktop**: Vollständige Sidebar mit allen Features
- **Tablet**: Kollabierte Sidebar mit Icon-Navigation
- **Mobile**: Off-canvas Sidebar mit Touch-optimierter Bedienung

## 🚀 Performance

- **Static Generation**: Optimierte Ladezeiten
- **Code Splitting**: Automatisches Lazy Loading
- **Image Optimization**: Next.js Image-Komponente
- **Tree Shaking**: Minimale Bundle-Größe

## 📄 Lizenz

MIT License - siehe [LICENSE](LICENSE) für Details.

---

**Entwickelt mit ❤️ für professionelles AI Trading**
