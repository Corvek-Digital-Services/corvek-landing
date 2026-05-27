# Corvek Digital Services Landing Page

This repository contains the official landing page for **Corvek Digital Services**, a premium IT consultancy landing page designed with a high-performance "Cyber-Night" origami aesthetic.

## Architecture & Tech Stack

*   **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/) (configured with strict compilation rules)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (using native CSS custom properties integration and customized themes)
*   **Self-Hosted Assets**: Managed via [Fontsource](https://fontsource.org/) (`Inter`, `JetBrains Mono`, and `Material Symbols Outlined`) to ensure privacy, performance, and compliance with resource integrity standards.

---

## Directory Structure

```
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD deployment pipeline to GitHub Pages
├── corvek-landingpage/         # Vite + React application source code
│   ├── src/
│   │   ├── components/         # Reusable UI components (Navbar, Hero, Button, Logo)
│   │   ├── App.tsx             # Main page assembly
│   │   └── index.css           # Tailwind base styles and custom utility classes
│   ├── package.json
│   └── vite.config.ts
└── README.md                   # Workspace documentation (this file)
```

---

## Local Development

To run the project locally, follow these steps:

1.  Navigate to the application subdirectory:
    ```bash
    cd corvek-landingpage
    ```
2.  Install dependencies:
    ```bash
    pnpm install
    ```
3.  Start the development server:
    ```bash
    pnpm run dev
    ```
4.  Build the project for production:
    ```bash
    pnpm run build
    ```

---

## CI/CD and Deployment

This project features a fully automated CI/CD pipeline using **GitHub Actions**.

### Deployment Workflow (`deploy.yml`)

The workflow is defined at [.github/workflows/deploy.yml](.github/workflows/deploy.yml) and performs the following actions:

1.  **Trigger**: Runs automatically on every `push` to the `main` branch, or via manual trigger (`workflow_dispatch`).
2.  **Environment Setup**: Spins up an Ubuntu runner, checkouts the repository, sets up Node.js 20, and installs `pnpm`.
3.  **Dependencies**: Runs `pnpm install --frozen-lockfile` to ensure reproducible builds.
4.  **Compilation**: Compiles the React + TypeScript application into static assets via `pnpm run build`.
5.  **Deployment**: Uploads the production bundle (`corvek-landingpage/dist`) and deploys it directly to **GitHub Pages**.

### Environment Variables & Custom Domains

The CI/CD pipeline is designed to support custom domains seamlessly:
*   `VITE_BASE_URL`: Defines the path prefix for the assets (defaults to `/`).
*   `VITE_CUSTOM_DOMAIN`: If configured in your GitHub repository variables, the Vite build script dynamically generates a `CNAME` file in the build output directory (`dist`) containing your custom domain, allowing GitHub Pages to automatically configure custom domain routing.
