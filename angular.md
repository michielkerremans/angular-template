# Angular Project Setup Guide

This guide documents the setup and initial configuration for the `nuki-smart-lock-angular` project, including your chosen options and step-by-step instructions for getting started with Angular.

## Prerequisites
- Node.js installed
- Angular CLI installed globally:
  ```sh
  npm install -g @angular/cli
  ```

## Project Creation

1. Create a new Angular project:
   ```sh
   ng new nuki-smart-lock-angular --standalone=false
   ```
   - **Standalone API:** Disabled (`--standalone=false`)
   - **Stylesheet system:** Sass (SCSS)
   - **Server-Side Rendering (SSR) & Static Site Generation (SSG/Prerendering):** No
   - **Angular best practices AI tools:** None

2. Change directory to your new project:
   ```sh
   cd nuki-smart-lock-angular
   ```

## Running the App Locally

Start the development server:
```sh
ng serve
```
Open your browser and go to [http://localhost:4200](http://localhost:4200) to view your app.

## Add Angular Material

Install Angular Material and choose a theme:
```sh
ng add @angular/material
```
- Pick a theme
- Enable global typography and animations if prompted

## Next Steps
- Set up routing and navigation bar
- Create components for your app pages
- Follow the roadmap in `manual.md` for further development

---

*This file documents the initial setup and options chosen for your Angular project. For more details on project structure and development, see `manual.md`.*
