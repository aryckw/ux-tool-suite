import { CodeBlock } from '@/lib/components/ui/code-block';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/lib/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/lib/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/lib/components/ui/table';
import { User, Bell } from 'lucide-react';

export default function TabsDoc() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Tabs</h1>
        <p className="text-muted-foreground">
          A set of layered sections of content that display one panel at a time.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            The Tabs component allows users to navigate between related sections of content without leaving the page.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Tabs organize content into separate views where only one view can be visible at a time. They allow users to quickly navigate between related sections of content within the same context.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the Tabs component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Tabs component is part of the Aptima UI library. You can import it directly:
          </p>
          <CodeBlock language="typescript" code={`import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@aptima/ui';`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            Basic usage examples of the Tabs component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="w-full max-w-xl">
            <Tabs defaultValue="account">
              <TabsList>
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="account" className="p-4 border rounded-md mt-2">
                <h3 className="text-lg font-medium">Account</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Update your account information and email preferences.
                </p>
              </TabsContent>
              <TabsContent value="password" className="p-4 border rounded-md mt-2">
                <h3 className="text-lg font-medium">Password</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Change your password and security settings.
                </p>
              </TabsContent>
              <TabsContent value="settings" className="p-4 border rounded-md mt-2">
                <h3 className="text-lg font-medium">Settings</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  Manage your notification and display preferences.
                </p>
              </TabsContent>
            </Tabs>
          </div>

          <CodeBlock language="typescript" code={`import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@aptima/ui';

export default function TabsExample() {
  return (
    <Tabs defaultValue="account">
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="p-4 border rounded-md mt-2">
        <h3 className="text-lg font-medium">Account</h3>
        <p className="text-sm text-muted-foreground mt-2">
          Update your account information and email preferences.
        </p>
      </TabsContent>
      <TabsContent value="password" className="p-4 border rounded-md mt-2">
        <h3 className="text-lg font-medium">Password</h3>
        <p className="text-sm text-muted-foreground mt-2">
          Change your password and security settings.
        </p>
      </TabsContent>
      <TabsContent value="settings" className="p-4 border rounded-md mt-2">
        <h3 className="text-lg font-medium">Settings</h3>
        <p className="text-sm text-muted-foreground mt-2">
          Manage your notification and display preferences.
        </p>
      </TabsContent>
    </Tabs>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Controlled</CardTitle>
          <CardDescription>
            Using the Tabs component as a controlled component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="w-full max-w-sm space-y-4">
            <p className="text-sm text-muted-foreground">
              A controlled tabs component maintains and updates its state through React's state management.
            </p>
            <CodeBlock language="jsx" code={`import React from 'react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@aptima/ui';

export default function ControlledTabsExample() {
  const [tab, setTab] = React.useState("tab1");
  
  return (
    <Tabs value={tab} onValueChange={setTab}>
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p>Content for Tab 1</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p>Content for Tab 2</p>
      </TabsContent>
    </Tabs>
  );
}`} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Disabled</CardTitle>
          <CardDescription>
            Disable individual tab triggers.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="w-full max-w-xl">
            <Tabs defaultValue="tab1">
              <TabsList>
                <TabsTrigger value="tab1">Enabled Tab</TabsTrigger>
                <TabsTrigger value="tab2" disabled>Disabled Tab</TabsTrigger>
                <TabsTrigger value="tab3">Another Tab</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1" className="p-4 border rounded-md mt-2">
                <p>Content for Tab 1</p>
              </TabsContent>
              <TabsContent value="tab2" className="p-4 border rounded-md mt-2">
                <p>Content for Tab 2</p>
              </TabsContent>
              <TabsContent value="tab3" className="p-4 border rounded-md mt-2">
                <p>Content for Tab 3</p>
              </TabsContent>
            </Tabs>
          </div>

          <CodeBlock language="typescript" code={`import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@aptima/ui';

export default function DisabledTabsExample() {
  return (
    <Tabs defaultValue="tab1">
      <TabsList>
        <TabsTrigger value="tab1">Enabled Tab</TabsTrigger>
        <TabsTrigger value="tab2" disabled>Disabled Tab</TabsTrigger>
        <TabsTrigger value="tab3">Another Tab</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">
        <p>Content for Tab 1</p>
      </TabsContent>
      <TabsContent value="tab2">
        <p>Content for Tab 2</p>
      </TabsContent>
      <TabsContent value="tab3">
        <p>Content for Tab 3</p>
      </TabsContent>
    </Tabs>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Icons</CardTitle>
          <CardDescription>
            Add icons to tab triggers for better visual cues.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="w-full max-w-xl">
            <Tabs defaultValue="profile">
              <TabsList>
                <TabsTrigger value="profile">
                  <User size={16} className="mr-1" />
                  Profile
                </TabsTrigger>
                <TabsTrigger value="notifications">
                  <Bell size={16} className="mr-1" />
                  Notifications
                </TabsTrigger>
              </TabsList>
              <TabsContent value="profile" className="p-4 border rounded-md mt-2">
                <p>Your profile settings go here.</p>
              </TabsContent>
              <TabsContent value="notifications" className="p-4 border rounded-md mt-2">
                <p>Your notification preferences go here.</p>
              </TabsContent>
            </Tabs>
          </div>

          <CodeBlock language="typescript" code={`import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from '@aptima/ui';
import { User, Bell } from 'lucide-react';

export default function TabsWithIconsExample() {
  return (
    <Tabs defaultValue="profile">
      <TabsList>
        <TabsTrigger value="profile">
          <User size={16} className="mr-1" />
          Profile
        </TabsTrigger>
        <TabsTrigger value="notifications">
          <Bell size={16} className="mr-1" />
          Notifications
        </TabsTrigger>
      </TabsList>
      <TabsContent value="profile">
        <p>Your profile settings go here.</p>
      </TabsContent>
      <TabsContent value="notifications">
        <p>Your notification preferences go here.</p>
      </TabsContent>
    </Tabs>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>
            Detailed API reference for the Tabs component.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium">Tabs</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                The root component that contains all the tabs parts.
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
                    <TableCell className="font-mono">defaultValue</TableCell>
                    <TableCell>
                      <code className="text-xs">string</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>The value of the tab that should be active when the component is initially rendered.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">value</TableCell>
                    <TableCell>
                      <code className="text-xs">string</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>The controlled value of the tab to be selected. Should be used with onValueChange.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">onValueChange</TableCell>
                    <TableCell>
                      <code className="text-xs">function</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>Callback called when the value changes.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">className</TableCell>
                    <TableCell>
                      <code className="text-xs">string</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>Additional CSS classes to add to the root.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-medium">TabsList</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                A container for tab triggers.
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
                    <TableCell>Additional CSS classes to add to the list.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-medium">TabsTrigger</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                The button that activates its associated content.
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
                      <code className="text-xs">required</code>
                    </TableCell>
                    <TableCell>A unique value for the tab. This value should match the value of the corresponding TabsContent.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">disabled</TableCell>
                    <TableCell>
                      <code className="text-xs">boolean</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">false</code>
                    </TableCell>
                    <TableCell>When true, prevents the user from interacting with the tab.</TableCell>
                  </TableRow>
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
              <h3 className="text-lg font-medium">TabsContent</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                The content to display when its associated trigger is active.
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
                      <code className="text-xs">required</code>
                    </TableCell>
                    <TableCell>A unique value for the tab content. This value should match the value of the corresponding TabsTrigger.</TableCell>
                  </TableRow>
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
            Accessibility considerations for the Tabs component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            When using the Tabs component, consider the following accessibility best practices:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The tabs component is built with proper keyboard navigation: users can navigate between tabs using the left and right arrow keys, and can activate the selected tab with the Enter key.</li>
            <li>Ensure each tab trigger has a unique and descriptive label to clearly indicate what content it displays.</li>
            <li>Consider adding visual cues, such as icons, to help users more easily identify tab content.</li>
            <li>Use <code className="text-xs bg-muted px-1 rounded">disabled</code> attribute for tab triggers that are not available, but provide an explanation why they're disabled when necessary.</li>
            <li>Tabs are automatically given the appropriate ARIA roles and attributes: <code className="text-xs bg-muted px-1 rounded">role="tablist"</code>, <code className="text-xs bg-muted px-1 rounded">role="tab"</code>, and <code className="text-xs bg-muted px-1 rounded">role="tabpanel"</code>.</li>
            <li>Ensure there is sufficient color contrast between the active tab and inactive tabs.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
} 
