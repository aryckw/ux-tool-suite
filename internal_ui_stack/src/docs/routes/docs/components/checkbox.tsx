import { CodeBlock } from '@/lib/components/ui/code-block';
import React from 'react';
import { Checkbox } from '@/lib/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/lib/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/lib/components/ui/table';
import { Label } from '@/lib/components/ui/label';

export default function CheckboxDoc() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Checkbox</h1>
        <p className="text-muted-foreground">
          A control that allows the user to toggle between checked and not checked.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            The Checkbox component is used to allow users to select one or more items from a list of options.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Checkboxes are used when there are lists of options and the user may select any number of choices, 
            including zero, one, or several. In contrast, a radio button allows the user to select only one option 
            from a list.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the Checkbox component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Checkbox component is part of the Aptima UI library. You can import it directly:
          </p>
          <CodeBlock language="typescript" code={`import { Checkbox } from '@aptima/ui';`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            Basic usage examples of the Checkbox component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms and conditions</Label>
          </div>

          <CodeBlock language="typescript" code={`import { Checkbox } from '@aptima/ui';
import { Label } from '@aptima/ui';

export default function CheckboxExample() {
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
          <CardTitle>Controlled</CardTitle>
          <CardDescription>
            Control the state of the Checkbox component using React state.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <ControlledCheckboxExample />

          <CodeBlock language="jsx" code={`import React from 'react';
import { Checkbox } from '@aptima/ui';
import { Label } from '@aptima/ui';

export default function ControlledCheckboxExample() {
  const [checked, setChecked] = React.useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center space-x-2">
        <Checkbox 
          id="controlled" 
          checked={checked} 
          onCheckedChange={() => setChecked((prev) => !prev)}
        />
        <Label htmlFor="controlled">
          {checked ? "Checked" : "Unchecked"}
        </Label>
      </div>
      <p className="text-sm text-muted-foreground">
        The checkbox is {checked ? "checked" : "unchecked"}
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
            A disabled checkbox prevents user interaction.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox id="disabled-unchecked" disabled />
              <Label htmlFor="disabled-unchecked" className="text-muted-foreground">
                Disabled (Unchecked)
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="disabled-checked" disabled defaultChecked />
              <Label htmlFor="disabled-checked" className="text-muted-foreground">
                Disabled (Checked)
              </Label>
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { Checkbox } from '@aptima/ui';
import { Label } from '@aptima/ui';

export default function DisabledCheckboxExample() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled-unchecked" disabled />
        <Label htmlFor="disabled-unchecked" className="text-muted-foreground">
          Disabled (Unchecked)
        </Label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled-checked" disabled defaultChecked />
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
          <CardTitle>Checkbox Group</CardTitle>
          <CardDescription>
            Group multiple checkboxes together.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <CheckboxGroupExample />

          <CodeBlock language="jsx" code={`import React from 'react';
import { Checkbox } from '@aptima/ui';
import { Label } from '@aptima/ui';

export default function CheckboxGroupExample() {
  const [selectedItems, setSelectedItems] = React.useState<string[]>([]);

  const handleItemChange = (value: string) => {
    setSelectedItems(prev => 
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="space-y-3">
        <Label>Which fruits do you like?</Label>
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="apple" 
            checked={selectedItems.includes('apple')} 
            onCheckedChange={() => handleItemChange('apple')}
          />
          <Label htmlFor="apple">Apple</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="banana" 
            checked={selectedItems.includes('banana')} 
            onCheckedChange={() => handleItemChange('banana')}
          />
          <Label htmlFor="banana">Banana</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="orange" 
            checked={selectedItems.includes('orange')} 
            onCheckedChange={() => handleItemChange('orange')}
          />
          <Label htmlFor="orange">Orange</Label>
        </div>
      </div>
      {selectedItems.length > 0 && (
        <p className="text-sm">
          You selected: {selectedItems.join(', ')}
        </p>
      )}
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Indeterminate</CardTitle>
          <CardDescription>
            An indeterminate checkbox represents a state where not all items in a group are selected.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <IndeterminateCheckboxExample />

          <CodeBlock language="jsx" code={`import React from 'react';
import { Checkbox } from '@aptima/ui';
import { Label } from '@aptima/ui';

export default function IndeterminateCheckboxExample() {
  const [checkedItems, setCheckedItems] = React.useState({
    apple: false,
    orange: false,
    banana: false,
  });

  const allChecked = Object.values(checkedItems).every(Boolean);
  const indeterminate = Object.values(checkedItems).some(Boolean) && !allChecked;

  const handleParentChange = () => {
    const newValue = !allChecked;
    setCheckedItems({
      apple: newValue,
      orange: newValue,
      banana: newValue,
    });
  };

  const handleChildChange = (item: keyof typeof checkedItems) => {
    setCheckedItems({
      ...checkedItems,
      [item]: !checkedItems[item],
    });
  };

  // Use a proper ref to handle indeterminate state
  const checkboxRef = React.useRef<HTMLButtonElement>(null);
  
  // Update indeterminate state when it changes
  React.useEffect(() => {
    if (checkboxRef.current) {
      // Use DOM API directly which works with the HTMLButtonElement type
      (checkboxRef.current as any).indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <div className="space-y-5">
      <div className="flex items-center space-x-2">
        <Checkbox 
          id="parent" 
          checked={allChecked} 
          ref={checkboxRef}
          onCheckedChange={handleParentChange}
        />
        <Label htmlFor="parent">Select all fruits</Label>
      </div>
      <div className="pl-6 space-y-3">
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="apple" 
            checked={checkedItems.apple} 
            onCheckedChange={() => handleChildChange('apple')}
          />
          <Label htmlFor="apple">Apple</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="orange" 
            checked={checkedItems.orange} 
            onCheckedChange={() => handleChildChange('orange')}
          />
          <Label htmlFor="orange">Orange</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="banana" 
            checked={checkedItems.banana} 
            onCheckedChange={() => handleChildChange('banana')}
          />
          <Label htmlFor="banana">Banana</Label>
        </div>
      </div>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>
            Detailed API reference for the Checkbox component.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">Checkbox Props</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                The Checkbox component accepts the following props:
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
                    <TableCell>The controlled checked state of the checkbox.</TableCell>
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
                    <TableCell>When true, prevents the user from interacting with the checkbox.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">required</TableCell>
                    <TableCell>
                      <code className="text-xs">boolean</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">false</code>
                    </TableCell>
                    <TableCell>When true, indicates the checkbox must be checked for the form to be submitted.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">name</TableCell>
                    <TableCell>
                      <code className="text-xs">string</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>The name of the checkbox when used in a form.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">value</TableCell>
                    <TableCell>
                      <code className="text-xs">string</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>The value of the checkbox when used in a form.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">className</TableCell>
                    <TableCell>
                      <code className="text-xs">string</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>Additional CSS classes to add to the checkbox.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-medium">Examples</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                Here are a few more examples of using the Checkbox component in different ways:
              </p>
              <CodeBlock language="typescript" code={`// Basic checkbox
<Checkbox id="basic" />

// Checkbox with label
<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <label htmlFor="terms">Accept terms</label>
</div>

// Controlled checkbox
const [checked, setChecked] = React.useState(false)
<Checkbox 
  checked={checked} 
  onCheckedChange={setChecked} 
/>

// Indeterminate checkbox
<Checkbox 
  ref={(el) => { 
    if (el) el.indeterminate = true 
  }} 
/>

// In a form
<form>
  <div className="flex items-center space-x-2">
    <Checkbox id="consent" name="consent" required />
    <Label htmlFor="consent">I agree to the terms</Label>
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
            The Checkbox component follows WAI-ARIA standards for accessibility.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Checkbox component is built on top of the Radix UI Checkbox primitive, which provides
            the following accessibility features:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Follows the <a href="https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/" className="text-primary underline">WAI-ARIA Checkbox pattern</a>.</li>
            <li>Supports keyboard navigation using <code className="text-xs bg-muted px-1 rounded">Space</code> to toggle the checkbox.</li>
            <li>Includes appropriate ARIA attributes such as <code className="text-xs bg-muted px-1 rounded">aria-checked</code> and <code className="text-xs bg-muted px-1 rounded">aria-required</code>.</li>
            <li>When used with forms, integrates with native form validation.</li>
            <li>For best accessibility, always use a <code className="text-xs bg-muted px-1 rounded">Label</code> component with the Checkbox and connect them using the <code className="text-xs bg-muted px-1 rounded">htmlFor</code> attribute.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

// Example component for the controlled checkbox demo
function ControlledCheckboxExample() {
  const [checked, setChecked] = React.useState(false);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center space-x-2">
        <Checkbox 
          id="controlled" 
          checked={checked} 
          onCheckedChange={() => setChecked((prev) => !prev)}
        />
        <Label htmlFor="controlled">
          {checked ? "Checked" : "Unchecked"}
        </Label>
      </div>
      <p className="text-sm text-muted-foreground">
        The checkbox is {checked ? "checked" : "unchecked"}
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

// Example component for the checkbox group demo
function CheckboxGroupExample() {
  const [selectedItems, setSelectedItems] = React.useState<string[]>([]);

  const handleItemChange = (value: string) => {
    setSelectedItems(prev => 
      prev.includes(value)
        ? prev.filter(item => item !== value)
        : [...prev, value]
    );
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="space-y-3">
        <Label>Which fruits do you like?</Label>
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="apple" 
            checked={selectedItems.includes('apple')} 
            onCheckedChange={() => handleItemChange('apple')}
          />
          <Label htmlFor="apple">Apple</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="banana" 
            checked={selectedItems.includes('banana')} 
            onCheckedChange={() => handleItemChange('banana')}
          />
          <Label htmlFor="banana">Banana</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="orange" 
            checked={selectedItems.includes('orange')} 
            onCheckedChange={() => handleItemChange('orange')}
          />
          <Label htmlFor="orange">Orange</Label>
        </div>
      </div>
      {selectedItems.length > 0 && (
        <p className="text-sm">
          You selected: {selectedItems.join(', ')}
        </p>
      )}
    </div>
  );
}

// Example component for the indeterminate checkbox demo
function IndeterminateCheckboxExample() {
  const [checkedItems, setCheckedItems] = React.useState({
    apple: false,
    orange: false,
    banana: false,
  });

  const allChecked = Object.values(checkedItems).every(Boolean);
  const indeterminate = Object.values(checkedItems).some(Boolean) && !allChecked;

  const handleParentChange = () => {
    const newValue = !allChecked;
    setCheckedItems({
      apple: newValue,
      orange: newValue,
      banana: newValue,
    });
  };

  const handleChildChange = (item: keyof typeof checkedItems) => {
    setCheckedItems({
      ...checkedItems,
      [item]: !checkedItems[item],
    });
  };

  // Use a proper ref to handle indeterminate state
  const checkboxRef = React.useRef<HTMLButtonElement>(null);
  
  // Update indeterminate state when it changes
  React.useEffect(() => {
    if (checkboxRef.current) {
      // Use DOM API directly which works with the HTMLButtonElement type
      (checkboxRef.current as any).indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <div className="space-y-5">
      <div className="flex items-center space-x-2">
        <Checkbox 
          id="parent" 
          checked={allChecked} 
          onCheckedChange={handleParentChange}
        />
        <Label htmlFor="parent">Select all fruits</Label>
      </div>
      <div className="pl-6 space-y-3">
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="apple" 
            checked={checkedItems.apple} 
            onCheckedChange={() => handleChildChange('apple')}
          />
          <Label htmlFor="apple">Apple</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="orange" 
            checked={checkedItems.orange} 
            onCheckedChange={() => handleChildChange('orange')}
          />
          <Label htmlFor="orange">Orange</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="banana" 
            checked={checkedItems.banana} 
            onCheckedChange={() => handleChildChange('banana')}
          />
          <Label htmlFor="banana">Banana</Label>
        </div>
      </div>
    </div>
  );
} 
