import { CodeBlock } from '@/lib/components/ui/code-block';
import { Textarea } from '@/lib/components/ui/textarea';
import { Label } from '@/lib/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/lib/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/lib/components/ui/table';

export default function TextareaDoc() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Textarea</h1>
        <p className="text-muted-foreground">
          A multi-line text input field.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            The Textarea component allows users to enter and edit multi-line text.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Textareas are used when users need to enter longer, free-form text that may span multiple
            lines, such as comments, descriptions, or messages. They provide more space for text entry
            compared to regular input fields.
          </p>
          <p>
            The Aptima UI Textarea component is built on the native HTML <code>&lt;textarea&gt;</code> element
            with consistent styling and accessibility features.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the Textarea component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Textarea component is part of the Aptima UI library. You can import it directly:
          </p>
          <CodeBlock language="typescript" code={`import { Textarea } from '@aptima/ui';`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            Basic usage example of the Textarea component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Your message</Label>
              <Textarea
                id="message"
                placeholder="Type your message here."
                className="min-h-32"
              />
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { Textarea } from '@aptima/ui';
import { Label } from '@aptima/ui';

export default function TextareaExample() {
  return (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea
        id="message"
        placeholder="Type your message here."
        className="min-h-32"
      />
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Default Value</CardTitle>
          <CardDescription>
            Using the Textarea component with a default value.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="grid w-full gap-1.5">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                defaultValue="This textarea comes pre-filled with some default text that the user can edit or expand upon."
                className="min-h-32"
              />
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { Textarea } from '@aptima/ui';
import { Label } from '@aptima/ui';

export default function DefaultValueTextareaExample() {
  return (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="description">Description</Label>
      <Textarea
        id="description"
        defaultValue="This textarea comes pre-filled with some default text that the user can edit or expand upon."
        className="min-h-32"
      />
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Disabled State</CardTitle>
          <CardDescription>
            Showing a disabled Textarea component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="grid w-full gap-1.5">
              <Label htmlFor="disabled-textarea" className="text-muted-foreground">
                Disabled textarea
              </Label>
              <Textarea
                id="disabled-textarea"
                placeholder="You cannot edit this textarea."
                disabled
              />
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { Textarea } from '@aptima/ui';
import { Label } from '@aptima/ui';

export default function DisabledTextareaExample() {
  return (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="disabled-textarea" className="text-muted-foreground">
        Disabled textarea
      </Label>
      <Textarea
        id="disabled-textarea"
        placeholder="You cannot edit this textarea."
        disabled
      />
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Form Validation</CardTitle>
          <CardDescription>
            Using the Textarea with form validation.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="grid w-full gap-1.5">
              <div className="flex items-center justify-between">
                <Label htmlFor="feedback" className="text-sm font-medium">
                  Feedback
                </Label>
                <span className="text-xs text-muted-foreground">Max 200 characters</span>
              </div>
              <Textarea
                id="feedback"
                placeholder="Please provide your feedback..."
                className="min-h-32 aria-[invalid=true]:border-destructive"
                aria-invalid={true}
              />
              <p className="text-sm font-medium text-destructive">Please enter your feedback.</p>
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { useState } from 'react';
import { Textarea } from '@aptima/ui';
import { Label } from '@aptima/ui';

export default function ValidatedTextareaExample() {
  const [value, setValue] = useState('');
  const [error, setError] = useState(false);
  
  const handleChange = (e) => {
    setValue(e.target.value);
    setError(e.target.value.length === 0);
  };
  
  return (
    <div className="grid w-full gap-1.5">
      <div className="flex items-center justify-between">
        <Label htmlFor="feedback" className="text-sm font-medium">
          Feedback
        </Label>
        <span className="text-xs text-muted-foreground">Max 200 characters</span>
      </div>
      <Textarea
        id="feedback"
        placeholder="Please provide your feedback..."
        value={value}
        onChange={handleChange}
        className="min-h-32 aria-[invalid=true]:border-destructive"
        aria-invalid={error}
        maxLength={200}
      />
      {error && (
        <p className="text-sm font-medium text-destructive">
          Please enter your feedback.
        </p>
      )}
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>
            Detailed API reference for the Textarea component.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold">Textarea</h3>
              <p className="text-sm text-muted-foreground mt-2">The Textarea component extends the native HTML textarea element.</p>
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
                    <TableCell>Additional CSS class names to apply to the textarea.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">disabled</TableCell>
                    <TableCell className="font-mono text-xs">boolean</TableCell>
                    <TableCell className="font-mono text-xs">false</TableCell>
                    <TableCell>When true, prevents the user from interacting with the textarea.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">placeholder</TableCell>
                    <TableCell className="font-mono text-xs">string</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>Text to display when the textarea is empty.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">required</TableCell>
                    <TableCell className="font-mono text-xs">boolean</TableCell>
                    <TableCell className="font-mono text-xs">false</TableCell>
                    <TableCell>When true, indicates that the user must fill in a value.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">readOnly</TableCell>
                    <TableCell className="font-mono text-xs">boolean</TableCell>
                    <TableCell className="font-mono text-xs">false</TableCell>
                    <TableCell>When true, the textarea value cannot be edited.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">maxLength</TableCell>
                    <TableCell className="font-mono text-xs">number</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>The maximum number of characters allowed in the textarea.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <p className="text-sm text-muted-foreground mt-4">
                The Textarea component also accepts all standard HTML textarea attributes.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Accessibility</CardTitle>
          <CardDescription>
            Accessibility considerations for the Textarea component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Textarea component follows accessibility best practices:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Always pair a textarea with a descriptive label using the <code>htmlFor</code> attribute</li>
            <li>Includes proper ARIA states for validation and disabled states</li>
            <li>Maintains native keyboard navigation and interaction patterns</li>
            <li>Preserves browser-native resize functionality for textareas</li>
            <li>Supports all standard HTML textarea attributes for accessibility</li>
            <li>Uses appropriate color contrast for the textarea and its text</li>
          </ul>
          <p className="mt-4">
            When implementing textareas in your application:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide clear instructions for the expected format and content</li>
            <li>Use placeholder text as supplementary information, not as a replacement for labels</li>
            <li>Indicate when a field is required</li>
            <li>Provide clear, accessible error messages for validation errors</li>
            <li>Consider providing character count feedback for textareas with length limits</li>
            <li>Ensure the textarea is appropriately sized for its intended content</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
} 
