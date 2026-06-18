import { CodeBlock } from '@/lib/components/ui/code-block';
import { Toggle } from '@/lib/components/ui/toggle';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/lib/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/lib/components/ui/table';
import { ArrowUp, PlusCircle, Bold, Italic } from 'lucide-react';

export default function ToggleDoc() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Toggle</h1>
        <p className="text-muted-foreground">
          A two-state button that can be either on or off.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            The Toggle component allows users to switch between two states.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Toggles are useful for binary actions that can be toggled on or off, such as applying a filter, enabling a feature, or selecting an option.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the Toggle component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Toggle component is part of the Aptima UI library. You can import it directly:
          </p>
          <CodeBlock language="typescript" code={`import { Toggle } from '@aptima/ui';`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            Basic usage examples of the Toggle component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap gap-4">
            <Toggle>Toggle</Toggle>
          </div>

          <CodeBlock language="typescript" code={`import { Toggle } from '@aptima/ui';

export default function ToggleExample() {
  return <Toggle>Toggle</Toggle>;
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Variants</CardTitle>
          <CardDescription>
            The Toggle component comes in different variants.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap gap-4">
            <Toggle variant="default">Default</Toggle>
            <Toggle variant="outline">Outline</Toggle>
          </div>

          <CodeBlock language="typescript" code={`import { Toggle } from '@aptima/ui';

export default function ToggleVariantsExample() {
  return (
    <div className="flex flex-wrap gap-4">
      <Toggle variant="default">Default</Toggle>
      <Toggle variant="outline">Outline</Toggle>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sizes</CardTitle>
          <CardDescription>
            The Toggle component is available in multiple sizes.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-4">
            <Toggle size="sm">Small</Toggle>
            <Toggle size="default">Default</Toggle>
            <Toggle size="lg">Large</Toggle>
          </div>

          <CodeBlock language="typescript" code={`import { Toggle } from '@aptima/ui';

export default function ToggleSizesExample() {
  return (
    <div className="flex items-center gap-4">
      <Toggle size="sm">Small</Toggle>
      <Toggle size="default">Default</Toggle>
      <Toggle size="lg">Large</Toggle>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Icon</CardTitle>
          <CardDescription>
            Use with icons to enhance the visual appearance of the toggle.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap gap-4">
            <Toggle>
              <ArrowUp />
              <span className="sr-only">Toggle</span>
            </Toggle>

            <Toggle>
              <PlusCircle />
              Add Item
            </Toggle>
          </div>

          <CodeBlock language="typescript" code={`import { Toggle } from '@aptima/ui';
import { ArrowUp, PlusCircle } from 'lucide-react';

export default function ToggleWithIconExample() {
  return (
    <div className="flex flex-wrap gap-4">
      <Toggle>
        <ArrowUp />
        <span className="sr-only">Toggle</span>
      </Toggle>
      
      <Toggle>
        <PlusCircle />
        Add Item
      </Toggle>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Disabled</CardTitle>
          <CardDescription>
            A disabled toggle prevents user interaction.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap gap-4">
            <Toggle disabled>Disabled</Toggle>
            <Toggle disabled pressed>Disabled On</Toggle>
          </div>

          <CodeBlock language="typescript" code={`import { Toggle } from '@aptima/ui';

export default function DisabledToggleExample() {
  return (
    <div className="flex flex-wrap gap-4">
      <Toggle disabled>Disabled</Toggle>
      <Toggle disabled pressed>Disabled On</Toggle>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Controlled</CardTitle>
          <CardDescription>
            Using the Toggle component as a controlled component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm text-muted-foreground">
            A controlled toggle component maintains and updates its state through React's state management.
          </p>
          <CodeBlock language="jsx" code={`import React from 'react';
import { Toggle } from '@aptima/ui';

export default function ControlledToggleExample() {
  const [pressed, setPressed] = React.useState(false);
  
  return (
    <div className="space-y-4">
      <Toggle 
        pressed={pressed} 
        onPressedChange={setPressed}
      >
        {pressed ? 'On' : 'Off'}
      </Toggle>
      <p>Toggle is {pressed ? 'on' : 'off'}</p>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Groups</CardTitle>
          <CardDescription>
            Multiple toggles can be grouped together for related options.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm text-muted-foreground">
            While you can manually group Toggle components, it's recommended to use the ToggleGroup component for proper accessibility and state management.
          </p>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Text formatting">
            <Toggle aria-label="Bold">
              <Bold />
            </Toggle>
            <Toggle aria-label="Italic">
              <Italic />
            </Toggle>
          </div>
          <CodeBlock language="typescript" code={`import { Toggle } from '@aptima/ui';
import { Bold, Italic } from 'lucide-react';

export default function ToggleGroupExample() {
  return (
    <div role="group" aria-label="Text formatting" className="flex flex-wrap gap-2">
      <Toggle aria-label="Bold">
        <Bold />
      </Toggle>
      <Toggle aria-label="Italic">
        <Italic />
      </Toggle>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>
            Detailed API reference for the Toggle component.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">Toggle Props</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                The Toggle component accepts the following props:
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
                    <TableCell className="font-mono">variant</TableCell>
                    <TableCell>
                      <code className="text-xs">"default" | "outline"</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">"default"</code>
                    </TableCell>
                    <TableCell>The visual style of the toggle.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">size</TableCell>
                    <TableCell>
                      <code className="text-xs">"default" | "sm" | "lg"</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">"default"</code>
                    </TableCell>
                    <TableCell>The size of the toggle.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">pressed</TableCell>
                    <TableCell>
                      <code className="text-xs">boolean</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">false</code>
                    </TableCell>
                    <TableCell>The controlled pressed state of the toggle.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">defaultPressed</TableCell>
                    <TableCell>
                      <code className="text-xs">boolean</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">false</code>
                    </TableCell>
                    <TableCell>The default pressed state when initially rendered.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">onPressedChange</TableCell>
                    <TableCell>
                      <code className="text-xs">function</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>Event handler called when the pressed state changes.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">disabled</TableCell>
                    <TableCell>
                      <code className="text-xs">boolean</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">false</code>
                    </TableCell>
                    <TableCell>When true, prevents the user from interacting with the toggle.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">className</TableCell>
                    <TableCell>
                      <code className="text-xs">string</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>Additional CSS classes to add to the toggle.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-medium">Examples</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                Here are a few more examples of using the Toggle component in different ways:
              </p>
              <CodeBlock language="typescript" code={`// Simple toggle
<Toggle>Toggle</Toggle>

// Toggle with variant and size
<Toggle variant="outline" size="lg">Large Outline</Toggle>

// Toggle with initial state
<Toggle defaultPressed>On by default</Toggle>

// Toggle with icon
<Toggle aria-label="Settings">
  <Settings size={16} />
</Toggle>

// Controlled toggle
const [pressed, setPressed] = React.useState(false);

<Toggle 
  pressed={pressed} 
  onPressedChange={setPressed}
>
  {pressed ? 'Active' : 'Inactive'}
</Toggle>`} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Accessibility</CardTitle>
          <CardDescription>
            Accessibility considerations for the Toggle component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            When using the Toggle component, consider the following accessibility best practices:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Always provide a clear label for the toggle that indicates what feature or option is being toggled.</li>
            <li>If your toggle has no visible text (icon only), use <code className="text-xs bg-muted px-1 rounded">aria-label</code> to provide an accessible label.</li>
            <li>Consider using <code className="text-xs bg-muted px-1 rounded">aria-pressed</code> to communicate the toggle state to screen readers (the Toggle component handles this automatically).</li>
            <li>When grouping multiple toggles, use <code className="text-xs bg-muted px-1 rounded">role="group"</code> and <code className="text-xs bg-muted px-1 rounded">aria-label</code> on the container to describe the group.</li>
            <li>Ensure there is sufficient color contrast between the toggle text, background, and the active/inactive states.</li>
            <li>Consider providing additional visual indicators beyond just color to show the toggled state (such as an icon change).</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
} 
