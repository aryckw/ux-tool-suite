# React + TypeScript + Vite

# Aptima UI Component Library

A collection of reusable UI components built with React, Tailwind CSS, and Radix UI.

## Installation

```bash
pnpm add @aptima/ui react react-dom tailwindcss
# or
npm install @aptima/ui react react-dom tailwindcss
# or
yarn add @aptima/ui react react-dom tailwindcss
```

That's it! All component dependencies are bundled with the library.

## Usage

### Import the CSS

First, import the CSS in your main entry file:

```jsx
import '@aptima/ui/styles.css';
```

### Use the components

```jsx
import { Button, Card, Input } from '@aptima/ui';

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Card</CardTitle>
        <CardDescription>This is a card component</CardDescription>
      </CardHeader>
      <CardContent>
        <Input placeholder="Enter your name" />
      </CardContent>
      <CardFooter>
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  );
}
```

### Theme Provider

To use the theme provider:

```jsx
import { ThemeProvider } from '@aptima/ui';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="ui-theme">
      <YourApp />
    </ThemeProvider>
  );
}
```

## Tailwind CSS Configuration

This library requires Tailwind CSS. Once [installed](https://tailwindcss.com/docs/installation/using-vite), add the following to your app's `styles.css`:

```css
@import '@aptima/ui/styles.css';
```

## Available Components

The library includes the following components:

- Accordion
- Alert
- AlertDialog
- AspectRatio
- Avatar
- Badge
- Breadcrumb
- Button
- Calendar
- Card
- Carousel
- Chart
- Checkbox
- Collapsible
- Command
- ContextMenu
- Dialog
- Drawer
- DropdownMenu
- Form
- HoverCard
- Input
- InputOTP
- Label
- Menubar
- NavigationMenu
- Pagination
- Popover
- Progress
- RadioGroup
- Resizable
- ScrollArea
- ScrollToTop
- Select
- Separator
- Sheet
- Sidebar
- Skeleton
- Slider
- Sonner
- Switch
- Table
- Tabs
- Textarea
- Toggle
- ToggleGroup
- Tooltip

## How to Use the Library in Another Application

After installing the package, you can use the library in your application:

1. **Install the package**:

   ```bash
   pnpm add @aptima/ui react react-dom tailwindcss
   ```

2. **Import the CSS**:

   ```css
   @import '@aptima/ui/styles.css';
   ```

3. **Use the components**:

   ```jsx
   import { Button, Card, ThemeProvider } from '@aptima/ui';

   function App() {
     return (
       <ThemeProvider defaultTheme="light" storageKey="ui-theme">
         <Card>
           <CardHeader>
             <CardTitle>My Card</CardTitle>
           </CardHeader>
           <CardContent>
             <p>Card content</p>
           </CardContent>
           <CardFooter>
             <Button>Click me</Button>
           </CardFooter>
         </Card>
       </ThemeProvider>
     );
   }
   ```

All component dependencies are bundled with the library, so everything works out of the box!

## License

Proprietary - Aptima, Inc.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
});
```

## Using the shadcn/ui cli

```bash
export NODE_EXTRA_CA_CERTS=/path/to/zscaler/cert.crt
```

## Releasing the library

```bash
# update version, generate CHANGELOG, publish to registry
pnpx nx release

# manual publish steps
pnpm login --registry=https://artifact.production.aptima.com/repository/aptima-npm
pnpm publish
```
