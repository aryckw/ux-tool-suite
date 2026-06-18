import { CodeBlock } from '@/lib/components/ui/code-block';
import React from 'react';
import { Progress } from '@/lib/components/ui/progress';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/lib/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/lib/components/ui/table';

export default function ProgressDoc() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(66);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Progress</h1>
        <p className="text-muted-foreground">
          Displays an indicator showing the completion progress of a task.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            The Progress component provides a visual representation of progress or loading state.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Use the Progress component to show the completion percentage of an operation
            or to indicate that a process is ongoing when the exact progress is unknown.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the Progress component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Progress component is part of the Aptima UI library. You can import it directly:
          </p>
          <CodeBlock language="typescript" code={`import { Progress } from '@aptima/ui';`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            Basic usage examples of the Progress component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col gap-4 w-full max-w-md">
            <Progress value={progress} className="w-full" />
            <div className="text-sm text-muted-foreground">Value: {progress}%</div>
          </div>

          <CodeBlock language="jsx" code={`import React from 'react';
import { Progress } from '@aptima/ui';

export default function ProgressExample() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(66);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <Progress value={progress} className="w-full" />
      <div className="text-sm text-muted-foreground">Value: {progress}%</div>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Custom Styling</CardTitle>
          <CardDescription>
            The Progress component can be styled to match your design needs.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col gap-4">
            <Progress value={33} className="h-2 w-full" />
            <Progress value={66} className="h-3 w-full bg-secondary/20" />
            <Progress value={80} className="h-4 w-full bg-destructive/20">
              <div className="bg-destructive h-full w-full flex-1 transition-all" style={{ transform: `translateX(-${100 - 80}%)` }} />
            </Progress>
          </div>

          <CodeBlock language="typescript" code={`import { Progress } from '@aptima/ui';

export default function CustomProgressExample() {
  return (
    <div className="flex flex-col gap-4">
      <Progress value={33} className="h-2 w-full" />
      <Progress value={66} className="h-3 w-full bg-secondary/20" />
      <Progress value={80} className="h-4 w-full bg-destructive/20">
        <div className="bg-destructive h-full w-full flex-1 transition-all" style={{ transform: \`translateX(-\${100 - 80}%)\` }} />
      </Progress>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Indeterminate</CardTitle>
          <CardDescription>
            You can create an indeterminate progress indicator for situations where the exact progress is unknown.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col gap-4 w-full max-w-md">
            <Progress value={null} className="w-full">
              <div className="bg-primary h-full w-[30%] animate-[indeterminate_1s_ease-in-out_infinite] rounded-full" />
            </Progress>
          </div>

          <CodeBlock language="typescript" code={`import { Progress } from '@aptima/ui';

// Add this to your global CSS or tailwind.config.js
// @keyframes indeterminate {
//   from {
//     left: -30%;
//   }
//   to {
//     left: 100%;
//   }
// }

export default function IndeterminateProgressExample() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-md">
      <Progress className="w-full">
        <div className="bg-primary h-full w-[30%] animate-[indeterminate_1s_ease-in-out_infinite] rounded-full" />
      </Progress>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>
            Detailed API reference for the Progress component.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">Props</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                The Progress component accepts the following props:
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
                    <TableCell className="font-mono">value</TableCell>
                    <TableCell>
                      <code className="text-xs">number</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>The progress value between 0 and 100.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">className</TableCell>
                    <TableCell>
                      <code className="text-xs">string</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>Additional CSS classes to add to the progress bar.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-medium">Examples</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                Here are a few more examples of using the Progress component in different ways:
              </p>
              <CodeBlock language="typescript" code={`// Basic usage
<Progress value={50} />

// Custom height
<Progress value={50} className="h-4" />

// Custom colors (by overriding default classes)
<Progress 
  value={50} 
  className="bg-blue-200"
>
  <div 
    className="bg-blue-600 h-full transition-all" 
    style={{ transform: \`translateX(-\${100 - 50}%)\` }} 
  />
</Progress>`} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Accessibility</CardTitle>
          <CardDescription>
            The Progress component follows WAI-ARIA standards for accessibility.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Progress component is built on top of the Radix UI Progress primitive, which provides
            the following accessibility features:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Uses <code className="text-xs bg-muted px-1 rounded">role="progressbar"</code> to identify the element as a progress bar.</li>
            <li>When determinate, uses <code className="text-xs bg-muted px-1 rounded">aria-valuenow</code> to provide the current value to assistive technology.</li>
            <li>Provides <code className="text-xs bg-muted px-1 rounded">aria-valuemin</code> and <code className="text-xs bg-muted px-1 rounded">aria-valuemax</code> to define the range of the progress.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
} 
