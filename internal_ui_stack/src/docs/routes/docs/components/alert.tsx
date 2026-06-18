import { CodeBlock } from '@/lib/components/ui/code-block';
import { Alert, AlertDescription, AlertTitle } from '@/lib/components/ui/alert';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/lib/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/lib/components/ui/table';
import {CheckCircle, InfoIcon } from 'lucide-react';

export default function AlertDoc() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Alert</h1>
        <p className="text-muted-foreground">
          Displays a callout for user attention
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            The Alert component is used to communicate status information to users in a prominent way.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Alerts are used to communicate a state that affects a system, feature, or page.
            They can provide contextual feedback messages for typical user actions.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the Alert component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Alert component is part of the Aptima UI library. You can import it directly:
          </p>
          <CodeBlock language="typescript" code={`import { Alert, AlertTitle, AlertDescription } from '@aptima/ui';`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            Basic usage examples of the Alert component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col gap-4">
            <Alert>
              <AlertTitle>Heads up!</AlertTitle>
              <AlertDescription>
                You can add components to your app using the cli.
              </AlertDescription>
            </Alert>
          </div>

          <CodeBlock language="typescript" code={`import { Alert, AlertTitle, AlertDescription } from '@aptima/ui';

export default function AlertExample() {
  return (
    <Alert>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Variants</CardTitle>
          <CardDescription>
            The Alert component comes in different variants.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col gap-4">
            <Alert>
              <AlertTitle>Default Alert</AlertTitle>
              <AlertDescription>
                This is a default alert. It provides information to the user.
              </AlertDescription>
            </Alert>

            <Alert variant="destructive">
              <AlertTitle>Destructive Alert</AlertTitle>
              <AlertDescription>
                This is a destructive alert. It indicates a dangerous or potentially negative action.
              </AlertDescription>
            </Alert>
          </div>

          <CodeBlock language="typescript" code={`import { Alert, AlertTitle, AlertDescription } from '@aptima/ui';

export default function AlertVariantsExample() {
  return (
    <div className="flex flex-col gap-4">
      <Alert>
        <AlertTitle>Default Alert</AlertTitle>
        <AlertDescription>
          This is a default alert. It provides information to the user.
        </AlertDescription>
      </Alert>

      <Alert variant="destructive">
        <AlertTitle>Destructive Alert</AlertTitle>
        <AlertDescription>
          This is a destructive alert. It indicates a dangerous or potentially negative action.
        </AlertDescription>
      </Alert>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Icon</CardTitle>
          <CardDescription>
            Enhance alerts with icons to convey meaning more effectively.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col gap-4">
            <Alert>
              <CheckCircle />
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>
                Your account has been successfully created.
              </AlertDescription>
            </Alert>

            <Alert>
              <InfoIcon />
              <AlertTitle>Information</AlertTitle>
              <AlertDescription>
                We've just released a new feature.
              </AlertDescription>
            </Alert>
          </div>

          <CodeBlock language="typescript" code={`import { Alert, AlertTitle, AlertDescription } from '@aptima/ui';
import { CheckCircle, InfoIcon } from 'lucide-react';

export default function AlertWithIconExample() {
  return (
    <div className="flex flex-col gap-4">
      <Alert>
        <CheckCircle />
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>
          Your account has been successfully created.
        </AlertDescription>
      </Alert>

      <Alert>
        <InfoIcon />
        <AlertTitle>Information</AlertTitle>
        <AlertDescription>
          We've just released a new feature.
        </AlertDescription>
      </Alert>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Custom Styling</CardTitle>
          <CardDescription>
            Customize the appearance of the Alert component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col gap-4">
            <Alert className="border-green-500 bg-green-50 dark:bg-green-950/20">
              <CheckCircle />
              <AlertTitle className="text-green-800 dark:text-green-300">Custom Success Alert</AlertTitle>
              <AlertDescription className="text-green-700 dark:text-green-400">
                This is a custom styled success alert.
              </AlertDescription>
            </Alert>
          </div>

          <CodeBlock language="typescript" code={`import { Alert, AlertTitle, AlertDescription } from '@aptima/ui';
import { CheckCircle } from 'lucide-react';

export default function CustomStyledAlertExample() {
  return (
    <Alert className="border-green-500 bg-green-50 dark:bg-green-950/20">
      <CheckCircle />
      <AlertTitle className="text-green-800 dark:text-green-300">Custom Success Alert</AlertTitle>
      <AlertDescription className="text-green-700 dark:text-green-400">
        This is a custom styled success alert.
      </AlertDescription>
    </Alert>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>
            Detailed API reference for the Alert component.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">Alert Props</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                The Alert component accepts the following props:
              </p>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Prop</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Default</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-mono">variant</TableCell>
                    <TableCell>
                      <code className="text-xs">"default" | "destructive"</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">"default"</code>
                    </TableCell>
                    <TableCell>The visual variant of the alert.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">className</TableCell>
                    <TableCell>
                      <code className="text-xs">string</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>Additional CSS classes to add to the alert.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-medium">AlertTitle Props</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                The AlertTitle component accepts the following props:
              </p>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Prop</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Default</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-mono">className</TableCell>
                    <TableCell>
                      <code className="text-xs">string</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>Additional CSS classes to add to the alert title.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-medium">AlertDescription Props</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                The AlertDescription component accepts the following props:
              </p>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Prop</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Default</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-mono">className</TableCell>
                    <TableCell>
                      <code className="text-xs">string</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>Additional CSS classes to add to the alert description.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Accessibility</CardTitle>
          <CardDescription>
            Accessibility considerations for the Alert component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Alert component follows these accessibility best practices:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Uses <code className="text-xs bg-muted px-1 rounded">role="alert"</code> to notify screen readers of important and time-sensitive information.</li>
            <li>Maintains sufficient color contrast for text to ensure readability.</li>
            <li>Structural hierarchy with title and description provides clear organization of content.</li>
            <li>Usage of icons enhances visual comprehension and aids users with cognitive disabilities.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
} 
