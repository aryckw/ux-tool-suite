import { CodeBlock } from '@/lib/components/ui/code-block';
import { RadioGroup, RadioGroupItem } from '@/lib/components/ui/radio-group';
import { Label } from '@/lib/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/lib/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/lib/components/ui/table';

export default function RadioGroupDoc() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Radio Group</h1>
        <p className="text-muted-foreground">
          A set of checkable buttons where only one can be checked at a time.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            The Radio Group component allows users to select a single option from a set of choices.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Radio Groups are useful when users need to make a single selection from a list of mutually exclusive options.
            They're commonly used in forms, settings, and configuration interfaces where only one choice is allowed.
          </p>
          <p>
            The Aptima UI Radio Group component is built on top of <code>@radix-ui/react-radio-group</code>, ensuring
            proper accessibility, keyboard navigation, and form integration.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the Radio Group component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Radio Group component is part of the Aptima UI library. You can import it directly:
          </p>
          <CodeBlock language="typescript" code={`import { RadioGroup, RadioGroupItem } from '@aptima/ui';`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            Basic usage example of the Radio Group component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 max-w-md">
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Option One</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Option Two</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-three" id="option-three" />
                <Label htmlFor="option-three">Option Three</Label>
              </div>
            </RadioGroup>
          </div>

          <CodeBlock language="typescript" code={`import { RadioGroup, RadioGroupItem } from '@aptima/ui';
import { Label } from '@aptima/ui';

export default function RadioGroupExample() {
  return (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="option-three" />
        <Label htmlFor="option-three">Option Three</Label>
      </div>
    </RadioGroup>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Controlled Example</CardTitle>
          <CardDescription>
            Using Radio Group with controlled state.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="rounded-md border p-4">
              <div className="text-sm text-muted-foreground mb-4">
                This example demonstrates a controlled radio group that displays the current selection.
              </div>
              <div className="space-y-2 max-w-md">
                <RadioGroup defaultValue="default" className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="default" id="theme-default" />
                    <Label htmlFor="theme-default">Default Theme</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="light" id="theme-light" />
                    <Label htmlFor="theme-light">Light Theme</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="dark" id="theme-dark" />
                    <Label htmlFor="theme-dark">Dark Theme</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { useState } from 'react';
import { RadioGroup, RadioGroupItem } from '@aptima/ui';
import { Label } from '@aptima/ui';

export default function ControlledRadioGroup() {
  const [theme, setTheme] = useState("default");

  return (
    <div>
      <div className="mb-4">
        Selected theme: <strong>{theme}</strong>
      </div>
      <RadioGroup value={theme} onValueChange={setTheme} className="space-y-3">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="default" id="theme-default" />
          <Label htmlFor="theme-default">Default Theme</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="light" id="theme-light" />
          <Label htmlFor="theme-light">Light Theme</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="dark" id="theme-dark" />
          <Label htmlFor="theme-dark">Dark Theme</Label>
        </div>
      </RadioGroup>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Disabled Items</CardTitle>
          <CardDescription>
            Disabling specific radio items or the entire group.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 max-w-md">
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="disabled-one" />
                <Label htmlFor="disabled-one">Available Option</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="disabled-two" disabled />
                <Label htmlFor="disabled-two" className="text-muted-foreground">Disabled Option</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-three" id="disabled-three" />
                <Label htmlFor="disabled-three">Available Option</Label>
              </div>
            </RadioGroup>
          </div>

          <CodeBlock language="typescript" code={`import { RadioGroup, RadioGroupItem } from '@aptima/ui';
import { Label } from '@aptima/ui';

export default function DisabledRadioExample() {
  return (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="disabled-one" />
        <Label htmlFor="disabled-one">Available Option</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="disabled-two" disabled />
        <Label htmlFor="disabled-two" className="text-muted-foreground">Disabled Option</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-three" id="disabled-three" />
        <Label htmlFor="disabled-three">Available Option</Label>
      </div>
    </RadioGroup>
  );
}

// For disabling the entire group:
function DisabledRadioGroup() {
  return (
    <RadioGroup defaultValue="option-one" disabled>
      {/* Radio items here */}
    </RadioGroup>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>
            Detailed API reference for the Radio Group component.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold">RadioGroup</h3>
              <p className="text-sm text-muted-foreground mt-2">The root container for a set of radio items.</p>
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
                    <TableCell className="font-mono text-xs">value</TableCell>
                    <TableCell className="font-mono text-xs">string</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>The controlled value of the radio item to check. Should be used with onValueChange.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">defaultValue</TableCell>
                    <TableCell className="font-mono text-xs">string</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>The value of the radio item that should be checked when initially rendered.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">onValueChange</TableCell>
                    <TableCell className="font-mono text-xs">(value: string) =&gt; void</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>Event handler called when the value changes.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">disabled</TableCell>
                    <TableCell className="font-mono text-xs">boolean</TableCell>
                    <TableCell className="font-mono text-xs">false</TableCell>
                    <TableCell>When true, prevents the user from interacting with the radio group.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">name</TableCell>
                    <TableCell className="font-mono text-xs">string</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>The name of the radio group. Submitted with its owning form as part of a name/value pair.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">required</TableCell>
                    <TableCell className="font-mono text-xs">boolean</TableCell>
                    <TableCell className="font-mono text-xs">false</TableCell>
                    <TableCell>When true, makes the radio group a required field in a form.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold">RadioGroupItem</h3>
              <p className="text-sm text-muted-foreground mt-2">An individual radio item within a radio group.</p>
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
                    <TableCell className="font-mono text-xs">value</TableCell>
                    <TableCell className="font-mono text-xs">string</TableCell>
                    <TableCell className="font-mono text-xs">required</TableCell>
                    <TableCell>The unique value of the radio item. This is required and must be unique within the radio group.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">disabled</TableCell>
                    <TableCell className="font-mono text-xs">boolean</TableCell>
                    <TableCell className="font-mono text-xs">false</TableCell>
                    <TableCell>When true, prevents the user from interacting with the radio item.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">required</TableCell>
                    <TableCell className="font-mono text-xs">boolean</TableCell>
                    <TableCell className="font-mono text-xs">false</TableCell>
                    <TableCell>When true, indicates that the user must check this radio item before the form can be submitted.</TableCell>
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
            Accessibility considerations for the Radio Group component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Radio Group component follows accessibility best practices:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Uses <code>role="radiogroup"</code> for the container and <code>role="radio"</code> for each radio item</li>
            <li>Manages focus appropriately when navigating with arrow keys, Tab, and Shift+Tab</li>
            <li>Supports keyboard interaction: users can select options with Space or Enter keys</li>
            <li>Arrow keys allow navigation between radio items within a group</li>
            <li>Proper labeling ensures screen readers announce each option correctly</li>
            <li>Visual state indicators (checked, unchecked, disabled) have sufficient color contrast</li>
          </ul>
          <p className="mt-4">
            For best accessibility practices when using radio groups:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Always associate labels with radio items using the <code>htmlFor</code> attribute</li>
            <li>Provide clear and descriptive labels for each option</li>
            <li>Consider using descriptive text to explain the purpose of the radio group when needed</li>
            <li>Ensure the selected state is communicated through multiple means (not just color)</li>
            <li>Group related radio options together under a descriptive heading or fieldset</li>
            <li>For required selections, indicate this clearly in the associated label</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
} 
