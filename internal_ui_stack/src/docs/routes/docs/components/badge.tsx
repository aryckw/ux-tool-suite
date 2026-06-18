import { CodeBlock } from '@/lib/components/ui/code-block';
import { Badge } from '@/lib/components/ui/badge';
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
import { Sparkle, Check, X } from 'lucide-react';

export default function BadgeDoc() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Badge</h1>
        <p className="text-muted-foreground">
          Displays a small count, label, or status descriptor.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            The Badge component is used to highlight an item's status for quick
            recognition.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Badges are small visual indicators, typically used to display
            counts, statuses, or to flag content for attention. They can be used
            for notifications, labels, or to indicate new or unread items.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the Badge component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Badge component is part of the Aptima UI library. You can import
            it directly:
          </p>
          <CodeBlock
            language="typescript"
            code={`import { Badge } from '@aptima/ui';`}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            Basic usage example of the Badge component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap gap-4">
            <Badge>Badge</Badge>
          </div>

          <CodeBlock
            language="typescript"
            code={`import { Badge } from '@aptima/ui';

export default function BadgeExample() {
  return <Badge>Badge</Badge>;
}`}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Variants</CardTitle>
          <CardDescription>
            The Badge component comes in different variants.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap gap-4">
            <Badge variant="default">Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>

          <CodeBlock
            language="typescript"
            code={`import { Badge } from '@aptima/ui';

export default function BadgeVariantsExample() {
  return (
    <div className="flex flex-wrap gap-4">
      <Badge variant="default">Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  );
}`}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Icon</CardTitle>
          <CardDescription>
            Badges can include icons to provide additional visual context.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap gap-4">
            <Badge>
              <Sparkle size={12} />
              New
            </Badge>
            <Badge variant="secondary">
              <Check size={12} />
              Completed
            </Badge>
            <Badge variant="destructive">
              <X size={12} />
              Error
            </Badge>
          </div>

          <CodeBlock
            language="typescript"
            code={`import { Badge } from '@aptima/ui';
import { Sparkle, Check, X } from 'lucide-react';

export default function BadgeWithIconExample() {
  return (
    <div className="flex flex-wrap gap-4">
      <Badge>
        <Sparkle size={12} />
        New
      </Badge>
      <Badge variant="secondary">
        <Check size={12} />
        Completed
      </Badge>
      <Badge variant="destructive">
        <X size={12} />
        Error
      </Badge>
    </div>
  );
}`}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>As Link</CardTitle>
          <CardDescription>
            Badges can be used as links by using the asChild prop with an anchor
            element.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap gap-4">
            <Badge>
              <a href="#aslink">Badge Link</a>
            </Badge>
          </div>

          <CodeBlock
            language="typescript"
            code={`import { Badge } from '@aptima/ui';

export default function BadgeAsLinkExample() {
  return (
    <Badge>
      <a href="#badge-link">Badge Link</a>
    </Badge>
  );
}`}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Custom Styling</CardTitle>
          <CardDescription>
            Badges can be customized with additional CSS classes.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap gap-4">
            <Badge className="rounded-sm">Square</Badge>
            <Badge className="rounded-full px-3">Rounded</Badge>
            <Badge className="text-xs py-0">Small</Badge>
            <Badge className="text-sm py-1 px-3">Large</Badge>
          </div>

          <CodeBlock
            language="typescript"
            code={`import { Badge } from '@aptima/ui';

export default function CustomBadgeExample() {
  return (
    <div className="flex flex-wrap gap-4">
      <Badge className="rounded-sm">Square</Badge>
      <Badge className="rounded-full px-3">Rounded</Badge>
      <Badge className="text-xs py-0">Small</Badge>
      <Badge className="text-sm py-1 px-3">Large</Badge>
    </div>
  );
}`}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Common Use Cases</CardTitle>
          <CardDescription>
            Examples of common use cases for badges.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 border rounded-md">
              <span>Inbox</span>
              <Badge variant="secondary">3 new</Badge>
            </div>
            <div className="flex justify-between items-center p-4 border rounded-md">
              <span>Feature</span>
              <Badge variant="outline">Coming soon</Badge>
            </div>
            <div className="flex justify-between items-center p-4 border rounded-md">
              <span>Profile completion</span>
              <Badge variant="default">80%</Badge>
            </div>
          </div>

          <CodeBlock
            language="typescript"
            code={`import { Badge } from '@aptima/ui';

export default function BadgeUseCasesExample() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center p-4 border rounded-md">
        <span>Inbox</span>
        <Badge variant="secondary">3 new</Badge>
      </div>
      <div className="flex justify-between items-center p-4 border rounded-md">
        <span>Feature</span>
        <Badge variant="outline">Coming soon</Badge>
      </div>
      <div className="flex justify-between items-center p-4 border rounded-md">
        <span>Profile completion</span>
        <Badge variant="default">80%</Badge>
      </div>
    </div>
  );
}`}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>
            Detailed API reference for the Badge component.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">Badge Props</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                The Badge component accepts the following props:
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
                      <code className="text-xs">
                        "default" | "secondary" | "destructive" | "outline"
                      </code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">"default"</code>
                    </TableCell>
                    <TableCell>The visual style of the badge.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">asChild</TableCell>
                    <TableCell>
                      <code className="text-xs">boolean</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">false</code>
                    </TableCell>
                    <TableCell>
                      When true, the component will render its child directly,
                      applying props and behavior to it.
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
                      Additional CSS classes to add to the badge.
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-medium">Examples</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                Here are a few more examples of using the Badge component in
                different contexts:
              </p>
              <CodeBlock
                language="typescript"
                code={`// Status indicator
<Badge variant={status === 'active' ? 'default' : 'outline'}>
  {status}
</Badge>

// Label with counter
<div className="flex items-center gap-2">
  <span>Messages</span>
  <Badge variant="secondary">{unreadCount}</Badge>
</div>

// Tag
<Badge variant="outline" className="rounded-full">
  #design
</Badge>

// Interactive badge
<Badge asChild>
  <button onClick={handleClick}>
    <User size={12} />
    5 users
  </button>
</Badge>`}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Accessibility</CardTitle>
          <CardDescription>
            Accessibility considerations for the Badge component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            When using the Badge component, consider the following accessibility
            best practices:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Ensure there is sufficient color contrast between the badge text
              and its background for all variants.
            </li>
            <li>
              When using badges to indicate important information, don't rely
              solely on color to convey meaning. Include text or icons to help
              users who may have color vision deficiencies.
            </li>
            <li>Keep badge text concise and clear for better readability.</li>
            <li>
              If a badge is interactive (using the asChild prop with a button or
              link), ensure it has appropriate focus styles.
            </li>
            <li>
              For badges indicating counts or numerical values, consider using
              ARIA attributes like{' '}
              <code className="text-xs bg-muted px-1 rounded">aria-label</code>{' '}
              to provide more context for screen reader users.
            </li>
            <li>
              Avoid using badges for critical information that all users must
              see and understand.
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}

