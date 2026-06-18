import { CodeBlock } from '@/lib/components/ui/code-block';
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/lib/components/ui/table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/lib/components/ui/card';
import { Badge } from '@/lib/components/ui/badge';

export default function TableDoc() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Table</h1>
        <p className="text-muted-foreground">
          A responsive table component for displaying tabular data.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            The Table component is used to organize and display data in a tabular format.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Tables allow users to quickly scan, analyze, and compare data. They're essential for displaying 
            structured information in a way that's easy to read and understand.
          </p>
          <p>
            The Aptima UI Table component provides a responsive and accessible implementation with 
            customizable styles and semantic HTML structure.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the Table component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Table component is part of the Aptima UI library. You can import it directly:
          </p>
          <CodeBlock language="typescript" code={`import { 
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from '@aptima/ui';`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            Basic usage example of the Table component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="not-prose rounded-xl overflow-auto">
            <Table>
              <TableCaption>A list of recent invoices</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Method</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">INV001</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>Credit Card</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">INV002</TableCell>
                  <TableCell>Pending</TableCell>
                  <TableCell>PayPal</TableCell>
                  <TableCell className="text-right">$125.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">INV003</TableCell>
                  <TableCell>Paid</TableCell>
                  <TableCell>Bank Transfer</TableCell>
                  <TableCell className="text-right">$350.00</TableCell>
                </TableRow>
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>Total</TableCell>
                  <TableCell className="text-right">$725.00</TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>

          <CodeBlock language="typescript" code={`import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow
} from '@aptima/ui';

export default function TableExample() {
  return (
    <Table>
      <TableCaption>A list of recent invoices</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Method</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Credit Card</TableCell>
          <TableCell className="text-right">$250.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV002</TableCell>
          <TableCell>Pending</TableCell>
          <TableCell>PayPal</TableCell>
          <TableCell className="text-right">$125.00</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV003</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>Bank Transfer</TableCell>
          <TableCell className="text-right">$350.00</TableCell>
        </TableRow>
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$725.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Badges</CardTitle>
          <CardDescription>
            Using badges to highlight status in a table.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="not-prose rounded-xl overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>User</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Role</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">John Doe</TableCell>
                  <TableCell>john.doe@example.com</TableCell>
                  <TableCell>
                    <Badge variant="secondary">Active</Badge>
                  </TableCell>
                  <TableCell>Admin</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Jane Smith</TableCell>
                  <TableCell>jane.smith@example.com</TableCell>
                  <TableCell>
                    <Badge variant="outline">Away</Badge>
                  </TableCell>
                  <TableCell>Editor</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Robert Johnson</TableCell>
                  <TableCell>robert.johnson@example.com</TableCell>
                  <TableCell>
                    <Badge variant="destructive">Inactive</Badge>
                  </TableCell>
                  <TableCell>Viewer</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <CodeBlock language="typescript" code={`import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@aptima/ui';
import { Badge } from '@aptima/ui';

export default function TableWithBadges() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>User</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">John Doe</TableCell>
          <TableCell>john.doe@example.com</TableCell>
          <TableCell>
            <Badge variant="secondary">Active</Badge>
          </TableCell>
          <TableCell>Admin</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Jane Smith</TableCell>
          <TableCell>jane.smith@example.com</TableCell>
          <TableCell>
            <Badge variant="outline">Away</Badge>
          </TableCell>
          <TableCell>Editor</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Robert Johnson</TableCell>
          <TableCell>robert.johnson@example.com</TableCell>
          <TableCell>
            <Badge variant="destructive">Inactive</Badge>
          </TableCell>
          <TableCell>Viewer</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Responsive Table</CardTitle>
          <CardDescription>
            Creating a responsive table that works on all screen sizes.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p>
            The Table component is already responsive by default, with horizontal scrolling applied 
            when content exceeds the available width. For more complex responsive behavior, you can 
            add additional styling:
          </p>

          <CodeBlock language="typescript" code={`import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@aptima/ui';

export default function ResponsiveTable() {
  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead className="min-w-[150px]">Name</TableHead>
            <TableHead className="hidden md:table-cell">Email</TableHead>
            <TableHead className="hidden sm:table-cell">Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Table rows */}
          <TableRow>
            <TableCell>001</TableCell>
            <TableCell>John Doe</TableCell>
            <TableCell className="hidden md:table-cell">john@example.com</TableCell>
            <TableCell className="hidden sm:table-cell">Active</TableCell>
            <TableCell className="text-right">Edit</TableCell>
          </TableRow>
          {/* More rows... */}
        </TableBody>
      </Table>
    </div>
  );
}`} />
          <p>
            In this example, we're using utility classes to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Ensure certain columns have minimum widths</li>
            <li>Hide less important columns on smaller screens</li>
            <li>Keep the entire table scrollable horizontally when needed</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>
            Detailed API reference for the Table component.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold">Table</h3>
              <p className="text-sm text-muted-foreground mt-2">The main table container component.</p>
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
                    <TableCell className="font-mono text-xs">className</TableCell>
                    <TableCell className="font-mono text-xs">string</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>Additional CSS class names to apply to the table.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <p className="text-sm text-muted-foreground mt-4">
                The Table component extends the HTML <code>&lt;table&gt;</code> element and accepts all its props.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">TableHeader</h3>
              <p className="text-sm text-muted-foreground mt-2">The table header container that wraps header rows.</p>
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
                    <TableCell className="font-mono text-xs">className</TableCell>
                    <TableCell className="font-mono text-xs">string</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>Additional CSS class names to apply to the table header.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <p className="text-sm text-muted-foreground mt-4">
                The TableHeader component extends the HTML <code>&lt;thead&gt;</code> element and accepts all its props.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">TableBody</h3>
              <p className="text-sm text-muted-foreground mt-2">The table body container that wraps table rows.</p>
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
                    <TableCell className="font-mono text-xs">className</TableCell>
                    <TableCell className="font-mono text-xs">string</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>Additional CSS class names to apply to the table body.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <p className="text-sm text-muted-foreground mt-4">
                The TableBody component extends the HTML <code>&lt;tbody&gt;</code> element and accepts all its props.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">TableFooter</h3>
              <p className="text-sm text-muted-foreground mt-2">The table footer container that wraps footer rows.</p>
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
                    <TableCell className="font-mono text-xs">className</TableCell>
                    <TableCell className="font-mono text-xs">string</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>Additional CSS class names to apply to the table footer.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <p className="text-sm text-muted-foreground mt-4">
                The TableFooter component extends the HTML <code>&lt;tfoot&gt;</code> element and accepts all its props.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">TableRow</h3>
              <p className="text-sm text-muted-foreground mt-2">A table row component.</p>
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
                    <TableCell className="font-mono text-xs">className</TableCell>
                    <TableCell className="font-mono text-xs">string</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>Additional CSS class names to apply to the table row.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <p className="text-sm text-muted-foreground mt-4">
                The TableRow component extends the HTML <code>&lt;tr&gt;</code> element and accepts all its props.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">TableHead</h3>
              <p className="text-sm text-muted-foreground mt-2">A header cell component.</p>
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
                    <TableCell className="font-mono text-xs">className</TableCell>
                    <TableCell className="font-mono text-xs">string</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>Additional CSS class names to apply to the table header cell.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <p className="text-sm text-muted-foreground mt-4">
                The TableHead component extends the HTML <code>&lt;th&gt;</code> element and accepts all its props.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">TableCell</h3>
              <p className="text-sm text-muted-foreground mt-2">A data cell component.</p>
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
                    <TableCell className="font-mono text-xs">className</TableCell>
                    <TableCell className="font-mono text-xs">string</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>Additional CSS class names to apply to the table cell.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <p className="text-sm text-muted-foreground mt-4">
                The TableCell component extends the HTML <code>&lt;td&gt;</code> element and accepts all its props.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold">TableCaption</h3>
              <p className="text-sm text-muted-foreground mt-2">A caption component for the table.</p>
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
                    <TableCell className="font-mono text-xs">className</TableCell>
                    <TableCell className="font-mono text-xs">string</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>Additional CSS class names to apply to the table caption.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <p className="text-sm text-muted-foreground mt-4">
                The TableCaption component extends the HTML <code>&lt;caption&gt;</code> element and accepts all its props.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Accessibility</CardTitle>
          <CardDescription>
            Accessibility considerations for the Table component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Table component follows best practices for accessible tables:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Uses proper semantic HTML elements (<code>&lt;table&gt;</code>, <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, etc.)</li>
            <li>Includes support for <code>&lt;caption&gt;</code> to describe the table's purpose</li>
            <li>Uses <code>&lt;th&gt;</code> elements for headers, which helps screen readers identify table structure</li>
            <li>Supports the <code>scope</code> attribute on <code>&lt;th&gt;</code> elements</li>
            <li>Row and column headers are visually distinct from data cells</li>
            <li>Table is horizontally scrollable when content overflows, preserving access to all data</li>
            <li>Hover and selected states have sufficient color contrast</li>
          </ul>
          <p className="mt-4">
            For complex tables with many columns, consider:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Adding <code>id</code> attributes to header cells and <code>headers</code> attributes to data cells for complex tables</li>
            <li>Using the <code>aria-describedby</code> attribute to associate cells with explanatory text</li>
            <li>Implementing responsive patterns that prioritize important content on small screens</li>
            <li>Providing alternative ways to access data that might be hidden in responsive views</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
} 
