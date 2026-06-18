import { CodeBlock } from '@/lib/components/ui/code-block';
import {
  Popover,
  PopoverTrigger,
  PopoverContent
} from '@/lib/components/ui/popover';
import { Button } from '@/lib/components/ui/button';
import { Input } from '@/lib/components/ui/input';
import { Label } from '@/lib/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/lib/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/lib/components/ui/table';

export default function PopoverDoc() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Popover</h1>
        <p className="text-muted-foreground">
          Displays floating content in relation to a trigger.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            The Popover component displays floating content when a trigger element is clicked.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Popovers are useful for displaying additional information or controls without navigating away from the current context.
            They appear attached to a trigger element and can be dismissed by clicking outside or pressing the escape key.
          </p>
          <p>
            The Aptima UI Popover component is built on top of <code>@radix-ui/react-popover</code>, ensuring
            proper accessibility, positioning, and keyboard support.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the Popover component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Popover component is part of the Aptima UI library. You can import it directly:
          </p>
          <CodeBlock language="typescript" code={`import { 
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor
} from '@aptima/ui';`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            Basic usage example of the Popover component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 flex justify-center">
            <Popover>
              <PopoverTrigger>
                <Button variant="outline">Open Popover</Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">Dimensions</h4>
                    <p className="text-sm text-muted-foreground">
                      Set the dimensions for the layer.
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="width">Width</Label>
                      <Input
                        id="width"
                        defaultValue="100%"
                        className="col-span-2 h-8"
                      />
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="maxWidth">Max. width</Label>
                      <Input
                        id="maxWidth"
                        defaultValue="300px"
                        className="col-span-2 h-8"
                      />
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="height">Height</Label>
                      <Input
                        id="height"
                        defaultValue="25px"
                        className="col-span-2 h-8"
                      />
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          <CodeBlock language="typescript" code={`import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@aptima/ui';
import { Button } from '@aptima/ui';
import { Input } from '@aptima/ui';
import { Label } from '@aptima/ui';

export default function PopoverExample() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="outline">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input
                id="maxWidth"
                defaultValue="300px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input
                id="height"
                defaultValue="25px"
                className="col-span-2 h-8"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Custom Positioning</CardTitle>
          <CardDescription>
            Controlling the position of the Popover.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 flex justify-center">
            <Popover>
              <PopoverTrigger>
                <Button variant="outline">Top-End Popover</Button>
              </PopoverTrigger>
              <PopoverContent align="end" side="top" className="w-80">
                <div className="text-sm">
                  <p>This popover is positioned at the top-end of the trigger.</p>
                  <p className="text-muted-foreground mt-2">Use the <code>align</code> and <code>side</code> props to control positioning.</p>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          <CodeBlock language="typescript" code={`import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@aptima/ui';
import { Button } from '@aptima/ui';

export default function PositionedPopoverExample() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="outline">Top-End Popover</Button>
      </PopoverTrigger>
      <PopoverContent align="end" side="top" className="w-80">
        <div className="text-sm">
          <p>This popover is positioned at the top-end of the trigger.</p>
          <p className="text-muted-foreground mt-2">
            Use the <code>align</code> and <code>side</code> props to control positioning.
          </p>
        </div>
      </PopoverContent>
    </Popover>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>
            Detailed API reference for the Popover component.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold">Popover</h3>
              <p className="text-sm text-muted-foreground mt-2">The root container for the popover component.</p>
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
                    <TableCell className="font-mono text-xs">defaultOpen</TableCell>
                    <TableCell className="font-mono text-xs">boolean</TableCell>
                    <TableCell className="font-mono text-xs">false</TableCell>
                    <TableCell>The open state of the popover when it is initially rendered.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">open</TableCell>
                    <TableCell className="font-mono text-xs">boolean</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>The controlled open state of the popover.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">onOpenChange</TableCell>
                    <TableCell className="font-mono text-xs">(open: boolean) =&gt; void</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>Event handler called when the open state of the popover changes.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">modal</TableCell>
                    <TableCell className="font-mono text-xs">boolean</TableCell>
                    <TableCell className="font-mono text-xs">false</TableCell>
                    <TableCell>When true, keyboard focus is trapped within the popover.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold">PopoverTrigger</h3>
              <p className="text-sm text-muted-foreground mt-2">The button that toggles the popover.</p>
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
                    <TableCell className="font-mono text-xs">asChild</TableCell>
                    <TableCell className="font-mono text-xs">boolean</TableCell>
                    <TableCell className="font-mono text-xs">false</TableCell>
                    <TableCell>When true, the trigger will be replaced by its children.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold">PopoverContent</h3>
              <p className="text-sm text-muted-foreground mt-2">The component that contains the popover content.</p>
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
                    <TableCell className="font-mono text-xs">align</TableCell>
                    <TableCell className="font-mono text-xs">'start' | 'center' | 'end'</TableCell>
                    <TableCell className="font-mono text-xs">'center'</TableCell>
                    <TableCell>The alignment of the popover relative to the trigger.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">side</TableCell>
                    <TableCell className="font-mono text-xs">'top' | 'right' | 'bottom' | 'left'</TableCell>
                    <TableCell className="font-mono text-xs">'bottom'</TableCell>
                    <TableCell>The side of the trigger to place the popover.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">sideOffset</TableCell>
                    <TableCell className="font-mono text-xs">number</TableCell>
                    <TableCell className="font-mono text-xs">4</TableCell>
                    <TableCell>The distance in pixels from the trigger.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">avoidCollisions</TableCell>
                    <TableCell className="font-mono text-xs">boolean</TableCell>
                    <TableCell className="font-mono text-xs">true</TableCell>
                    <TableCell>When true, the popover will move to avoid collisions with the viewport.</TableCell>
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
            Accessibility considerations for the Popover component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Popover component follows accessibility best practices:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Follows the WAI-ARIA <a href="https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/" className="text-primary underline">Dialog Pattern</a></li>
            <li>Manages focus automatically when opened and closed</li>
            <li>Can be dismissed with the Escape key</li>
            <li>Content is rendered in a Portal to ensure proper layering and focus management</li>
            <li>The trigger is automatically linked to the content with proper ARIA attributes</li>
            <li>All interactive elements within the popover are navigable via keyboard</li>
          </ul>
          <p className="mt-4">
            When implementing popovers in your application:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Ensure popovers do not obscure important content</li>
            <li>Use popovers sparingly and for related contextual information</li>
            <li>Keep content concise and directly related to the trigger</li>
            <li>Provide clear visual indication of which element triggered the popover</li>
            <li>Consider including a close button for touch device users</li>
            <li>Test keyboard navigation thoroughly within the popover</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
} 
