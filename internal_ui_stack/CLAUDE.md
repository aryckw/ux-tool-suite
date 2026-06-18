# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Aptima UI Component Library, a collection of reusable UI components built with React, TypeScript, Tailwind CSS, and Radix UI. The library is designed to be used in other Aptima applications.

## Common Development Commands

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Run development server:
   ```bash
   pnpm dev
   ```

3. Build the project (both library and docs):
   ```bash
   pnpm build
   ```

4. Build only the library:
   ```bash
   pnpm build:lib
   ```

5. Build only the docs:
   ```bash
   pnpm build:docs
   ```

6. Run tests:
   ```bash
   pnpm test
   ```

7. Lint the code:
   ```bash
   pnpm lint
   ```

8. Release the library:
   ```bash
   pnpx nx release
   ```

9. Manual publishing:
   ```bash
   pnpm login --registry=https://artifact.production.aptima.com/repository/aptima-npm
   pnpm publish
   ```

10. Using the shadcn/ui CLI:
    ```bash
    export NODE_EXTRA_CA_CERTS=/path/to/zscaler/cert.crt
    ```

## Build and Deployment Process

The project now has separate build processes for the UI library and the documentation site:

1. The UI library is built using `pnpm build:lib`, which compiles TypeScript and bundles the components.
2. The documentation site is built using `pnpm build:docs`, which creates a static site using Vite.
3. The `pnpm build` command runs both processes sequentially.

The documentation site is configured to work with a dynamic base URL:

1. The base URL is set using the `VITE_BASE_URL` environment variable.
2. The Vite configuration for the docs site (`vite.config.docs.ts`) uses this environment variable to set the base URL.
3. The React Router in `App.tsx` is configured with the same environment variable using the `basename` prop.
4. Asset references in `index.html` use relative paths to work with any base URL.

GitLab CI/CD is set up to automatically build and deploy the documentation site:

1. When changes are pushed to the main branch, the CI/CD pipeline is triggered.
2. The pipeline sets the `VITE_BASE_URL` environment variable in the CI/CD environment.
3. The pipeline builds both the library and the documentation site.
4. The documentation site is then deployed to GitLab Pages, making it accessible online.

To view the deployed documentation site, visit the GitLab Pages URL for this project: https://platform.pages.aptima.com/core/library/aptima-ui/aptima-ui/

For local development, you can set the `VITE_BASE_URL` in a `.env` file in the project root.

## Codebase Architecture

- The project is built using React, TypeScript, and Vite.
- Components are located in `src/lib/components/ui/`.
- The `src/docs/routes/docs/` directory contains documentation and examples for each component.
- The project uses Tailwind CSS for styling.
- ESLint is used for code linting with a custom configuration.

## Key Files and Directories

- `/src/lib/components/ui/`: Contains all the UI components
- `/src/docs/routes/docs/`: Contains documentation and examples for each component
- `/src/docs/routes/docs/components/`: Contains documentation for individual components
- `tsconfig.json`: TypeScript configuration
- `eslint.config.js`: ESLint configuration
- `index.html`: Main entry point for the application
- `vite.config.ts`: Vite configuration for the library
- `vite.config.docs.ts`: Vite configuration for the documentation site

## Usage in Other Applications

To use this library in another application:

1. Install the package:
   ```bash
   pnpm add @aptima/ui
   ```

2. Import the CSS in your main entry file:
   ```jsx
   import '@aptima/ui/styles.css';
   ```

3. Use the components:
   ```jsx
   import { Button, Card, ThemeProvider } from '@aptima/ui';

   function App() {
     return (
       <ThemeProvider defaultTheme="light" storageKey="ui-theme">
         <Card>
           <Card.Header>
             <Card.Title>My Card</Card.Title>
           </Card.Header>
           <Card.Content>
             <p>Card content</p>
           </Card.Content>
           <Card.Footer>
             <Button>Click me</Button>
           </Card.Footer>
         </Card>
       </ThemeProvider>
     );
   }
   ```

## Important Notes

- The library is proprietary and owned by Aptima, Inc.
- When developing new components or modifying existing ones, ensure they are accessible and follow the established design patterns.
- Always update the documentation in `/src/routes/docs/` when making changes to components.
- Run tests and linting before committing changes or creating pull requests.