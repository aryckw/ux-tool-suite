import { CodeBlock } from '@/lib/components/ui/code-block';
import { Button } from '@/lib/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/lib/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/lib/components/ui/table';
import { Plus, Download, Loader } from 'lucide-react';

export default function ButtonDoc() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Button</h1>
        <p className="text-muted-foreground">
          Displays a button or a component that looks like a button.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            The Button component allows users to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Buttons communicate actions that users can take. They are typically placed throughout your UI, in places like dialogs, forms, cards, and toolbars.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the Button component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Button component is part of the Aptima UI library. You can import it directly:
          </p>
          <CodeBlock language="typescript" code={`import { Button } from '@aptima/ui';`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            Basic usage examples of the Button component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap gap-4">
            <Button>Default Button</Button>
          </div>

          <CodeBlock language="typescript" code={`import { Button } from '@aptima/ui';

export default function ButtonExample() {
  return <Button>Default Button</Button>;
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Variants</CardTitle>
          <CardDescription>
            The Button component comes in different variants.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap gap-4">
            <Button variant="default">Default</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
          </div>

          <CodeBlock language="typescript" code={`import { Button } from '@aptima/ui';

export default function ButtonVariantsExample() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button variant="default">Default</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sizes</CardTitle>
          <CardDescription>
            The Button component is available in multiple sizes.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-4">
            <Button size="default">Default</Button>
            <Button size="sm">Small</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">
              <Plus />
            </Button>
            <Button size="icon" className="rounded-full">
              <Plus />
            </Button>
          </div>

          <CodeBlock language="typescript" code={`import { Button } from '@aptima/ui';
import { Plus } from 'lucide-react';

export default function ButtonSizesExample() {
  return (
    <div className="flex items-center gap-4">
      <Button size="default">Default</Button>
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
      <Button size="icon">
        <Plus />
      </Button>
      <Button size="icon" className="rounded-full">
        <Plus />
      </Button>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Icon</CardTitle>
          <CardDescription>
            Use with icons to enhance the visual appearance of the button.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap gap-4">
            <Button>
              <Plus />
              Add New
            </Button>
            <Button variant="outline">
              <Download />
              Download
            </Button>
          </div>

          <CodeBlock language="typescript" code={`import { Button } from '@aptima/ui';
import { Plus, Download } from 'lucide-react';

export default function ButtonWithIconExample() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button>
        <Plus />
        Add New
      </Button>
      <Button variant="outline">
        <Download />
        Download
      </Button>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>States</CardTitle>
          <CardDescription>
            Different states of the Button component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap gap-4">
            <Button>Default</Button>
            <Button disabled>Disabled</Button>
            <Button data-state="loading" aria-disabled="true">
              <Loader className="animate-spin" />
              Loading
            </Button>
          </div>

          <CodeBlock language="typescript" code={`import { Button } from '@aptima/ui';
import { Loader } from 'lucide-react';

// Using disabled state
<Button disabled>Disabled</Button>

// Example of a loading button
<Button data-state="loading" aria-disabled="true">
  <Loader className="animate-spin" />
  Loading
</Button>`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Form</CardTitle>
          <CardDescription>
            Using Button components in a form.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              alert('Form submitted!');
            }}
            className="space-y-4 max-w-sm"
          >
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email</label>
              <input
                id="email"
                type="email"
                className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline">Cancel</Button>
              <Button type="submit">Submit</Button>
            </div>
          </form>

          <CodeBlock language="typescript" code={`import { Button } from '@aptima/ui';

export default function ButtonFormExample() {
  return (
    <form 
      onSubmit={(e) => {
        e.preventDefault();
        alert('Form submitted!');
      }}
      className="space-y-4 max-w-sm"
    >
      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">Email</label>
        <input
          id="email"
          type="email"
          className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          placeholder="Enter your email"
          required
        />
      </div>
      <div className="flex justify-end gap-2">
        <Button type="button" variant="outline">Cancel</Button>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>As Link</CardTitle>
          <CardDescription>
            Use the Button component as a link.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap gap-4">
            <a href="#" onClick={(e) => e.preventDefault()}>
              <Button>Link Button</Button>
            </a>
            <a href="#" onClick={(e) => e.preventDefault()}>
              <Button variant="outline">Outline Link</Button>
            </a>
          </div>

          <CodeBlock language="typescript" code={`import { Button } from '@aptima/ui';

export default function ButtonAsLinkExample() {
  return (
    <div className="flex flex-wrap gap-4">
      <a href="https://example.com">
        <Button>Link Button</Button>
      </a>
      <a href="/docs">
        <Button variant="outline">Outline Link</Button>
      </a>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>
            Detailed API reference for the Button component.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">Button Props</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                The Button component accepts the following props:
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
                      <code className="text-xs">"default" | "destructive" | "outline" | "secondary" | "ghost" | "link"</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">"default"</code>
                    </TableCell>
                    <TableCell>The visual style of the button.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">size</TableCell>
                    <TableCell>
                      <code className="text-xs">"default" | "sm" | "lg" | "icon"</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">"default"</code>
                    </TableCell>
                    <TableCell>The size of the button.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">className</TableCell>
                    <TableCell>
                      <code className="text-xs">string</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>Additional CSS classes to add to the button.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">disabled</TableCell>
                    <TableCell>
                      <code className="text-xs">boolean</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">false</code>
                    </TableCell>
                    <TableCell>When true, disables the button.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">type</TableCell>
                    <TableCell>
                      <code className="text-xs">"button" | "submit" | "reset"</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">"button"</code>
                    </TableCell>
                    <TableCell>The type of button.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-medium">Examples</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                Here are a few more examples of using the Button component in different ways:
              </p>
              <CodeBlock language="typescript" code={`// Simple button
<Button>Click Me</Button>

// Button with variant and size
<Button variant="destructive" size="lg">Delete</Button>

// Button with icon
<Button>
  <Plus />
  Add New
</Button>

// Button as a link
<Button asChild>
  <a href="/dashboard">Go to Dashboard</a>
</Button>

// Submit button in a form
<form onSubmit={handleSubmit}>
  {/* form fields */}
  <Button type="submit">Submit</Button>
</form>`} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Accessibility</CardTitle>
          <CardDescription>
            Accessibility considerations for the Button component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            When using the Button component, consider the following accessibility best practices:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Always provide a descriptive label that clearly indicates the button's action.</li>
            <li>Use the appropriate button type (<code className="text-xs bg-muted px-1 rounded">button</code>, <code className="text-xs bg-muted px-1 rounded">submit</code>, or <code className="text-xs bg-muted px-1 rounded">reset</code>) to match the button's function, especially in forms.</li>
            <li>Add <code className="text-xs bg-muted px-1 rounded">aria-label</code> or <code className="text-xs bg-muted px-1 rounded">aria-labelledby</code> for icon-only buttons to provide a text alternative for screen readers.</li>
            <li>When using buttons to trigger more complex interactions, consider using <code className="text-xs bg-muted px-1 rounded">aria-expanded</code>, <code className="text-xs bg-muted px-1 rounded">aria-pressed</code>, or <code className="text-xs bg-muted px-1 rounded">aria-haspopup</code> to convey the button's state.</li>
            <li>Ensure there is sufficient color contrast between the button text and its background.</li>
            <li>Use the <code className="text-xs bg-muted px-1 rounded">disabled</code> attribute when a button is not actionable, but provide an explanation to users why it's disabled when necessary.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
} 
 