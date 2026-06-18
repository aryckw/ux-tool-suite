import { CodeBlock } from '@/lib/components/ui/code-block';
import { AspectRatio } from '@/lib/components/ui/aspect-ratio';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/lib/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/lib/components/ui/table';

export default function AspectRatioDoc() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Aspect Ratio</h1>
        <p className="text-muted-foreground">
          Displays content within a desired ratio.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            The AspectRatio component helps maintain consistent width-to-height ratios across different screen sizes.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            AspectRatio is useful for maintaining proportional dimensions for content such as images, 
            videos, maps, and other media. It prevents layout shifts and ensures that content 
            remains visually consistent across different devices and viewport sizes.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the AspectRatio component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The AspectRatio component is part of the Aptima UI library. You can import it directly:
          </p>
          <CodeBlock language="typescript" code={`import { AspectRatio } from '@aptima/ui';`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            Basic usage example of the AspectRatio component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="w-full max-w-md">
            <AspectRatio ratio={16 / 9} className="bg-muted overflow-hidden rounded-md">
              <img
                src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&auto=format&fit=crop&q=60"
                alt="Landscape"
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </div>

          <CodeBlock language="typescript" code={`import { AspectRatio } from '@aptima/ui';

export default function AspectRatioExample() {
  return (
    <div className="w-full max-w-md">
      <AspectRatio ratio={16 / 9} className="bg-muted overflow-hidden rounded-md">
        <img
          src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&auto=format&fit=crop&q=60"
          alt="Landscape"
          className="object-cover w-full h-full"
        />
      </AspectRatio>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Common Ratios</CardTitle>
          <CardDescription>
            Examples of commonly used aspect ratios.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <p className="text-sm font-medium">16:9 (Widescreen)</p>
              <AspectRatio ratio={16 / 9} className="bg-muted rounded-md flex items-center justify-center">
                <span className="text-muted-foreground">16:9</span>
              </AspectRatio>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">4:3 (Standard)</p>
              <AspectRatio ratio={4 / 3} className="bg-muted rounded-md flex items-center justify-center">
                <span className="text-muted-foreground">4:3</span>
              </AspectRatio>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">1:1 (Square)</p>
              <AspectRatio ratio={1 / 1} className="bg-muted rounded-md flex items-center justify-center">
                <span className="text-muted-foreground">1:1</span>
              </AspectRatio>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">9:16 (Portrait)</p>
              <AspectRatio ratio={9 / 16} className="bg-muted rounded-md flex items-center justify-center">
                <span className="text-muted-foreground">9:16</span>
              </AspectRatio>
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { AspectRatio } from '@aptima/ui';

export default function CommonRatiosExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <p className="text-sm font-medium">16:9 (Widescreen)</p>
        <AspectRatio ratio={16 / 9} className="bg-muted rounded-md flex items-center justify-center">
          <span className="text-muted-foreground">16:9</span>
        </AspectRatio>
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium">4:3 (Standard)</p>
        <AspectRatio ratio={4 / 3} className="bg-muted rounded-md flex items-center justify-center">
          <span className="text-muted-foreground">4:3</span>
        </AspectRatio>
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium">1:1 (Square)</p>
        <AspectRatio ratio={1 / 1} className="bg-muted rounded-md flex items-center justify-center">
          <span className="text-muted-foreground">1:1</span>
        </AspectRatio>
      </div>
      <div className="space-y-2">
        <p className="text-sm font-medium">9:16 (Portrait)</p>
        <AspectRatio ratio={9 / 16} className="bg-muted rounded-md flex items-center justify-center">
          <span className="text-muted-foreground">9:16</span>
        </AspectRatio>
      </div>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Video</CardTitle>
          <CardDescription>
            Using the AspectRatio component with video content.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="w-full max-w-md">
            <AspectRatio ratio={16 / 9} className="bg-muted overflow-hidden rounded-md">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              ></iframe>
            </AspectRatio>
          </div>

          <CodeBlock language="typescript" code={`import { AspectRatio } from '@aptima/ui';

export default function VideoExample() {
  return (
    <div className="w-full max-w-md">
      <AspectRatio ratio={16 / 9} className="bg-muted overflow-hidden rounded-md">
        <iframe
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full border-0"
        ></iframe>
      </AspectRatio>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Responsive Behavior</CardTitle>
          <CardDescription>
            The AspectRatio component maintains its ratio across different screen sizes.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-sm text-muted-foreground">
            The AspectRatio component automatically adjusts its height based on its width while maintaining the specified ratio.
            This ensures consistent presentation across various screen sizes and devices.
          </p>
          <CodeBlock language="typescript" code={`import { AspectRatio } from '@aptima/ui';

export default function ResponsiveExample() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* The component will maintain a 16:9 ratio regardless of container width */}
      <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden">
        <img
          src="/path/to/image.jpg"
          alt="Responsive image"
          className="object-cover w-full h-full"
        />
      </AspectRatio>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>
            Detailed API reference for the AspectRatio component.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">AspectRatio Props</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                The AspectRatio component accepts the following props:
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
                    <TableCell className="font-mono">ratio</TableCell>
                    <TableCell>
                      <code className="text-xs">number</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">1</code>
                    </TableCell>
                    <TableCell>The desired aspect ratio (width/height).</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">className</TableCell>
                    <TableCell>
                      <code className="text-xs">string</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>Additional CSS classes to add to the component.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-medium">Examples</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                Here are a few more examples of using the AspectRatio component in different ways:
              </p>
              <CodeBlock language="typescript" code={`// Image in a card with 3:2 aspect ratio
<Card>
  <AspectRatio ratio={3 / 2}>
    <img
      src="/path/to/image.jpg"
      alt="Card image"
      className="object-cover"
    />
  </AspectRatio>
  <CardContent>
    <h3>Card Title</h3>
    <p>Card description goes here.</p>
  </CardContent>
</Card>

// Map embed with 4:3 aspect ratio
<AspectRatio ratio={4 / 3} className="rounded-lg overflow-hidden">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m..."
    title="Google Maps"
    className="w-full h-full border-0"
  ></iframe>
</AspectRatio>

// Responsive product image gallery
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  <AspectRatio ratio={1}>
    <img src="/product-1.jpg" alt="Product 1" className="object-cover" />
  </AspectRatio>
  <AspectRatio ratio={1}>
    <img src="/product-2.jpg" alt="Product 2" className="object-cover" />
  </AspectRatio>
</div>`} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Accessibility</CardTitle>
          <CardDescription>
            Accessibility considerations for the AspectRatio component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            When using the AspectRatio component, consider the following accessibility best practices:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Always provide meaningful alternative text for images using the <code className="text-xs bg-muted px-1 rounded">alt</code> attribute.</li>
            <li>For video content, include captions and transcripts when possible.</li>
            <li>Ensure that any interactive content inside AspectRatio containers is keyboard accessible.</li>
            <li>The AspectRatio component does not add any specific ARIA attributes, as it's primarily a layout component.</li>
            <li>For embedded content like maps or videos, provide appropriate title attributes for iframes.</li>
            <li>Consider how your media will be experienced when using zoom features or screen magnifiers.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
} 
