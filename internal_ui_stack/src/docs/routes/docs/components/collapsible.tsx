import { CodeBlock } from '@/lib/components/ui/code-block';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/lib/components/ui/collapsible';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/lib/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/lib/components/ui/table';
import { Button } from '@/lib/components/ui/button';
import { ChevronDown } from 'lucide-react';

export default function CollapsibleDoc() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Collapsible</h1>
        <p className="text-muted-foreground">
          A component that can be expanded or collapsed.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            The Collapsible component helps manage content visibility by allowing users to expand and collapse sections.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Collapsible is useful for hiding content that isn't immediately relevant to the user.
            It allows for better space management and user focus, especially for content that not all users need to see.
          </p>
          <p>
            The Aptima UI Collapsible component is built on top of <code>@radix-ui/react-collapsible</code>, ensuring
            proper accessibility and transitions.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the Collapsible component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Collapsible component is part of the Aptima UI library. You can import it directly:
          </p>
          <CodeBlock language="typescript" code={`import { 
  Collapsible, 
  CollapsibleTrigger, 
  CollapsibleContent 
} from '@aptima/ui';`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            Basic usage example of the Collapsible component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <Collapsible className="w-full">
              <div className="flex items-center justify-between space-x-4 px-4">
                <h4 className="text-sm font-semibold">
                  Project details
                </h4>
                <CollapsibleTrigger>
                  <Button variant="ghost" size="sm" className="w-9 p-0">
                    <ChevronDown className="h-4 w-4" />
                    <span className="sr-only">Toggle</span>
                  </Button>
                </CollapsibleTrigger>
              </div>
              <div className="px-4 py-2 text-sm">
                This displays a short summary of the project that's always visible.
              </div>
              <CollapsibleContent className="space-y-2 px-4 py-2 text-sm">
                <div className="rounded-md border px-4 py-3 font-mono text-sm">
                  This content is hidden by default and can be expanded or collapsed.
                </div>
                <div className="rounded-md border px-4 py-3 font-mono text-sm">
                  It's useful for additional details that aren't immediately necessary.
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>

          <CodeBlock language="typescript" code={`import { 
  Collapsible, 
  CollapsibleTrigger, 
  CollapsibleContent 
} from '@aptima/ui';
import { Button } from '@aptima/ui';
import { ChevronDown } from 'lucide-react';

export default function CollapsibleExample() {
  return (
    <Collapsible className="w-full">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">
          Project details
        </h4>
        <CollapsibleTrigger>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="px-4 py-2 text-sm">
        This displays a short summary of the project that's always visible.
      </div>
      <CollapsibleContent className="space-y-2 px-4 py-2 text-sm">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          This content is hidden by default and can be expanded or collapsed.
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          It's useful for additional details that aren't immediately necessary.
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Controlled Example</CardTitle>
          <CardDescription>
            Using the Collapsible component with state management.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="rounded-md border">
              <div className="p-4">
                <p className="text-sm text-muted-foreground">
                  This example shows how you would control the collapsible state with React state.
                </p>
              </div>
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { useState } from 'react';
import { 
  Collapsible, 
  CollapsibleTrigger, 
  CollapsibleContent 
} from '@aptima/ui';
import { Button } from '@aptima/ui';
import { ChevronDown } from 'lucide-react';

export default function ControlledCollapsible() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-full"
    >
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">
          Controlled Collapsible
        </h4>
        <div className="flex items-center space-x-2">
          {isOpen ? "Open" : "Closed"}
          <CollapsibleTrigger>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
      </div>
      <CollapsibleContent className="space-y-2 px-4 py-2 text-sm">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          This content can be controlled programmatically using React state.
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>
            Detailed API reference for the Collapsible component.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold">Collapsible</h3>
              <p className="text-sm text-muted-foreground mt-2">The main container component for the collapsible.</p>
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
                    <TableCell className="font-mono text-xs">open</TableCell>
                    <TableCell className="font-mono text-xs">boolean</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>When controlled, sets whether the collapsible is open.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">defaultOpen</TableCell>
                    <TableCell className="font-mono text-xs">boolean</TableCell>
                    <TableCell className="font-mono text-xs">false</TableCell>
                    <TableCell>When uncontrolled, determines the initial open state of the collapsible.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">onOpenChange</TableCell>
                    <TableCell className="font-mono text-xs">(open: boolean) {'>'} void</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>Event handler called when the open state changes.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">disabled</TableCell>
                    <TableCell className="font-mono text-xs">boolean</TableCell>
                    <TableCell className="font-mono text-xs">false</TableCell>
                    <TableCell>When true, prevents the user from interacting with the collapsible.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold">CollapsibleTrigger</h3>
              <p className="text-sm text-muted-foreground mt-2">The button that toggles the collapsible.</p>
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
                    <TableCell>Additional CSS classes to add to the trigger.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold">CollapsibleContent</h3>
              <p className="text-sm text-muted-foreground mt-2">The component that contains the collapsible content.</p>
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
                    <TableCell className="font-mono text-xs">forceMount</TableCell>
                    <TableCell className="font-mono text-xs">boolean</TableCell>
                    <TableCell className="font-mono text-xs">false</TableCell>
                    <TableCell>When true, forces the content to be rendered even when collapsed.</TableCell>
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
            Accessibility considerations for the Collapsible component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Collapsible component follows accessibility best practices:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Uses appropriate ARIA attributes to indicate the expanded/collapsed state</li>
            <li>Maintains proper focus management when toggling the collapsible content</li>
            <li>Allows keyboard navigation with the Tab key for focus and Space/Enter to toggle</li>
            <li>Supports screen readers with appropriate announcements for state changes</li>
            <li>Maintains a proper heading structure when used with semantic heading elements</li>
          </ul>
          <p className="mt-4">
            For best accessibility practices when using collapsibles:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Ensure trigger elements have a clear, descriptive label</li>
            <li>Provide visual indicators of the component's state (such as an arrow icon)</li>
            <li>Don't hide essential information in collapsible sections</li>
            <li>Use collapsibles consistently throughout your interface</li>
            <li>Consider users who navigate via keyboard when designing collapsible interactions</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
} 
