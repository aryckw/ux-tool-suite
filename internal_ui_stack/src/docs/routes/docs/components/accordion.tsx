import { CodeBlock } from '@/lib/components/ui/code-block';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/lib/components/ui/accordion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/lib/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/lib/components/ui/table';

export default function AccordionDoc() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Accordion</h1>
        <p className="text-muted-foreground">
          A vertically stacked set of interactive headings that each reveal a
          section of content.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            The Accordion component allows users to show and hide sections of
            related content on a page.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Accordions are useful when you want to toggle between hiding and
            showing large amounts of content. They help reduce page scrolling
            and allow users to focus on specific content.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the Accordion component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Accordion component is part of the Aptima UI library. You can
            import it directly:
          </p>
          <CodeBlock
            language="typescript"
            code={`import { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent 
} from '@aptima/ui';`}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            Basic usage example of the Accordion component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="w-full max-w-md">
            <Accordion>
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that match the other
                  components' aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It's animated by default, but you can disable it if you
                  prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <CodeBlock
            language="typescript"
            code={`import { 
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from '@aptima/ui';

export default function AccordionExample() {
  return (
    <Accordion>
      <AccordionItem value="item-1">
        <AccordionTrigger>Is it accessible?</AccordionTrigger>
        <AccordionContent>
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Is it styled?</AccordionTrigger>
        <AccordionContent>
          Yes. It comes with default styles that match the other components' aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is it animated?</AccordionTrigger>
        <AccordionContent>
          Yes. It's animated by default, but you can disable it if you prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Multiple Items</CardTitle>
          <CardDescription>
            Allow multiple accordion items to be open simultaneously.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="w-full max-w-md">
            <Accordion multiple>
              <AccordionItem value="item-1">
                <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
                <AccordionContent>
                  Yes! You can open multiple items by setting the multiple prop
                  to true.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Can I customize the look?</AccordionTrigger>
                <AccordionContent>
                  Absolutely. You can customize the look using className props
                  on each component.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Can I change the chevron icon?
                </AccordionTrigger>
                <AccordionContent>
                  Yes, you can customize the trigger to use any icon or even no
                  icon.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <CodeBlock
            language="typescript"
            code={`import { 
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from '@aptima/ui';

export default function MultipleAccordionExample() {
  return (
    <Accordion multiple>
      <AccordionItem value="item-1">
        <AccordionTrigger>Can I open multiple items?</AccordionTrigger>
        <AccordionContent>
          Yes! You can open multiple items by setting the multiple prop to true.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Can I customize the look?</AccordionTrigger>
        <AccordionContent>
          Absolutely. You can customize the look using className props on each component.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Can I change the chevron icon?</AccordionTrigger>
        <AccordionContent>
          Yes, you can customize the trigger to use any icon or even no icon.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Custom Styling</CardTitle>
          <CardDescription>
            Customize the appearance of the Accordion component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="w-full max-w-md">
            <Accordion className="border rounded-lg">
              <AccordionItem value="item-1" className="px-4 border-b-0">
                <AccordionTrigger className="py-5 font-semibold">
                  Custom Styled Accordion
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400">
                  This accordion has custom styling applied to show how you can
                  modify its appearance.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="px-4 border-b-0">
                <AccordionTrigger className="py-5 font-semibold">
                  Tailwind CSS Integration
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-400">
                  You can use Tailwind classes to further customize the
                  component to match your design system.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <CodeBlock
            language="typescript"
            code={`import { 
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent
} from '@aptima/ui';

export default function CustomStyledAccordionExample() {
  return (
    <Accordion className="border rounded-lg">
      <AccordionItem value="item-1" className="px-4 border-b-0">
        <AccordionTrigger className="py-5 font-semibold">
          Custom Styled Accordion
        </AccordionTrigger>
        <AccordionContent className="text-gray-600 dark:text-gray-400">
          This accordion has custom styling applied to show how you can modify its appearance.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="px-4 border-b-0">
        <AccordionTrigger className="py-5 font-semibold">
          Tailwind CSS Integration
        </AccordionTrigger>
        <AccordionContent className="text-gray-600 dark:text-gray-400">
          You can use Tailwind classes to further customize the component to match your design system.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}`}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>
            Detailed API reference for the Accordion component.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">Accordion Props</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                The root Accordion component accepts the following props:
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
                      <code className="text-xs">"single" | "multiple"</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>
                      Determines whether one or multiple items can be opened at
                      once.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">collapsible</TableCell>
                    <TableCell>
                      <code className="text-xs">boolean</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">false</code>
                    </TableCell>
                    <TableCell>
                      When type is "single", allows closing all items.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">defaultValue</TableCell>
                    <TableCell>
                      <code className="text-xs">string | string[]</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>
                      The value(s) of the item(s) to open by default.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">value</TableCell>
                    <TableCell>
                      <code className="text-xs">string | string[]</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>
                      The controlled value(s) of the item(s) to expand.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">onValueChange</TableCell>
                    <TableCell>
                      <code className="text-xs">function</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>
                      Event handler called when the expanded state changes.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">className</TableCell>
                    <TableCell>
                      <code className="text-xs">string</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>
                      Additional CSS classes for the accordion.
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-medium">AccordionItem Props</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                The AccordionItem component accepts the following props:
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
                    <TableCell className="font-mono">value</TableCell>
                    <TableCell>
                      <code className="text-xs">string</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">required</code>
                    </TableCell>
                    <TableCell>
                      A unique identifier for the accordion item.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">disabled</TableCell>
                    <TableCell>
                      <code className="text-xs">boolean</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">false</code>
                    </TableCell>
                    <TableCell>
                      When true, prevents the user from interacting with the
                      item.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">className</TableCell>
                    <TableCell>
                      <code className="text-xs">string</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>
                      Additional CSS classes for the accordion item.
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-medium">AccordionTrigger Props</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                The AccordionTrigger component accepts the following props:
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
                    <TableCell className="font-mono">className</TableCell>
                    <TableCell>
                      <code className="text-xs">string</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>
                      Additional CSS classes for the accordion trigger.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">children</TableCell>
                    <TableCell>
                      <code className="text-xs">React.ReactNode</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>The content of the trigger.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-medium">AccordionContent Props</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                The AccordionContent component accepts the following props:
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
                    <TableCell className="font-mono">className</TableCell>
                    <TableCell>
                      <code className="text-xs">string</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>
                      Additional CSS classes for the accordion content.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">forceMount</TableCell>
                    <TableCell>
                      <code className="text-xs">boolean</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">false</code>
                    </TableCell>
                    <TableCell>
                      Forces mounting when more control is needed.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">children</TableCell>
                    <TableCell>
                      <code className="text-xs">React.ReactNode</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>
                      The content to display when the accordion item is
                      expanded.
                    </TableCell>
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
            The Accordion component follows WAI-ARIA standards for
            accessibility.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Accordion component is built on top of the Radix UI Accordion
            primitive, which provides the following accessibility features:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Keyboard navigation between accordion items using{' '}
              <code className="text-xs bg-muted px-1 rounded">Tab</code>.
            </li>
            <li>
              Keyboard activation of accordion triggers using{' '}
              <code className="text-xs bg-muted px-1 rounded">Space</code> or{' '}
              <code className="text-xs bg-muted px-1 rounded">Enter</code>.
            </li>
            <li>
              Proper ARIA attributes:{' '}
              <code className="text-xs bg-muted px-1 rounded">
                aria-expanded
              </code>
              ,{' '}
              <code className="text-xs bg-muted px-1 rounded">
                aria-controls
              </code>
              , and{' '}
              <code className="text-xs bg-muted px-1 rounded">
                aria-labelledby
              </code>
              .
            </li>
            <li>Screen reader announcements for expanded/collapsed states.</li>
            <li>
              Focus management that follows WAI-ARIA accordion pattern
              guidelines.
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
