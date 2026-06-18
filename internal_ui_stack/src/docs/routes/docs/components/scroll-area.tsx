import { CodeBlock } from '@/lib/components/ui/code-block';
import { ScrollArea } from '@/lib/components/ui/scroll-area';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/lib/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/lib/components/ui/table';

export default function ScrollAreaDoc() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Scroll Area</h1>
        <p className="text-muted-foreground">
          Augments native scroll functionality for custom, cross-browser styling.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            The ScrollArea component creates a scrollable area with custom scrollbars.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Scroll Area enhances the native browser scrolling experience with custom-styled scrollbars
            that are consistent across different browsers and platforms. It's particularly useful when you
            need a scrolling container that matches your application's design system.
          </p>
          <p>
            The Aptima UI ScrollArea component is built on top of <code>@radix-ui/react-scroll-area</code>, providing
            accessibility and cross-browser compatibility.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the Scroll Area component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Scroll Area component is part of the Aptima UI library. You can import it directly:
          </p>
          <CodeBlock language="typescript" code={`import { ScrollArea, ScrollBar } from '@aptima/ui';`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            Basic usage example of the Scroll Area component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <ScrollArea className="h-72 w-full rounded-md border">
              <div className="p-4">
                <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
                {Array.from({ length: 50 }).map((_, i) => (
                  <div key={i} className="mt-2 text-sm">
                    Tag {i + 1}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>

          <CodeBlock language="typescript" code={`import { ScrollArea } from '@aptima/ui';

export default function ScrollAreaExample() {
  return (
    <ScrollArea className="h-72 w-full rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {Array.from({ length: 50 }).map((_, i) => (
          <div key={i} className="mt-2 text-sm">
            Tag {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Horizontal Scrolling</CardTitle>
          <CardDescription>
            Creating a horizontally scrollable area.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <ScrollArea className="w-full whitespace-nowrap rounded-md border">
              <div className="flex p-4">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-40 mr-4 flex-shrink-0 rounded-md border p-4"
                  >
                    <div className="text-sm">Item {i + 1}</div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </div>

          <CodeBlock language="typescript" code={`import { ScrollArea } from '@aptima/ui';

export default function HorizontalScrollAreaExample() {
  return (
    <ScrollArea className="w-full whitespace-nowrap rounded-md border">
      <div className="flex p-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="w-40 mr-4 flex-shrink-0 rounded-md border p-4"
          >
            <div className="text-sm">Item {i + 1}</div>
          </div>
        ))}
      </div>
    </ScrollArea>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Both Directions</CardTitle>
          <CardDescription>
            Creating a scrollable area in both vertical and horizontal directions.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <ScrollArea className="h-72 w-full rounded-md border">
              <div className="p-4" style={{ width: '1000px', height: '1000px' }}>
                <div className="grid grid-cols-5 gap-4">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div
                      key={i}
                      className="flex h-40 w-40 items-center justify-center rounded-md border"
                    >
                      <span className="text-sm">Item {i + 1}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollArea>
          </div>

          <CodeBlock language="typescript" code={`import { ScrollArea } from '@aptima/ui';

export default function BothDirectionsScrollAreaExample() {
  return (
    <ScrollArea className="h-72 w-full rounded-md border">
      <div className="p-4" style={{ width: '1000px', height: '1000px' }}>
        <div className="grid grid-cols-5 gap-4">
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              key={i}
              className="flex h-40 w-40 items-center justify-center rounded-md border"
            >
              <span className="text-sm">Item {i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>
            Detailed API reference for the Scroll Area component.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold">ScrollArea</h3>
              <p className="text-sm text-muted-foreground mt-2">The root container for a scrollable area with custom scrollbars.</p>
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
                    <TableCell className="font-mono text-xs">type</TableCell>
                    <TableCell className="font-mono text-xs">"auto" | "always" | "scroll" | "hover"</TableCell>
                    <TableCell className="font-mono text-xs">"hover"</TableCell>
                    <TableCell>When to show the scrollbars.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">scrollHideDelay</TableCell>
                    <TableCell className="font-mono text-xs">number</TableCell>
                    <TableCell className="font-mono text-xs">600</TableCell>
                    <TableCell>Duration in ms after which the scrollbars are hidden when type is "scroll".</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">orientation</TableCell>
                    <TableCell className="font-mono text-xs">"vertical" | "horizontal" | "both"</TableCell>
                    <TableCell className="font-mono text-xs">"vertical"</TableCell>
                    <TableCell>The orientation of the scroll area.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">className</TableCell>
                    <TableCell className="font-mono text-xs">string</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>Additional CSS class names to apply to the scroll area.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold">ScrollBar</h3>
              <p className="text-sm text-muted-foreground mt-2">The scrollbar component that's rendered for the scroll area.</p>
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
                    <TableCell className="font-mono text-xs">orientation</TableCell>
                    <TableCell className="font-mono text-xs">"vertical" | "horizontal"</TableCell>
                    <TableCell className="font-mono text-xs">"vertical"</TableCell>
                    <TableCell>The orientation of the scrollbar.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">className</TableCell>
                    <TableCell className="font-mono text-xs">string</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>Additional CSS class names to apply to the scrollbar.</TableCell>
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
            Accessibility considerations for the Scroll Area component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Scroll Area component follows accessibility best practices:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Preserves native scroll behavior, ensuring that keyboard scrolling works as expected</li>
            <li>Supports standard scrolling keyboard shortcuts (Page Up, Page Down, Home, End, arrow keys)</li>
            <li>Provides proper ARIA attributes for screen readers</li>
            <li>Maintains focus management within the scroll area</li>
            <li>The scrollbar thumb can be interacted with using mouse or touch</li>
            <li>Content within the scroll area is properly announced by screen readers</li>
          </ul>
          <p className="mt-4">
            When implementing scroll areas in your application:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Ensure sufficient contrast for the scrollbar against its background</li>
            <li>Give the scrollable area a suitable size to indicate that content overflows</li>
            <li>Consider indicating to users that an area is scrollable, especially on touch devices</li>
            <li>Avoid nesting multiple scrollable areas if possible</li>
            <li>Test keyboard navigation thoroughly within the scroll area</li>
            <li>Ensure the scrollable content is properly structured for screen readers</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
} 
