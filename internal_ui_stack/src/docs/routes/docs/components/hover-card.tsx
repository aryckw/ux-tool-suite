import { CodeBlock } from '@/lib/components/ui/code-block';
import { 
  HoverCard, 
  HoverCardTrigger, 
  HoverCardContent 
} from '@/lib/components/ui/hover-card';
import { Button } from '@/lib/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/lib/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/lib/components/ui/table';
import { CalendarDays } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/lib/components/ui/avatar';

export default function HoverCardDoc() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Hover Card</h1>
        <p className="text-muted-foreground">
          For displaying additional interactive content when hovering over a trigger element.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            The Hover Card component displays floating content when users hover over a trigger element.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Hover Cards provide a lightweight preview of additional content without requiring users to click.
            They're commonly used for previewing links, displaying user profiles, or revealing metadata.
          </p>
          <p>
            The Aptima UI Hover Card is built on top of <code>@radix-ui/react-hover-card</code>, 
            ensuring accessible implementation with proper ARIA attributes and keyboard navigation.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the Hover Card component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Hover Card component is part of the Aptima UI library. You can import it directly:
          </p>
          <CodeBlock language="typescript" code={`import { 
  HoverCard,
  HoverCardTrigger,
  HoverCardContent
} from '@aptima/ui';`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            Basic usage example of the Hover Card component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-center">
            <HoverCard>
              <HoverCardTrigger>
                <Button variant="link">Hover over me</Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Hover Card Content</h4>
                  <p className="text-sm">
                    This is the content that appears when you hover over the trigger element.
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>

          <CodeBlock language="typescript" code={`import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent
} from '@aptima/ui';
import { Button } from '@aptima/ui';

export default function HoverCardExample() {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Button variant="link">Hover over me</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Hover Card Content</h4>
          <p className="text-sm">
            This is the content that appears when you hover over the trigger element.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>User Profile Example</CardTitle>
          <CardDescription>
            Using the Hover Card to display a user profile preview.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-center">
            <HoverCard>
              <HoverCardTrigger>
                <a
                  href="#"
                  className="inline-flex items-center text-sm font-medium underline underline-offset-4"
                >
                  @johndoe
                </a>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold">John Doe</h4>
                    <p className="text-sm">
                      Software developer with a passion for building accessible interfaces.
                    </p>
                    <div className="flex items-center pt-2">
                      <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
                      <span className="text-xs text-muted-foreground">
                        Joined December 2021
                      </span>
                    </div>
                  </div>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>

          <CodeBlock language="typescript" code={`import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent
} from '@aptima/ui';
import { Avatar, AvatarFallback, AvatarImage } from '@aptima/ui';
import { CalendarDays } from 'lucide-react';

export default function UserProfileHoverCard() {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <a
          href="#"
          className="inline-flex items-center text-sm font-medium underline underline-offset-4"
        >
          @johndoe
        </a>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">John Doe</h4>
            <p className="text-sm">
              Software developer with a passion for building accessible interfaces.
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />{" "}
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Open and Close Delay</CardTitle>
          <CardDescription>
            Controlling the timing of the hover card with open and close delays.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-center">
            <HoverCard>
              <HoverCardTrigger>
                <Button variant="outline">Hover with delay</Button>
              </HoverCardTrigger>
              <HoverCardContent>
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold">Delayed Content</h4>
                  <p className="text-sm">
                    This card has a 200ms delay before opening and a 300ms delay before closing.
                  </p>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>

          <CodeBlock language="typescript" code={`import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent
} from '@aptima/ui';
import { Button } from '@aptima/ui';

export default function DelayedHoverCard() {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <Button variant="outline">Hover with delay</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="space-y-2">
          <h4 className="text-sm font-semibold">Delayed Content</h4>
          <p className="text-sm">
            This card has a 200ms delay before opening and a 300ms delay before closing.
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>
            Detailed API reference for the Hover Card component.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold">HoverCard</h3>
              <p className="text-sm text-muted-foreground mt-2">The root component that contains all parts of a hover card.</p>
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
                    <TableCell className="font-mono text-xs">open</TableCell>
                    <TableCell className="font-mono text-xs">boolean</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>The controlled open state of the hover card.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">defaultOpen</TableCell>
                    <TableCell className="font-mono text-xs">boolean</TableCell>
                    <TableCell className="font-mono text-xs">false</TableCell>
                    <TableCell>The default open state when initially rendered.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">onOpenChange</TableCell>
                    <TableCell className="font-mono text-xs">function</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>Event handler called when the open state changes.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">openDelay</TableCell>
                    <TableCell className="font-mono text-xs">number</TableCell>
                    <TableCell className="font-mono text-xs">700</TableCell>
                    <TableCell>The time in milliseconds to wait before opening the hover card.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">closeDelay</TableCell>
                    <TableCell className="font-mono text-xs">number</TableCell>
                    <TableCell className="font-mono text-xs">300</TableCell>
                    <TableCell>The time in milliseconds to wait before closing the hover card.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-semibold">HoverCardTrigger</h3>
              <p className="text-sm text-muted-foreground mt-2">The element that triggers the hover card when hovered.</p>
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
                    <TableCell className="font-mono text-xs">asChild</TableCell>
                    <TableCell className="font-mono text-xs">boolean</TableCell>
                    <TableCell className="font-mono text-xs">false</TableCell>
                    <TableCell>When true, the trigger will use a child element as the trigger instead of a div.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-semibold">HoverCardContent</h3>
              <p className="text-sm text-muted-foreground mt-2">The component that pops out when the trigger is hovered.</p>
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
                    <TableCell className="font-mono text-xs">align</TableCell>
                    <TableCell className="font-mono text-xs">'start' | 'center' | 'end'</TableCell>
                    <TableCell className="font-mono text-xs">'center'</TableCell>
                    <TableCell>The alignment of the hover card content relative to the trigger.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">sideOffset</TableCell>
                    <TableCell className="font-mono text-xs">number</TableCell>
                    <TableCell className="font-mono text-xs">4</TableCell>
                    <TableCell>The distance in pixels from the trigger.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">className</TableCell>
                    <TableCell className="font-mono text-xs">string</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>Additional CSS class names to apply to the content.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">forceMount</TableCell>
                    <TableCell className="font-mono text-xs">boolean</TableCell>
                    <TableCell className="font-mono text-xs">false</TableCell>
                    <TableCell>Forces the hover card content to be mounted when parent is mounted.</TableCell>
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
            Accessibility considerations for the Hover Card component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Hover Card component follows ARIA best practices to ensure accessibility:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Content is revealed with a delay to prevent unintentional triggers for users with motor control challenges.</li>
            <li>The hover card remains open when focus moves from the trigger to the content, allowing keyboard navigation within the content.</li>
            <li>Proper ARIA roles ensure screen readers announce the relationship between trigger and content.</li>
            <li>The component automatically adds mouse and touch event handlers to manage focus and keyboard navigation.</li>
            <li>Animations and transitions provide visual cues without being too distracting.</li>
            <li>Hover card content is positioned to avoid obscuring important page elements.</li>
            <li>Escape key dismisses the hover card when focused.</li>
          </ul>
          <p className="mt-4">
            Since hover cards depend on hover states, ensure essential information is not only available via hover 
            interaction. Consider providing alternative ways to access the information for touch-only devices.
          </p>
        </CardContent>
      </Card>
    </div>
  );
} 
