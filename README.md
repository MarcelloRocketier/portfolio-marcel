Marcel Reyes Langenhorst – Portfolio (Angular)

Persönliche Portfolio-Website auf Basis von Angular 17.
Ziel: Projekte, Skills und Kontakt übersichtlich präsentieren – zweisprachig (DE/EN) und performant.

Tech-Stack
	•	Angular 17 + Angular CLI
	•	TypeScript 5
	•	SCSS (modulare Styles + Media Queries)
	•	@ngx-translate/* (i18n)
	•	RxJS
	•	Node v20 via nvm

Lokale Entwicklung

# Node 20 aktivieren (falls nvm genutzt wird)
nvm use 20

# Abhängigkeiten installieren
npm install

# Dev-Server starten (http://localhost:4200)
npx ng serve --open

Build

# Produktionsbuild (Ausgabe: dist/)
npx ng build --configuration production

Optional: Die gebauten Dateien können über jeden statischen Hoster (z. B. GitHub Pages, Netlify, Vercel) bereitgestellt werden.

Projektstruktur (Auszug)

src/
├─ app/
│  ├─ components/
│  │  ├─ navbar/ …             # Navigation
│  │  ├─ intro/ …              # Hero/Intro
│  │  ├─ projects/ …           # Projektliste
│  │  ├─ skills/ …             # Skills
│  │  ├─ contact/ …            # Kontaktformular
│  │  └─ privacypolicy/ …      # Datenschutz
│  ├─ pages/home/ …            # Home-Seite
│  ├─ service/scroll.service.ts
│  ├─ app.routes.ts
│  └─ app.component.* 
├─ assets/
│  ├─ img/ …                   # Bilder/Icons
│  └─ i18n/
│     ├─ de.json
│     └─ en.json
├─ styles.scss                 # Global Styles
└─ main.ts

Internationalisierung (i18n)
	•	Implementiert mit @ngx-translate/core und @ngx-translate/http-loader.
	•	Sprachdateien liegen in src/assets/i18n/de.json und src/assets/i18n/en.json.
	•	Der Language-Switcher-Component erlaubt die Laufzeit-Umschaltung.

Nützliche Skripte (npm)

abhängig von package.json, Standard über Angular CLI:

# Lint (falls konfiguriert)
npm run lint

# Unit Tests (falls benötigt)
npx ng test

Entwicklung – empfohlener Workflow
	1.	Kleine Änderung vornehmen
	2.	Lokal testen (ng serve)
	3.	Committen & pushen

git add .
git commit -m "feat: … (kurze, klare Beschreibung)"
git push

Lizenz

Privates Portfolio – Inhalte & Assets nicht ohne Rücksprache weiterverwenden.