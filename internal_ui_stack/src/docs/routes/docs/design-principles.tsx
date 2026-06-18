import { CodeBlock } from '@/lib/components/ui/code-block';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/lib/components/ui/card';

export default function DesignPrinciples() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Design Principles</h1>
        <p className="text-muted-foreground">Placeholder</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>Placeholder</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Placeholder</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Placeholder</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Examples</CardTitle>
          <CardDescription>Pattern and Usage</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>Placeholder</p>
          <CodeBlock language="typescript" code={`<span>placeholder</span>`} />
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
