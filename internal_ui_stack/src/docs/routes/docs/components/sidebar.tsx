import { CodeBlock } from '@/lib/components/ui/code-block';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/lib/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/lib/components/ui/table';
import { SidebarTrigger } from '@/lib/components/ui/sidebar';

export default function SidebarDoc() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Sidebar</h1>
        <p className="text-muted-foreground">
          A navigation component that displays a sidebar with collapsible functionality.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            The Sidebar component provides a collapsible side navigation panel for your application.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Sidebars are commonly used in applications to provide primary navigation, allowing users
            to access different sections or views. The Aptima UI Sidebar component is designed to be
            responsive, collapsible, and customizable.
          </p>
          <p>
            It supports multiple sections, headers, footers, and can be configured to show in
            different display modes depending on screen size.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the Sidebar component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Sidebar component is part of the Aptima UI library. You can import its parts as needed:
          </p>
          <CodeBlock language="typescript" code={`import { 
  Sidebar, 
  SidebarContent, 
  SidebarHeader, 
  SidebarFooter, 
  SidebarTrigger, 
  SidebarProvider, 
  SidebarInset 
} from '@aptima/ui';`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Basic Usage</CardTitle>
          <CardDescription>
            Basic usage example of the Sidebar component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 rounded-md border p-4">
            <div className="text-sm text-muted-foreground mb-4">
              This example shows a basic implementation of the Sidebar component. For a live demo, refer to the actual application layout which uses the Sidebar component.
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { 
  Sidebar, 
  SidebarContent, 
  SidebarHeader, 
  SidebarTrigger, 
  SidebarFooter, 
  SidebarProvider, 
  SidebarInset 
} from '@aptima/ui';
import { Button } from '@aptima/ui';

export default function AppLayout({ children }) {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <Sidebar className="border-r">
          <SidebarHeader className="p-4">
            <h2 className="text-lg font-semibold">My App</h2>
          </SidebarHeader>
          <SidebarContent className="p-2">
            <nav className="space-y-2">
              <a href="/" className="block px-3 py-2 rounded-md hover:bg-muted">Home</a>
              <a href="/dashboard" className="block px-3 py-2 rounded-md hover:bg-muted">Dashboard</a>
              <a href="/settings" className="block px-3 py-2 rounded-md hover:bg-muted">Settings</a>
            </nav>
          </SidebarContent>
          <SidebarFooter className="p-4">
            <Button variant="outline" className="w-full">Logout</Button>
          </SidebarFooter>
        </Sidebar>
        
        <SidebarInset className="flex-1 overflow-auto">
          <header className="h-16 flex items-center border-b px-4">
            <SidebarTrigger />
            <h1 className="ml-4 text-xl font-semibold">Page Title</h1>
          </header>
          <main className="p-4">
            {children}
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Responsive Behavior</CardTitle>
          <CardDescription>
            Configure the Sidebar to behave differently at different screen sizes.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 rounded-md border p-4">
            <div className="text-sm text-muted-foreground mb-4">
              The Sidebar can be configured to automatically collapse on smaller screens and expand on larger screens.
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { 
  Sidebar, 
  SidebarContent, 
  SidebarProvider, 
  SidebarInset 
} from '@aptima/ui';

export default function ResponsiveSidebarExample() {
  return (
    <SidebarProvider
      defaultCollapsed={{
        mobile: true, // Collapsed by default on mobile
        tablet: true, // Collapsed by default on tablet
        desktop: false // Expanded by default on desktop
      }}
      breakpoints={{
        mobile: 0,
        tablet: 768,
        desktop: 1024
      }}
    >
      <div className="flex h-screen">
        <Sidebar className="border-r">
          <SidebarContent className="p-4">
            <nav className="space-y-2">
              <a href="/" className="block px-3 py-2 rounded-md hover:bg-muted">Home</a>
              <a href="/dashboard" className="block px-3 py-2 rounded-md hover:bg-muted">Dashboard</a>
              <a href="/settings" className="block px-3 py-2 rounded-md hover:bg-muted">Settings</a>
            </nav>
          </SidebarContent>
        </Sidebar>
        
        <SidebarInset className="flex-1">
          <div className="p-4">
            <p>Main content goes here</p>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Custom Trigger</CardTitle>
          <CardDescription>
            Customize the sidebar toggle trigger button.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="flex h-9 w-9 items-center justify-center rounded-md border" />
              <span>← Default Trigger</span>
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { SidebarTrigger } from '@aptima/ui';
import { Menu } from 'lucide-react'; // Or any icon library

export default function CustomTriggerExample() {
  return (
    <header className="flex items-center h-16 border-b px-4">
      {/* Default trigger */}
      <SidebarTrigger />
      
      {/* Custom trigger with icon */}
      <SidebarTrigger>
        <Menu className="h-4 w-4" />
      </SidebarTrigger>
      
      {/* Custom trigger with text */}
      <SidebarTrigger className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium">
        <Menu className="h-4 w-4" />
        Toggle Sidebar
      </SidebarTrigger>
    </header>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Nested Navigation</CardTitle>
          <CardDescription>
            Create a sidebar with nested navigation items.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 rounded-md border p-4">
            <div className="text-sm text-muted-foreground mb-4">
              You can build complex navigation structures within the sidebar.
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { 
  Sidebar, 
  SidebarContent, 
  SidebarProvider, 
  SidebarInset 
} from '@aptima/ui';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@aptima/ui';
import { ChevronDown } from 'lucide-react';

export default function NestedSidebarExample() {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <Sidebar className="border-r">
          <SidebarContent className="p-4">
            <nav className="space-y-2">
              <a href="/" className="block px-3 py-2 rounded-md hover:bg-muted">Dashboard</a>
              
              <Collapsible>
                <CollapsibleTrigger className="flex w-full items-center justify-between px-3 py-2 rounded-md hover:bg-muted">
                  <span>Reports</span>
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="pl-4 space-y-1 mt-1">
                    <a href="/reports/daily" className="block px-3 py-2 rounded-md hover:bg-muted">Daily</a>
                    <a href="/reports/weekly" className="block px-3 py-2 rounded-md hover:bg-muted">Weekly</a>
                    <a href="/reports/monthly" className="block px-3 py-2 rounded-md hover:bg-muted">Monthly</a>
                  </div>
                </CollapsibleContent>
              </Collapsible>
              
              <Collapsible>
                <CollapsibleTrigger className="flex w-full items-center justify-between px-3 py-2 rounded-md hover:bg-muted">
                  <span>Settings</span>
                  <ChevronDown className="h-4 w-4" />
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="pl-4 space-y-1 mt-1">
                    <a href="/settings/profile" className="block px-3 py-2 rounded-md hover:bg-muted">Profile</a>
                    <a href="/settings/account" className="block px-3 py-2 rounded-md hover:bg-muted">Account</a>
                    <a href="/settings/preferences" className="block px-3 py-2 rounded-md hover:bg-muted">Preferences</a>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </nav>
          </SidebarContent>
        </Sidebar>
        
        <SidebarInset className="flex-1">
          <div className="p-4">
            <p>Main content goes here</p>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Programmatic Control</CardTitle>
          <CardDescription>
            Control the sidebar state programmatically using the useSidebar hook.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 rounded-md border p-4">
            <div className="text-sm text-muted-foreground mb-4">
              The useSidebar hook gives you full control over the sidebar's state.
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { 
  Sidebar, 
  SidebarContent, 
  SidebarProvider, 
  SidebarInset,
  useSidebar
} from '@aptima/ui';
import { Button } from '@aptima/ui';

function SidebarController() {
  const { collapsed, setCollapsed, toggleSidebar } = useSidebar();
  
  return (
    <div className="space-y-4 p-4">
      <p>Sidebar is currently: {collapsed ? 'Collapsed' : 'Expanded'}</p>
      <div className="flex gap-4">
        <Button onClick={() => setCollapsed(true)}>Collapse</Button>
        <Button onClick={() => setCollapsed(false)}>Expand</Button>
        <Button onClick={toggleSidebar}>Toggle</Button>
      </div>
    </div>
  );
}

export default function ProgrammaticSidebarExample() {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <Sidebar className="border-r">
          <SidebarContent className="p-4">
            <nav className="space-y-2">
              <a href="/" className="block px-3 py-2 rounded-md hover:bg-muted">Home</a>
              <a href="/dashboard" className="block px-3 py-2 rounded-md hover:bg-muted">Dashboard</a>
            </nav>
          </SidebarContent>
        </Sidebar>
        
        <SidebarInset className="flex-1">
          <SidebarController />
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>
            Detailed API reference for the Sidebar component.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold">SidebarProvider</h3>
              <p className="text-sm text-muted-foreground mt-2">The context provider for the sidebar component.</p>
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
                    <TableCell className="font-mono text-xs">defaultCollapsed</TableCell>
                    <TableCell className="font-mono text-xs">boolean | Record&lt;string, boolean&gt;</TableCell>
                    <TableCell className="font-mono text-xs">false</TableCell>
                    <TableCell>Whether the sidebar should be collapsed by default. Can be a boolean or an object with breakpoint keys.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">breakpoints</TableCell>
                    <TableCell className="font-mono text-xs">Record&lt;string, number&gt;</TableCell>
                    <TableCell className="font-mono text-xs">&#123; mobile: 0, tablet: 768, desktop: 1024 &#125;</TableCell>
                    <TableCell>Breakpoint definitions for responsive behavior.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">children</TableCell>
                    <TableCell className="font-mono text-xs">React.ReactNode</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>The content to be rendered within the provider.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-semibold">Sidebar</h3>
              <p className="text-sm text-muted-foreground mt-2">The main sidebar container component.</p>
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
                    <TableCell>Additional CSS class names.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">children</TableCell>
                    <TableCell className="font-mono text-xs">React.ReactNode</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>The content of the sidebar.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-semibold">SidebarHeader, SidebarContent, SidebarFooter</h3>
              <p className="text-sm text-muted-foreground mt-2">Components to structure the sidebar content.</p>
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
                    <TableCell>Additional CSS class names.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">children</TableCell>
                    <TableCell className="font-mono text-xs">React.ReactNode</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>The content of the respective section.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-semibold">SidebarTrigger</h3>
              <p className="text-sm text-muted-foreground mt-2">Button to toggle the sidebar open/closed state.</p>
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
                    <TableCell>Additional CSS class names.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">children</TableCell>
                    <TableCell className="font-mono text-xs">React.ReactNode</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>Custom content for the trigger button.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-semibold">SidebarInset</h3>
              <p className="text-sm text-muted-foreground mt-2">Container for content outside the sidebar.</p>
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
                    <TableCell>Additional CSS class names.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">children</TableCell>
                    <TableCell className="font-mono text-xs">React.ReactNode</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>The content to be rendered outside the sidebar.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-semibold">useSidebar hook</h3>
              <p className="text-sm text-muted-foreground mt-2">Hook to access and control the sidebar state.</p>
              <Table className="mt-4">
                <TableHeader>
                  <TableRow>
                    <TableHead>Return Value</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-mono text-xs">collapsed</TableCell>
                    <TableCell className="font-mono text-xs">boolean</TableCell>
                    <TableCell>Whether the sidebar is currently collapsed.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">setCollapsed</TableCell>
                    <TableCell className="font-mono text-xs">(collapsed: boolean) =&gt; void</TableCell>
                    <TableCell>Function to set the collapsed state.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">toggleSidebar</TableCell>
                    <TableCell className="font-mono text-xs">() =&gt; void</TableCell>
                    <TableCell>Function to toggle the sidebar between collapsed and expanded states.</TableCell>
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
            Accessibility considerations for the Sidebar component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Sidebar component follows accessibility best practices:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Proper ARIA attributes for collapsible navigation</li>
            <li>Keyboard navigable with support for focus management</li>
            <li>Toggle button is properly labeled for screen readers</li>
            <li>Color contrast meets WCAG standards</li>
            <li>Supports responsive layouts for different screen sizes</li>
          </ul>
          <p className="mt-4">
            When implementing sidebars in your application:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Ensure that navigation links have descriptive text</li>
            <li>Use semantic HTML elements for navigation (e.g., <code>&lt;nav&gt;</code>)</li>
            <li>Consider adding "skip to main content" links for keyboard users</li>
            <li>Test the sidebar with keyboard-only navigation</li>
            <li>Make sure the collapse/expand behavior is announced to screen readers</li>
            <li>Ensure sufficient color contrast for navigation elements</li>
            <li>Consider the impact of sidebar animations on users with vestibular disorders or those who prefer reduced motion</li>
            <li>Test the sidebar with screen readers to ensure proper announcement of state changes</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
} 
