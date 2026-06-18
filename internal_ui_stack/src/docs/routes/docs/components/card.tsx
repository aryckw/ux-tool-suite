import { CodeBlock } from '@/lib/components/ui/code-block';
import { 
  Card, 
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardDescription, 
  CardContent,
  CardAction
} from '@/lib/components/ui/card';
import { Button } from '@/lib/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/lib/components/ui/table';

export default function CardDoc() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Card</h1>
        <p className="text-muted-foreground">
          Displays a card with header, content, and footer sections.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            The Card component serves as a container for related content and actions.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Cards are used to group related information and actions. They provide a flexible and extensible container
            for displaying content in a clear and concise way. Cards typically consist of a header, content, and optional footer.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the Card component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Card component is part of the Aptima UI library. You can import it directly:
          </p>
          <CodeBlock language="typescript" code={`import { 
  Card, 
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardDescription, 
  CardContent,
  CardAction
} from '@aptima/ui';`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            Basic usage examples of the Card component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="w-full max-w-md">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <p>Card Footer</p>
              </CardFooter>
            </Card>
          </div>

          <CodeBlock language="typescript" code={`import { 
  Card, 
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from '@aptima/ui';

export default function CardExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Actions</CardTitle>
          <CardDescription>
            Cards can include actions in the header or footer.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="w-full max-w-md">
            <Card>
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
                <CardDescription>You have 3 unread messages.</CardDescription>
                <CardAction>
                  <Button variant="outline" size="sm">Mark all as read</Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                <p>Recent notifications will appear here.</p>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>View All</Button>
              </CardFooter>
            </Card>
          </div>

          <CodeBlock language="typescript" code={`import { 
  Card, 
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardDescription, 
  CardContent,
  CardAction
} from '@aptima/ui';
import { Button } from '@aptima/ui';

export default function CardWithActionsExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>You have 3 unread messages.</CardDescription>
        <CardAction>
          <Button variant="outline" size="sm">Mark all as read</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>Recent notifications will appear here.</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>View All</Button>
      </CardFooter>
    </Card>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Custom Styling</CardTitle>
          <CardDescription>
            Customize the appearance of the Card component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="w-full max-w-md">
            <Card className="bg-primary/5 border-primary/20">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-primary">Custom Card</CardTitle>
                <CardDescription className="text-primary/80">A card with custom styling</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-primary/90">
                  This card demonstrates custom styling with background colors, borders, and text colors.
                </p>
              </CardContent>
              <CardFooter className="border-t border-primary/20 pt-4">
                <Button className="w-full">Learn More</Button>
              </CardFooter>
            </Card>
          </div>

          <CodeBlock language="typescript" code={`import { 
  Card, 
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from '@aptima/ui';
import { Button } from '@aptima/ui';

export default function CustomStyledCardExample() {
  return (
    <Card className="bg-primary/5 border-primary/20">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl text-primary">Custom Card</CardTitle>
        <CardDescription className="text-primary/80">A card with custom styling</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-primary/90">
          This card demonstrates custom styling with background colors, borders, and text colors.
        </p>
      </CardContent>
      <CardFooter className="border-t border-primary/20 pt-4">
        <Button className="w-full">Learn More</Button>
      </CardFooter>
    </Card>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Interactive Cards</CardTitle>
          <CardDescription>
            Create interactive card layouts.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
            <Card className="hover:shadow-md cursor-pointer transition-all hover:border-primary/50" onClick={() => alert('Card clicked!')}>
              <CardHeader>
                <CardTitle>Clickable Card</CardTitle>
                <CardDescription>This entire card is clickable</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Click anywhere on this card to trigger an action.</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Card with Link</CardTitle>
                <CardDescription>Contains interactive elements</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This card has a specific interactive element:</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Click Me</Button>
              </CardFooter>
            </Card>
          </div>

          <CodeBlock language="typescript" code={`import { 
  Card, 
  CardHeader, 
  CardFooter, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from '@aptima/ui';
import { Button } from '@aptima/ui';

export default function InteractiveCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card 
        className="hover:shadow-md cursor-pointer transition-all hover:border-primary/50" 
        onClick={() => alert('Card clicked!')}
      >
        <CardHeader>
          <CardTitle>Clickable Card</CardTitle>
          <CardDescription>This entire card is clickable</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Click anywhere on this card to trigger an action.</p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Card with Link</CardTitle>
          <CardDescription>Contains interactive elements</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This card has a specific interactive element:</p>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Click Me</Button>
        </CardFooter>
      </Card>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>
            Detailed API reference for the Card component.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">Card Props</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                All Card components accept standard HTML div attributes as props:
              </p>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Component</TableHead>
                    <TableHead>Props</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-mono">Card</TableCell>
                    <TableCell>
                      <code className="text-xs">React.ComponentProps{'"div"'}</code>
                    </TableCell>
                    <TableCell>The main card container that wraps all card elements.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">CardHeader</TableCell>
                    <TableCell>
                      <code className="text-xs">React.ComponentProps{'"div"'}</code>
                    </TableCell>
                    <TableCell>Contains the card title, description, and optional action buttons.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">CardTitle</TableCell>
                    <TableCell>
                      <code className="text-xs">React.ComponentProps{'"div"'}</code>
                    </TableCell>
                    <TableCell>The card's title or heading component.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">CardDescription</TableCell>
                    <TableCell>
                      <code className="text-xs">React.ComponentProps{'"div"'}</code>
                    </TableCell>
                    <TableCell>A brief description or subtitle for the card.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">CardAction</TableCell>
                    <TableCell>
                      <code className="text-xs">React.ComponentProps{'"div"'}</code>
                    </TableCell>
                    <TableCell>Container for action buttons in the card header.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">CardContent</TableCell>
                    <TableCell>
                      <code className="text-xs">React.ComponentProps{'"div"'}</code>
                    </TableCell>
                    <TableCell>The main content area of the card.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">CardFooter</TableCell>
                    <TableCell>
                      <code className="text-xs">React.ComponentProps{'"div"'}</code>
                    </TableCell>
                    <TableCell>The footer area of the card, often used for actions or metadata.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-medium">Examples</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                Here are a few more examples of using the Card component in different ways:
              </p>
              <CodeBlock language="typescript" code={`// Basic Card
<Card>
  <CardHeader>
    <CardTitle>Basic Card</CardTitle>
  </CardHeader>
  <CardContent>Content goes here</CardContent>
</Card>

// Card with custom className
<Card className="max-w-md mx-auto">
  <CardHeader>
    <CardTitle>Custom Width</CardTitle>
  </CardHeader>
  <CardContent>This card has a custom width</CardContent>
</Card>

// Card with no padding in content
<Card>
  <CardHeader>
    <CardTitle>Custom Content Padding</CardTitle>
  </CardHeader>
  <CardContent className="p-0">
    <img src="/image.jpg" alt="Card image" className="w-full h-auto" />
  </CardContent>
</Card>`} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Accessibility</CardTitle>
          <CardDescription>
            Accessibility considerations for the Card component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            When using the Card component, consider the following accessibility best practices:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use proper heading hierarchy (h1, h2, h3, etc.) within your cards to maintain meaningful document structure.</li>
            <li>Ensure sufficient color contrast between the card background, text, and surrounding elements.</li>
            <li>If making the entire card clickable, ensure it has a meaningful accessible name and keyboard focus styles.</li>
            <li>When using cards for interactive content, include clear focus indicators and ensure all interactive elements are keyboard accessible.</li>
            <li>Consider using appropriate ARIA roles when creating custom card layouts (e.g., <code className="text-xs bg-muted px-1 rounded">role="region"</code> with <code className="text-xs bg-muted px-1 rounded">aria-labelledby</code> pointing to the card title).</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
} 
 