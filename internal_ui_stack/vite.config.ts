import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import { readFileSync } from 'fs';

// Read package.json for dependencies
const packageJson = JSON.parse(readFileSync('./package.json', 'utf-8'));
const dependencies = Object.keys(packageJson.dependencies || {});
const peerDependencies = Object.keys(packageJson.peerDependencies || {});

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    dts({
      include: ['src/**/*'],
      exclude: ['src/main.tsx', 'src/App.tsx', 'src/docs/**/*'],
      tsconfigPath: 'tsconfig.build.json',
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'AptimaUI',
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`,
    },
    copyPublicDir: false,
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        ...dependencies,
        ...peerDependencies,
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime',
        },
        assetFileNames: 'styles.[ext]',
      },
    },
    sourcemap: true,
    emptyOutDir: true,
    cssCodeSplit: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
