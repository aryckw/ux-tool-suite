import { CodeBlock } from '@/lib/components/ui/code-block';
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
import { ColumnDef } from '@tanstack/react-table';
import { DataTable } from '@/lib/components/ui/data-table';
import { DataTableColumnHeader } from '@/lib/components/ui/column-header';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

// Sample data for the demo
const data: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'User',
  },
  {
    id: '3',
    name: 'Bob Johnson',
    email: 'bob@example.com',
    role: 'Editor',
  },
];

export default function DataTableDoc() {
  // Sample columns for the demo
  const columns: ColumnDef<User>[] = [
    {
      accessorKey: 'name',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Name" />
      ),
    },
    {
      accessorKey: 'email',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Email" />
      ),
    },
    {
      accessorKey: 'role',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Role" />
      ),
    },
  ];

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Data Table</h1>
        <p className="text-muted-foreground">
          A powerful table component for displaying and interacting with tabular
          data.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            The DataTable component provides a powerful and flexible way to
            display, sort, and paginate tabular data.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Built on top of TanStack Table (React Table), the DataTable
            component offers a simple API while providing powerful features like
            sorting, pagination, and custom cell rendering.
          </p>

          <div className="border rounded-md p-4">
            <DataTable
              columns={columns}
              data={data}
              onDataUpdate={() => {
                // empty scope
              }}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the DataTable component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The DataTable component is part of the Aptima UI library. You can
            import it directly:
          </p>
          <CodeBlock language="typescript" code={`import { DataTable } from '@aptima/ui';`} />

          <p>You'll also need to set up TanStack Table in your project:</p>
          <CodeBlock language="typescript" code={`npm install @tanstack/react-table`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            Basic usage of the DataTable component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p>Here's how to use the DataTable component:</p>

          <CodeBlock language="typescript" code={`import { DataTable } from '@aptima/ui';
import { ColumnDef } from '@tanstack/react-table';

// Define your data type
interface User {
  id: string;
  name: string;
  email: string;
}

// Create column definitions
const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
];

// Sample data
const data: User[] = [
  { id: "1", name: "John Doe", email: "john@example.com" },
  { id: "2", name: "Jane Smith", email: "jane@example.com" },
];

// In your component
function UserTable() {
  return <DataTable columns={columns} data={data} />;
}`} />

          <p>With pagination enabled:</p>

          <CodeBlock language="typescript" code={`<DataTable 
  columns={columns} 
  data={data} 
  opts={{ 
    usePagination: true, 
    pageSize: 10 
  }} 
/>`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>
            Detailed API reference for the DataTable component.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">DataTable Props</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                The DataTable component accepts the following props:
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
                    <TableCell className="font-mono">columns</TableCell>
                    <TableCell>
                      <code className="text-xs">
                        ColumnDef&lt;TData, TValue&gt;[]
                      </code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">required</code>
                    </TableCell>
                    <TableCell>
                      An array of column definitions for the table.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">data</TableCell>
                    <TableCell>
                      <code className="text-xs">TData[]</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">required</code>
                    </TableCell>
                    <TableCell>
                      An array of data to display in the table.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">opts</TableCell>
                    <TableCell>
                      <code className="text-xs">DataTableOptions</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>
                      Options for the data table, such as pagination settings.
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-medium">DataTableOptions</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                The DataTableOptions object accepts the following properties:
              </p>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Property</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Default</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-mono">usePagination</TableCell>
                    <TableCell>
                      <code className="text-xs">boolean</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">false</code>
                    </TableCell>
                    <TableCell>
                      Whether to enable pagination for the table.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">pageSize</TableCell>
                    <TableCell>
                      <code className="text-xs">number</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">10</code>
                    </TableCell>
                    <TableCell>
                      The number of rows to display per page when pagination is
                      enabled.
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-medium">Examples</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                Here is a comprehensive example with sorting and pagination:
              </p>
              <CodeBlock language="typescript" code={`import { DataTable, DataTableColumnHeader } from '@aptima/ui';
import { ColumnDef } from '@tanstack/react-table';

// Example data type
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

// Sample data
const data: User[] = [
  { id: "1", name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: "2", name: "Jane Smith", email: "jane@example.com", role: "User" },
  // ...more data
];

// Column definitions with sortable headers
const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
  },
  {
    accessorKey: "role",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Role" />
    ),
  },
];

// Usage in a component with pagination enabled
function UsersTable() {
  return (
    <DataTable 
      columns={columns} 
      data={data} 
      onDataUpdate={data => {
        // respond to updated table data
      }}
      opts={{ 
        usePagination: true, 
        pageSize: 5 
      }} 
    />
  );
}`} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Accessibility</CardTitle>
          <CardDescription>
            Accessibility considerations for the DataTable component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>The DataTable component is designed with accessibility in mind:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Uses semantic HTML table elements for proper screen reader
              navigation.
            </li>
            <li>Provides responsive layout for different screen sizes.</li>
            <li>When using pagination, includes properly labeled controls.</li>
            <li>Maintains appropriate color contrast for all elements.</li>
            <li>
              Sortable headers provide clear visual feedback on sort direction.
            </li>
            <li>Empty state messaging for when there is no data to display.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
