import { CodeBlock } from '@/lib/components/ui/code-block';
import React from 'react';
import { Switch } from '@/lib/components/ui/switch';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/lib/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/lib/components/ui/table';
import { Label } from '@/lib/components/ui/label';

export default function SwitchDoc() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Switch</h1>
        <p className="text-muted-foreground">
          A control that allows users to toggle between checked and not checked.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            The Switch component is used for toggling a value between on and off states.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Switches are a visual toggle between two mutually exclusive states — on and off.
            They are commonly used for adjusting settings, preferences, or other binary options.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the Switch component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Switch component is part of the Aptima UI library. You can import it directly:
          </p>
          <CodeBlock language="typescript" code={`import { Switch } from '@aptima/ui';`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            Basic usage examples of the Switch component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">Airplane Mode</Label>
          </div>

          <CodeBlock language="typescript" code={`import { Switch } from '@aptima/ui';
import { Label } from '@aptima/ui';

export default function SwitchExample() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Controlled</CardTitle>
          <CardDescription>
            Control the state of the Switch component using React state.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="w-full max-w-md">
            <ControlledSwitchExample />
          </div>

          <CodeBlock language="jsx" code={`import React from 'react';
import { Switch } from '@aptima/ui';
import { Label } from '@aptima/ui';

export default function ControlledSwitchExample() {
  const [checked, setChecked] = React.useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center space-x-2">
        <Switch
          id="notifications"
          checked={checked}
          onCheckedChange={setChecked}
        />
        <Label htmlFor="notifications">
          Notifications: {checked ? 'On' : 'Off'}
        </Label>
      </div>
      <p className="text-sm text-muted-foreground">
        Switch is {checked ? 'checked' : 'unchecked'}
      </p>
      <button
        onClick={() => setChecked(!checked)}
        className="w-fit px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm"
      >
        Toggle from outside
      </button>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Disabled</CardTitle>
          <CardDescription>
            A disabled switch prevents user interaction.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="w-full max-w-md space-y-4">
            <div className="flex items-center space-x-2">
              <Switch id="disabled-unchecked" disabled />
              <Label htmlFor="disabled-unchecked" className="text-muted-foreground">
                Disabled (Unchecked)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Switch id="disabled-checked" disabled defaultChecked />
              <Label htmlFor="disabled-checked" className="text-muted-foreground">
                Disabled (Checked)
              </Label>
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { Switch } from '@aptima/ui';
import { Label } from '@aptima/ui';

export default function DisabledSwitchExample() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Switch id="disabled-unchecked" disabled />
        <Label htmlFor="disabled-unchecked" className="text-muted-foreground">
          Disabled (Unchecked)
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="disabled-checked" disabled defaultChecked />
        <Label htmlFor="disabled-checked" className="text-muted-foreground">
          Disabled (Checked)
        </Label>
      </div>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Form</CardTitle>
          <CardDescription>
            Use Switch components in a form.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="w-full max-w-md">
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const marketing = formData.get("marketing") === "on";
              alert(`Marketing preference: ${marketing ? "Opted in" : "Opted out"}`);
            }} className="space-y-6">
              <div>
                <div className="flex items-center space-x-2">
                  <Switch id="marketing" name="marketing" />
                  <Label htmlFor="marketing">Receive marketing emails</Label>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  Get notified about new products and features.
                </p>
              </div>
              <button type="submit" className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
                Submit
              </button>
            </form>
          </div>

          <CodeBlock language="typescript" code={`import { Switch } from '@aptima/ui';
import { Label } from '@aptima/ui';

export default function SwitchFormExample() {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const marketing = formData.get("marketing") === "on";
      alert(\`Marketing preference: \${marketing ? "Opted in" : "Opted out"}\`);
    }} className="space-y-6">
      <div>
        <div className="flex items-center space-x-2">
          <Switch id="marketing" name="marketing" />
          <Label htmlFor="marketing">Receive marketing emails</Label>
        </div>
        <p className="text-sm text-muted-foreground mt-1">
          Get notified about new products and features.
        </p>
      </div>
      <button type="submit" className="px-4 py-2 bg-primary text-primary-foreground rounded-md">
        Submit
      </button>
    </form>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>
            Detailed API reference for the Switch component.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">Switch Props</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                The Switch component extends the HTML button element with the following props:
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
                    <TableCell className="font-mono">checked</TableCell>
                    <TableCell>
                      <code className="text-xs">boolean</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>The controlled checked state of the switch.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">defaultChecked</TableCell>
                    <TableCell>
                      <code className="text-xs">boolean</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">false</code>
                    </TableCell>
                    <TableCell>The default checked state when initially rendered.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">onCheckedChange</TableCell>
                    <TableCell>
                      <code className="text-xs">(checked: boolean) {'=>'} void</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>Event handler called when the checked state changes.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">disabled</TableCell>
                    <TableCell>
                      <code className="text-xs">boolean</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">false</code>
                    </TableCell>
                    <TableCell>When true, prevents the user from interacting with the switch.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">required</TableCell>
                    <TableCell>
                      <code className="text-xs">boolean</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">false</code>
                    </TableCell>
                    <TableCell>When true, indicates the user must check the switch before the form can be submitted.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">name</TableCell>
                    <TableCell>
                      <code className="text-xs">string</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>The name of the switch when used in a form.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">className</TableCell>
                    <TableCell>
                      <code className="text-xs">string</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>Additional CSS classes to add to the switch.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-medium">Examples</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                Here are a few more examples of using the Switch component in different ways:
              </p>
              <CodeBlock language="typescript" code={`// Basic usage
<Switch />

// Controlled switch
const [checked, setChecked] = React.useState(false)
<Switch checked={checked} onCheckedChange={setChecked} />

// With label
<div className="flex items-center space-x-2">
  <Switch id="dark-mode" />
  <Label htmlFor="dark-mode">Dark Mode</Label>
</div>

// In a form
<form>
  <div className="flex items-center space-x-2">
    <Switch id="terms" name="terms" required />
    <Label htmlFor="terms">Accept terms and conditions</Label>
  </div>
  <button type="submit">Submit</button>
</form>`} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Accessibility</CardTitle>
          <CardDescription>
            The Switch component follows WAI-ARIA standards for accessibility.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Switch component is built on top of the Radix UI Switch primitive, which provides
            the following accessibility features:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Built with a native <code className="text-xs bg-muted px-1 rounded">button</code> element.</li>
            <li>Keyboard navigation support via the <code className="text-xs bg-muted px-1 rounded">Space</code> key.</li>
            <li>Proper ARIA attributes including <code className="text-xs bg-muted px-1 rounded">aria-pressed</code> for toggle state.</li>
            <li>When used with forms, integrates with form validation and submission.</li>
            <li>For best accessibility, always use a <code className="text-xs bg-muted px-1 rounded">Label</code> component with the Switch and connect them using the <code className="text-xs bg-muted px-1 rounded">htmlFor</code> prop.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

// Example component for the controlled switch demo
function ControlledSwitchExample() {
  const [checked, setChecked] = React.useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center space-x-2">
        <Switch
          id="notifications"
          checked={checked}
          onCheckedChange={setChecked}
        />
        <Label htmlFor="notifications">
          Notifications: {checked ? 'On' : 'Off'}
        </Label>
      </div>
      <p className="text-sm text-muted-foreground">
        Switch is {checked ? 'checked' : 'unchecked'}
      </p>
      <button
        onClick={() => setChecked(!checked)}
        className="w-fit px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm"
      >
        Toggle from outside
      </button>
    </div>
  );
} 
 