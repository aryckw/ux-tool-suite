import { CodeBlock } from '@/lib/components/ui/code-block';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/lib/components/ui/navigation-menu';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/lib/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/lib/components/ui/table';

export default function NavigationMenuDoc() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Navigation Menu</h1>
        <p className="text-muted-foreground">
          A collection of links for navigating websites.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            The Navigation Menu component provides an accessible navigation menu system for websites.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Navigation Menus are essential UI components for creating primary navigation systems on websites and applications. 
            The Aptima UI Navigation Menu provides a fully accessible, keyboard navigable experience with dropdown menus, hover states, and proper focus management. 
            Built on Radix UI's NavigationMenu primitive, it ensures proper ARIA attributes and keyboard interactions.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the Navigation Menu component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Navigation Menu component is part of the Aptima UI library. You can import it directly:
          </p>
          <CodeBlock language="typescript" code={`import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle
} from '@aptima/ui';`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            Basic usage example of the Navigation Menu component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                      <li className="row-span-3">
                        <NavigationMenuLink>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="#"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              Aptima UI
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              Beautifully designed components for modern applications.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">Introduction</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Learn about the Aptima UI component library.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">Installation</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              How to install dependencies and set up your project.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">Typography</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Styles for headings, paragraphs, and other text elements.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                      <li>
                        <NavigationMenuLink>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">Alert Dialog</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              A modal dialog that interrupts the user with important content.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">Hover Card</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              For sighted users to preview content available behind a link.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">Progress</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Displays an indicator showing completion of a task.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink>
                          <a
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="#"
                          >
                            <div className="text-sm font-medium leading-none">Scroll Area</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Augments native scroll functionality for custom scrollbars.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Documentation
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <CodeBlock language="typescript" code={`import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle
} from '@aptima/ui';

export default function NavigationMenuExample() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
              <li className="row-span-3">
                <NavigationMenuLink>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="#"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Aptima UI
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Beautifully designed components for modern applications.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              {/* More navigation items... */}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
              {/* Component navigation items... */}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Documentation
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Examples</CardTitle>
          <CardDescription>
            Advanced examples of the Navigation Menu component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Basic Link with Trigger Style</h3>
            <p className="text-sm text-muted-foreground">
              Use the <code>navigationMenuTriggerStyle()</code> function to create links with the same style as triggers.
            </p>
            <div className="flex justify-center">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Home
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      About
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Contact
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <CodeBlock language="typescript" code={`import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '@aptima/ui';

export function NavigationMenuBasicExample() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            About
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}`} />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Custom Navigation Link Styling</h3>
            <p className="text-sm text-muted-foreground">
              You can customize the appearance of navigation links with your own styles.
            </p>
            <div className="flex justify-center">
              <NavigationMenu>
                <NavigationMenuList className="gap-6">
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className="group inline-flex h-9 w-max items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:bg-primary/90 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    >
                      Home
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className="group inline-flex h-9 w-max items-center justify-center rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90 focus:bg-accent/90 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    >
                      Blog
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      className="group inline-flex h-9 w-max items-center justify-center rounded-full bg-destructive px-4 py-2 text-sm font-medium text-destructive-foreground transition-colors hover:bg-destructive/90 focus:bg-destructive/90 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    >
                      Login
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            <CodeBlock language="typescript" code={`import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from '@aptima/ui';

export function NavigationMenuCustomExample() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="gap-6">
        <NavigationMenuItem>
          <NavigationMenuLink
            className="group inline-flex h-9 w-max items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus:bg-primary/90 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
          >
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className="group inline-flex h-9 w-max items-center justify-center rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90 focus:bg-accent/90 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
          >
            Blog
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            className="group inline-flex h-9 w-max items-center justify-center rounded-full bg-destructive px-4 py-2 text-sm font-medium text-destructive-foreground transition-colors hover:bg-destructive/90 focus:bg-destructive/90 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
          >
            Login
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}`} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>
            Detailed API reference for the Navigation Menu component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div>
            <h3 className="text-lg font-medium">NavigationMenu</h3>
            <p className="text-sm text-muted-foreground mt-1 mb-3">
              The root container component for the navigation menu.
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
                  <TableCell className="font-mono">viewport</TableCell>
                  <TableCell>
                    <code className="text-xs">boolean</code>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs">true</code>
                  </TableCell>
                  <TableCell>Whether to render the NavigationMenuViewport.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono">delayDuration</TableCell>
                  <TableCell>
                    <code className="text-xs">number</code>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs">200</code>
                  </TableCell>
                  <TableCell>The duration from when the mouse enters a trigger until the content opens.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono">skipDelayDuration</TableCell>
                  <TableCell>
                    <code className="text-xs">number</code>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs">300</code>
                  </TableCell>
                  <TableCell>The duration from when the mouse leaves a trigger until the content closes.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono">className</TableCell>
                  <TableCell>
                    <code className="text-xs">string</code>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs">undefined</code>
                  </TableCell>
                  <TableCell>Additional CSS classes to add to the navigation menu.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div>
            <h3 className="text-lg font-medium">NavigationMenuList</h3>
            <p className="text-sm text-muted-foreground mt-1 mb-3">
              The container for the navigation menu items.
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
                  <TableCell>Additional CSS classes to add to the navigation menu list.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div>
            <h3 className="text-lg font-medium">NavigationMenuItem</h3>
            <p className="text-sm text-muted-foreground mt-1 mb-3">
              The container for individual menu items.
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
                  <TableCell className="font-mono">value</TableCell>
                  <TableCell>
                    <code className="text-xs">string</code>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs">undefined</code>
                  </TableCell>
                  <TableCell>A unique value for the item.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono">className</TableCell>
                  <TableCell>
                    <code className="text-xs">string</code>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs">undefined</code>
                  </TableCell>
                  <TableCell>Additional CSS classes to add to the navigation menu item.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div>
            <h3 className="text-lg font-medium">NavigationMenuTrigger</h3>
            <p className="text-sm text-muted-foreground mt-1 mb-3">
              The trigger button that opens the dropdown content.
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
                  <TableCell>Additional CSS classes to add to the trigger.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div>
            <h3 className="text-lg font-medium">NavigationMenuContent</h3>
            <p className="text-sm text-muted-foreground mt-1 mb-3">
              The dropdown content that appears when a trigger is activated.
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
                  <TableCell>Additional CSS classes to add to the content.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono">align</TableCell>
                  <TableCell>
                    <code className="text-xs">"start" | "center" | "end"</code>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs">"center"</code>
                  </TableCell>
                  <TableCell>The alignment of the content relative to the trigger.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div>
            <h3 className="text-lg font-medium">NavigationMenuLink</h3>
            <p className="text-sm text-muted-foreground mt-1 mb-3">
              The component for navigation links.
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
                  <TableCell className="font-mono">asChild</TableCell>
                  <TableCell>
                    <code className="text-xs">boolean</code>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs">false</code>
                  </TableCell>
                  <TableCell>When true, the link will be rendered as its child element.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono">className</TableCell>
                  <TableCell>
                    <code className="text-xs">string</code>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs">undefined</code>
                  </TableCell>
                  <TableCell>Additional CSS classes to add to the link.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div>
            <h3 className="text-lg font-medium">NavigationMenuViewport</h3>
            <p className="text-sm text-muted-foreground mt-1 mb-3">
              The viewport where dropdown content is rendered.
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
                  <TableCell>Additional CSS classes to add to the viewport.</TableCell>
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
            Accessibility considerations for the Navigation Menu component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Navigation Menu component follows WAI-ARIA patterns for navigational menus and dropdown controls. When implementing Navigation Menu, consider the following accessibility best practices:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The component supports keyboard navigation including tab, arrow keys, and escape key to dismiss menus.</li>
            <li>ARIA attributes are automatically applied to indicate expanded/collapsed states.</li>
            <li>Focus is managed properly when opening and closing dropdown menus.</li>
            <li>Dropdown menus that contain non-navigation links should be announced properly to screen readers.</li>
            <li>Consider using high contrast ratios between text and background colors for better readability.</li>
            <li>Avoid overly complex menu structures that might be difficult to navigate for keyboard users.</li>
            <li>Include visible focus styles to aid keyboard navigation.</li>
            <li>Ensure that hover and focus states are visually indicated for all interactive elements.</li>
            <li>For mobile interfaces, consider using alternative navigation patterns that are better suited for touch interactions.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
} 
