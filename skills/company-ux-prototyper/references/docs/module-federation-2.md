# Module Federation 2.0

## What Is Module Federation 2?

Module Federation 2 (MF2) is a Webpack/Vite plugin that enables runtime module sharing between independently-deployed web applications. Unlike build-time bundling, MF2 allows a host application to load components, routes, and utilities from remote applications at runtime — without those remotes being part of the host's build. Each remote is built, versioned, and deployed on its own schedule.

MF2 is the successor to the original Webpack Module Federation plugin. It adds a manifest-based discovery format (`mf-manifest.json`) that replaces the older `remoteEntry.js` approach, improving reliability and enabling dynamic remote registration.

## Key Packages

- **`@module-federation/vite`**: The Vite plugin. Used in `vite.config.ts` for all packages in this project.
- **`@module-federation/enhanced`**: The runtime library. Provides dynamic remote loading, shared scope management, and error boundaries for failed remote loads. Import from this package when you need programmatic control over remote lifecycle.

## Topology in This Project

The monorepo follows a shell-plus-remotes topology:

- **Shell host app** (`packages/shell`): The entry point. It loads remote entry manifests at startup, renders the shared layout (navigation, header, global providers), and owns the client-side router. The shell knows which remotes exist and at what URLs, but it does not contain their implementation.
- **Remote apps** (`packages/<remote-name>`): Each remote is an independently-built Vite application that exposes named components or route modules. Remotes do not know about each other or about the shell.
- **One remote per major view or domain**: For example, `packages/dashboard-remote`, `packages/settings-remote`, `packages/analytics-remote`. This boundary keeps builds fast and deployments independent.

## Vite Configuration

### Shell `vite.config.ts`

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'shell',
      remotes: {
        'dashboard-remote': 'http://localhost:3001/mf-manifest.json',
        'settings-remote':  'http://localhost:3002/mf-manifest.json',
      },
      shared: {
        react:     { singleton: true, requiredVersion: '^18.0.0' },
        'react-dom': { singleton: true, requiredVersion: '^18.0.0' },
        '@company/ui': { singleton: true },
      },
    }),
  ],
  build: { target: 'esnext' },
})
```

### Remote `vite.config.ts`

```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'dashboard-remote',
      exposes: {
        './App':    './src/App.tsx',
        './routes': './src/routes.tsx',
      },
      shared: {
        react:     { singleton: true, requiredVersion: '^18.0.0' },
        'react-dom': { singleton: true, requiredVersion: '^18.0.0' },
        '@company/ui': { singleton: true },
      },
    }),
  ],
  server: { port: 3001 },
  build: { target: 'esnext' },
})
```

Remotes must be started before the shell resolves their manifests. The `exposes` map keys (`./App`, `./routes`) become the import paths used in the shell: `import App from 'dashboard-remote/App'`.

## Shared Singletons

React, React DOM, and the internal component library (`@company/ui`) must all be declared `shared` with `singleton: true` in every package — shell and all remotes. Without this, each remote bundles its own React instance, causing hook call failures and context mismatches at runtime. The `requiredVersion` constraint prevents accidentally loading an incompatible minor version.

If a new shared package is added to one config, it must be added to all configs in the same PR.

## pnpm Workspace Layout

```
ux-tool-suite/
  packages/
    shell/
      package.json
      vite.config.ts
      src/
    dashboard-remote/
      package.json
      vite.config.ts
      src/
    settings-remote/
      package.json
      vite.config.ts
      src/
  pnpm-workspace.yaml
  package.json   ← root, dev dependencies and scripts
```

The root `package.json` declares `concurrently` as a dev dependency and provides a `dev` script that starts all packages:

```json
"scripts": {
  "dev": "concurrently \"pnpm --filter shell dev\" \"pnpm --filter dashboard-remote dev\" \"pnpm --filter settings-remote dev\""
}
```

## Dev Loop

Run `pnpm dev` from the monorepo root to start all packages concurrently. Each remote has hot module replacement (HMR) enabled independently — editing a component in `dashboard-remote` reloads only that remote's module, not the shell. The shell itself also supports HMR for layout and routing changes.

To start packages individually: `pnpm --filter <package-name> dev`.

## Known Gotchas

- **Manifest vs. remoteEntry.js URLs**: MF2 uses `mf-manifest.json` by default, not `remoteEntry.js`. If you see `remoteEntry.js` in a remote URL in an older config, update it. The manifest format includes chunk maps and is required for type-safe federation with `@module-federation/enhanced`.
- **Singleton pitfalls**: If a remote fails to load and the shell falls back to its own bundled copy of a shared package, you will end up with two React instances. Always check the Network tab for duplicate React chunks when debugging hook errors.
- **Dynamic remotes**: To register remotes at runtime (e.g., from a config API), use `@module-federation/enhanced`'s `registerRemotes` API instead of hardcoding URLs in `vite.config.ts`. This pattern is documented but not yet used in the default scaffold.
- **Build order**: Remotes must be built before the shell in CI. Use a dependency graph in your pipeline or build all remotes first in a parallel matrix, then build the shell.
