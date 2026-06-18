import { CodeBlock } from '@/lib/components/ui/code-block';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/lib/components/ui/resizable';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/lib/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/lib/components/ui/table';

export default function ResizableDoc() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Resizable</h1>
        <p className="text-muted-foreground">
          Allows users to resize elements with one or more panels.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            The Resizable component allows users to resize elements by dragging.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Resizable panels are useful for building interfaces where users need to adjust the layout
            to their preferences. Common examples include code editors, file browsers, and dashboards
            with side panels.
          </p>
          <p>
            The Aptima UI Resizable component is built on top of <code>@react-resizable-panels</code>,
            providing a flexible and accessible way to create resizable layouts.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the Resizable component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Resizable component is part of the Aptima UI library. You can import its parts as needed:
          </p>
          <CodeBlock language="typescript" code={`import { 
  Resizable, 
  ResizableHandle, 
  ResizablePanel, 
  ResizablePanelGroup 
} from '@aptima/ui';`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Basic Usage</CardTitle>
          <CardDescription>
            Basic usage example of the Resizable component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="border rounded-lg overflow-hidden">
              <ResizablePanelGroup orientation="horizontal" className="min-h-[200px]">
                <ResizablePanel defaultSize={50}>
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="font-medium">First Panel</span>
                  </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={50}>
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="font-medium">Second Panel</span>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { 
  ResizableHandle, 
  ResizablePanel, 
  ResizablePanelGroup 
} from '@aptima/ui';

export default function BasicResizableExample() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="min-h-[200px]">
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-medium">First Panel</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={50}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-medium">Second Panel</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Vertical Resizing</CardTitle>
          <CardDescription>
            Creating vertically resizable panels.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="border rounded-lg overflow-hidden">
              <ResizablePanelGroup orientation="vertical" className="min-h-[400px]">
                <ResizablePanel defaultSize={25}>
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="font-medium">Top Panel</span>
                  </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={75}>
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="font-medium">Bottom Panel</span>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { 
  ResizableHandle, 
  ResizablePanel, 
  ResizablePanelGroup 
} from '@aptima/ui';

export default function VerticalResizableExample() {
  return (
    <ResizablePanelGroup orientation="vertical" className="min-h-[400px]">
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-medium">Top Panel</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-medium">Bottom Panel</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Multiple Panels</CardTitle>
          <CardDescription>
            Creating layouts with multiple resizable panels.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="border rounded-lg overflow-hidden">
              <ResizablePanelGroup orientation="horizontal" className="min-h-[300px]">
                <ResizablePanel defaultSize={25}>
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="font-medium">Sidebar</span>
                  </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={75}>
                  <ResizablePanelGroup orientation="vertical">
                    <ResizablePanel defaultSize={70}>
                      <div className="flex h-full items-center justify-center p-6">
                        <span className="font-medium">Content</span>
                      </div>
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel defaultSize={30}>
                      <div className="flex h-full items-center justify-center p-6">
                        <span className="font-medium">Preview</span>
                      </div>
                    </ResizablePanel>
                  </ResizablePanelGroup>
                </ResizablePanel>
              </ResizablePanelGroup>
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { 
  ResizableHandle, 
  ResizablePanel, 
  ResizablePanelGroup 
} from '@aptima/ui';

export default function MultiplePanelsExample() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="min-h-[300px]">
      <ResizablePanel defaultSize={25}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-medium">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75}>
        <ResizablePanelGroup orientation="vertical">
          <ResizablePanel defaultSize={70}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-medium">Content</span>
            </div>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel defaultSize={30}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-medium">Preview</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Min/Max Constraints</CardTitle>
          <CardDescription>
            Setting minimum and maximum sizes for panels.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="border rounded-lg overflow-hidden">
              <ResizablePanelGroup orientation="horizontal" className="min-h-[200px]">
                <ResizablePanel defaultSize={25} minSize={20} maxSize={40}>
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="font-medium">Min: 20%, Max: 40%</span>
                  </div>
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={75}>
                  <div className="flex h-full items-center justify-center p-6">
                    <span className="font-medium">Flexible Panel</span>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { 
  ResizableHandle, 
  ResizablePanel, 
  ResizablePanelGroup 
} from '@aptima/ui';

export default function ConstrainedPanelsExample() {
  return (
    <ResizablePanelGroup orientation="horizontal" className="min-h-[200px]">
      <ResizablePanel defaultSize={25} minSize={20} maxSize={40}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-medium">Min: 20%, Max: 40%</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={75}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-medium">Flexible Panel</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Collapsible Panels</CardTitle>
          <CardDescription>
            Creating panels that can be collapsed and expanded.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 rounded-md border p-4">
            <div className="text-sm text-muted-foreground mb-4">
              This example demonstrates collapsible panels that can be toggled.
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { useState } from 'react';
import { 
  ResizableHandle, 
  ResizablePanel, 
  ResizablePanelGroup 
} from '@aptima/ui';
import { Button } from '@aptima/ui';

export default function CollapsiblePanelsExample() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="space-y-4">
      <Button onClick={() => setIsCollapsed(!isCollapsed)}>
        {isCollapsed ? 'Expand' : 'Collapse'} Sidebar
      </Button>
      
      <ResizablePanelGroup orientation="horizontal" className="min-h-[300px]">
        <ResizablePanel 
          defaultSize={25} 
          collapsible={true}
          collapsedSize={5}
          minSize={5}
          maxSize={40}
          collapsed={isCollapsed}
          onCollapse={() => setIsCollapsed(true)}
          onExpand={() => setIsCollapsed(false)}
        >
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-medium">{isCollapsed ? '' : 'Sidebar'}</span>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={75}>
          <div className="flex h-full items-center justify-center p-6">
            <span className="font-medium">Main Content</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Persisting Layout</CardTitle>
          <CardDescription>
            Saving and restoring panel layouts between sessions.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 rounded-md border p-4">
            <div className="text-sm text-muted-foreground mb-4">
              This example demonstrates how to persist panel sizes in localStorage.
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { useEffect, useState } from 'react';
import { 
  ResizableHandle, 
  ResizablePanel, 
  ResizablePanelGroup 
} from '@aptima/ui';

export default function PersistentLayoutExample() {
  const [sizes, setSizes] = useState([25, 75]);

  // Load saved sizes from localStorage on initial render
  useEffect(() => {
    const savedSizes = localStorage.getItem('panel-sizes');
    if (savedSizes) {
      setSizes(JSON.parse(savedSizes));
    }
  }, []);

  // Save sizes to localStorage when they change
  const handleLayout = (sizes: number[]) => {
    setSizes(sizes);
    localStorage.setItem('panel-sizes', JSON.stringify(sizes));
  };

  return (
    <ResizablePanelGroup 
      orientation="horizontal" 
      className="min-h-[300px]"
      onLayout={handleLayout}
    >
      <ResizablePanel defaultSize={sizes[0]}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-medium">Sidebar</span>
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={sizes[1]}>
        <div className="flex h-full items-center justify-center p-6">
          <span className="font-medium">Content</span>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>
            Detailed API reference for the Resizable component.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold">ResizablePanelGroup</h3>
              <p className="text-sm text-muted-foreground mt-2">Container for organizing resizable panels.</p>
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
                    <TableCell className="font-mono text-xs">direction</TableCell>
                    <TableCell className="font-mono text-xs">'horizontal' | 'vertical'</TableCell>
                    <TableCell className="font-mono text-xs">'horizontal'</TableCell>
                    <TableCell>The orientation of the panel group.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">onLayout</TableCell>
                    <TableCell className="font-mono text-xs">(sizes: number[]) =&gt; void</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>Callback function called when layout changes.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">className</TableCell>
                    <TableCell className="font-mono text-xs">string</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>Additional CSS class names.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">children</TableCell>
                    <TableCell className="font-mono text-xs">React.ReactNode</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>The panels and handles to display.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-semibold">ResizablePanel</h3>
              <p className="text-sm text-muted-foreground mt-2">An individual resizable panel.</p>
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
                    <TableCell className="font-mono text-xs">defaultSize</TableCell>
                    <TableCell className="font-mono text-xs">number</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>The initial size of the panel as a percentage (0-100).</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">minSize</TableCell>
                    <TableCell className="font-mono text-xs">number</TableCell>
                    <TableCell className="font-mono text-xs">10</TableCell>
                    <TableCell>The minimum allowed size of the panel as a percentage.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">maxSize</TableCell>
                    <TableCell className="font-mono text-xs">number</TableCell>
                    <TableCell className="font-mono text-xs">100</TableCell>
                    <TableCell>The maximum allowed size of the panel as a percentage.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">collapsible</TableCell>
                    <TableCell className="font-mono text-xs">boolean</TableCell>
                    <TableCell className="font-mono text-xs">false</TableCell>
                    <TableCell>Whether the panel can be collapsed.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">collapsed</TableCell>
                    <TableCell className="font-mono text-xs">boolean</TableCell>
                    <TableCell className="font-mono text-xs">false</TableCell>
                    <TableCell>Whether the panel is currently collapsed.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">collapsedSize</TableCell>
                    <TableCell className="font-mono text-xs">number</TableCell>
                    <TableCell className="font-mono text-xs">0</TableCell>
                    <TableCell>The size of the panel when collapsed.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">onCollapse</TableCell>
                    <TableCell className="font-mono text-xs">() =&gt; void</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>Callback function called when the panel is collapsed.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">onExpand</TableCell>
                    <TableCell className="font-mono text-xs">() =&gt; void</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>Callback function called when the panel is expanded.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">className</TableCell>
                    <TableCell className="font-mono text-xs">string</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>Additional CSS class names.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">children</TableCell>
                    <TableCell className="font-mono text-xs">React.ReactNode</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>The content of the panel.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-semibold">ResizableHandle</h3>
              <p className="text-sm text-muted-foreground mt-2">The draggable handle between panels.</p>
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
                    <TableCell className="font-mono text-xs">withHandle</TableCell>
                    <TableCell className="font-mono text-xs">boolean</TableCell>
                    <TableCell className="font-mono text-xs">false</TableCell>
                    <TableCell>Whether to show a visible drag handle.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">className</TableCell>
                    <TableCell className="font-mono text-xs">string</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>Additional CSS class names.</TableCell>
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
            Accessibility considerations for the Resizable component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Resizable component follows accessibility best practices:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Handles are keyboard focusable and operable</li>
            <li>ARIA attributes are used to indicate draggable regions</li>
            <li>Proper keyboard support for resizing panels using arrow keys</li>
            <li>Visual focus indicators for keyboard users</li>
            <li>Respects user motion preferences for animations</li>
          </ul>
          <p className="mt-4">
            When implementing resizable layouts in your application:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use clear visual indicators for draggable areas</li>
            <li>Consider providing tooltips or instructions for first-time users</li>
            <li>Ensure sufficient contrast for handles and dividers</li>
            <li>Implement reasonable min/max constraints to prevent unusable layouts</li>
            <li>Test with keyboard navigation to ensure users can resize without a mouse</li>
            <li>Consider providing a way to reset to default sizes</li>
            <li>Ensure that resize operations are smooth and don't cause layout jumps</li>
            <li>Test with screen readers to ensure the component's purpose is clear</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
} 
