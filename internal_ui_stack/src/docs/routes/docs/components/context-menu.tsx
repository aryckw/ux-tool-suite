import { CodeBlock } from '@/lib/components/ui/code-block';
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuCheckboxItem,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
  ContextMenuShortcut
} from '@/lib/components/ui/context-menu';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/lib/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/lib/components/ui/table';

export default function ContextMenuDoc() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Context Menu</h1>
        <p className="text-muted-foreground">
          Displays a menu when right-clicking on an element.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            The Context Menu component provides a custom right-click menu for user interaction.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Context menus provide additional options related to a specific element or section of your application.
            They appear when a user right-clicks on a designated trigger area, offering contextual actions
            relevant to the current content.
          </p>
          <p>
            The Aptima UI Context Menu component is built on top of <code>@radix-ui/react-context-menu</code>, ensuring
            proper accessibility and interaction patterns.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the Context Menu component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Context Menu component is part of the Aptima UI library. You can import it directly:
          </p>
          <CodeBlock language="typescript" code={`import { 
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  // Include other subcomponents as needed
} from '@aptima/ui';`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            Basic usage example of the Context Menu component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <ContextMenu>
              <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">
                Right click here
              </ContextMenuTrigger>
              <ContextMenuContent className="w-64">
                <ContextMenuItem>
                  Open File
                  <ContextMenuShortcut>Ctrl+O</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  Save
                  <ContextMenuShortcut>Ctrl+S</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuSeparator />
                <ContextMenuItem>
                  Rename
                  <ContextMenuShortcut>F2</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  Copy
                  <ContextMenuShortcut>Ctrl+C</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  Cut
                  <ContextMenuShortcut>Ctrl+X</ContextMenuShortcut>
                </ContextMenuItem>
              </ContextMenuContent>
            </ContextMenu>
          </div>

          <CodeBlock language="typescript" code={`import { 
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut
} from '@aptima/ui';

export default function ContextMenuExample() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem>
          Open File
          <ContextMenuShortcut>Ctrl+O</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Save
          <ContextMenuShortcut>Ctrl+S</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSeparator />
        <ContextMenuItem>
          Rename
          <ContextMenuShortcut>F2</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Copy
          <ContextMenuShortcut>Ctrl+C</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Cut
          <ContextMenuShortcut>Ctrl+X</ContextMenuShortcut>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Checkbox Items</CardTitle>
          <CardDescription>
            Using checkboxes in a context menu.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <ContextMenu>
              <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">
                Right click for options
              </ContextMenuTrigger>
              <ContextMenuContent className="w-64">
                <ContextMenuCheckboxItem checked>
                  Show Bookmarks Bar
                </ContextMenuCheckboxItem>
                <ContextMenuCheckboxItem>
                  Show Full URLs
                </ContextMenuCheckboxItem>
                <ContextMenuSeparator />
                <ContextMenuCheckboxItem checked>
                  Always Show Toolbar in Fullscreen
                </ContextMenuCheckboxItem>
              </ContextMenuContent>
            </ContextMenu>
          </div>

          <CodeBlock language="typescript" code={`import { 
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuCheckboxItem,
  ContextMenuSeparator
} from '@aptima/ui';
import { useState } from 'react';

export default function ContextMenuCheckboxExample() {
  const [showBookmarks, setShowBookmarks] = useState(true);
  const [showUrls, setShowUrls] = useState(false);
  const [showToolbar, setShowToolbar] = useState(true);

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">
        Right click for options
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuCheckboxItem 
          checked={showBookmarks}
          onCheckedChange={setShowBookmarks}
        >
          Show Bookmarks Bar
        </ContextMenuCheckboxItem>
        <ContextMenuCheckboxItem 
          checked={showUrls}
          onCheckedChange={setShowUrls}
        >
          Show Full URLs
        </ContextMenuCheckboxItem>
        <ContextMenuSeparator />
        <ContextMenuCheckboxItem 
          checked={showToolbar}
          onCheckedChange={setShowToolbar}
        >
          Always Show Toolbar in Fullscreen
        </ContextMenuCheckboxItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Radio Items</CardTitle>
          <CardDescription>
            Using radio items in a context menu for mutually exclusive options.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <ContextMenu>
              <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">
                Right click for view options
              </ContextMenuTrigger>
              <ContextMenuContent className="w-64">
                <ContextMenuLabel>View Layout</ContextMenuLabel>
                <ContextMenuSeparator />
                <ContextMenuRadioGroup value="details">
                  <ContextMenuRadioItem value="icon">Icon View</ContextMenuRadioItem>
                  <ContextMenuRadioItem value="list">List View</ContextMenuRadioItem>
                  <ContextMenuRadioItem value="details">Details View</ContextMenuRadioItem>
                </ContextMenuRadioGroup>
              </ContextMenuContent>
            </ContextMenu>
          </div>

          <CodeBlock language="typescript" code={`import { 
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuRadioGroup,
  ContextMenuRadioItem
} from '@aptima/ui';
import { useState } from 'react';

export default function ContextMenuRadioExample() {
  const [viewMode, setViewMode] = useState("details");

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">
        Right click for view options
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuLabel>View Layout</ContextMenuLabel>
        <ContextMenuSeparator />
        <ContextMenuRadioGroup value={viewMode} onValueChange={setViewMode}>
          <ContextMenuRadioItem value="icon">Icon View</ContextMenuRadioItem>
          <ContextMenuRadioItem value="list">List View</ContextMenuRadioItem>
          <ContextMenuRadioItem value="details">Details View</ContextMenuRadioItem>
        </ContextMenuRadioGroup>
      </ContextMenuContent>
    </ContextMenu>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Submenu</CardTitle>
          <CardDescription>
            Adding nested submenus within a context menu.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <ContextMenu>
              <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">
                Right click for menu with submenu
              </ContextMenuTrigger>
              <ContextMenuContent className="w-64">
                <ContextMenuItem>
                  Back
                  <ContextMenuShortcut>⌘[</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  Forward
                  <ContextMenuShortcut>⌘]</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuItem>
                  Reload
                  <ContextMenuShortcut>⌘R</ContextMenuShortcut>
                </ContextMenuItem>
                <ContextMenuSub>
                  <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
                  <ContextMenuSubContent className="w-48">
                    <ContextMenuItem>
                      Save Page As...
                      <ContextMenuShortcut>⌘S</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                    <ContextMenuItem>Name Window...</ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem>Developer Tools</ContextMenuItem>
                  </ContextMenuSubContent>
                </ContextMenuSub>
              </ContextMenuContent>
            </ContextMenu>
          </div>

          <CodeBlock language="typescript" code={`import { 
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent
} from '@aptima/ui';

export default function ContextMenuSubMenuExample() {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed text-sm">
        Right click for menu with submenu
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem>
          Back
          <ContextMenuShortcut>⌘[</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Forward
          <ContextMenuShortcut>⌘]</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuItem>
          Reload
          <ContextMenuShortcut>⌘R</ContextMenuShortcut>
        </ContextMenuItem>
        <ContextMenuSub>
          <ContextMenuSubTrigger>More Tools</ContextMenuSubTrigger>
          <ContextMenuSubContent className="w-48">
            <ContextMenuItem>
              Save Page As...
              <ContextMenuShortcut>⌘S</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>Create Shortcut...</ContextMenuItem>
            <ContextMenuItem>Name Window...</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem>Developer Tools</ContextMenuItem>
          </ContextMenuSubContent>
        </ContextMenuSub>
      </ContextMenuContent>
    </ContextMenu>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>
            Detailed API reference for the Context Menu component.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold">ContextMenu</h3>
              <p className="text-sm text-muted-foreground mt-2">The root container for the context menu.</p>
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
                    <TableCell className="font-mono text-xs">modal</TableCell>
                    <TableCell className="font-mono text-xs">boolean</TableCell>
                    <TableCell className="font-mono text-xs">true</TableCell>
                    <TableCell>Whether interaction with the document outside the context menu should be possible.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-semibold">ContextMenuTrigger</h3>
              <p className="text-sm text-muted-foreground mt-2">The area that opens the context menu on right-click.</p>
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
                    <TableCell className="font-mono text-xs">disabled</TableCell>
                    <TableCell className="font-mono text-xs">boolean</TableCell>
                    <TableCell className="font-mono text-xs">false</TableCell>
                    <TableCell>When true, disables the context menu from appearing.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold">ContextMenuContent</h3>
              <p className="text-sm text-muted-foreground mt-2">The component that contains the context menu items.</p>
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
                    <TableCell className="font-mono text-xs">'start'</TableCell>
                    <TableCell>The preferred alignment of the context menu against the trigger.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">sideOffset</TableCell>
                    <TableCell className="font-mono text-xs">number</TableCell>
                    <TableCell className="font-mono text-xs">0</TableCell>
                    <TableCell>The distance in pixels from the trigger.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">loop</TableCell>
                    <TableCell className="font-mono text-xs">boolean</TableCell>
                    <TableCell className="font-mono text-xs">false</TableCell>
                    <TableCell>Whether keyboard navigation should loop from last item to first and vice versa.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold">ContextMenuItem</h3>
              <p className="text-sm text-muted-foreground mt-2">An actionable item in the context menu.</p>
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
                    <TableCell className="font-mono text-xs">inset</TableCell>
                    <TableCell className="font-mono text-xs">boolean</TableCell>
                    <TableCell className="font-mono text-xs">false</TableCell>
                    <TableCell>Whether the item should be indented to accommodate icons.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">disabled</TableCell>
                    <TableCell className="font-mono text-xs">boolean</TableCell>
                    <TableCell className="font-mono text-xs">false</TableCell>
                    <TableCell>When true, prevents the user from interacting with the item.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">variant</TableCell>
                    <TableCell className="font-mono text-xs">'default' | 'destructive'</TableCell>
                    <TableCell className="font-mono text-xs">'default'</TableCell>
                    <TableCell>Visual style for the menu item.</TableCell>
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
            Accessibility considerations for the Context Menu component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Context Menu component follows accessibility best practices:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Follows the WAI-ARIA <a href="https://www.w3.org/WAI/ARIA/apg/patterns/menu/" className="text-primary underline">Menu and Menubutton Pattern</a></li>
            <li>Supports keyboard navigation for menu traversal (arrow keys, Enter, Space, Escape)</li>
            <li>Manages focus properly when opening and closing the menu</li>
            <li>Provides proper ARIA roles, states, and properties for screen reader users</li>
            <li>Includes keyboard shortcuts for common actions</li>
          </ul>
          <p className="mt-4">
            When using context menus in your application:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Always provide an alternative way to access functionality in a context menu</li>
            <li>Use informative and concise labels for menu items</li>
            <li>Group related items together with appropriate labels and separators</li>
            <li>Make sure shortcut hints are visible and properly aligned</li>
            <li>Test with both mouse/pointer and keyboard navigation to ensure accessibility</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
} 
