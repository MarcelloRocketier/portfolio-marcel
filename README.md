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
# Marcel Reyes Langenhorst – Portfolio

Personal portfolio website built with Angular 17.  
Goal: Showcase projects, skills and contact options in a clear, bilingual way (DE/EN) with high performance.

## Tech Stack
- Angular 17 + Angular CLI  
- TypeScript 5  
- SCSS (modular structure with media queries)  
- @ngx-translate/* (i18n)  
- RxJS  
- Node v20 via nvm  

## Local Development

```bash
# activate Node 20 if using nvm
nvm use 20

# install dependencies
npm install

# start dev server (http://localhost:4200)
npx ng serve --open
```

## Build

```bash
# production build (output: dist/)
npx ng build --configuration production
```

The build output can be hosted on any static provider (e.g. GitHub Pages, Netlify, Vercel).

## Project Structure (excerpt)

```
src/
├─ app/
│  ├─ components/
│  │  ├─ navbar/ …          # navigation
│  │  ├─ intro/ …           # hero/intro
│  │  ├─ projects/ …        # project list
│  │  ├─ skills/ …          # skills section
│  │  ├─ contact/ …         # contact form
│  │  └─ privacypolicy/ …   # privacy page
│  ├─ pages/home/ …         # home page
│  ├─ service/scroll.service.ts
│  ├─ app.routes.ts
│  └─ app.component.* 
├─ assets/
│  ├─ img/ …                # images/icons
│  └─ i18n/                 # translation files
│     ├─ de.json
│     └─ en.json
├─ styles.scss
└─ main.ts
```

## Internationalization (i18n)
- Implemented with @ngx-translate/core and @ngx-translate/http-loader.  
- Language files located in `src/assets/i18n/de.json` and `src/assets/i18n/en.json`.  
- Language switcher component allows runtime switching.  

## Workflow
1. Make a small change  
2. Test locally (`ng serve`)  
3. Commit & push  

```bash
git add .
git commit -m "feat: … (short, clear description)"
git push
```

## License
Personal portfolio project. Content & assets may not be reused without permission.