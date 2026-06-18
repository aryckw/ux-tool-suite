import { CodeBlock } from '@/lib/components/ui/code-block';
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarLabel,
  MenubarShortcut,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent
} from '@/lib/components/ui/menubar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/lib/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/lib/components/ui/table';

export default function MenubarDoc() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Menubar</h1>
        <p className="text-muted-foreground">
          A visually persistent menu common in desktop applications.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            The Menubar component provides a horizontal menu typically positioned at the top of an application.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Menubars are a common UI pattern in desktop applications that provide access to the primary functionality 
            of your application. They visually present a hierarchy of commands and options organized into menu categories.
          </p>
          <p>
            The Aptima UI Menubar component is built on top of <code>@radix-ui/react-menubar</code>, ensuring
            proper accessibility, keyboard navigation, and consistent behavior.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the Menubar component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Menubar component is part of the Aptima UI library. You can import it directly:
          </p>
          <CodeBlock language="typescript" code={`import { 
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  // Include other subcomponents as needed
} from '@aptima/ui';`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            Basic usage example of the Menubar component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>File</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    New Window <MenubarShortcut>⌘N</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    Save <MenubarShortcut>⌘S</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Save As... <MenubarShortcut>⇧⌘S</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>Edit</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>
                    Undo <MenubarShortcut>⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
                  </MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>
                    Cut <MenubarShortcut>⌘X</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Copy <MenubarShortcut>⌘C</MenubarShortcut>
                  </MenubarItem>
                  <MenubarItem>
                    Paste <MenubarShortcut>⌘V</MenubarShortcut>
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
              <MenubarMenu>
                <MenubarTrigger>View</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Zoom In <MenubarShortcut>⌘+</MenubarShortcut></MenubarItem>
                  <MenubarItem>Zoom Out <MenubarShortcut>⌘-</MenubarShortcut></MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Toggle Fullscreen</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>

          <CodeBlock language="typescript" code={`import { 
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarShortcut
} from '@aptima/ui';

export default function MenubarExample() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New Tab <MenubarShortcut>⌘T</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            New Window <MenubarShortcut>⌘N</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Save <MenubarShortcut>⌘S</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Save As... <MenubarShortcut>⇧⌘S</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Undo <MenubarShortcut>⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarItem>
            Cut <MenubarShortcut>⌘X</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Copy <MenubarShortcut>⌘C</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Paste <MenubarShortcut>⌘V</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Zoom In <MenubarShortcut>⌘+</MenubarShortcut></MenubarItem>
          <MenubarItem>Zoom Out <MenubarShortcut>⌘-</MenubarShortcut></MenubarItem>
          <MenubarSeparator />
          <MenubarItem>Toggle Fullscreen</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Checkbox Items</CardTitle>
          <CardDescription>
            Using checkbox items in menus to toggle options.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>Options</MenubarTrigger>
                <MenubarContent>
                  <MenubarLabel>View Options</MenubarLabel>
                  <MenubarSeparator />
                  <MenubarCheckboxItem checked>
                    Show Status Bar
                  </MenubarCheckboxItem>
                  <MenubarCheckboxItem>
                    Show File Path
                  </MenubarCheckboxItem>
                  <MenubarCheckboxItem>
                    Show Line Numbers
                  </MenubarCheckboxItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>

          <CodeBlock language="typescript" code={`import { useState } from 'react';
import { 
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarLabel,
  MenubarSeparator,
  MenubarCheckboxItem
} from '@aptima/ui';

export default function MenubarCheckboxExample() {
  const [showStatusBar, setShowStatusBar] = useState(true);
  const [showFilePath, setShowFilePath] = useState(false);
  const [showLineNumbers, setShowLineNumbers] = useState(false);
  
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Options</MenubarTrigger>
        <MenubarContent>
          <MenubarLabel>View Options</MenubarLabel>
          <MenubarSeparator />
          <MenubarCheckboxItem 
            checked={showStatusBar} 
            onCheckedChange={setShowStatusBar}
          >
            Show Status Bar
          </MenubarCheckboxItem>
          <MenubarCheckboxItem 
            checked={showFilePath} 
            onCheckedChange={setShowFilePath}
          >
            Show File Path
          </MenubarCheckboxItem>
          <MenubarCheckboxItem 
            checked={showLineNumbers} 
            onCheckedChange={setShowLineNumbers}
          >
            Show Line Numbers
          </MenubarCheckboxItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Radio Items</CardTitle>
          <CardDescription>
            Using radio items in menus for mutually exclusive options.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>Theme</MenubarTrigger>
                <MenubarContent>
                  <MenubarLabel>Select Theme</MenubarLabel>
                  <MenubarSeparator />
                  <MenubarRadioGroup value="light">
                    <MenubarRadioItem value="light">Light</MenubarRadioItem>
                    <MenubarRadioItem value="dark">Dark</MenubarRadioItem>
                    <MenubarRadioItem value="system">System</MenubarRadioItem>
                  </MenubarRadioGroup>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>

          <CodeBlock language="typescript" code={`import { useState } from 'react';
import { 
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarLabel,
  MenubarSeparator,
  MenubarRadioGroup,
  MenubarRadioItem
} from '@aptima/ui';

export default function MenubarRadioExample() {
  const [theme, setTheme] = useState("light");
  
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Theme</MenubarTrigger>
        <MenubarContent>
          <MenubarLabel>Select Theme</MenubarLabel>
          <MenubarSeparator />
          <MenubarRadioGroup value={theme} onValueChange={setTheme}>
            <MenubarRadioItem value="light">Light</MenubarRadioItem>
            <MenubarRadioItem value="dark">Dark</MenubarRadioItem>
            <MenubarRadioItem value="system">System</MenubarRadioItem>
          </MenubarRadioGroup>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Submenu</CardTitle>
          <CardDescription>
            Creating nested submenus for additional options.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>Format</MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Font</MenubarItem>
                  <MenubarSeparator />
                  <MenubarSub>
                    <MenubarSubTrigger>Text</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>Bold</MenubarItem>
                      <MenubarItem>Italic</MenubarItem>
                      <MenubarItem>Underline</MenubarItem>
                      <MenubarSeparator />
                      <MenubarItem>Strikethrough</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                  <MenubarSub>
                    <MenubarSubTrigger>Align</MenubarSubTrigger>
                    <MenubarSubContent>
                      <MenubarItem>Left</MenubarItem>
                      <MenubarItem>Center</MenubarItem>
                      <MenubarItem>Right</MenubarItem>
                      <MenubarItem>Justify</MenubarItem>
                    </MenubarSubContent>
                  </MenubarSub>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>

          <CodeBlock language="typescript" code={`import { 
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent
} from '@aptima/ui';

export default function MenubarSubMenuExample() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Format</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>Font</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Text</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Bold</MenubarItem>
              <MenubarItem>Italic</MenubarItem>
              <MenubarItem>Underline</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Strikethrough</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSub>
            <MenubarSubTrigger>Align</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Left</MenubarItem>
              <MenubarItem>Center</MenubarItem>
              <MenubarItem>Right</MenubarItem>
              <MenubarItem>Justify</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>
            Detailed API reference for the Menubar component.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold">Menubar</h3>
              <p className="text-sm text-muted-foreground mt-2">The root container for the menubar.</p>
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
                    <TableCell className="font-mono text-xs">defaultValue</TableCell>
                    <TableCell className="font-mono text-xs">string</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>The value of the menu that should be open when initially rendered.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">value</TableCell>
                    <TableCell className="font-mono text-xs">string</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>The controlled value of the menu to open.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">onValueChange</TableCell>
                    <TableCell className="font-mono text-xs">(value: string) =&gt; void</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>Event handler called when the value changes.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">loop</TableCell>
                    <TableCell className="font-mono text-xs">boolean</TableCell>
                    <TableCell className="font-mono text-xs">false</TableCell>
                    <TableCell>When true, keyboard navigation will loop from last item to first and vice versa.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold">MenubarMenu</h3>
              <p className="text-sm text-muted-foreground mt-2">A menu within the menubar.</p>
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
                    <TableCell className="font-mono text-xs">value</TableCell>
                    <TableCell className="font-mono text-xs">string</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>A unique identifier for the menu.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold">MenubarTrigger</h3>
              <p className="text-sm text-muted-foreground mt-2">The button that toggles a menu.</p>
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
                    <TableCell>When true, prevents the user from interacting with the menu trigger.</TableCell>
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
            Accessibility considerations for the Menubar component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Menubar component follows accessibility best practices:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Follows the WAI-ARIA <a href="https://www.w3.org/WAI/ARIA/apg/patterns/menubar/" className="text-primary underline">Menubar Pattern</a></li>
            <li>Implements keyboard navigation between menu items using arrow keys</li>
            <li>Supports opening menus with Space, Enter, arrow down, and arrow right keys</li>
            <li>Ensures focus is properly managed when navigating between menus</li>
            <li>Provides proper ARIA roles, states, and properties for screen reader users</li>
            <li>Includes support for keyboard shortcuts for menu actions</li>
          </ul>
          <p className="mt-4">
            When using menubars in your application:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Group related functions in logical menu categories</li>
            <li>Use concise, descriptive labels for menu items</li>
            <li>Include keyboard shortcuts for commonly used actions</li>
            <li>Provide visual indicators for disabled menu items</li>
            <li>Ensure sufficient color contrast for all menu elements</li>
            <li>Test keyboard navigation thoroughly across the entire menubar</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
} 
