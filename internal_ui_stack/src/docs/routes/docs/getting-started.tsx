import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/lib/components/ui/card';
import { CodeBlock } from '@/lib/components/ui/code-block';

export default function GettingStarted() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Getting Started</h1>
        <p className="text-muted-foreground">
          Welcome to Aptima UI, a modern UI component library built with React
          and Tailwind CSS.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            What is Aptima UI and how can it help you build better interfaces?
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Aptima UI is a comprehensive component library built with React and
            Tailwind CSS. It provides a collection of accessible, reusable, and
            customizable components to help you build beautiful and functional
            user interfaces.
          </p>
          <p>
            The components in this library are built using a combination of
            modern libraries including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>React for the component framework</li>
            <li>Tailwind CSS for styling</li>
            <li>Base UI for accessibility primitives</li>
            <li>class-variance-authority for component variants</li>
            <li>
              Various other dependencies for specific component functionality
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Features</CardTitle>
          <CardDescription>
            Why choose Aptima UI for your next project?
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2">
            <li>Accessible by default, following WAI-ARIA standards</li>
            <li>Responsive design with mobile-first approach</li>
            <li>Consistent design language across all components</li>
            <li>Fully typed with TypeScript</li>
            <li>Customizable with Tailwind CSS</li>
            <li>Dark mode support</li>
            <li>Modern, clean design</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Quick Start</CardTitle>
          <CardDescription>
            Get up and running with Aptima UI in minutes
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            To get started with Aptima UI, you'll need to install the package
            and its peer dependencies. Check out the{' '}
            <a
              href="/installation"
              className="text-primary font-medium hover:underline"
            >
              Installation
            </a>{' '}
            page for detailed instructions.
          </p>
          <p>
            Once installed, you can import and use components in your React
            application:
          </p>
          <CodeBlock
            language="jsx"
            code={`import { Button } from '@aptima/ui';

function MyComponent() {
  return (
    <Button variant="default">Click me</Button>
  );
}`}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Next Steps</CardTitle>
          <CardDescription>Where to go from here</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <a
                href="/installation"
                className="text-primary font-medium hover:underline"
              >
                Installation
              </a>{' '}
              - Detailed installation instructions
            </li>
            <li>
              <a
                href="/components"
                className="text-primary font-medium hover:underline"
              >
                Components
              </a>{' '}
              - Explore the component library
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
