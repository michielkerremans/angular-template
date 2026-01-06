
# Technical Documentation

A comprehensive technical documentation for <Project Name>, covering the implementation roadmap, system architecture, and codebase reference map.

## Table of Contents

1. [Assignment Description](#assignment-description)
2. [Architecture](#architecture)
3. [Codebase Reference Map](#codebase-reference-map)
4. [Roadmap](#roadmap)

## Assignment Description

### Basic Part

- Use **Angular Material** and implement a navigation bar with routing.
- Control a **Nuki lock** via HTTP Client (or Bluetooth LE).
- Create a page with a **form** to configure the app.
  - Store settings locally in **IndexedDB**.
  - Example settings: IP address of the IoT device, etc.
- Implement as a **Progressive Web App (PWA)**.
- Host the application on **Azure**.

### Extensions

- Integrate **push notifications** using Azure Notification Hub.

## Architecture

This project consists of:

- **Angular Frontend:**
  - Uses Angular Material for UI components and routing.
  - Main files: `app.ts`, `app.html`, `app-module.ts`, `app-routing-module.ts`.
  - Components: `navbar`, `home`, `settings`, `lock-control`.
  - Interacts with backend via fetch requests (to be implemented in `nuki.service.ts`).

- **Express.js Backend Proxy:**
  - Planned: `backend/index.js` will proxy HTTP requests from Angular to the Nuki lock, solving CORS issues.

- **IndexedDB Integration:**
  - Planned: Store device settings (e.g., IP address) locally in the frontend via `settings.component.ts`.

- **Current System Flow:**

```text
[User interacts with Angular app]
      |
      v
+---------------------+
|   Angular Frontend  |
+---------------------+
      |
      | fetch request (e.g., lock/unlock)
      v
+---------------------+
| Express.js Backend  |
+---------------------+
      |
      | HTTP request to Nuki lock
      v
+---------------------+
|     Nuki Lock       |
+---------------------+
```

- **Configuration Flow:**
  - User fills out form in Angular app (`settings.component.html`).
  - Settings are saved to IndexedDB (to be implemented).

- **Notification Flow (planned):**
  - Push notifications will be integrated using Azure Notification Hub.

## Codebase Reference Map

```text
nuki-smart-lock-angular/
├── src/
│   ├── app/
│   │   ├── app-module.ts         // Main Angular module, imports Angular Material, routing, etc.
│   │   ├── app.ts                // Root component
│   │   │   - title: signal for app title
│   │   ├── app.html              // Root template
│   │   ├── app-routing-module.ts // Routing configuration
│   │   ├── navbar/
│   │   │   ├── navbar.component.ts
│   │   │   │   - Uses routerLink for navigation
│   │   ├── home/
│   │   │   ├── home.component.ts
│   │   │   │   - Displays welcome message
│   │   ├── settings/
│   │   │   ├── settings.component.ts
│   │   │   │   - (To be implemented) saveSettings(), loadSettings()
│   │   ├── lock-control/
│   │   │   ├── lock-control.component.ts
│   │   │   │   - (To be implemented) lock/unlock logic
│   │   ├── nuki.service.ts       // (To be created) Service for backend communication
│   ├── assets/                   // Static assets
│   ├── environments/             // Environment config files
│   ├── styles.scss               // Global styles, Angular Material theme, dark mode
├── backend/                      // Express.js backend proxy
│   ├── index.js                  // Main Express server file (planned)
│   │   - Express route handlers: /lock, /unlock (planned)
│   │   - Middleware for logging and error handling (planned)
├── angular.md                    // Angular setup and options documentation
├── manual.md                     // Technical documentation and roadmap
├── README.md                     // Project overview
```

## Roadmap

### Phase 1: UI Foundation
- [x] Set up Angular Material with dark mode and custom color palette in `styles.scss`
- [x] Implement a navigation bar component (`navbar/`)
- [x] Scaffold main app structure in `app.ts` and `app.html`
- [x] Declare all components (`NavbarComponent`, `HomeComponent`, `SettingsComponent`, `LockControlComponent`) in `app-module.ts`
- [x] Set up routing in `app-routing-module.ts` for Home, Settings, and Lock Control pages
- [x] Test navigation and page rendering in browser

### Phase 2: Backend & Device Integration
- [ ] Create `backend/index.js` for Express.js proxy server (planned)
- [ ] Implement route handlers in Express for Nuki lock control (`/lock`, `/unlock`) (planned)
- [ ] Implement page logic for Home, Settings, and Lock Control components
- [ ] Create `nuki.service.ts` in Angular to send fetch requests to backend
- [ ] Add functions in `nuki.service.ts`: `lockNuki()`, `unlockNuki()`, `getStatus()`
- [ ] Implement a state machine for Nuki smart lock states (Locked, Unlocking, Unlocked, Locking, Error) in Angular
  - [ ] Define states and transitions in a dedicated service (e.g., `nuki-state.service.ts`)
  - [ ] Update UI components to react to state changes
  - [ ] Handle asynchronous events and errors via state transitions
- [ ] Test backend API endpoints and frontend integration

### Phase 3: Configuration Management
- [ ] Implement configuration form in `settings.component.ts` and `settings.component.html`
- [ ] Add functions in `settings.component.ts`: `saveSettings()`, `loadSettings()`
- [ ] Integrate IndexedDB for local storage of device settings (planned)
- [ ] Test configuration form and settings persistence

### Phase 4: Progressive Web App (PWA)
- [ ] Enable PWA features in Angular (`ng add @angular/pwa`)
- [ ] Configure service worker and manifest
- [ ] Test PWA features (offline, installability)

### Phase 5: Deployment
- [ ] Prepare Azure deployment scripts
- [ ] Deploy Angular frontend and Express backend to Azure
- [ ] Test deployed app in production environment

### Phase 6: Extensions
- [ ] Integrate push notifications using Azure Notification Hub (planned)
- [ ] Test push notification delivery and handling
