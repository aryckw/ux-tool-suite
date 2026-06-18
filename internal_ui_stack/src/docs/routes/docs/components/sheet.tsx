import { CodeBlock } from '@/lib/components/ui/code-block';
import { Button } from '@/lib/components/ui/button';
import { Input } from '@/lib/components/ui/input';
import { Label } from '@/lib/components/ui/label';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from '@/lib/components/ui/sheet';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/lib/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/lib/components/ui/table';

export default function SheetDoc() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Sheet</h1>
        <p className="text-muted-foreground">
          A panel that slides out from the edge of the screen.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            The Sheet component provides a panel that slides in from the edge of the screen, similar to a drawer or side panel.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Sheets are useful for displaying additional content or controls without navigating away from the current page.
            They can slide in from any edge of the screen (right, left, top, or bottom) and can contain any content, 
            including forms, navigation menus, or detailed information.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the Sheet component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Sheet component is part of the Aptima UI library. You can import the required components directly:
          </p>
          <CodeBlock language="typescript" code={`import { 
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from '@aptima/ui';`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            Basic usage example of the Sheet component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-center py-4">
            <Sheet>
              <SheetTrigger>
                <Button variant="outline">Open Sheet</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Edit Profile</SheetTitle>
                  <SheetDescription>
                    Make changes to your profile here. Click save when you're done.
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
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
                <SheetFooter>
                  <SheetClose>
                    <Button type="submit">Save changes</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>

          <CodeBlock language="typescript" code={`import { Button } from '@aptima/ui';
import { Input } from '@aptima/ui';
import { Label } from '@aptima/ui';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from '@aptima/ui';

export default function SheetExample() {
  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit Profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
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
        <SheetFooter>
          <SheetClose>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Position Variants</CardTitle>
          <CardDescription>
            The Sheet component can slide in from different sides of the screen.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap gap-4 justify-center py-4">
            <Sheet>
              <SheetTrigger>
                <Button variant="outline">From Right</Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle>Right Sheet</SheetTitle>
                  <SheetDescription>
                    This sheet slides in from the right side.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger>
                <Button variant="outline">From Left</Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Left Sheet</SheetTitle>
                  <SheetDescription>
                    This sheet slides in from the left side.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger>
                <Button variant="outline">From Top</Button>
              </SheetTrigger>
              <SheetContent side="top">
                <SheetHeader>
                  <SheetTitle>Top Sheet</SheetTitle>
                  <SheetDescription>
                    This sheet slides in from the top.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>

            <Sheet>
              <SheetTrigger>
                <Button variant="outline">From Bottom</Button>
              </SheetTrigger>
              <SheetContent side="bottom">
                <SheetHeader>
                  <SheetTitle>Bottom Sheet</SheetTitle>
                  <SheetDescription>
                    This sheet slides in from the bottom.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>

          <CodeBlock language="typescript" code={`import { Button } from '@aptima/ui';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from '@aptima/ui';

export default function SheetPositionExample() {
  return (
    <div className="flex flex-wrap gap-4">
      <Sheet>
        <SheetTrigger>
          <Button variant="outline">From Right</Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Right Sheet</SheetTitle>
            <SheetDescription>
              This sheet slides in from the right side.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger>
          <Button variant="outline">From Left</Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Left Sheet</SheetTitle>
            <SheetDescription>
              This sheet slides in from the left side.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger>
          <Button variant="outline">From Top</Button>
        </SheetTrigger>
        <SheetContent side="top">
          <SheetHeader>
            <SheetTitle>Top Sheet</SheetTitle>
            <SheetDescription>
              This sheet slides in from the top.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger>
          <Button variant="outline">From Bottom</Button>
        </SheetTrigger>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle>Bottom Sheet</SheetTitle>
            <SheetDescription>
              This sheet slides in from the bottom.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Form</CardTitle>
          <CardDescription>
            Using Sheet as a form container.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-center py-4">
            <Sheet>
              <SheetTrigger>
                <Button>Create Account</Button>
              </SheetTrigger>
              <SheetContent className="sm:max-w-md">
                <SheetHeader>
                  <SheetTitle>Create an account</SheetTitle>
                  <SheetDescription>
                    Enter your information below to create your account.
                  </SheetDescription>
                </SheetHeader>
                <form className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="example@example.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                </form>
                <SheetFooter>
                  <SheetClose>
                    <Button type="submit">Create Account</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>

          <CodeBlock language="typescript" code={`import { Button } from '@aptima/ui';
import { Input } from '@aptima/ui';
import { Label } from '@aptima/ui';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from '@aptima/ui';

export default function SheetFormExample() {
  return (
    <Sheet>
      <SheetTrigger>
        <Button>Create Account</Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-md">
        <SheetHeader>
          <SheetTitle>Create an account</SheetTitle>
          <SheetDescription>
            Enter your information below to create your account.
          </SheetDescription>
        </SheetHeader>
        <form className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="example@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm Password</Label>
            <Input id="confirm-password" type="password" />
          </div>
        </form>
        <SheetFooter>
          <SheetClose>
            <Button type="submit">Create Account</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Controlled Sheet</CardTitle>
          <CardDescription>
            Using state to control the open state of the Sheet.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-center py-4">
            <Sheet>
              <SheetTrigger>
                <Button variant="outline">Open Controlled Sheet</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Controlled Sheet</SheetTitle>
                  <SheetDescription>
                    This sheet is controlled using React state.
                  </SheetDescription>
                </SheetHeader>
                <div className="py-4">
                  <p className="text-muted-foreground">
                    In your actual implementation, you would use the <code>open</code> and <code>onOpenChange</code> props
                    to control the sheet with state.
                  </p>
                </div>
                <SheetFooter>
                  <SheetClose>
                    <Button variant="outline">Close</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>

          <CodeBlock language="jsx" code={`import React from 'react';
import { Button } from '@aptima/ui';
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from '@aptima/ui';

export default function ControlledSheetExample() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <Button variant="outline">
          {open ? 'Close Sheet' : 'Open Sheet'}
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Controlled Sheet</SheetTitle>
          <SheetDescription>
            This sheet is controlled using React state.
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <p>The sheet is currently {open ? 'open' : 'closed'}.</p>
        </div>
        <SheetFooter>
          <Button onClick={() => setOpen(false)}>
            Close
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>
            Detailed API reference for the Sheet component.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">Sheet</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                The root component that manages the state of the sheet.
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
                    <TableCell className="font-mono">defaultOpen</TableCell>
                    <TableCell>
                      <code className="text-xs">boolean</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">false</code>
                    </TableCell>
                    <TableCell>Whether the sheet is open by default (uncontrolled).</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">open</TableCell>
                    <TableCell>
                      <code className="text-xs">boolean</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>Whether the sheet is open (controlled).</TableCell>
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
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-medium">SheetTrigger</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                The button that opens the sheet.
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
              <h3 className="text-lg font-medium">SheetContent</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                The component that contains the sheet content.
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
                    <TableCell className="font-mono">side</TableCell>
                    <TableCell>
                      <code className="text-xs">"top" | "right" | "bottom" | "left"</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">"right"</code>
                    </TableCell>
                    <TableCell>The side from which the sheet enters.</TableCell>
                  </TableRow>
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
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-medium">SheetHeader</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                Container for the sheet header content.
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
              <h3 className="text-lg font-medium">SheetFooter</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                Container for the sheet footer content.
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
              <h3 className="text-lg font-medium">SheetTitle</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                Title component for the sheet.
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
              <h3 className="text-lg font-medium">SheetDescription</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                Description component for the sheet.
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
              <h3 className="text-lg font-medium">SheetClose</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                Button that closes the sheet.
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
            Accessibility considerations for the Sheet component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            When using the Sheet component, consider the following accessibility best practices:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The Sheet component is built on top of the Radix UI Dialog primitive, which follows WAI-ARIA Dialog pattern for accessibility.</li>
            <li>Keyboard users can dismiss the sheet using the Escape key.</li>
            <li>The component traps focus inside the sheet while it's open, ensuring keyboard users can interact only with elements inside the sheet.</li>
            <li>The close button has appropriate ARIA labels for screen readers.</li>
            <li>When the sheet opens, focus moves to the first focusable element within it.</li>
            <li>The overlay prevents interaction with the content behind the sheet while it's open.</li>
            <li>Use appropriate heading levels (SheetTitle) and descriptions (SheetDescription) to provide context for screen reader users.</li>
            <li>Ensure any interactive elements within the sheet have appropriate focus styles for keyboard users.</li>
            <li>For longer content, ensure the sheet content is scrollable and accessible via keyboard and screen readers.</li>
            <li>If using the sheet for forms, ensure all form elements have proper labels and accessible error messages.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
} 
