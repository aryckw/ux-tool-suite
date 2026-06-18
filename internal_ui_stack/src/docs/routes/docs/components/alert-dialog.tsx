import { CodeBlock } from '@/lib/components/ui/code-block';
import { Button } from '@/lib/components/ui/button';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from '@/lib/components/ui/alert-dialog';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/lib/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/lib/components/ui/table';

export default function AlertDialogDoc() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Alert Dialog</h1>
        <p className="text-muted-foreground">
          A modal dialog that interrupts the user with important content and
          expects a response.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            The AlertDialog component is used for critical actions that require
            user confirmation before proceeding.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Unlike regular dialogs, an Alert Dialog prevents users from
            interacting with the rest of the application until they make a
            choice, and it is specifically designed for situations that require
            immediate attention and a clear decision.
          </p>
          <p>
            Use Alert Dialogs when the user needs to confirm a destructive or
            important action, such as deleting data, discarding unsaved changes,
            or confirming a significant process.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the AlertDialog component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The AlertDialog component is part of the Aptima UI library. You can
            import the required components directly:
          </p>
          <CodeBlock
            language="typescript"
            code={`import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from '@aptima/ui';`}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            Basic usage example of the AlertDialog component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-center py-4">
            <AlertDialog>
              <AlertDialogTrigger>
                <Button variant="destructive">Delete Account</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete
                    your account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>

          <CodeBlock
            language="typescript"
            code={`import { Button } from '@aptima/ui';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from '@aptima/ui';

export default function AlertDialogExample() {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button variant="destructive">Delete Account</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}`}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Custom Styling</CardTitle>
          <CardDescription>
            Customizing the appearance of the AlertDialog.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-center py-4">
            <AlertDialog>
              <AlertDialogTrigger>
                <Button>Discard Changes</Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="border-amber-200 bg-amber-50">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-amber-600">
                    Discard unsaved changes?
                  </AlertDialogTitle>
                  <AlertDialogDescription className="text-amber-600/80">
                    You have unsaved changes that will be lost if you continue.
                    Are you sure you want to discard these changes?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel className="border-amber-200 hover:bg-amber-100">
                    Keep Editing
                  </AlertDialogCancel>
                  <AlertDialogAction className="bg-amber-600 hover:bg-amber-700">
                    Discard Changes
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>

          <CodeBlock
            language="typescript"
            code={`import { Button } from '@aptima/ui';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from '@aptima/ui';

export default function CustomAlertDialogExample() {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button>Discard Changes</Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="border-amber-200 bg-amber-50">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-amber-600">Discard unsaved changes?</AlertDialogTitle>
          <AlertDialogDescription className="text-amber-600/80">
            You have unsaved changes that will be lost if you continue.
            Are you sure you want to discard these changes?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="border-amber-200 hover:bg-amber-100">Keep Editing</AlertDialogCancel>
          <AlertDialogAction className="bg-amber-600 hover:bg-amber-700">Discard Changes</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}`}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Controlled Dialog</CardTitle>
          <CardDescription>
            Using state to control the AlertDialog's open state.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-center py-4">
            <AlertDialog>
              <AlertDialogTrigger>
                <Button>Confirm Submit</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Submit Application?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Once submitted, your application cannot be edited. Please
                    ensure all information is correct before proceeding.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Review Application</AlertDialogCancel>
                  <AlertDialogAction>Submit</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>

          <CodeBlock
            language="jsx"
            code={`import React from 'react';
import { Button } from '@aptima/ui';
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from '@aptima/ui';

export default function ControlledAlertDialogExample() {
  const [open, setOpen] = React.useState(false);

  // Function to handle submission
  const handleSubmit = () => {
    setOpen(false);
    // Add your submit logic here
    console.log('Application submitted');
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger>
        <Button>Confirm Submit</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Submit Application?</AlertDialogTitle>
          <AlertDialogDescription>
            Once submitted, your application cannot be edited. Please ensure all information is correct before proceeding.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Review Application</AlertDialogCancel>
          <AlertDialogAction onClick={handleSubmit}>Submit</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}`}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>
            Detailed API reference for the AlertDialog component.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">AlertDialog</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                The root component that manages the state of the alert dialog.
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
                    <TableCell>
                      Whether the dialog is open by default (uncontrolled).
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">open</TableCell>
                    <TableCell>
                      <code className="text-xs">boolean</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>
                      Whether the dialog is open (controlled).
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">onOpenChange</TableCell>
                    <TableCell>
                      <code className="text-xs">
                        (open: boolean) =&gt; void
                      </code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>
                      Event handler called when the open state changes.
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-medium">AlertDialogTrigger</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                The button that opens the alert dialog.
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
                    <TableCell>
                      When true, the trigger will be the first child element.
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-medium">AlertDialogContent</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                The component that contains the alert dialog content.
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
                    <TableCell>
                      Additional CSS classes for the content.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">forceMount</TableCell>
                    <TableCell>
                      <code className="text-xs">boolean</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">false</code>
                    </TableCell>
                    <TableCell>
                      Force the dialog content to mount even when closed.
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-medium">AlertDialogHeader</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                Container for the alert dialog header content.
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
                    <TableCell>
                      Additional CSS classes for the header.
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-medium">AlertDialogFooter</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                Container for the alert dialog footer content, typically
                containing the action buttons.
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
                    <TableCell>
                      Additional CSS classes for the footer.
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-medium">AlertDialogTitle</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                Title component for the alert dialog.
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
              <h3 className="text-lg font-medium">AlertDialogDescription</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                Description component for the alert dialog.
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
                    <TableCell>
                      Additional CSS classes for the description.
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-medium">AlertDialogAction</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                The button that confirms the alert dialog action.
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
                    <TableCell>
                      Additional CSS classes for the action button.
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-medium">AlertDialogCancel</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                The button that cancels the alert dialog action.
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
                    <TableCell>
                      Additional CSS classes for the cancel button.
                    </TableCell>
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
            Accessibility considerations for the AlertDialog component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            When using the AlertDialog component, consider the following
            accessibility best practices:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              The AlertDialog component follows the WAI-ARIA Alert Dialog
              pattern for maximum accessibility.
            </li>
            <li>
              Focus is automatically trapped within the dialog when it opens,
              ensuring keyboard users can only interact with dialog elements.
            </li>
            <li>
              When the dialog opens, focus moves to the first focusable element
              (typically the cancel button).
            </li>
            <li>
              The ESC key can be used to dismiss the dialog, providing an easy
              way for keyboard users to cancel the action.
            </li>
            <li>
              The cancel button is always rendered first in the DOM (even if
              visually it appears second), ensuring it receives focus first for
              a safer default action.
            </li>
            <li>
              All alerts should have clear, descriptive titles that explain the
              action being confirmed.
            </li>
            <li>
              The title should be concise and clear about the purpose of the
              alert, typically phrased as a question.
            </li>
            <li>
              The description should provide enough information for users to
              make an informed decision.
            </li>
            <li>
              Use clear, action-oriented labels for buttons (e.g., "Delete"
              instead of "OK").
            </li>
            <li>
              The destructive or primary action should be visually distinct from
              the cancel action.
            </li>
            <li>
              For destructive actions, consider using the destructive variant
              for the action button to emphasize the severity.
            </li>
            <li>
              Ensure sufficient color contrast between the dialog content and
              the background for users with visual impairments.
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
