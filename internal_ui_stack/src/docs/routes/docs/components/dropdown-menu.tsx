import { CodeBlock } from '@/lib/components/ui/code-block';
import React from 'react';
import { 
  DropdownMenu, 
  DropdownMenuTrigger, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuCheckboxItem, 
  DropdownMenuRadioItem, 
  DropdownMenuLabel, 
  DropdownMenuSeparator, 
  DropdownMenuShortcut, 
  DropdownMenuRadioGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent
} from '@/lib/components/ui/dropdown-menu';
import { Button } from '@/lib/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/lib/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/lib/components/ui/table';
import { UserIcon, SettingsIcon, LogOutIcon, CreditCardIcon, GlobeIcon } from 'lucide-react';

export default function DropdownMenuDoc() {
  const [showStatusBar, setShowStatusBar] = React.useState(true);
  const [showActivityBar, setShowActivityBar] = React.useState(false);
  const [position, setPosition] = React.useState("bottom");

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Dropdown Menu</h1>
        <p className="text-muted-foreground">
          A dropdown menu that displays a list of options.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            Dropdown menus display a list of actions or options that a user can choose from.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Dropdown Menu component offers a way to display a menu to users when they click on a trigger element. 
            It is commonly used for navigation, providing additional options, or performing actions when screen space is limited.
          </p>
          <p>
            The Aptima UI Dropdown Menu is built on top of <code>@radix-ui/react-dropdown-menu</code>, providing a fully 
            accessible implementation with keyboard navigation, proper focus management, and screen reader support.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the Dropdown Menu component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Dropdown Menu component is part of the Aptima UI library. You can import it directly:
          </p>
          <CodeBlock language="typescript" code={`import { 
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuRadioGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent
} from '@aptima/ui';`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            Basic usage example of the Dropdown Menu component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-center">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="outline">Open Menu</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Profile
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Billing
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  Settings
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Log out
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <CodeBlock language="typescript" code={`import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut
} from '@aptima/ui';
import { Button } from '@aptima/ui';

export default function DropdownMenuExample() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outline">Open Menu</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Profile
          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          Billing
          <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          Settings
          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Icons</CardTitle>
          <CardDescription>
            Using icons in the dropdown menu items.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-center">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="outline">My Account</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem>
                  <UserIcon className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <CreditCardIcon className="mr-2 h-4 w-4" />
                  <span>Billing</span>
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <SettingsIcon className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOutIcon className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                  <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <CodeBlock language="typescript" code={`import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut
} from '@aptima/ui';
import { Button } from '@aptima/ui';
import { UserIcon, SettingsIcon, LogOutIcon, CreditCardIcon } from 'lucide-react';

export default function DropdownMenuWithIcons() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outline">My Account</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>
          <UserIcon className="mr-2 h-4 w-4" />
          <span>Profile</span>
          <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CreditCardIcon className="mr-2 h-4 w-4" />
          <span>Billing</span>
          <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <SettingsIcon className="mr-2 h-4 w-4" />
          <span>Settings</span>
          <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOutIcon className="mr-2 h-4 w-4" />
          <span>Log out</span>
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Checkbox Items</CardTitle>
          <CardDescription>
            Using checkbox items in dropdown menu.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-center">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="outline">Toggle Features</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Appearance</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuCheckboxItem
                  checked={showStatusBar}
                  onCheckedChange={setShowStatusBar}
                >
                  Status Bar
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem
                  checked={showActivityBar}
                  onCheckedChange={setShowActivityBar}
                >
                  Activity Bar
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <CodeBlock language="typescript" code={`import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem
} from '@aptima/ui';
import { Button } from '@aptima/ui';
import { useState } from 'react';

export default function DropdownMenuCheckboxExample() {
  const [showStatusBar, setShowStatusBar] = useState(true);
  const [showActivityBar, setShowActivityBar] = useState(false);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outline">Toggle Features</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
          checked={showStatusBar}
          onCheckedChange={setShowStatusBar}
        >
          Status Bar
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem
          checked={showActivityBar}
          onCheckedChange={setShowActivityBar}
        >
          Activity Bar
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Radio Items</CardTitle>
          <CardDescription>
            Using radio items in dropdown menu.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-center">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="outline">Position: {position}</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                  <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="left">Left</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <CodeBlock language="typescript" code={`import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem
} from '@aptima/ui';
import { Button } from '@aptima/ui';
import { useState } from 'react';

export default function DropdownMenuRadioExample() {
  const [position, setPosition] = useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outline">Position: {position}</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Panel Position</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="top">Top</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="bottom">Bottom</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="right">Right</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="left">Left</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Submenu</CardTitle>
          <CardDescription>
            Using submenus for nested options.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-center">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="outline">Options</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem>New Tab</DropdownMenuItem>
                <DropdownMenuItem>New Window</DropdownMenuItem>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    <GlobeIcon className="mr-2 h-4 w-4" />
                    <span>More Tools</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuSubContent>
                    <DropdownMenuItem>Save Page As...</DropdownMenuItem>
                    <DropdownMenuItem>Create Shortcut...</DropdownMenuItem>
                    <DropdownMenuItem>Developer Tools</DropdownMenuItem>
                  </DropdownMenuSubContent>
                </DropdownMenuSub>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Print...</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <CodeBlock language="typescript" code={`import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent
} from '@aptima/ui';
import { Button } from '@aptima/ui';
import { GlobeIcon } from 'lucide-react';

export default function DropdownMenuWithSubmenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outline">Options</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuItem>New Tab</DropdownMenuItem>
        <DropdownMenuItem>New Window</DropdownMenuItem>
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <GlobeIcon className="mr-2 h-4 w-4" />
            <span>More Tools</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            <DropdownMenuItem>Save Page As...</DropdownMenuItem>
            <DropdownMenuItem>Create Shortcut...</DropdownMenuItem>
            <DropdownMenuItem>Developer Tools</DropdownMenuItem>
          </DropdownMenuSubContent>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Print...</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>
            Detailed API reference for the Dropdown Menu component.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold">DropdownMenu</h3>
              <p className="text-sm text-muted-foreground mt-2">The root component that contains all the parts of a dropdown menu.</p>
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
                    <TableCell>The controlled open state of the dropdown menu.</TableCell>
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
                    <TableCell className="font-mono text-xs">modal</TableCell>
                    <TableCell className="font-mono text-xs">boolean</TableCell>
                    <TableCell className="font-mono text-xs">true</TableCell>
                    <TableCell>When true, keyboard navigation will be trapped within the dropdown menu.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-semibold">DropdownMenuTrigger</h3>
              <p className="text-sm text-muted-foreground mt-2">The button that toggles the dropdown menu.</p>
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
                    <TableCell>When true, the trigger will use a child element as the trigger instead of the default button.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-semibold">DropdownMenuContent</h3>
              <p className="text-sm text-muted-foreground mt-2">The dropdown menu content that pops out when the menu is open.</p>
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
                    <TableCell>The alignment of the dropdown menu content relative to the trigger.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">sideOffset</TableCell>
                    <TableCell className="font-mono text-xs">number</TableCell>
                    <TableCell className="font-mono text-xs">4</TableCell>
                    <TableCell>The distance in pixels from the trigger.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">alignOffset</TableCell>
                    <TableCell className="font-mono text-xs">number</TableCell>
                    <TableCell className="font-mono text-xs">0</TableCell>
                    <TableCell>An offset in pixels from the "start" or "end" alignment options.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">side</TableCell>
                    <TableCell className="font-mono text-xs">'top' | 'right' | 'bottom' | 'left'</TableCell>
                    <TableCell className="font-mono text-xs">'bottom'</TableCell>
                    <TableCell>The preferred side of the trigger to render against.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Other Components</h3>
              <p className="text-sm text-muted-foreground mt-2">
                DropdownMenuGroup, DropdownMenuItem, DropdownMenuCheckboxItem, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuSubContent, and DropdownMenuPortal all accept standard HTML props for their respective elements.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Accessibility</CardTitle>
          <CardDescription>
            Accessibility considerations for the Dropdown Menu component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Dropdown Menu component adheres to the WAI-ARIA design pattern for 
            <a href="https://www.w3.org/WAI/ARIA/apg/patterns/menubutton/" className="text-primary underline" target="_blank" rel="noreferrer"> Menu Button</a>.
          </p>
          <h3 className="text-lg font-semibold">Keyboard Interactions</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><span className="font-bold">Space/Enter</span>: Opens/closes the dropdown menu and selects an item.</li>
            <li><span className="font-bold">Arrow Down</span>: Moves focus to the next menu item.</li>
            <li><span className="font-bold">Arrow Up</span>: Moves focus to the previous menu item.</li>
            <li><span className="font-bold">Arrow Right</span>: Opens a submenu if one exists on the focused item.</li>
            <li><span className="font-bold">Arrow Left</span>: Closes a submenu and returns focus to the parent menu.</li>
            <li><span className="font-bold">Escape</span>: Closes the dropdown menu and returns focus to the trigger.</li>
            <li><span className="font-bold">Tab</span>: Moves focus to the next focusable element outside the dropdown menu (when modal is false).</li>
          </ul>
          <h3 className="text-lg font-semibold mt-4">ARIA Attributes</h3>
          <p>
            The component handles all necessary ARIA attributes including roles, states, and relationships
            to ensure proper navigation for users with assistive technologies.
          </p>
        </CardContent>
      </Card>
    </div>
  );
} 
