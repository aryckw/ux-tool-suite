import { CodeBlock } from '@/lib/components/ui/code-block';
import { Sonner} from '@/lib/components/ui/sonner';
import { toast } from 'sonner';
import { Button } from '@/lib/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/lib/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/lib/components/ui/table';

export default function SonnerDoc() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Sonner</h1>
        <p className="text-muted-foreground">
          An opinionated toast component for displaying notifications.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            The Sonner component provides a way to display toast notifications in your application.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Toast notifications are an essential UI pattern for providing non-intrusive feedback to users.
            They're ideal for displaying success messages, error alerts, or other temporary notifications
            that don't require user action.
          </p>
          <p>
            The Aptima UI Sonner component is built on top of the sonner library, offering a
            customizable and accessible way to display various types of toast notifications.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the Sonner component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Sonner component is part of the Aptima UI library. You can import both the Sonner and toast function:
          </p>
          <CodeBlock language="typescript" code={`import { toast, Sonner } from '@aptima/ui';`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            Basic usage example of the Sonner component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <Sonner />
            <Button 
              onClick={() => toast('This is a notification')}
              variant="default"
            >
              Show Toast
            </Button>
          </div>

          <CodeBlock language="typescript" code={`import { toast, Sonner } from '@aptima/ui';
import { Button } from '@aptima/ui';

export default function SonnerExample() {
  return (
    <div>
      {/* Add the Sonner component to your app, ideally in the root layout */}
      <Sonner />
      
      <Button 
        onClick={() => toast('This is a notification')}
        variant="default"
      >
        Show Toast
      </Button>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Notification Types</CardTitle>
          <CardDescription>
            Different types of notifications you can display.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => toast('Default notification')}
                variant="outline"
              >
                Default
              </Button>
              <Button 
                onClick={() => toast.success('Success notification')}
                variant="outline"
              >
                Success
              </Button>
              <Button 
                onClick={() => toast.error('Error notification')}
                variant="outline"
              >
                Error
              </Button>
              <Button 
                onClick={() => toast.warning('Warning notification')}
                variant="outline"
              >
                Warning
              </Button>
              <Button 
                onClick={() => toast.info('Info notification')}
                variant="outline"
              >
                Info
              </Button>
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { toast, Sonner } from '@aptima/ui';
import { Button } from '@aptima/ui';

export default function NotificationTypesExample() {
  return (
    <div>
      <Sonner />
      <div className="flex flex-wrap gap-4">
        <Button 
          onClick={() => toast('Default notification')}
          variant="outline"
        >
          Default
        </Button>
        <Button 
          onClick={() => toast.success('Success notification')}
          variant="outline"
        >
          Success
        </Button>
        <Button 
          onClick={() => toast.error('Error notification')}
          variant="outline"
        >
          Error
        </Button>
        <Button 
          onClick={() => toast.warning('Warning notification')}
          variant="outline"
        >
          Warning
        </Button>
        <Button 
          onClick={() => toast.info('Info notification')}
          variant="outline"
        >
          Info
        </Button>
      </div>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Custom Toasts</CardTitle>
          <CardDescription>
            Creating custom toast notifications with React components.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <Button 
              onClick={() => 
                toast('Custom Component', {
                  description: 'This toast has a title and description',
                  action: {
                    label: 'Action',
                    onClick: () => console.log('Action clicked')
                  }
                })
              }
              variant="outline"
            >
              Custom Toast
            </Button>
          </div>

          <CodeBlock language="typescript" code={`import { toast, Sonner } from '@aptima/ui';
import { Button } from '@aptima/ui';

export default function CustomToastExample() {
  return (
    <div>
      <Sonner />
      <Button 
        onClick={() => 
          toast('Custom Component', {
            description: 'This toast has a title and description',
            action: {
              label: 'Action',
              onClick: () => console.log('Action clicked')
            }
          })
        }
        variant="outline"
      >
        Custom Toast
      </Button>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Promise Toasts</CardTitle>
          <CardDescription>
            Using toast to display loading states during promise resolution.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <Button 
              onClick={() => {
                toast.promise(
                  new Promise((resolve) => setTimeout(resolve, 2000)),
                  {
                    loading: 'Loading...',
                    success: 'Operation completed successfully',
                    error: 'Something went wrong'
                  }
                );
              }}
              variant="outline"
            >
              Promise Toast
            </Button>
          </div>

          <CodeBlock language="typescript" code={`import { toast, Sonner } from '@aptima/ui';
import { Button } from '@aptima/ui';

export default function PromiseToastExample() {
  return (
    <div>
      <Sonner />
      <Button 
        onClick={() => {
          toast.promise(
            // Your async function or promise
            new Promise((resolve) => setTimeout(resolve, 2000)),
            {
              loading: 'Loading...',
              success: 'Operation completed successfully',
              error: 'Something went wrong'
            }
          );
        }}
        variant="outline"
      >
        Promise Toast
      </Button>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Position and Duration</CardTitle>
          <CardDescription>
            Configure the position and duration of toast notifications.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 rounded-md border p-4">
            <div className="text-sm text-muted-foreground mb-4">
              The Sonner component can be configured to appear in different positions and for different durations.
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { toast, Sonner } from '@aptima/ui';
import { Button } from '@aptima/ui';

export default function ToastConfigExample() {
  return (
    <div>
      {/* Configure the Sonner component */}
      <Sonner 
        position="top-right" // Options: top-left, top-right, bottom-left, bottom-right, top-center, bottom-center
        duration={5000} // Duration in milliseconds
        closeButton
      />
      
      {/* Override default configuration for individual toasts */}
      <div className="flex flex-wrap gap-4">
        <Button 
          onClick={() => 
            toast('Short notification', {
              duration: 2000,
              position: 'bottom-center'
            })
          }
          variant="outline"
        >
          Short Toast (2s)
        </Button>
        
        <Button 
          onClick={() => 
            toast('Long notification', {
              duration: 10000,
              position: 'top-center'
            })
          }
          variant="outline"
        >
          Long Toast (10s)
        </Button>
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
            Detailed API reference for the Sonner component.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold">Sonner</h3>
              <p className="text-sm text-muted-foreground mt-2">The component responsible for rendering toasts.</p>
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
                    <TableCell className="font-mono text-xs">position</TableCell>
                    <TableCell className="font-mono text-xs">string</TableCell>
                    <TableCell className="font-mono text-xs">'top-right'</TableCell>
                    <TableCell>Position of the toast: 'top-left', 'top-right', 'bottom-left', 'bottom-right', 'top-center', 'bottom-center'.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">duration</TableCell>
                    <TableCell className="font-mono text-xs">number</TableCell>
                    <TableCell className="font-mono text-xs">4000</TableCell>
                    <TableCell>Default duration in milliseconds for toast notifications.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">closeButton</TableCell>
                    <TableCell className="font-mono text-xs">boolean</TableCell>
                    <TableCell className="font-mono text-xs">false</TableCell>
                    <TableCell>Whether to show a close button on toasts.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">theme</TableCell>
                    <TableCell className="font-mono text-xs">string</TableCell>
                    <TableCell className="font-mono text-xs">'system'</TableCell>
                    <TableCell>Theme for the toasts: 'system', 'light', 'dark'.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">richColors</TableCell>
                    <TableCell className="font-mono text-xs">boolean</TableCell>
                    <TableCell className="font-mono text-xs">false</TableCell>
                    <TableCell>Whether to use the rich color palette for the toasts.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-semibold">toast Function</h3>
              <p className="text-sm text-muted-foreground mt-2">The function used to create toast notifications.</p>
              <Table className="mt-4">
                <TableHeader>
                  <TableRow>
                    <TableHead>Parameter</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-mono text-xs">message</TableCell>
                    <TableCell className="font-mono text-xs">string | React.ReactNode</TableCell>
                    <TableCell>The content of the toast.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">options</TableCell>
                    <TableCell className="font-mono text-xs">object</TableCell>
                    <TableCell>Configuration options for the toast (duration, position, description, action, etc.).</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <p className="text-sm text-muted-foreground mt-4">
                The toast function also has these variant methods: toast.success(), toast.error(), toast.info(), toast.warning(), and toast.promise().
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Accessibility</CardTitle>
          <CardDescription>
            Accessibility considerations for the Sonner component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Sonner component follows accessibility best practices:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Uses proper ARIA roles for notifications</li>
            <li>Toasts are announced to screen readers using aria-live regions</li>
            <li>Supports keyboard navigation for dismissible toasts</li>
            <li>Respects reduced motion preferences</li>
            <li>Maintains sufficient color contrast for visibility</li>
          </ul>
          <p className="mt-4">
            When implementing toast notifications in your application:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Keep toast messages concise and clear</li>
            <li>Use appropriate toast types based on the nature of the notification</li>
            <li>Set appropriate duration based on the amount of content (longer for more complex messages)</li>
            <li>Don't rely solely on color to convey the type of notification</li>
            <li>Consider providing a means to view notification history for users who might miss transient notifications</li>
            <li>Ensure that any actions within toasts are accessible via keyboard</li>
            <li>Group related toasts to avoid overwhelming the user</li>
            <li>Position toasts to avoid obscuring important content</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
} 
