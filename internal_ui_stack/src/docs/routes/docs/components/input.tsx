import { CodeBlock } from '@/lib/components/ui/code-block';
import { Input } from '@/lib/components/ui/input';
import { Button } from '@/lib/components/ui/button';
import { Label } from '@/lib/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/lib/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/lib/components/ui/table';

export default function InputDoc() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Input</h1>
        <p className="text-muted-foreground">
          A basic text input field for collecting user data.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            The Input component provides a way to get user input in a text field.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Inputs are form controls that allow users to enter text information. 
            They're commonly used in forms and dialogs to collect user data.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the Input component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Input component is part of the Aptima UI library. You can import it directly:
          </p>
          <CodeBlock language="typescript" code={`import { Input } from '@aptima/ui';`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            Basic usage examples of the Input component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="w-full max-w-sm">
            <Input placeholder="Enter your name" />
          </div>

          <CodeBlock language="typescript" code={`import { Input } from '@aptima/ui';

export default function InputExample() {
  return <Input placeholder="Enter your name" />;
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Label</CardTitle>
          <CardDescription>
            Inputs should be accompanied by a label for accessibility.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="w-full max-w-sm space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Enter your email" />
          </div>

          <CodeBlock language="typescript" code={`import { Input } from '@aptima/ui';
import { Label } from '@aptima/ui';

export default function InputWithLabelExample() {
  return (
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="Enter your email" />
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Input Types</CardTitle>
          <CardDescription>
            Different input types for different data needs.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="w-full max-w-sm space-y-4">
            <div className="space-y-2">
              <Label htmlFor="text">Text</Label>
              <Input id="text" type="text" placeholder="Text input" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Password input" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email-2">Email</Label>
              <Input id="email-2" type="email" placeholder="Email input" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="number">Number</Label>
              <Input id="number" type="number" placeholder="Number input" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input id="date" type="date" />
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { Input } from '@aptima/ui';
import { Label } from '@aptima/ui';

export default function InputTypesExample() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="text">Text</Label>
        <Input id="text" type="text" placeholder="Text input" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" placeholder="Password input" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" type="email" placeholder="Email input" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="number">Number</Label>
        <Input id="number" type="number" placeholder="Number input" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="date">Date</Label>
        <Input id="date" type="date" />
      </div>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Disabled</CardTitle>
          <CardDescription>
            A disabled input prevents user interaction.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="w-full max-w-sm space-y-2">
            <Label htmlFor="disabled">Disabled</Label>
            <Input id="disabled" disabled placeholder="Disabled input" />
          </div>

          <CodeBlock language="typescript" code={`import { Input } from '@aptima/ui';
import { Label } from '@aptima/ui';

export default function DisabledInputExample() {
  return (
    <div className="space-y-2">
      <Label htmlFor="disabled">Disabled</Label>
      <Input id="disabled" disabled placeholder="Disabled input" />
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Form</CardTitle>
          <CardDescription>
            Using Input components in a form.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              alert('Form submitted!');
            }} 
            className="w-full max-w-sm space-y-4"
          >
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="Enter username" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password-form">Password</Label>
              <Input id="password-form" type="password" placeholder="Enter password" required />
            </div>
            <Button type="submit">Submit</Button>
          </form>

          <CodeBlock language="typescript" code={`import { Input } from '@aptima/ui';
import { Label } from '@aptima/ui';
import { Button } from '@aptima/ui';

export default function InputFormExample() {
  return (
    <form 
      onSubmit={(e) => {
        e.preventDefault();
        alert('Form submitted!');
      }} 
      className="space-y-4"
    >
      <div className="space-y-2">
        <Label htmlFor="username">Username</Label>
        <Input id="username" placeholder="Enter username" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input id="password" type="password" placeholder="Enter password" required />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>File Input</CardTitle>
          <CardDescription>
            Use the Input component for file uploads.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="w-full max-w-sm space-y-2">
            <Label htmlFor="file">Upload file</Label>
            <Input id="file" type="file" />
          </div>

          <CodeBlock language="typescript" code={`import { Input } from '@aptima/ui';
import { Label } from '@aptima/ui';

export default function FileInputExample() {
  return (
    <div className="space-y-2">
      <Label htmlFor="file">Upload file</Label>
      <Input id="file" type="file" />
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>
            Detailed API reference for the Input component.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">Input Props</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                The Input component extends HTML input element props with the following:
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
                    <TableCell className="font-mono">type</TableCell>
                    <TableCell>
                      <code className="text-xs">HTML input types</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">"text"</code>
                    </TableCell>
                    <TableCell>The type of input field.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">disabled</TableCell>
                    <TableCell>
                      <code className="text-xs">boolean</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">false</code>
                    </TableCell>
                    <TableCell>When true, prevents the user from interacting with the input.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">placeholder</TableCell>
                    <TableCell>
                      <code className="text-xs">string</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>Text that appears in the input when it has no value.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">required</TableCell>
                    <TableCell>
                      <code className="text-xs">boolean</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">false</code>
                    </TableCell>
                    <TableCell>When true, indicates the input must have a value for the form to be submitted.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">className</TableCell>
                    <TableCell>
                      <code className="text-xs">string</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>Additional CSS classes to add to the input.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-medium">Examples</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                Here are a few more examples of using the Input component in different ways:
              </p>
              <CodeBlock language="typescript" code={`// Basic input
<Input placeholder="Basic input" />

// With type
<Input type="email" placeholder="Email address" />

// With attributes
<Input 
  type="text"
  placeholder="Search..."
  required
  minLength={3}
  maxLength={50}
/>

// With value and onChange (controlled)
const [value, setValue] = React.useState("")
<Input 
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="Controlled input"
/>

// With validation
<Input 
  type="email"
  placeholder="Email"
  aria-invalid={!isValidEmail}
  aria-describedby="email-error"
/>
{!isValidEmail && (
  <p id="email-error" className="text-red-500">
    Please enter a valid email address
  </p>
)}`} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Accessibility</CardTitle>
          <CardDescription>
            Accessibility considerations for the Input component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            When using the Input component, consider the following accessibility best practices:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Always associate a <code className="text-xs bg-muted px-1 rounded">Label</code> with each input using the <code className="text-xs bg-muted px-1 rounded">htmlFor</code> attribute that matches the input's <code className="text-xs bg-muted px-1 rounded">id</code>.</li>
            <li>Use the appropriate <code className="text-xs bg-muted px-1 rounded">type</code> attribute for the data being collected (e.g., "email" for email addresses, "tel" for phone numbers).</li>
            <li>Include placeholder text for guidance, but don't rely on it exclusively as it disappears when users start typing.</li>
            <li>Add descriptive error messages when validation fails using <code className="text-xs bg-muted px-1 rounded">aria-invalid</code> and <code className="text-xs bg-muted px-1 rounded">aria-describedby</code> attributes.</li>
            <li>For required fields, use the <code className="text-xs bg-muted px-1 rounded">required</code> attribute and indicate visually that the field is required.</li>
            <li>Group related inputs using the <code className="text-xs bg-muted px-1 rounded">fieldset</code> and <code className="text-xs bg-muted px-1 rounded">legend</code> elements when appropriate.</li>
            <li>Ensure there is sufficient color contrast between the input text, placeholder text, and background.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
} 
