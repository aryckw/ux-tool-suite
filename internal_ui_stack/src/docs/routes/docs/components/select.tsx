import { CodeBlock } from '@/lib/components/ui/code-block';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectSeparator, SelectTrigger, SelectValue } from '@/lib/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/lib/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/lib/components/ui/table';
import { Button } from '@/lib/components/ui/button';
import { Label } from '@/lib/components/ui/label';

export default function SelectDoc() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Select</h1>
        <p className="text-muted-foreground">
          Displays a dropdown list of options for the user to select from.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            The Select component allows users to choose a single option from a dropdown list.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Select component is useful when you have a list of options and want to save space by showing only one option at a time. It provides a dropdown menu that allows users to select from a list of choices.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the Select component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Select component is part of the Aptima UI library. You can import it directly:
          </p>
          <CodeBlock language="typescript" code={`import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@aptima/ui';`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            Basic usage examples of the Select component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="w-full max-w-sm">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
                <SelectItem value="grape">Grape</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <CodeBlock language="typescript" code={`import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@aptima/ui';

export default function SelectExample() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="apple">Apple</SelectItem>
        <SelectItem value="banana">Banana</SelectItem>
        <SelectItem value="orange">Orange</SelectItem>
        <SelectItem value="grape">Grape</SelectItem>
      </SelectContent>
    </Select>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Label</CardTitle>
          <CardDescription>
            Select components should be accompanied by a label for accessibility.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="w-full max-w-sm space-y-2">
            <Label htmlFor="fruit">Favorite Fruit</Label>
            <Select>
              <SelectTrigger id="fruit">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
                <SelectItem value="grape">Grape</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <CodeBlock language="typescript" code={`import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@aptima/ui';
import { Label } from '@aptima/ui';

export default function SelectWithLabelExample() {
  return (
    <div className="space-y-2">
      <Label htmlFor="fruit">Favorite Fruit</Label>
      <Select>
        <SelectTrigger id="fruit">
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
          <SelectItem value="grape">Grape</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sizing</CardTitle>
          <CardDescription>
            The Select component is available in different sizes.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="w-full max-w-sm space-y-4">
            <div className="space-y-2">
              <Label>Default Size</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Small Size</Label>
              <Select>
                <SelectTrigger size="sm">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="option1">Option 1</SelectItem>
                  <SelectItem value="option2">Option 2</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@aptima/ui';
import { Label } from '@aptima/ui';

export default function SelectSizesExample() {
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label>Default Size</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label>Small Size</Label>
        <Select>
          <SelectTrigger size="sm">
            <SelectValue placeholder="Select an option" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="option1">Option 1</SelectItem>
            <SelectItem value="option2">Option 2</SelectItem>
          </SelectContent>
        </Select>
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
            A disabled select prevents user interaction.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="w-full max-w-sm space-y-2">
            <Label htmlFor="disabled-select">Disabled Select</Label>
            <Select disabled>
              <SelectTrigger id="disabled-select">
                <SelectValue placeholder="Can't select me" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="option1">Option 1</SelectItem>
                <SelectItem value="option2">Option 2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <CodeBlock language="typescript" code={`import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@aptima/ui';
import { Label } from '@aptima/ui';

export default function DisabledSelectExample() {
  return (
    <div className="space-y-2">
      <Label htmlFor="disabled-select">Disabled Select</Label>
      <Select disabled>
        <SelectTrigger id="disabled-select">
          <SelectValue placeholder="Can't select me" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Grouped Items</CardTitle>
          <CardDescription>
            You can group related options together.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="w-full max-w-sm">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a food" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="orange">Orange</SelectItem>
                </SelectGroup>
                <SelectSeparator />
                <SelectGroup>
                  <SelectLabel>Vegetables</SelectLabel>
                  <SelectItem value="carrot">Carrot</SelectItem>
                  <SelectItem value="potato">Potato</SelectItem>
                  <SelectItem value="broccoli">Broccoli</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <CodeBlock language="typescript" code={`import { 
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue
} from '@aptima/ui';

export default function GroupedSelectExample() {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select a food" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Fruits</SelectLabel>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Vegetables</SelectLabel>
          <SelectItem value="carrot">Carrot</SelectItem>
          <SelectItem value="potato">Potato</SelectItem>
          <SelectItem value="broccoli">Broccoli</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Form</CardTitle>
          <CardDescription>
            Using Select components in a form.
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
              <Label htmlFor="country">Country</Label>
              <Select name="country">
                <SelectTrigger id="country">
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us">United States</SelectItem>
                  <SelectItem value="ca">Canada</SelectItem>
                  <SelectItem value="uk">United Kingdom</SelectItem>
                  <SelectItem value="au">Australia</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit">Submit</Button>
          </form>

          <CodeBlock language="typescript" code={`import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@aptima/ui';
import { Label } from '@aptima/ui';
import { Button } from '@aptima/ui';

export default function SelectFormExample() {
  return (
    <form 
      onSubmit={(e) => {
        e.preventDefault();
        alert('Form submitted!');
      }} 
      className="space-y-4"
    >
      <div className="space-y-2">
        <Label htmlFor="country">Country</Label>
        <Select name="country">
          <SelectTrigger id="country">
            <SelectValue placeholder="Select a country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="us">United States</SelectItem>
            <SelectItem value="ca">Canada</SelectItem>
            <SelectItem value="uk">United Kingdom</SelectItem>
            <SelectItem value="au">Australia</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Controlled</CardTitle>
          <CardDescription>
            Using the Select component as a controlled component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="w-full max-w-sm space-y-4">
            <p className="text-sm text-muted-foreground">
              A controlled select component maintains and updates its state through React's state management.
            </p>
            <CodeBlock language="jsx" code={`import React from 'react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@aptima/ui';

export default function ControlledSelectExample() {
  const [value, setValue] = React.useState("");
  
  return (
    <div className="space-y-4">
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="orange">Orange</SelectItem>
        </SelectContent>
      </Select>
      <p>Selected value: {value || "None"}</p>
    </div>
  );
}`} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>
            Detailed API reference for the Select component.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium">Select</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                The root component that contains all the select parts.
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
                    <TableCell className="font-mono">defaultValue</TableCell>
                    <TableCell>
                      <code className="text-xs">string</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>The initial value of an uncontrolled select.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">value</TableCell>
                    <TableCell>
                      <code className="text-xs">string</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>The controlled value of the select.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">onValueChange</TableCell>
                    <TableCell>
                      <code className="text-xs">function</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>Callback called when the value changes.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">disabled</TableCell>
                    <TableCell>
                      <code className="text-xs">boolean</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">false</code>
                    </TableCell>
                    <TableCell>When true, prevents the user from interacting with the select.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">name</TableCell>
                    <TableCell>
                      <code className="text-xs">string</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>The name of the select when used in a form.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-medium">SelectTrigger</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                The button that toggles the select dropdown.
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
                    <TableCell className="font-mono">size</TableCell>
                    <TableCell>
                      <code className="text-xs">"default" | "sm"</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">"default"</code>
                    </TableCell>
                    <TableCell>The size of the select trigger.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">className</TableCell>
                    <TableCell>
                      <code className="text-xs">string</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>Additional CSS classes to add to the trigger.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-medium">SelectValue</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                The component that displays the selected value or placeholder.
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
                    <TableCell className="font-mono">placeholder</TableCell>
                    <TableCell>
                      <code className="text-xs">string</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>Text that appears when no value is selected.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">className</TableCell>
                    <TableCell>
                      <code className="text-xs">string</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>Additional CSS classes to add to the value.</TableCell>
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
            Accessibility considerations for the Select component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            When using the Select component, consider the following accessibility best practices:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Always associate a <code className="text-xs bg-muted px-1 rounded">Label</code> with each select using the <code className="text-xs bg-muted px-1 rounded">htmlFor</code> attribute that matches the select trigger's <code className="text-xs bg-muted px-1 rounded">id</code>.</li>
            <li>Provide a clear and descriptive placeholder to indicate what the user should select.</li>
            <li>Group related options using <code className="text-xs bg-muted px-1 rounded">SelectGroup</code> and <code className="text-xs bg-muted px-1 rounded">SelectLabel</code> when appropriate.</li>
            <li>For required selects, indicate visually that the field is required.</li>
            <li>Ensure there is sufficient color contrast between the select text, placeholder text, and background.</li>
            <li>The select component is built with keyboard navigation in mind. Users can navigate options using arrow keys, select with Enter, and close with Escape.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
} 
 