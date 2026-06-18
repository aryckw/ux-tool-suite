import { CodeBlock } from '@/lib/components/ui/code-block';
import React from 'react';
import { 
  Command, 
  CommandDialog, 
  CommandInput, 
  CommandList, 
  CommandEmpty, 
  CommandGroup, 
  CommandItem, 
  CommandShortcut, 
  CommandSeparator 
} from '@/lib/components/ui/command';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/lib/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/lib/components/ui/table';
import { Button } from '@/lib/components/ui/button';
import { Calendar, Search, Settings } from 'lucide-react';

export default function CommandDoc() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Command</h1>
        <p className="text-muted-foreground">
          Fast, composable command menu for React applications.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            The Command component is a searchable command palette that helps users navigate and take actions quickly using keyboard commands.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Command palettes provide a keyboard-first interface for navigating an app and performing tasks quickly. They're becoming a standard feature in modern applications, allowing users to search through different commands without digging through menus.
          </p>
          <p>
            The Aptima UI Command component is built on top of <code>cmdk</code>, providing a fully accessible command palette with keyboard navigation, search functionality, and customizable styling.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the Command component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Command component is part of the Aptima UI library. You can import it directly:
          </p>
          <CodeBlock language="typescript" code={`import { 
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator
} from '@aptima/ui';`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            Basic usage example of the Command component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="not-prose flex items-center justify-center">
            <Command className="rounded-lg border shadow-md">
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem>
                    <span>Calendar</span>
                  </CommandItem>
                  <CommandItem>
                    <span>Search Documentation</span>
                    <CommandShortcut>⌘ D</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <span>Settings</span>
                  </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Theme">
                  <CommandItem>
                    <span>Light</span>
                  </CommandItem>
                  <CommandItem>
                    <span>Dark</span>
                  </CommandItem>
                  <CommandItem>
                    <span>System</span>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </div>

          <CodeBlock language="typescript" code={`import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator
} from '@aptima/ui';

export default function CommandExample() {
  return (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <span>Search Documentation</span>
            <CommandShortcut>⌘ D</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Settings</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Theme">
          <CommandItem>
            <span>Light</span>
          </CommandItem>
          <CommandItem>
            <span>Dark</span>
          </CommandItem>
          <CommandItem>
            <span>System</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Command Dialog</CardTitle>
          <CardDescription>
            Using the Command component as a dialog.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-center">
            <Button
              onClick={() => setOpen(true)}
            >
              Open Command Menu
            </Button>
            <CommandDialog open={open} onOpenChange={setOpen}>
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem>
                    <span>Calendar</span>
                  </CommandItem>
                  <CommandItem>
                    <span>Search Documentation</span>
                    <CommandShortcut>⌘ D</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <span>Settings</span>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </CommandDialog>
          </div>

          <CodeBlock language="typescript" code={`import { useState } from 'react';
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut
} from '@aptima/ui';
import { Button } from '@aptima/ui';

export default function CommandDialogExample() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
      >
        Open Command Menu
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <span>Search Documentation</span>
              <CommandShortcut>⌘ D</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <span>Settings</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Icons</CardTitle>
          <CardDescription>
            Adding icons to command items for better visual cues.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="not-prose flex items-center justify-center">
            <Command className="rounded-lg border shadow-md">
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Actions">
                  <CommandItem>
                    <Calendar size={16} className="mr-2" />
                    <span>Calendar</span>
                  </CommandItem>
                  <CommandItem>
                    <Search size={16} className="mr-2" />
                    <span>Search</span>
                    <CommandShortcut>⌘ K</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <Settings size={16} className="mr-2" />
                    <span>Settings</span>
                    <CommandShortcut>⌘ S</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </Command>
          </div>

          <CodeBlock language="typescript" code={`import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut
} from '@aptima/ui';
import { Calendar, Search, Settings } from 'lucide-react';

export default function CommandWithIconsExample() {
  return (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Actions">
          <CommandItem>
            <Calendar size={16} className="mr-2" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <Search size={16} className="mr-2" />
            <span>Search</span>
            <CommandShortcut>⌘ K</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings size={16} className="mr-2" />
            <span>Settings</span>
            <CommandShortcut>⌘ S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>
            Detailed API reference for the Command component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div>
            <h3 className="text-lg font-medium">Command</h3>
            <p className="text-sm text-muted-foreground mt-1 mb-3">
              The root component that wraps all command elements.
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
                  <TableCell>Additional CSS classes to add to the command container.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono">loop</TableCell>
                  <TableCell>
                    <code className="text-xs">boolean</code>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs">false</code>
                  </TableCell>
                  <TableCell>When true, keyboard navigation will loop from last item to first and vice versa.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div>
            <h3 className="text-lg font-medium">CommandDialog</h3>
            <p className="text-sm text-muted-foreground mt-1 mb-3">
              A dialog wrapper for the Command component.
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
                  <TableCell className="font-mono">open</TableCell>
                  <TableCell>
                    <code className="text-xs">boolean</code>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs">false</code>
                  </TableCell>
                  <TableCell>Whether the dialog is open.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono">onOpenChange</TableCell>
                  <TableCell>
                    <code className="text-xs">(open: boolean) =&gt; void</code>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs">undefined</code>
                  </TableCell>
                  <TableCell>Callback when the open state changes.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono">title</TableCell>
                  <TableCell>
                    <code className="text-xs">string</code>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs">"Command Palette"</code>
                  </TableCell>
                  <TableCell>Dialog title for screen readers.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono">description</TableCell>
                  <TableCell>
                    <code className="text-xs">string</code>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs">"Search for a command to run..."</code>
                  </TableCell>
                  <TableCell>Dialog description for screen readers.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div>
            <h3 className="text-lg font-medium">CommandInput</h3>
            <p className="text-sm text-muted-foreground mt-1 mb-3">
              The search input for the command menu.
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
                  <TableCell className="font-mono">placeholder</TableCell>
                  <TableCell>
                    <code className="text-xs">string</code>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs">undefined</code>
                  </TableCell>
                  <TableCell>Placeholder text for the input.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono">className</TableCell>
                  <TableCell>
                    <code className="text-xs">string</code>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs">undefined</code>
                  </TableCell>
                  <TableCell>Additional CSS classes for the input.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono">value</TableCell>
                  <TableCell>
                    <code className="text-xs">string</code>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs">undefined</code>
                  </TableCell>
                  <TableCell>Controlled value for the input.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono">onValueChange</TableCell>
                  <TableCell>
                    <code className="text-xs">(value: string) =&gt; void</code>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs">undefined</code>
                  </TableCell>
                  <TableCell>Callback when the input value changes.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div>
            <h3 className="text-lg font-medium">CommandList</h3>
            <p className="text-sm text-muted-foreground mt-1 mb-3">
              Container for the command items list.
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
                  <TableCell>Additional CSS classes for the list container.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div>
            <h3 className="text-lg font-medium">CommandEmpty</h3>
            <p className="text-sm text-muted-foreground mt-1 mb-3">
              Displayed when no results are found.
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
                  <TableCell>Additional CSS classes for the empty state.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div>
            <h3 className="text-lg font-medium">CommandGroup</h3>
            <p className="text-sm text-muted-foreground mt-1 mb-3">
              Groups related command items.
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
                  <TableCell className="font-mono">heading</TableCell>
                  <TableCell>
                    <code className="text-xs">React.ReactNode</code>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs">undefined</code>
                  </TableCell>
                  <TableCell>Heading title for the group.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono">className</TableCell>
                  <TableCell>
                    <code className="text-xs">string</code>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs">undefined</code>
                  </TableCell>
                  <TableCell>Additional CSS classes for the group.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div>
            <h3 className="text-lg font-medium">CommandItem</h3>
            <p className="text-sm text-muted-foreground mt-1 mb-3">
              Individual command item that users can select.
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
                  <TableCell>Additional CSS classes for the item.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono">disabled</TableCell>
                  <TableCell>
                    <code className="text-xs">boolean</code>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs">false</code>
                  </TableCell>
                  <TableCell>Whether the item is disabled.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono">onSelect</TableCell>
                  <TableCell>
                    <code className="text-xs">(value: string) =&gt; void</code>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs">undefined</code>
                  </TableCell>
                  <TableCell>Callback when the item is selected.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono">value</TableCell>
                  <TableCell>
                    <code className="text-xs">string</code>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs">undefined</code>
                  </TableCell>
                  <TableCell>Value passed to onSelect when selected.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div>
            <h3 className="text-lg font-medium">CommandShortcut</h3>
            <p className="text-sm text-muted-foreground mt-1 mb-3">
              Displays keyboard shortcut hint for an item.
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
                  <TableCell>Additional CSS classes for the shortcut.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div>
            <h3 className="text-lg font-medium">CommandSeparator</h3>
            <p className="text-sm text-muted-foreground mt-1 mb-3">
              Visual separator between command groups.
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
                  <TableCell>Additional CSS classes for the separator.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Accessibility</CardTitle>
          <CardDescription>
            Accessibility considerations for the Command component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Command component follows best practices for accessibility, making it usable for everyone:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Fully keyboard navigable with arrow keys for selecting items.</li>
            <li>Implements proper ARIA attributes for screen readers.</li>
            <li>When used as a dialog, returns focus to the activating element when closed.</li>
            <li>Command items are announced properly by screen readers.</li>
            <li>Proper focus management for keyboard users.</li>
            <li>Clear visual indication of focused and selected items.</li>
            <li>Support for keyboard shortcuts, enhancing usability for power users.</li>
            <li>Empty state messaging for when no results match a search query.</li>
            <li>Logical grouping of related commands for better organization.</li>
            <li>Responsive design that works across different screen sizes.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
} 
