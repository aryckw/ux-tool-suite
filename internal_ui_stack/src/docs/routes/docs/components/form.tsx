import { CodeBlock } from '@/lib/components/ui/code-block';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/lib/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/lib/components/ui/table';

export default function FormDoc() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Form</h1>
        <p className="text-muted-foreground">
          Building forms with validation using React Hook Form.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            The Form component provides an accessible and easy-to-use form building experience.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Building forms can be challenging, especially when managing state, validation, and
            error handling. The Form component in Aptima UI simplifies this process by integrating
            with React Hook Form to provide a consistent API for building forms.
          </p>
          <p>
            The component set includes various utilities for creating forms with validation, error messages,
            descriptions, and proper accessibility attributes.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the Form component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Form component is part of the Aptima UI library. You need to install React Hook Form to use it:
          </p>
          <CodeBlock language="typescript" code={`npm install react-hook-form zod @hookform/resolvers`} />
          <p>
            Then you can import the components:
          </p>
          <CodeBlock language="typescript" code={`import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@aptima/ui';`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Basic Usage</CardTitle>
          <CardDescription>
            Basic usage example of the Form component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 rounded-md border p-4">
            <div className="text-sm text-muted-foreground mb-4">
              A basic form with validation using React Hook Form and Zod for schema validation.
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
 
import { Button } from "@aptima/ui";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@aptima/ui";
import { Input } from "@aptima/ui";
 
// Define your form schema using Zod
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});
 
export function ProfileForm() {
  // Initialize form with React Hook Form and Zod resolver
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });
 
  // Form submission handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    // This will be type-safe and validated
    console.log(values);
  }
 
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter username" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>
            Detailed API reference for the Form components.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold">Form</h3>
              <p className="text-sm text-muted-foreground mt-2">The main form container component.</p>
              <Table className="mt-4">
                <TableHeader>
                  <TableRow>
                    <TableHead>Prop</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-mono text-xs">children</TableCell>
                    <TableCell className="font-mono text-xs">React.ReactNode</TableCell>
                    <TableCell>The form content.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">...props</TableCell>
                    <TableCell className="font-mono text-xs">any</TableCell>
                    <TableCell>All props are passed to the form provider.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-semibold">FormField</h3>
              <p className="text-sm text-muted-foreground mt-2">A component to connect form fields to the form state.</p>
              <Table className="mt-4">
                <TableHeader>
                  <TableRow>
                    <TableHead>Prop</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-mono text-xs">control</TableCell>
                    <TableCell className="font-mono text-xs">Control</TableCell>
                    <TableCell>The form control instance from React Hook Form.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">name</TableCell>
                    <TableCell className="font-mono text-xs">string</TableCell>
                    <TableCell>The name of the field.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">render</TableCell>
                    <TableCell className="font-mono text-xs">Function</TableCell>
                    <TableCell>Render function to display the field.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-semibold">FormItem, FormLabel, FormControl, FormDescription, FormMessage</h3>
              <p className="text-sm text-muted-foreground mt-2">Components for structuring form fields.</p>
              <Table className="mt-4">
                <TableHeader>
                  <TableRow>
                    <TableHead>Component</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-mono text-xs">FormItem</TableCell>
                    <TableCell>Container for a form field, label, description, and error message.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">FormLabel</TableCell>
                    <TableCell>Label for a form field.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">FormControl</TableCell>
                    <TableCell>Wrapper for form inputs that provides proper accessibility attributes.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">FormDescription</TableCell>
                    <TableCell>Descriptive text for a form field.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">FormMessage</TableCell>
                    <TableCell>Error message for a form field.</TableCell>
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
            Accessibility considerations for the Form component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Form component follows accessibility best practices:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Proper labeling of form fields</li>
            <li>Error messages are linked to form fields using aria-describedby</li>
            <li>Validation states are communicated via ARIA attributes</li>
            <li>Form controls maintain proper focus management</li>
            <li>Descriptive text is associated with form fields</li>
          </ul>
          <p className="mt-4">
            When implementing forms in your application:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Always provide clear labels for form fields</li>
            <li>Use descriptive error messages that explain how to fix the issue</li>
            <li>Group related form fields using fieldset and legend when appropriate</li>
            <li>Ensure forms are fully keyboard navigable</li>
            <li>Test forms with screen readers to ensure proper announcement of fields and errors</li>
            <li>Consider the tab order of your form to ensure a logical flow</li>
            <li>Provide clear submission feedback and loading states</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
} 
