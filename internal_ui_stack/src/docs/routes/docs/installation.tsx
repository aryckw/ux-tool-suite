import { CodeBlock } from '@/lib/components/ui/code-block';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/lib/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/lib/components/ui/tabs';

export default function Installation() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Installation</h1>
        <p className="text-muted-foreground">
          How to install and set up Aptima UI in your React project.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            Install the Aptima UI package and its peer dependencies
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p>
            To use Aptima UI, you need to install the package and its peer
            dependencies. Choose your preferred package manager:
          </p>

          <Tabs defaultValue="npm">
            <TabsList>
              <TabsTrigger value="npm">npm</TabsTrigger>
              <TabsTrigger value="pnpm">pnpm</TabsTrigger>
              <TabsTrigger value="yarn">yarn</TabsTrigger>
            </TabsList>
            <TabsContent value="npm" className="mt-4">
              <CodeBlock
                language="typescript"
                code={`# Install Aptima UI
npm install @aptima/ui

# Install peer dependencies
npm install react react-dom tailwindcss`}
              />
            </TabsContent>
            <TabsContent value="pnpm" className="mt-4">
              <CodeBlock
                language="typescript"
                code={`# Install Aptima UI
pnpm add @aptima/ui

# Install peer dependencies
pnpm add react react-dom tailwindcss`}
              />
            </TabsContent>
            <TabsContent value="yarn" className="mt-4">
              <CodeBlock
                language="typescript"
                code={`# Install Aptima UI
yarn add @aptima/ui

# Install peer dependencies
yarn add react react-dom tailwindcss`}
              />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Tailwind CSS Setup</CardTitle>
          <CardDescription>
            Configure Tailwind CSS to work with Aptima UI
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p>
            Aptima UI uses Tailwind CSS for styling. Once Tailwind is{' '}
            <a href="https://tailwindcss.com/docs/installation/using-vite">
              installed
            </a>
            , import the styles.css file in your main CSS file to get started.
          </p>

          <div className="space-y-2">
            <h3 className="text-lg font-medium">Import the CSS styles</h3>
            <CodeBlock
              language="typescript"
              code={`// styles.css
@import '@aptima/ui/styles.css';
`}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Theme Provider Setup</CardTitle>
          <CardDescription>
            Set up the ThemeProvider for dark mode support
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Aptima UI includes a ThemeProvider component that enables dark mode
            support. Wrap your application with the ThemeProvider:
          </p>

          <CodeBlock
            language="typescript"
            code={`import { ThemeProvider } from '@aptima/ui';

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="ui-theme">
      <YourApp />
    </ThemeProvider>
  );
}`}
          />

          <div className="pt-2">
            <p>Available options for the ThemeProvider:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>
                <code className="text-sm bg-muted px-1 rounded">
                  defaultTheme
                </code>
                : "light", "dark", or "system" (default)
              </li>
              <li>
                <code className="text-sm bg-muted px-1 rounded">
                  storageKey
                </code>
                : A key for storing the theme preference in localStorage
                (default: "ui-theme")
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Using Components</CardTitle>
          <CardDescription>
            Start using Aptima UI components in your application
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Once you've set up Aptima UI, you can import and use the components
            in your application:
          </p>

          <CodeBlock
            language="typescript"
            code={`import { Button, Card, CardContent, CardHeader, CardTitle } from '@aptima/ui';

function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>My Card</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Card content goes here</p>
        <Button>Click me</Button>
      </CardContent>
    </Card>
  );
}`}
          />

          <p>
            Explore the{' '}
            <a
              href="/components"
              className="text-primary font-medium hover:underline"
            >
              Components
            </a>{' '}
            section to see all available components and their usage examples.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
