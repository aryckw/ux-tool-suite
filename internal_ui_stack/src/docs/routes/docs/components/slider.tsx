import { CodeBlock } from '@/lib/components/ui/code-block';
import { Slider } from '@/lib/components/ui/slider';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/lib/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/lib/components/ui/table';
import { Label } from '@/lib/components/ui/label';

export default function SliderDoc() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Slider</h1>
        <p className="text-muted-foreground">
          An input for selecting a value from a range.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            The Slider component allows users to select a value or range from a predefined range of values.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Sliders are useful for adjusting settings that reflect intensity levels, such as volume,
            brightness, or color saturation. They allow users to make precise adjustments and immediately
            see the effect of their changes.
          </p>
          <p>
            The Aptima UI Slider component is built on top of <code>@radix-ui/react-slider</code>,
            ensuring proper accessibility and keyboard support.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the Slider component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Slider component is part of the Aptima UI library. You can import it directly:
          </p>
          <CodeBlock language="typescript" code={`import { Slider } from '@aptima/ui';`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            Basic usage example of the Slider component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex flex-col gap-4 w-full max-w-md">
              <div className="space-y-2">
                <Label htmlFor="slider-1">Basic slider</Label>
                <Slider id="slider-1" defaultValue={[50]} max={100} step={1} />
              </div>
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { Slider } from '@aptima/ui';
import { Label } from '@aptima/ui';

export default function SliderExample() {
  return (
    <div className="space-y-2">
      <Label htmlFor="slider-1">Basic slider</Label>
      <Slider id="slider-1" defaultValue={[50]} max={100} step={1} />
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Range Slider</CardTitle>
          <CardDescription>
            A slider with multiple thumbs for selecting a range.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex flex-col gap-4 w-full max-w-md">
              <div className="space-y-2">
                <Label htmlFor="range-slider">Range slider</Label>
                <Slider id="range-slider" defaultValue={[25, 75]} max={100} step={1} />
              </div>
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { Slider } from '@aptima/ui';
import { Label } from '@aptima/ui';

export default function RangeSliderExample() {
  return (
    <div className="space-y-2">
      <Label htmlFor="range-slider">Range slider</Label>
      <Slider id="range-slider" defaultValue={[25, 75]} max={100} step={1} />
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Step Size</CardTitle>
          <CardDescription>
            Controlling the step size for slider increments.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex flex-col gap-4 w-full max-w-md">
              <div className="space-y-2">
                <Label htmlFor="step-slider">Step size of 10</Label>
                <Slider id="step-slider" defaultValue={[40]} max={100} step={10} />
              </div>
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { Slider } from '@aptima/ui';
import { Label } from '@aptima/ui';

export default function StepSliderExample() {
  return (
    <div className="space-y-2">
      <Label htmlFor="step-slider">Step size of 10</Label>
      <Slider id="step-slider" defaultValue={[40]} max={100} step={10} />
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Custom Min and Max</CardTitle>
          <CardDescription>
            Setting custom minimum and maximum values.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex flex-col gap-4 w-full max-w-md">
              <div className="space-y-2">
                <Label htmlFor="custom-range-slider">Temperature (-20°C to 40°C)</Label>
                <Slider id="custom-range-slider" defaultValue={[22]} min={-20} max={40} step={1} />
              </div>
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { Slider } from '@aptima/ui';
import { Label } from '@aptima/ui';

export default function CustomRangeSliderExample() {
  return (
    <div className="space-y-2">
      <Label htmlFor="custom-range-slider">Temperature (-20°C to 40°C)</Label>
      <Slider id="custom-range-slider" defaultValue={[22]} min={-20} max={40} step={1} />
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Controlled Example</CardTitle>
          <CardDescription>
            Controlling the Slider state with React state.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 rounded-md border p-4">
            <div className="text-sm text-muted-foreground mb-4">
              This example demonstrates how you would implement a controlled Slider component with React state.
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { useState } from 'react';
import { Slider } from '@aptima/ui';
import { Label } from '@aptima/ui';

export default function ControlledSliderExample() {
  const [value, setValue] = useState([30]);
  
  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="controlled-slider">Volume</Label>
        <Slider 
          id="controlled-slider" 
          value={value} 
          onValueChange={setValue} 
          max={100} 
          step={1} 
        />
      </div>
      <p className="text-sm text-muted-foreground">
        Current value: {value}
      </p>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Vertical Orientation</CardTitle>
          <CardDescription>
            Using a slider with vertical orientation.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex gap-8 h-48">
              <div className="space-y-2">
                <Label htmlFor="vertical-slider">Vertical slider</Label>
                <Slider id="vertical-slider" defaultValue={[50]} max={100} step={1} orientation="vertical" />
              </div>
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { Slider } from '@aptima/ui';
import { Label } from '@aptima/ui';

export default function VerticalSliderExample() {
  return (
    <div className="flex gap-8 h-48">
      <div className="space-y-2">
        <Label htmlFor="vertical-slider">Vertical slider</Label>
        <Slider id="vertical-slider" defaultValue={[50]} max={100} step={1} orientation="vertical" />
      </div>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Disabled State</CardTitle>
          <CardDescription>
            Disabling the slider.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex flex-col gap-4 w-full max-w-md">
              <div className="space-y-2">
                <Label htmlFor="disabled-slider" className="text-muted-foreground">Disabled slider</Label>
                <Slider id="disabled-slider" defaultValue={[70]} max={100} step={1} disabled />
              </div>
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { Slider } from '@aptima/ui';
import { Label } from '@aptima/ui';

export default function DisabledSliderExample() {
  return (
    <div className="space-y-2">
      <Label htmlFor="disabled-slider" className="text-muted-foreground">Disabled slider</Label>
      <Slider id="disabled-slider" defaultValue={[70]} max={100} step={1} disabled />
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>
            Detailed API reference for the Slider component.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold">Slider</h3>
              <p className="text-sm text-muted-foreground mt-2">A slider component for selecting values from a range.</p>
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
                    <TableCell className="font-mono text-xs">defaultValue</TableCell>
                    <TableCell className="font-mono text-xs">number[]</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>The default value of the slider (uncontrolled).</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">value</TableCell>
                    <TableCell className="font-mono text-xs">number[]</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>The controlled value of the slider.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">onValueChange</TableCell>
                    <TableCell className="font-mono text-xs">(value: number[]) =&gt; void</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>Event handler called when the value changes.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">min</TableCell>
                    <TableCell className="font-mono text-xs">number</TableCell>
                    <TableCell className="font-mono text-xs">0</TableCell>
                    <TableCell>The minimum value for the range.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">max</TableCell>
                    <TableCell className="font-mono text-xs">number</TableCell>
                    <TableCell className="font-mono text-xs">100</TableCell>
                    <TableCell>The maximum value for the range.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">step</TableCell>
                    <TableCell className="font-mono text-xs">number</TableCell>
                    <TableCell className="font-mono text-xs">1</TableCell>
                    <TableCell>The step increment value.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">orientation</TableCell>
                    <TableCell className="font-mono text-xs">'horizontal' | 'vertical'</TableCell>
                    <TableCell className="font-mono text-xs">'horizontal'</TableCell>
                    <TableCell>The orientation of the slider.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">disabled</TableCell>
                    <TableCell className="font-mono text-xs">boolean</TableCell>
                    <TableCell className="font-mono text-xs">false</TableCell>
                    <TableCell>When true, prevents the user from interacting with the slider.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">name</TableCell>
                    <TableCell className="font-mono text-xs">string</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>The name of the slider. Submitted with its form.</TableCell>
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
            Accessibility considerations for the Slider component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Slider component follows accessibility best practices:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Uses the WAI-ARIA <a href="https://www.w3.org/WAI/ARIA/apg/patterns/slider/" className="text-primary underline">Slider Pattern</a></li>
            <li>Supports keyboard navigation with arrow keys, page up/down, home, and end</li>
            <li>Increment and decrement values using arrow keys</li>
            <li>Move to min/max values using home/end keys</li>
            <li>Large jumps using page up/down keys</li>
            <li>Provides proper ARIA attributes for screen readers</li>
            <li>Supports labeling via <code>aria-label</code> or <code>aria-labelledby</code></li>
          </ul>
          <p className="mt-4">
            When implementing sliders in your application:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Always provide a visible label to describe the slider's purpose</li>
            <li>Consider adding min/max labels for clarity</li>
            <li>Show the current value when it's useful to the user</li>
            <li>Choose an appropriate step size for the context</li>
            <li>Ensure sufficient contrast between the slider track, thumb, and background</li>
            <li>Make sure the thumb size is large enough to be easily targeted</li>
            <li>Consider providing a text input alternative for precise value entry</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
} 
