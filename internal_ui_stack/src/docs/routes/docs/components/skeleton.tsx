import { CodeBlock } from '@/lib/components/ui/code-block';
import { Skeleton } from '@/lib/components/ui/skeleton';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/lib/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/lib/components/ui/table';

export default function SkeletonDoc() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Skeleton</h1>
        <p className="text-muted-foreground">
          A placeholder to display while content is loading.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            The Skeleton component is used to show a placeholder while content is loading.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Skeletons are used to indicate that content is being loaded, providing a visual cue about
            the layout of the page before the actual content appears. They help improve perceived
            performance by showing users that the application is actively loading content.
          </p>
          <p>
            The Aptima UI Skeleton component is a simple, customizable placeholder that can be
            styled to match the shape and size of the content it will replace.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the Skeleton component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Skeleton component is part of the Aptima UI library. You can import it directly:
          </p>
          <CodeBlock language="typescript" code={`import { Skeleton } from '@aptima/ui';`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            Basic usage example of the Skeleton component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-4 w-[300px]" />
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { Skeleton } from '@aptima/ui';

export default function SkeletonExample() {
  return (
    <div className="space-y-2">
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
      <Skeleton className="h-4 w-[300px]" />
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Card Skeleton</CardTitle>
          <CardDescription>
            Create a skeleton for a card layout.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="rounded-md border p-4 space-y-4">
              <div className="space-y-2">
                <Skeleton className="h-5 w-1/4" />
                <Skeleton className="h-4 w-2/3" />
              </div>
              <Skeleton className="h-32 w-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { Skeleton } from '@aptima/ui';

export default function CardSkeletonExample() {
  return (
    <div className="rounded-md border p-4 space-y-4">
      <div className="space-y-2">
        <Skeleton className="h-5 w-1/4" />
        <Skeleton className="h-4 w-2/3" />
      </div>
      <Skeleton className="h-32 w-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </div>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>User Profile Skeleton</CardTitle>
          <CardDescription>
            Create a skeleton for a user profile with an avatar.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[200px]" />
                <Skeleton className="h-4 w-[150px]" />
              </div>
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { Skeleton } from '@aptima/ui';

export default function UserProfileSkeletonExample() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[150px]" />
      </div>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Table Skeleton</CardTitle>
          <CardDescription>
            Create a skeleton for a data table.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="w-full">
              <div className="rounded-md border">
                <div className="border-b p-4">
                  <div className="flex items-center gap-4">
                    <Skeleton className="h-5 w-[100px]" />
                    <Skeleton className="h-5 w-[100px]" />
                    <Skeleton className="h-5 w-[100px]" />
                  </div>
                </div>
                <div className="p-4 space-y-4">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <Skeleton className="h-4 w-[100px]" />
                      <Skeleton className="h-4 w-[100px]" />
                      <Skeleton className="h-4 w-[100px]" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { Skeleton } from '@aptima/ui';

export default function TableSkeletonExample() {
  return (
    <div className="w-full">
      <div className="rounded-md border">
        <div className="border-b p-4">
          <div className="flex items-center gap-4">
            <Skeleton className="h-5 w-[100px]" />
            <Skeleton className="h-5 w-[100px]" />
            <Skeleton className="h-5 w-[100px]" />
          </div>
        </div>
        <div className="p-4 space-y-4">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index} className="flex items-center gap-4">
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="h-4 w-[100px]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Dynamic Content Loading</CardTitle>
          <CardDescription>
            Example of using skeletons during content loading.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 rounded-md border p-4">
            <div className="text-sm text-muted-foreground mb-4">
              This example demonstrates how you would implement a component that shows skeletons while content loads.
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { useEffect, useState } from 'react';
import { Skeleton } from '@aptima/ui';

export default function DynamicLoadingExample() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  
  useEffect(() => {
    // Simulate an API call with a delay
    const timer = setTimeout(() => {
      setData([
        { id: 1, title: 'First Item', description: 'Description for first item' },
        { id: 2, title: 'Second Item', description: 'Description for second item' },
        { id: 3, title: 'Third Item', description: 'Description for third item' },
      ]);
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Content Items</h3>
      <div className="space-y-4">
        {isLoading ? (
          // Show skeletons while loading
          Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="rounded-md border p-4 space-y-2">
              <Skeleton className="h-5 w-1/3" />
              <Skeleton className="h-4 w-3/4" />
            </div>
          ))
        ) : (
          // Show actual content when loaded
          data.map((item) => (
            <div key={item.id} className="rounded-md border p-4 space-y-2">
              <h4 className="text-md font-medium">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>
            Detailed API reference for the Skeleton component.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold">Skeleton</h3>
              <p className="text-sm text-muted-foreground mt-2">The Skeleton component extends the HTML div element.</p>
              <Table className="mt-4">
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
                    <TableCell className="font-mono text-xs">className</TableCell>
                    <TableCell className="font-mono text-xs">string</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>Additional CSS class names to apply to the skeleton.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <p className="text-sm text-muted-foreground mt-4">
                The Skeleton component accepts all standard HTML div attributes.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Accessibility</CardTitle>
          <CardDescription>
            Accessibility considerations for the Skeleton component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Skeleton component follows accessibility best practices:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Indicates to screen readers that content is loading using appropriate ARIA attributes</li>
            <li>Maintains a color contrast ratio that ensures visibility for users with visual impairments</li>
            <li>Preserves layout structure during loading to prevent layout shifts</li>
            <li>Uses animation with reduced motion preferences respected</li>
          </ul>
          <p className="mt-4">
            When implementing skeletons in your application:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use a skeleton structure that matches the expected layout of the loaded content</li>
            <li>Consider using <code>aria-busy="true"</code> on the parent container of skeleton components</li>
            <li>Ensure that screen readers announce when content has finished loading</li>
            <li>Avoid using excessive animations that might be distracting to users</li>
            <li>Consider adding a non-visual indication of loading status for screen reader users</li>
            <li>Test the loading experience with reduced motion preferences enabled</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
} 
