import { CodeBlock } from '@/lib/components/ui/code-block';
import { Avatar, AvatarImage, AvatarFallback } from '@/lib/components/ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/lib/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/lib/components/ui/table';
import { User } from 'lucide-react';

export default function AvatarDoc() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Avatar</h1>
        <p className="text-muted-foreground">
          An image element with a fallback for representing the user.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            The Avatar component displays a user's profile picture or their initials as a fallback.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Avatars are used to represent a user or entity. They can display an image, 
            initials, or a generic icon to visually identify a user across the application.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the Avatar component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Avatar component is part of the Aptima UI library. You can import it directly:
          </p>
          <CodeBlock language="typescript" code={`import { Avatar, AvatarImage, AvatarFallback } from '@aptima/ui';`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            Basic usage examples of the Avatar component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap gap-6">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>

          <CodeBlock language="typescript" code={`import { Avatar, AvatarImage, AvatarFallback } from '@aptima/ui';

export default function AvatarExample() {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Fallback</CardTitle>
          <CardDescription>
            The Avatar component displays a fallback when the image fails to load.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap gap-6">
            <Avatar>
              <AvatarImage src="https://broken-link.jpg" alt="@johndoe" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>

          <CodeBlock language="typescript" code={`import { Avatar, AvatarImage, AvatarFallback } from '@aptima/ui';

export default function AvatarFallbackExample() {
  return (
    <Avatar>
      <AvatarImage src="https://broken-link.jpg" alt="@johndoe" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Sizes</CardTitle>
          <CardDescription>
            The Avatar component can be sized using utility classes.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-6">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="h-12 w-12">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="h-16 w-16">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>

          <CodeBlock language="typescript" code={`import { Avatar, AvatarImage, AvatarFallback } from '@aptima/ui';

export default function AvatarSizesExample() {
  return (
    <div className="flex items-center gap-6">
      <Avatar className="h-8 w-8">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="h-12 w-12">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="h-16 w-16">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Custom Styling</CardTitle>
          <CardDescription>
            The Avatar component can be customized with additional styles.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap gap-6">
            <Avatar className="border-2 border-primary">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="bg-muted-foreground">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback className="text-primary-foreground">CN</AvatarFallback>
            </Avatar>
            <Avatar className="rounded-md">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className="rounded-md" />
              <AvatarFallback className="rounded-md">CN</AvatarFallback>
            </Avatar>
          </div>

          <CodeBlock language="typescript" code={`import { Avatar, AvatarImage, AvatarFallback } from '@aptima/ui';

export default function CustomAvatarExample() {
  return (
    <div className="flex flex-wrap gap-6">
      <Avatar className="border-2 border-primary">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="bg-muted-foreground">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback className="text-primary-foreground">CN</AvatarFallback>
      </Avatar>
      <Avatar className="rounded-md">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" className="rounded-md" />
        <AvatarFallback className="rounded-md">CN</AvatarFallback>
      </Avatar>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Avatar Groups</CardTitle>
          <CardDescription>
            Group multiple avatars together with overlap.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex -space-x-4">
            <Avatar className="border-2 border-background">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-background">
              <AvatarImage src="https://github.com/another-user.png" alt="@anotheruser" />
              <AvatarFallback>AU</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-background">
              <AvatarImage src="https://github.com/third-user.png" alt="@thirduser" />
              <AvatarFallback>TU</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-background bg-muted">
              <AvatarFallback>+2</AvatarFallback>
            </Avatar>
          </div>

          <CodeBlock language="typescript" code={`import { Avatar, AvatarImage, AvatarFallback } from '@aptima/ui';

export default function AvatarGroupExample() {
  return (
    <div className="flex -space-x-4">
      <Avatar className="border-2 border-background">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarImage src="https://github.com/another-user.png" alt="@anotheruser" />
        <AvatarFallback>AU</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarImage src="https://github.com/third-user.png" alt="@thirduser" />
        <AvatarFallback>TU</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background bg-muted">
        <AvatarFallback>+2</AvatarFallback>
      </Avatar>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Icons</CardTitle>
          <CardDescription>
            Using icons in the Avatar fallback.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-wrap gap-6">
            <Avatar>
              <AvatarFallback>
                <User />
              </AvatarFallback>
            </Avatar>
          </div>

          <CodeBlock language="typescript" code={`import { Avatar, AvatarFallback } from '@aptima/ui';
import { User } from 'lucide-react';

export default function AvatarWithIconExample() {
  return (
    <Avatar>
      <AvatarFallback>
        <User />
      </AvatarFallback>
    </Avatar>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>
            Detailed API reference for the Avatar component.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium">Avatar</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                The root component that contains the avatar image and fallback.
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
                    <TableCell>Additional CSS classes to add to the avatar.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-medium">AvatarImage</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                The image to be displayed in the avatar.
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
                    <TableCell className="font-mono">src</TableCell>
                    <TableCell>
                      <code className="text-xs">string</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>The source URL of the image.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">alt</TableCell>
                    <TableCell>
                      <code className="text-xs">string</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>Alternative text for the image for accessibility.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">className</TableCell>
                    <TableCell>
                      <code className="text-xs">string</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>Additional CSS classes to add to the image.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-medium">AvatarFallback</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                The fallback element displayed when the image fails to load.
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
                    <TableCell className="font-mono">delayMs</TableCell>
                    <TableCell>
                      <code className="text-xs">number</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">0</code>
                    </TableCell>
                    <TableCell>The delay in milliseconds before the fallback is displayed.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">className</TableCell>
                    <TableCell>
                      <code className="text-xs">string</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>Additional CSS classes to add to the fallback.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-medium">Examples</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                Here are a few more examples of using the Avatar component in different contexts:
              </p>
              <CodeBlock language="typescript" code={`// Avatar with delay before showing fallback
<Avatar>
  <AvatarImage src="https://example.com/avatar.jpg" alt="User" />
  <AvatarFallback delayMs={600}>JD</AvatarFallback>
</Avatar>

// Colorful avatar with custom background
<Avatar className="bg-blue-500">
  <AvatarFallback className="text-white font-semibold">AM</AvatarFallback>
</Avatar>

// User profile with avatar and name
<div className="flex items-center gap-3">
  <Avatar>
    <AvatarImage src="/users/jane-doe.jpg" alt="Jane Doe" />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
  <div>
    <p className="font-medium">Jane Doe</p>
    <p className="text-sm text-muted-foreground">Product Designer</p>
  </div>
</div>

// Avatar with online status indicator
<div className="relative">
  <Avatar>
    <AvatarImage src="/users/john-smith.jpg" alt="John Smith" />
    <AvatarFallback>JS</AvatarFallback>
  </Avatar>
  <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
</div>`} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Accessibility</CardTitle>
          <CardDescription>
            Accessibility considerations for the Avatar component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            When using the Avatar component, consider the following accessibility best practices:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Always provide meaningful alternative text for the avatar image using the <code className="text-xs bg-muted px-1 rounded">alt</code> attribute.</li>
            <li>Use descriptive, unique alt text that identifies the user represented by the avatar.</li>
            <li>When using avatars in interactive elements (like buttons), ensure proper focus styles are applied.</li>
            <li>If using avatar groups, ensure that screen reader users can access information about all users represented.</li>
            <li>Consider the color contrast between the avatar's fallback text and its background to ensure readability.</li>
            <li>For avatar groups that truncate with a "+X" indicator, provide a way for users to access the complete list.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
} 
