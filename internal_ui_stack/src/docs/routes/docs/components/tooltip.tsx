import { CodeBlock } from '@/lib/components/ui/code-block';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/lib/components/ui/tooltip';
import { Button } from '@/lib/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/lib/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/lib/components/ui/table';
import { HelpCircle } from 'lucide-react';

export default function TooltipDoc() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Tooltip</h1>
        <p className="text-muted-foreground">
          A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            Tooltips display additional information when users hover over or focus on an element.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Tooltips provide contextual information or clarification about functionality when users hover over or focus on an element. They're useful for explaining the purpose of buttons, icons, or other interactive elements that might not be immediately obvious.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the Tooltip component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Tooltip component is part of the Aptima UI library. You can import it directly:
          </p>
          <CodeBlock language="typescript" code={`import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@aptima/ui';`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            Basic usage examples of the Tooltip component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap gap-4">
            <Tooltip>
              <TooltipTrigger>
                <Button variant="outline">Hover Me</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>This is a tooltip</p>
              </TooltipContent>
            </Tooltip>
          </div>

          <CodeBlock language="typescript" code={`import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@aptima/ui';
import { Button } from '@aptima/ui';

export default function TooltipExample() {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Button variant="outline">Hover Me</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>This is a tooltip</p>
      </TooltipContent>
    </Tooltip>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Icons</CardTitle>
          <CardDescription>
            Using icons as tooltip triggers.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span>Need help?</span>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <HelpCircle size={24} />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>This is a helpful tooltip with additional information.</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from '@aptima/ui';
import { HelpCircle } from 'lucide-react';

export default function TooltipWithIconExample() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <HelpCircle size={24} />
        </TooltipTrigger>
        <TooltipContent>
          <p>This is a helpful tooltip with additional information.</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Positioning</CardTitle>
          <CardDescription>
            Tooltips can be positioned around the trigger element.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap gap-4">
            <Tooltip>
              <TooltipTrigger>
                <Button variant="outline">Top</Button>
              </TooltipTrigger>
              <TooltipContent side="top">
                <p>This tooltip appears above</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger>
                <Button variant="outline">Right</Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>This tooltip appears to the right</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger>
                <Button variant="outline">Bottom</Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>This tooltip appears below</p>
              </TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger>
                <Button variant="outline">Left</Button>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>This tooltip appears to the left</p>
              </TooltipContent>
            </Tooltip>
          </div>

          <CodeBlock language="typescript" code={`import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@aptima/ui';
import { Button } from '@aptima/ui';

export default function TooltipPositioningExample() {
  return (
    <div className="flex flex-wrap gap-4">
      <Tooltip>
        <TooltipTrigger>
          <Button variant="outline">Top</Button>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>This tooltip appears above</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger>
          <Button variant="outline">Right</Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>This tooltip appears to the right</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger>
          <Button variant="outline">Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>This tooltip appears below</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger>
          <Button variant="outline">Left</Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>This tooltip appears to the left</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Delay Duration</CardTitle>
          <CardDescription>
            Control the delay before the tooltip appears.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap gap-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Button variant="outline">Hover Me (500ms)</Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>This tooltip has a 500ms delay</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <CodeBlock language="typescript" code={`import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@aptima/ui';
import { Button } from '@aptima/ui';

export default function TooltipDelayExample() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Button variant="outline">Hover Me (500ms)</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This tooltip has a 500ms delay</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>
            Detailed API reference for the Tooltip component.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium">Tooltip</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                The root component that wraps the tooltip trigger and content.
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
                    <TableCell className="font-mono">defaultOpen</TableCell>
                    <TableCell>
                      <code className="text-xs">boolean</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">false</code>
                    </TableCell>
                    <TableCell>The open state of the tooltip when it is initially rendered.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">open</TableCell>
                    <TableCell>
                      <code className="text-xs">boolean</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>The controlled open state of the tooltip.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">onOpenChange</TableCell>
                    <TableCell>
                      <code className="text-xs">function</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>Event handler called when the open state changes.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-medium">TooltipTrigger</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                The element that triggers the tooltip.
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
                    <TableCell className="font-mono">asChild</TableCell>
                    <TableCell>
                      <code className="text-xs">boolean</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">false</code>
                    </TableCell>
                    <TableCell>When true, the trigger will be rendered as its child element.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-medium">TooltipContent</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                The component that displays the tooltip content.
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
                    <TableCell className="font-mono">side</TableCell>
                    <TableCell>
                      <code className="text-xs">"top" | "right" | "bottom" | "left"</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">"top"</code>
                    </TableCell>
                    <TableCell>The preferred side of the trigger to render the tooltip.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">sideOffset</TableCell>
                    <TableCell>
                      <code className="text-xs">number</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">0</code>
                    </TableCell>
                    <TableCell>The distance in pixels from the trigger.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">align</TableCell>
                    <TableCell>
                      <code className="text-xs">"start" | "center" | "end"</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">"center"</code>
                    </TableCell>
                    <TableCell>The alignment of the tooltip relative to the trigger.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">alignOffset</TableCell>
                    <TableCell>
                      <code className="text-xs">number</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">0</code>
                    </TableCell>
                    <TableCell>An offset in pixels from the "start" or "end" alignment.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">className</TableCell>
                    <TableCell>
                      <code className="text-xs">string</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>Additional CSS classes to add to the content.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-medium">TooltipProvider</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                The provider component that allows configuring tooltip defaults.
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
                    <TableCell className="font-mono">delayDuration</TableCell>
                    <TableCell>
                      <code className="text-xs">number</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">0</code>
                    </TableCell>
                    <TableCell>The duration from when the mouse enters the trigger until the tooltip opens.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">skipDelayDuration</TableCell>
                    <TableCell>
                      <code className="text-xs">number</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">300</code>
                    </TableCell>
                    <TableCell>How long a user has to leave a tooltip before the delay is reapplied.</TableCell>
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
            Accessibility considerations for the Tooltip component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            When using the Tooltip component, consider the following accessibility best practices:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use tooltips to provide additional context for UI elements, but not for essential information.</li>
            <li>The tooltip trigger should be focusable and the tooltip should appear on both hover and focus.</li>
            <li>Tooltips are automatically labeled by their content for screen readers.</li>
            <li>Keep tooltip content brief and concise.</li>
            <li>Tooltips are not meant to be interactive. For interactive content, consider using a Popover instead.</li>
            <li>Ensure there is sufficient color contrast between the tooltip text and background.</li>
            <li>Add an appropriate delay before showing tooltips to prevent them from appearing too frequently during normal mouse movement.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
} 
