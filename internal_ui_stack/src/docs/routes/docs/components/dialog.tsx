import { CodeBlock } from '@/lib/components/ui/code-block';
import React from 'react';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/lib/components/ui/dialog';
import { Button } from '@/lib/components/ui/button';
import { Input } from '@/lib/components/ui/input';
import { Label } from '@/lib/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/lib/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/lib/components/ui/table';

export default function DialogDoc() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Dialog</h1>
        <p className="text-muted-foreground">
          A window overlaid on the primary window that provides contextual information or actions.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            The Dialog component is used to create modal dialogs for focused user interactions.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Dialogs are displayed as overlays on top of the page content and require user interaction
            before returning to the main window. They are useful for important notifications, capturing
            user input, or confirming actions.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the Dialog component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Dialog component is part of the Aptima UI library. You can import it directly:
          </p>
          <CodeBlock language="typescript" code={`import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@aptima/ui';`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            Basic usage example of the Dialog component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <Dialog>
              <DialogTrigger>
                <Button variant="outline">Open Dialog</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Edit Profile</DialogTitle>
                  <DialogDescription>
                    Make changes to your profile here. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      defaultValue="John Doe"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Username
                    </Label>
                    <Input
                      id="username"
                      defaultValue="@johndoe"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <CodeBlock language="typescript" code={`import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@aptima/ui';
import { Button } from '@aptima/ui';
import { Input } from '@aptima/ui';
import { Label } from '@aptima/ui';

export default function DialogExample() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="outline">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="John Doe"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@johndoe"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Controlled Dialog</CardTitle>
          <CardDescription>
            Control the open state of the Dialog component using React state.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <ControlledDialogExample />

          <CodeBlock language="jsx" code={`import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@aptima/ui';
import { Button } from '@aptima/ui';

export default function ControlledDialogExample() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex flex-col gap-4">
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <p className="text-sm text-muted-foreground">
        Dialog is {open ? "open" : "closed"}
      </p>
      
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Controlled Dialog</DialogTitle>
            <DialogDescription>
              This dialog's state is controlled using React state.
            </DialogDescription>
          </DialogHeader>
          <p className="py-4">
            You can close this dialog in multiple ways:
          </p>
          <DialogFooter className="flex justify-between">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>
              Continue
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Custom Sizing</CardTitle>
          <CardDescription>
            Customize the size of the Dialog component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex gap-4">
            <Dialog>
              <DialogTrigger>
                <Button variant="outline">Small Dialog</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[400px]">
                <DialogHeader>
                  <DialogTitle>Small Dialog</DialogTitle>
                  <DialogDescription>
                    A compact dialog for simple interactions.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <p>This dialog has a max width of 400px.</p>
                </div>
                <DialogFooter>
                  <Button>Close</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger>
                <Button variant="outline">Large Dialog</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[700px]">
                <DialogHeader>
                  <DialogTitle>Large Dialog</DialogTitle>
                  <DialogDescription>
                    A spacious dialog for complex content and forms.
                  </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                  <p>This dialog has a max width of 700px, giving you more space for content.</p>
                  <p className="mt-4">It's useful for forms, tables, or other complex UI elements that require more horizontal space.</p>
                </div>
                <DialogFooter>
                  <Button>Close</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          <CodeBlock language="typescript" code={`import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@aptima/ui';
import { Button } from '@aptima/ui';

export default function DialogSizesExample() {
  return (
    <div className="flex gap-4">
      <Dialog>
        <DialogTrigger>
          <Button variant="outline">Small Dialog</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle>Small Dialog</DialogTitle>
            <DialogDescription>
              A compact dialog for simple interactions.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p>This dialog has a max width of 400px.</p>
          </div>
          <DialogFooter>
            <Button>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger>
          <Button variant="outline">Large Dialog</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[700px]">
          <DialogHeader>
            <DialogTitle>Large Dialog</DialogTitle>
            <DialogDescription>
              A spacious dialog for complex content and forms.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p>This dialog has a max width of 700px, giving you more space for content.</p>
            <p className="mt-4">It's useful for forms, tables, or other complex UI elements that require more horizontal space.</p>
          </div>
          <DialogFooter>
            <Button>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Dialog With Close Button</CardTitle>
          <CardDescription>
            Add a custom close button to the Dialog component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <Dialog>
            <DialogTrigger>
              <Button>Open With Close Button</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Custom Close Button</DialogTitle>
                <DialogDescription>
                  This dialog has a custom close button in the footer.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <p>Click the button below or the X icon in the top-right to close this dialog.</p>
              </div>
              <DialogFooter>
                <DialogClose>
                  <Button variant="outline">Close Dialog</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <CodeBlock language="typescript" code={`import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@aptima/ui';
import { Button } from '@aptima/ui';

export default function DialogWithCloseButtonExample() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Open With Close Button</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Custom Close Button</DialogTitle>
          <DialogDescription>
            This dialog has a custom close button in the footer.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p>Click the button below or the X icon in the top-right to close this dialog.</p>
        </div>
        <DialogFooter>
          <DialogClose>
            <Button variant="outline">Close Dialog</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>
            Detailed API reference for the Dialog component.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">Dialog Components</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                The Dialog component consists of several parts:
              </p>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Component</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Props</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-mono">Dialog</TableCell>
                    <TableCell>The root dialog component that manages the open state.</TableCell>
                    <TableCell>
                      <code className="text-xs">open?: boolean<br />onOpenChange?: (open: boolean) {'=>'} void<br />modal?: boolean (default: true)</code>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">DialogTrigger</TableCell>
                    <TableCell>The button that opens the dialog when clicked.</TableCell>
                    <TableCell>
                      <code className="text-xs">asChild?: boolean</code>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">DialogContent</TableCell>
                    <TableCell>The container for dialog content with a backdrop overlay.</TableCell>
                    <TableCell>
                      <code className="text-xs">className?: string<br />children: React.ReactNode</code>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">DialogHeader</TableCell>
                    <TableCell>The header section of the dialog.</TableCell>
                    <TableCell>
                      <code className="text-xs">className?: string<br />children: React.ReactNode</code>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">DialogFooter</TableCell>
                    <TableCell>The footer section of the dialog, typically for action buttons.</TableCell>
                    <TableCell>
                      <code className="text-xs">className?: string<br />children: React.ReactNode</code>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">DialogTitle</TableCell>
                    <TableCell>The title of the dialog.</TableCell>
                    <TableCell>
                      <code className="text-xs">className?: string<br />children: React.ReactNode</code>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">DialogDescription</TableCell>
                    <TableCell>The description text for the dialog.</TableCell>
                    <TableCell>
                      <code className="text-xs">className?: string<br />children: React.ReactNode</code>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">DialogClose</TableCell>
                    <TableCell>A button that closes the dialog when clicked.</TableCell>
                    <TableCell>
                      <code className="text-xs">asChild?: boolean</code>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-medium">Examples</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                Here are a few more examples of using the Dialog component in different ways:
              </p>
              <CodeBlock language="typescript" code={`// Basic dialog
<Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
      <DialogDescription>Dialog Description</DialogDescription>
    </DialogHeader>
    <p>Dialog Content</p>
    <DialogFooter>
      <DialogClose>Close</DialogClose>
    </DialogFooter>
  </DialogContent>
</Dialog>

// Controlled dialog
const [open, setOpen] = React.useState(false)
<Dialog open={open} onOpenChange={setOpen}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Controlled Dialog</DialogTitle>
    </DialogHeader>
    <Button onClick={() => setOpen(false)}>Close</Button>
  </DialogContent>
</Dialog>

// Dialog with custom trigger
<Dialog>
  <DialogTrigger>
    <Button variant="outline">Custom Trigger</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Custom Trigger Dialog</DialogTitle>
    </DialogHeader>
  </DialogContent>
</Dialog>`} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Accessibility</CardTitle>
          <CardDescription>
            The Dialog component follows WAI-ARIA standards for accessibility.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Dialog component is built on top of the Radix UI Dialog primitive, which provides
            the following accessibility features:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Follows the <a href="https://www.w3.org/WAI/ARIA/apg/patterns/dialogmodal/" className="text-primary underline">WAI-ARIA Dialog Modal pattern</a>.</li>
            <li>Manages focus correctly, trapping it within the dialog when open.</li>
            <li>Supports keyboard navigation: <code className="text-xs bg-muted px-1 rounded">Escape</code> to close the dialog.</li>
            <li>Automatically applies appropriate ARIA attributes: <code className="text-xs bg-muted px-1 rounded">role="dialog"</code>, <code className="text-xs bg-muted px-1 rounded">aria-modal</code>, <code className="text-xs bg-muted px-1 rounded">aria-labelledby</code>, and <code className="text-xs bg-muted px-1 rounded">aria-describedby</code>.</li>
            <li>When the dialog closes, focus returns to the element that triggered it.</li>
            <li>The screen reader announces the dialog title and description when opened.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

// Example component for the controlled dialog demo
function ControlledDialogExample() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex flex-col gap-4">
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <p className="text-sm text-muted-foreground">
        Dialog is {open ? "open" : "closed"}
      </p>
      
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Controlled Dialog</DialogTitle>
            <DialogDescription>
              This dialog's state is controlled using React state.
            </DialogDescription>
          </DialogHeader>
          <p className="py-4">
            You can close this dialog in multiple ways:
          </p>
          <DialogFooter className="flex justify-between">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>
              Continue
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
} 
 