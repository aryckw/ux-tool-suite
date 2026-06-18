import { CodeBlock } from '@/lib/components/ui/code-block';
import { Separator } from '@/lib/components/ui/separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/lib/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/lib/components/ui/table';

export default function SeparatorDoc() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Separator</h1>
        <p className="text-muted-foreground">
          A visual divider between content with accessible orientation options.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            The Separator component creates a visual divider between content.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Separators are useful for visually dividing content into distinct sections. They help create
            visual hierarchy and improve the readability and organization of interfaces.
          </p>
          <p>
            The Aptima UI Separator component is built on top of <code>@radix-ui/react-separator</code>, providing
            a customizable and accessible divider that can be oriented horizontally or vertically.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the Separator component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Separator component is part of the Aptima UI library. You can import it directly:
          </p>
          <CodeBlock language="typescript" code={`import { Separator } from '@aptima/ui';`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            Basic usage example of the Separator component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium">Horizontal Separator (Default)</h4>
              <p className="text-sm text-muted-foreground">This section is divided from the next with a horizontal separator.</p>
              <Separator className="my-4" />
              <p className="text-sm text-muted-foreground">This content appears below the separator.</p>
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { Separator } from '@aptima/ui';

export default function BasicSeparator() {
  return (
    <div className="space-y-4">
      <div>
        <h4 className="text-sm font-medium">Horizontal Separator (Default)</h4>
        <p className="text-sm text-muted-foreground">This section is divided from the next with a horizontal separator.</p>
        <Separator className="my-4" />
        <p className="text-sm text-muted-foreground">This content appears below the separator.</p>
      </div>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Vertical Orientation</CardTitle>
          <CardDescription>
            Using the Separator with vertical orientation.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <div className="flex h-5 items-center space-x-4 text-sm">
              <div>Side A</div>
              <Separator orientation="vertical" />
              <div>Side B</div>
              <Separator orientation="vertical" />
              <div>Side C</div>
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { Separator } from '@aptima/ui';

export default function VerticalSeparator() {
  return (
    <div className="flex h-5 items-center space-x-4 text-sm">
      <div>Side A</div>
      <Separator orientation="vertical" />
      <div>Side B</div>
      <Separator orientation="vertical" />
      <div>Side C</div>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Styling</CardTitle>
          <CardDescription>
            Customizing the appearance of the Separator.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium">Custom Color</h4>
              <p className="text-sm text-muted-foreground">A separator with a custom color.</p>
              <Separator className="my-4 bg-primary" />
              <p className="text-sm text-muted-foreground">Content below the colored separator.</p>
            </div>
            <div>
              <h4 className="text-sm font-medium">Custom Thickness</h4>
              <p className="text-sm text-muted-foreground">A separator with increased thickness.</p>
              <Separator className="my-4 h-0.5" />
              <p className="text-sm text-muted-foreground">Content below the thicker separator.</p>
            </div>
            <div>
              <h4 className="text-sm font-medium">Dashed Style</h4>
              <p className="text-sm text-muted-foreground">A separator with a dashed style.</p>
              <div className="relative my-4">
                <Separator className="border-t border-dashed border-border h-0" />
              </div>
              <p className="text-sm text-muted-foreground">Content below the dashed separator.</p>
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { Separator } from '@aptima/ui';

export default function StyledSeparators() {
  return (
    <div className="space-y-4">
      <div>
        <h4 className="text-sm font-medium">Custom Color</h4>
        <p className="text-sm text-muted-foreground">A separator with a custom color.</p>
        <Separator className="my-4 bg-primary" />
        <p className="text-sm text-muted-foreground">Content below the colored separator.</p>
      </div>
      <div>
        <h4 className="text-sm font-medium">Custom Thickness</h4>
        <p className="text-sm text-muted-foreground">A separator with increased thickness.</p>
        <Separator className="my-4 h-0.5" />
        <p className="text-sm text-muted-foreground">Content below the thicker separator.</p>
      </div>
      <div>
        <h4 className="text-sm font-medium">Dashed Style</h4>
        <p className="text-sm text-muted-foreground">A separator with a dashed style.</p>
        <div className="relative my-4">
          <Separator className="border-t border-dashed border-border h-0" />
        </div>
        <p className="text-sm text-muted-foreground">Content below the dashed separator.</p>
      </div>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Contextual Usage</CardTitle>
          <CardDescription>
            Using the Separator in different interface contexts.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium">Menu Items</h4>
              <div className="py-2">
                <div className="px-2 py-1.5 hover:bg-muted rounded-md transition-colors cursor-pointer">Profile</div>
                <div className="px-2 py-1.5 hover:bg-muted rounded-md transition-colors cursor-pointer">Settings</div>
                <Separator className="my-2" />
                <div className="px-2 py-1.5 hover:bg-muted rounded-md transition-colors cursor-pointer">Help</div>
                <div className="px-2 py-1.5 hover:bg-muted rounded-md transition-colors cursor-pointer">About</div>
                <Separator className="my-2" />
                <div className="px-2 py-1.5 hover:bg-muted text-destructive rounded-md transition-colors cursor-pointer">Logout</div>
              </div>
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { Separator } from '@aptima/ui';

export default function MenuSeparatorExample() {
  return (
    <div className="py-2">
      <div className="px-2 py-1.5 hover:bg-muted rounded-md transition-colors cursor-pointer">Profile</div>
      <div className="px-2 py-1.5 hover:bg-muted rounded-md transition-colors cursor-pointer">Settings</div>
      <Separator className="my-2" />
      <div className="px-2 py-1.5 hover:bg-muted rounded-md transition-colors cursor-pointer">Help</div>
      <div className="px-2 py-1.5 hover:bg-muted rounded-md transition-colors cursor-pointer">About</div>
      <Separator className="my-2" />
      <div className="px-2 py-1.5 hover:bg-muted text-destructive rounded-md transition-colors cursor-pointer">Logout</div>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>
            Detailed API reference for the Separator component.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold">Separator</h3>
              <p className="text-sm text-muted-foreground mt-2">A visible divider that separates content.</p>
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
                    <TableCell className="font-mono text-xs">orientation</TableCell>
                    <TableCell className="font-mono text-xs">'horizontal' | 'vertical'</TableCell>
                    <TableCell className="font-mono text-xs">'horizontal'</TableCell>
                    <TableCell>The orientation of the separator.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">decorative</TableCell>
                    <TableCell className="font-mono text-xs">boolean</TableCell>
                    <TableCell className="font-mono text-xs">true</TableCell>
                    <TableCell>When true, separator is considered decorative and not announced by screen readers.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">className</TableCell>
                    <TableCell className="font-mono text-xs">string</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>Additional CSS class names to apply to the separator.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <p className="text-sm text-muted-foreground mt-4">
                The Separator component extends the HTML <code>&lt;div&gt;</code> element and accepts all its props.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Accessibility</CardTitle>
          <CardDescription>
            Accessibility considerations for the Separator component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Separator component follows accessibility best practices:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Uses appropriate ARIA roles based on the orientation: <code>separator</code> for non-decorative separators</li>
            <li>When <code>decorative</code> is set to true (default), the separator is hidden from screen readers as it's purely visual</li>
            <li>When <code>decorative</code> is set to false, the separator is announced by screen readers as a boundary between content sections</li>
            <li>The <code>orientation</code> property ensures appropriate rendering and semantics for both horizontal and vertical separators</li>
            <li>Sufficient color contrast ensures the separator is visible against its background</li>
          </ul>
          <p className="mt-4">
            When using separators in your interface:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use separators consistently throughout your interface to establish predictable patterns</li>
            <li>Consider whether your separator is decorative (most are) or semantically meaningful</li>
            <li>Avoid relying solely on separators to convey information or relationships between content</li>
            <li>Ensure sufficient spacing around separators to clearly distinguish content sections</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
} 
