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
import { Button } from '@/lib/components/ui/button';
import { CaretSortIcon } from '@radix-ui/react-icons';

export default function ColumnHeaderDoc() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Column Header</h1>
        <p className="text-muted-foreground">
          A header component for data tables that provides sorting
          functionality.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            The DataTableColumnHeader component is designed for use with data
            tables, providing a consistent header with integrated sorting
            capabilities.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            This component works seamlessly with TanStack Table to provide
            sortable column headers in data tables. It displays the column title
            and manages the sorting state with appropriate icons.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the ColumnHeader component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The ColumnHeader component is part of the Aptima UI library. You can
            import it directly:
          </p>
          <CodeBlock language="typescript" code={`import { DataTableColumnHeader } from '@aptima/ui';`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            Basic usage of the DataTableColumnHeader component within a TanStack
            Table context.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p>
            The component is typically used within column definitions for a
            TanStack Table:
          </p>

          <CodeBlock language="typescript" code={`import { DataTableColumnHeader } from '@aptima/ui';
import { ColumnDef } from '@tanstack/react-table';

// Example column definition for a data table
const columns: ColumnDef<YourDataType>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
  },
  // Additional columns...
];`} />

          <div className="border rounded-md p-4">
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                className="h-8 flex items-center"
              >
                <span>Example Column</span>
                <CaretSortIcon className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>
            Detailed API reference for the DataTableColumnHeader component.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">
                DataTableColumnHeader Props
              </h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                The DataTableColumnHeader component accepts the following props:
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
                    <TableCell className="font-mono">column</TableCell>
                    <TableCell>
                      <code className="text-xs">
                        Column&lt;TData, TValue&gt;
                      </code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">required</code>
                    </TableCell>
                    <TableCell>
                      The column definition from TanStack Table.
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">title</TableCell>
                    <TableCell>
                      <code className="text-xs">string</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">required</code>
                    </TableCell>
                    <TableCell>
                      The text to display as the column title.
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
                      Additional CSS classes to add to the header.
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-medium">Examples</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                Here is a comprehensive example using the DataTableColumnHeader
                in a data table:
              </p>
              <CodeBlock language="typescript" code={`import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from '@tanstack/react-table';
import { DataTableColumnHeader, Table, TableBody, TableCell, TableHeader, TableRow } from '@aptima/ui';
import { useState } from 'react';

// Example data type
interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

// Column definitions
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

// Usage in a component
function UsersTable({ data }: { data: User[] }) {
  const [sorting, setSorting] = useState<SortingState>([]);
  
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>
      <TableBody>
        {table.getRowModel().rows?.length ? (
          table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={columns.length} className="h-24 text-center">
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
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
            Accessibility considerations for the DataTableColumnHeader
            component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The DataTableColumnHeader component is designed with accessibility
            in mind:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Uses semantic HTML elements to ensure proper screen reader
              navigation.
            </li>
            <li>
              Includes clear visual indicators for the current sort direction.
            </li>
            <li>
              Provides dropdown controls for sorting that are keyboard
              accessible.
            </li>
            <li>Maintains high color contrast for better visibility.</li>
            <li>Includes hover and focus states for interactive elements.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
