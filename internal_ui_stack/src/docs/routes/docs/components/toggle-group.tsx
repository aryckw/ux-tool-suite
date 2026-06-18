import { CodeBlock } from '@/lib/components/ui/code-block';
import { ToggleGroup, ToggleGroupItem } from '@/lib/components/ui/toggle-group';
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, AlignJustify } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/lib/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/lib/components/ui/table';

export default function ToggleGroupDoc() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Toggle Group</h1>
        <p className="text-muted-foreground">
          A set of two-state buttons that can be toggled on or off.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            The ToggleGroup component allows users to select multiple options from a group of two-state buttons.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Toggle groups are useful for selecting multiple options from a set of related choices,
            or for single-selection from a list of mutually exclusive options. They're commonly used
            for styling controls in text editors, view options, or filter selections.
          </p>
          <p>
            The Aptima UI ToggleGroup component is built on top of <code>@radix-ui/react-toggle-group</code>,
            ensuring proper accessibility and keyboard navigation.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the ToggleGroup component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The ToggleGroup component is part of the Aptima UI library. You can import it directly:
          </p>
          <CodeBlock language="typescript" code={`import { ToggleGroup, ToggleGroupItem } from '@aptima/ui';`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            Basic usage example of the ToggleGroup component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <ToggleGroup multiple>
              <ToggleGroupItem value="bold" aria-label="Toggle bold">
                <Bold className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Toggle italic">
                <Italic className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="Toggle underline">
                <Underline className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <CodeBlock language="typescript" code={`import { ToggleGroup, ToggleGroupItem } from '@aptima/ui';
import { Bold, Italic, Underline } from 'lucide-react';

export default function ToggleGroupExample() {
  return (
    <ToggleGroup multiple>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Single Selection</CardTitle>
          <CardDescription>
            ToggleGroup with single selection mode (radio behavior).
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <ToggleGroup defaultValue={["center"]}>
              <ToggleGroupItem value="left" aria-label="Align left">
                <AlignLeft className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="center" aria-label="Align center">
                <AlignCenter className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="right" aria-label="Align right">
                <AlignRight className="h-4 w-4" />
              </ToggleGroupItem>
              <ToggleGroupItem value="justify" aria-label="Justify">
                <AlignJustify className="h-4 w-4" />
              </ToggleGroupItem>
            </ToggleGroup>
          </div>

          <CodeBlock language="typescript" code={`import { ToggleGroup, ToggleGroupItem } from '@aptima/ui';
import { AlignLeft, AlignCenter, AlignRight, AlignJustify } from 'lucide-react';

export default function SingleToggleGroupExample() {
  return (
    <ToggleGroup defaultValue={["center"]}>
      <ToggleGroupItem value="left" aria-label="Align left">
        <AlignLeft className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <AlignCenter className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="right" aria-label="Align right">
        <AlignRight className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="justify" aria-label="Justify">
        <AlignJustify className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Variants</CardTitle>
          <CardDescription>
            Different visual styles for the ToggleGroup.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium w-16">Default:</span>
                <ToggleGroup multiple>
                  <ToggleGroupItem value="bold" aria-label="Toggle bold">
                    <Bold className="h-4 w-4" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="italic" aria-label="Toggle italic">
                    <Italic className="h-4 w-4" />
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium w-16">Outline:</span>
                <ToggleGroup multiple variant="outline">
                  <ToggleGroupItem value="bold" aria-label="Toggle bold">
                    <Bold className="h-4 w-4" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="italic" aria-label="Toggle italic">
                    <Italic className="h-4 w-4" />
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { ToggleGroup, ToggleGroupItem } from '@aptima/ui';
import { Bold, Italic } from 'lucide-react';

export default function ToggleGroupVariantsExample() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium w-16">Default:</span>
        <ToggleGroup multiple>
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium w-16">Outline:</span>
        <ToggleGroup multiple variant="outline">
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sizes</CardTitle>
          <CardDescription>
            Different size options for the ToggleGroup.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium w-16">Small:</span>
                <ToggleGroup multiple size="sm">
                  <ToggleGroupItem value="bold" aria-label="Toggle bold">
                    <Bold className="h-3.5 w-3.5" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="italic" aria-label="Toggle italic">
                    <Italic className="h-3.5 w-3.5" />
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium w-16">Default:</span>
                <ToggleGroup multiple size="default">
                  <ToggleGroupItem value="bold" aria-label="Toggle bold">
                    <Bold className="h-4 w-4" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="italic" aria-label="Toggle italic">
                    <Italic className="h-4 w-4" />
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium w-16">Large:</span>
                <ToggleGroup multiple size="lg">
                  <ToggleGroupItem value="bold" aria-label="Toggle bold">
                    <Bold className="h-5 w-5" />
                  </ToggleGroupItem>
                  <ToggleGroupItem value="italic" aria-label="Toggle italic">
                    <Italic className="h-5 w-5" />
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { ToggleGroup, ToggleGroupItem } from '@aptima/ui';
import { Bold, Italic } from 'lucide-react';

export default function ToggleGroupSizesExample() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium w-16">Small:</span>
        <ToggleGroup multiple size="sm">
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Bold className="h-3.5 w-3.5" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Italic className="h-3.5 w-3.5" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium w-16">Default:</span>
        <ToggleGroup multiple size="default">
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium w-16">Large:</span>
        <ToggleGroup multiple size="lg">
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Bold className="h-5 w-5" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Italic className="h-5 w-5" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Controlled Example</CardTitle>
          <CardDescription>
            Controlling the ToggleGroup state with React state.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 rounded-md border p-4">
            <div className="text-sm text-muted-foreground mb-4">
              This example demonstrates how you would implement a controlled ToggleGroup component with React state.
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@aptima/ui';
import { Bold, Italic, Underline } from 'lucide-react';

export default function ControlledToggleGroupExample() {
  // For multiple selection
  const [multipleValue, setMultipleValue] = useState(['bold']);
  
  // For single selection
  const [singleValue, setSingleValue] = useState('center');
  
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm font-medium">Multiple selection:</p>
        <ToggleGroup 
          multiple 
          value={multipleValue}
          onValueChange={setMultipleValue}
        >
          <ToggleGroupItem value="bold" aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Toggle underline">
            <Underline className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
        <p className="text-sm text-muted-foreground">
          Selected values: {multipleValue.length ? multipleValue.join(', ') : 'none'}
        </p>
      </div>
      
      <div className="space-y-2">
        <p className="text-sm font-medium">Single selection:</p>
        <ToggleGroup
          defaultValue={[]}
          value={singleValue}
          onValueChange={(value) => value && setSingleValue(value)}
        >
          <ToggleGroupItem value="left" aria-label="Align left">
            <AlignLeft className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Align center">
            <AlignCenter className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Align right">
            <AlignRight className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
        <p className="text-sm text-muted-foreground">
          Selected value: {singleValue}
        </p>
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
            Detailed API reference for the ToggleGroup component.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold">ToggleGroup</h3>
              <p className="text-sm text-muted-foreground mt-2">The root component that contains the toggle group items.</p>
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
                    <TableCell className="font-mono text-xs">type</TableCell>
                    <TableCell className="font-mono text-xs">'single' | 'multiple'</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>Determines whether a single or multiple items can be pressed at a time.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">value</TableCell>
                    <TableCell className="font-mono text-xs">string | string[]</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>The controlled value of the pressed items.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">defaultValue</TableCell>
                    <TableCell className="font-mono text-xs">string | string[]</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>The initial value of the pressed items.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">onValueChange</TableCell>
                    <TableCell className="font-mono text-xs">(value: string | string[]) =&gt; void</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>Event handler called when the value changes.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">variant</TableCell>
                    <TableCell className="font-mono text-xs">'default' | 'outline'</TableCell>
                    <TableCell className="font-mono text-xs">'default'</TableCell>
                    <TableCell>The visual variant of the toggle group.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">size</TableCell>
                    <TableCell className="font-mono text-xs">'sm' | 'default' | 'lg'</TableCell>
                    <TableCell className="font-mono text-xs">'default'</TableCell>
                    <TableCell>The size of the toggle group.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">disabled</TableCell>
                    <TableCell className="font-mono text-xs">boolean</TableCell>
                    <TableCell className="font-mono text-xs">false</TableCell>
                    <TableCell>When true, prevents user interaction with the toggle group.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold">ToggleGroupItem</h3>
              <p className="text-sm text-muted-foreground mt-2">An item in the toggle group.</p>
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
                    <TableCell>A unique value for the item.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">disabled</TableCell>
                    <TableCell className="font-mono text-xs">boolean</TableCell>
                    <TableCell className="font-mono text-xs">false</TableCell>
                    <TableCell>When true, prevents user interaction with the item.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">variant</TableCell>
                    <TableCell className="font-mono text-xs">'default' | 'outline'</TableCell>
                    <TableCell className="font-mono text-xs">from ToggleGroup</TableCell>
                    <TableCell>Overrides the variant of the parent toggle group.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">size</TableCell>
                    <TableCell className="font-mono text-xs">'sm' | 'default' | 'lg'</TableCell>
                    <TableCell className="font-mono text-xs">from ToggleGroup</TableCell>
                    <TableCell>Overrides the size of the parent toggle group.</TableCell>
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
            Accessibility considerations for the ToggleGroup component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The ToggleGroup component follows accessibility best practices:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Uses proper ARIA attributes based on the ToggleGroup type (single or multiple)</li>
            <li>In single mode, follows the ARIA radio group pattern</li>
            <li>In multiple mode, follows the ARIA checkbox group pattern</li>
            <li>Supports keyboard navigation using the arrow keys</li>
            <li>Provides focus management within the group</li>
            <li>Ensures proper visual feedback for focus, hover, and pressed states</li>
            <li>Supports screen readers with appropriate ARIA announcements</li>
          </ul>
          <p className="mt-4">
            When implementing toggle groups in your application:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide descriptive labels for each toggle item</li>
            <li>Include <code>aria-label</code> or <code>aria-labelledby</code> for icon-only toggle items</li>
            <li>Group related toggle items together in a meaningful way</li>
            <li>Ensure sufficient color contrast for all toggle states</li>
            <li>Consider providing tooltips for icon-only toggles to enhance usability</li>
            <li>Test keyboard navigation thoroughly within the toggle group</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
} 
