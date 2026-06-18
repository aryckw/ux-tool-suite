import { CodeBlock } from '@/lib/components/ui/code-block';
import { Label } from '@/lib/components/ui/label';
import { Input } from '@/lib/components/ui/input';
import { Checkbox } from '@/lib/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/lib/components/ui/radio-group';
import { Switch } from '@/lib/components/ui/switch';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/lib/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/lib/components/ui/table';

export default function LabelDoc() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Label</h1>
        <p className="text-muted-foreground">
          An accessible label component for form controls.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            The Label component provides an accessible text label for form controls.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Labels are essential for accessibility, providing a text description for form elements. They help users 
            understand what information is expected in a form field and improve the clickable area for form inputs.
          </p>
          <p>
            The Aptima UI Label component is built on top of <code>@radix-ui/react-label</code>, ensuring proper 
            accessibility and native integration with other form components.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the Label component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Label component is part of the Aptima UI library. You can import it directly:
          </p>
          <CodeBlock language="typescript" code={`import { Label } from '@aptima/ui';`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            Basic usage example of the Label component with a text input.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col space-y-4 max-w-sm">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Enter your email" />
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { Label } from '@aptima/ui';
import { Input } from '@aptima/ui';

export default function LabelExample() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Enter your email" />
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Checkbox</CardTitle>
          <CardDescription>
            Using Label with a checkbox input.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col space-y-4 max-w-sm">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Accept terms and conditions</Label>
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { Label } from '@aptima/ui';
import { Checkbox } from '@aptima/ui';

export default function LabelWithCheckbox() {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms">Accept terms and conditions</Label>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Radio Group</CardTitle>
          <CardDescription>
            Using Label with radio button inputs.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col space-y-4 max-w-sm">
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Option One</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Option Two</Label>
              </div>
            </RadioGroup>
          </div>

          <CodeBlock language="typescript" code={`import { Label } from '@aptima/ui';
import { RadioGroup, RadioGroupItem } from '@aptima/ui';

export default function LabelWithRadioGroup() {
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
    </RadioGroup>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Switch</CardTitle>
          <CardDescription>
            Using Label with a switch component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col space-y-4 max-w-sm">
            <div className="flex items-center space-x-2">
              <Switch id="airplane-mode" />
              <Label htmlFor="airplane-mode">Airplane Mode</Label>
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { Label } from '@aptima/ui';
import { Switch } from '@aptima/ui';

export default function LabelWithSwitch() {
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
          <CardTitle>Required Label</CardTitle>
          <CardDescription>
            Indicating a required form field with a label.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col space-y-4 max-w-sm">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="username" className="after:content-['*'] after:ml-0.5 after:text-red-500">
                Username
              </Label>
              <Input id="username" placeholder="Enter your username" />
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { Label } from '@aptima/ui';
import { Input } from '@aptima/ui';

export default function RequiredLabel() {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label 
        htmlFor="username" 
        className="after:content-['*'] after:ml-0.5 after:text-red-500"
      >
        Username
      </Label>
      <Input id="username" placeholder="Enter your username" />
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>
            Detailed API reference for the Label component.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold">Label</h3>
              <p className="text-sm text-muted-foreground mt-2">The root label component.</p>
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
                    <TableCell className="font-mono text-xs">htmlFor</TableCell>
                    <TableCell className="font-mono text-xs">string</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>The ID of the element the label is associated with.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">className</TableCell>
                    <TableCell className="font-mono text-xs">string</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>Additional CSS class names to apply to the label.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <p className="text-sm text-muted-foreground mt-4">
                The Label component extends the HTML <code>&lt;label&gt;</code> element and accepts all its props.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Accessibility</CardTitle>
          <CardDescription>
            Accessibility considerations for the Label component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Label component follows accessibility best practices:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Uses the native HTML <code>&lt;label&gt;</code> element to ensure proper form associations</li>
            <li>When paired with an input using the <code>htmlFor</code> attribute, clicking the label focuses the associated input</li>
            <li>Improves usability by providing a larger clickable area for form controls</li>
            <li>Helps screen readers announce form controls properly by providing descriptive text</li>
            <li>Maintains visual association between label and input for all users</li>
            <li>Automatically handles disabled states when the associated form control is disabled</li>
          </ul>
          <p className="mt-4">
            For best accessibility practices when using labels:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Always associate labels with their corresponding form controls using the <code>htmlFor</code> attribute</li>
            <li>Use clear, concise text that describes what information is expected</li>
            <li>Position labels consistently (e.g., above inputs or to their left)</li>
            <li>If a form field is required, indicate this clearly within the label text or using visual indicators</li>
            <li>Avoid using placeholder text as a replacement for labels, as it disappears when users start typing</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
} 
