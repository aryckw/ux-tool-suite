import { CodeBlock } from '@/lib/components/ui/code-block';
import React from 'react';
import { Button } from '@/lib/components/ui/button';
import { Input } from '@/lib/components/ui/input';
import { Label } from '@/lib/components/ui/label';
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from '@/lib/components/ui/drawer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/lib/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/lib/components/ui/table';

export default function DrawerDoc() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Drawer</h1>
        <p className="text-muted-foreground">
          A panel that slides out from the edge of the screen, typically from the bottom.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            The Drawer component provides a panel that slides in from an edge of the screen, commonly used for mobile interfaces.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Drawers are useful for displaying additional content or controls without navigating away from the current page.
            They are especially well-suited for mobile interfaces where screen space is limited, but can be used on any viewport size.
          </p>
          <p>
            Unlike the Sheet component which is primarily designed for side panels, the Drawer component is optimized for bottom sheets
            with touch interactions like swipe-to-dismiss, though it supports all four directions.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the Drawer component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Drawer component is part of the Aptima UI library. You can import the required components directly:
          </p>
          <CodeBlock language="typescript" code={`import { 
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from '@aptima/ui';`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            Basic usage example of the Drawer component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-center py-4">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline">Open Drawer</Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Edit Profile</DrawerTitle>
                  <DrawerDescription>
                    Make changes to your profile here. Click save when you're done.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="p-4 grid gap-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input id="name" value="John Doe" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Username
                    </Label>
                    <Input id="username" value="johndoe" className="col-span-3" />
                  </div>
                </div>
                <DrawerFooter>
                  <Button>Save changes</Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>

          <CodeBlock language="typescript" code={`import { Button } from '@aptima/ui';
import { Input } from '@aptima/ui';
import { Label } from '@aptima/ui';
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from '@aptima/ui';

export default function DrawerExample() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Edit Profile</DrawerTitle>
          <DrawerDescription>
            Make changes to your profile here. Click save when you're done.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4 grid gap-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="John Doe" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="johndoe" className="col-span-3" />
          </div>
        </div>
        <DrawerFooter>
          <Button>Save changes</Button>
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Direction Variants</CardTitle>
          <CardDescription>
            The Drawer component can slide in from different sides of the screen.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap gap-4 justify-center py-4">
            <Drawer direction="bottom">
              <DrawerTrigger asChild>
                <Button variant="outline">From Bottom</Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Bottom Drawer</DrawerTitle>
                  <DrawerDescription>
                    This drawer slides in from the bottom (default).
                  </DrawerDescription>
                </DrawerHeader>
                <div className="p-4">
                  <p>Bottom drawers are commonly used in mobile interfaces.</p>
                </div>
              </DrawerContent>
            </Drawer>

            <Drawer direction="top">
              <DrawerTrigger asChild>
                <Button variant="outline">From Top</Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Top Drawer</DrawerTitle>
                  <DrawerDescription>
                    This drawer slides in from the top.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="p-4">
                  <p>Top drawers can be used for notifications or global actions.</p>
                </div>
              </DrawerContent>
            </Drawer>

            <Drawer direction="left">
              <DrawerTrigger asChild>
                <Button variant="outline">From Left</Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Left Drawer</DrawerTitle>
                  <DrawerDescription>
                    This drawer slides in from the left.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="p-4">
                  <p>Left drawers often contain navigation menus.</p>
                </div>
              </DrawerContent>
            </Drawer>

            <Drawer direction="right">
              <DrawerTrigger asChild>
                <Button variant="outline">From Right</Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Right Drawer</DrawerTitle>
                  <DrawerDescription>
                    This drawer slides in from the right.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="p-4">
                  <p>Right drawers can contain additional controls or settings.</p>
                </div>
              </DrawerContent>
            </Drawer>
          </div>

          <CodeBlock language="typescript" code={`import { Button } from '@aptima/ui';
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from '@aptima/ui';

export default function DrawerDirectionExample() {
  return (
    <div className="flex flex-wrap gap-4">
      <Drawer direction="bottom">
        <DrawerTrigger asChild>
          <Button variant="outline">From Bottom</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Bottom Drawer</DrawerTitle>
            <DrawerDescription>
              This drawer slides in from the bottom (default).
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            <p>Bottom drawers are commonly used in mobile interfaces.</p>
          </div>
        </DrawerContent>
      </Drawer>

      <Drawer direction="top">
        <DrawerTrigger asChild>
          <Button variant="outline">From Top</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Top Drawer</DrawerTitle>
            <DrawerDescription>
              This drawer slides in from the top.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            <p>Top drawers can be used for notifications or global actions.</p>
          </div>
        </DrawerContent>
      </Drawer>

      <Drawer direction="left">
        <DrawerTrigger asChild>
          <Button variant="outline">From Left</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Left Drawer</DrawerTitle>
            <DrawerDescription>
              This drawer slides in from the left.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            <p>Left drawers often contain navigation menus.</p>
          </div>
        </DrawerContent>
      </Drawer>

      <Drawer direction="right">
        <DrawerTrigger asChild>
          <Button variant="outline">From Right</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Right Drawer</DrawerTitle>
            <DrawerDescription>
              This drawer slides in from the right.
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            <p>Right drawers can contain additional controls or settings.</p>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Controlled Drawer</CardTitle>
          <CardDescription>
            Using state to control the open state of the Drawer.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-center py-4">
            <Drawer open={open} onOpenChange={setOpen}>
              <DrawerTrigger asChild>
                <Button variant="outline">
                  {open ? 'Close Drawer' : 'Open Controlled Drawer'}
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Controlled Drawer</DrawerTitle>
                  <DrawerDescription>
                    This drawer is controlled using React state.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="p-4">
                  <p>The drawer is currently open. You can close it by clicking the button below or outside the drawer.</p>
                </div>
                <DrawerFooter>
                  <Button onClick={() => setOpen(false)}>
                    Close Programmatically
                  </Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>

          <CodeBlock language="jsx" code={`import React from 'react';
import { Button } from '@aptima/ui';
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
} from '@aptima/ui';

export default function ControlledDrawerExample() {
  const [open, setOpen] = React.useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">
          {open ? 'Close Drawer' : 'Open Controlled Drawer'}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Controlled Drawer</DrawerTitle>
          <DrawerDescription>
            This drawer is controlled using React state.
          </DrawerDescription>
        </DrawerHeader>
        <div className="p-4">
          <p>The drawer is currently open. You can close it by clicking the button below or outside the drawer.</p>
        </div>
        <DrawerFooter>
          <Button onClick={() => setOpen(false)}>
            Close Programmatically
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>
            Detailed API reference for the Drawer component.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">Drawer</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                The root component that manages the state of the drawer.
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
                    <TableCell className="font-mono">direction</TableCell>
                    <TableCell>
                      <code className="text-xs">"top" | "right" | "bottom" | "left"</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">"bottom"</code>
                    </TableCell>
                    <TableCell>The direction from which the drawer enters.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">defaultOpen</TableCell>
                    <TableCell>
                      <code className="text-xs">boolean</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">false</code>
                    </TableCell>
                    <TableCell>Whether the drawer is open by default (uncontrolled).</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">open</TableCell>
                    <TableCell>
                      <code className="text-xs">boolean</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>Whether the drawer is open (controlled).</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">onOpenChange</TableCell>
                    <TableCell>
                      <code className="text-xs">(open: boolean) =&gt; void</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>Event handler called when the open state changes.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">modal</TableCell>
                    <TableCell>
                      <code className="text-xs">boolean</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">true</code>
                    </TableCell>
                    <TableCell>Whether the drawer is modal (blocks interaction with content behind it).</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">shouldScaleBackground</TableCell>
                    <TableCell>
                      <code className="text-xs">boolean</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">true</code>
                    </TableCell>
                    <TableCell>Whether the background should scale when the drawer is open.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">snapPoints</TableCell>
                    <TableCell>
                      <code className="text-xs">number[]</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>Array of snap points for the drawer (as percentages).</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">activeSnapPoint</TableCell>
                    <TableCell>
                      <code className="text-xs">number | null</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>The active snap point (controlled).</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">onSnapPointChange</TableCell>
                    <TableCell>
                      <code className="text-xs">(snapPoint: number | null) =&gt; void</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>Event handler called when the active snap point changes.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-medium">DrawerTrigger</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                The button that opens the drawer.
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
                    <TableCell className="font-mono">asChild</TableCell>
                    <TableCell>
                      <code className="text-xs">boolean</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">false</code>
                    </TableCell>
                    <TableCell>When true, the trigger will be the first child element.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-medium">DrawerContent</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                The component that contains the drawer content.
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
                    <TableCell>Additional CSS classes for the content.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">forceMount</TableCell>
                    <TableCell>
                      <code className="text-xs">boolean</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">false</code>
                    </TableCell>
                    <TableCell>Force the drawer content to mount even when closed.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-medium">DrawerHeader</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                Container for the drawer header content.
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
                    <TableCell>Additional CSS classes for the header.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-medium">DrawerFooter</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                Container for the drawer footer content.
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
                    <TableCell>Additional CSS classes for the footer.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-medium">DrawerTitle</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                Title component for the drawer.
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
                    <TableCell>Additional CSS classes for the title.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-medium">DrawerDescription</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                Description component for the drawer.
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
                    <TableCell>Additional CSS classes for the description.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-medium">DrawerClose</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                Button that closes the drawer.
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
                    <TableCell className="font-mono">asChild</TableCell>
                    <TableCell>
                      <code className="text-xs">boolean</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">false</code>
                    </TableCell>
                    <TableCell>When true, the close button will be the first child element.</TableCell>
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
            Accessibility considerations for the Drawer component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            When using the Drawer component, consider the following accessibility best practices:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The Drawer component is built on top of the Vaul library, which follows WAI-ARIA Dialog pattern for accessibility.</li>
            <li>For touch devices, users can dismiss the drawer by swiping it in the opposite direction of how it opened.</li>
            <li>Keyboard users can dismiss the drawer using the Escape key.</li>
            <li>The component traps focus inside the drawer while it's open, ensuring keyboard users can interact only with elements inside the drawer.</li>
            <li>When the drawer opens, focus moves to the first focusable element within it, providing a better experience for screen reader users.</li>
            <li>The overlay prevents interaction with the content behind the drawer while it's open, reducing confusion.</li>
            <li>Use appropriate heading levels (DrawerTitle) and descriptions (DrawerDescription) to provide context for screen reader users.</li>
            <li>Ensure any interactive elements within the drawer have appropriate focus styles for keyboard users.</li>
            <li>For drawers with scrollable content, ensure the content is accessible via keyboard navigation and screen readers.</li>
            <li>When using snap points, make sure they are large enough to be easily targeted by users with motor impairments.</li>
            <li>Consider providing explicit close buttons with clear labeling in addition to the swipe-to-dismiss or Escape key functionality.</li>
            <li>For very tall drawers on small screens, make sure important actions are reachable without excessive scrolling.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
} 
