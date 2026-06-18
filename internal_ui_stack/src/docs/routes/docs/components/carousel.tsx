import { CodeBlock } from '@/lib/components/ui/code-block';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/lib/components/ui/carousel';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/lib/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/lib/components/ui/table';

export default function CarouselDoc() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Carousel</h1>
        <p className="text-muted-foreground">
          A slideshow component for cycling through elements.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            The Carousel component allows users to browse through a series of content items.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Carousels display multiple pieces of content in a limited space by cycling through them. They're commonly used for showcasing images, products, or content cards. The Aptima UI Carousel component is built on <code>embla-carousel-react</code> for smooth, accessible sliding interactions.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the Carousel component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Carousel component is part of the Aptima UI library. You can import it directly:
          </p>
          <CodeBlock language="typescript" code={`import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@aptima/ui';`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            Basic usage examples of the Carousel component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="mx-auto max-w-md">
            <Carousel>
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-4xl font-semibold">{index + 1}</span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <CodeBlock language="typescript" code={`import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@aptima/ui';
import { Card, CardContent } from '@aptima/ui';

export default function CarouselExample() {
  return (
    <Carousel>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Examples</CardTitle>
          <CardDescription>
            Advanced examples of the Carousel component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Multiple Items</h3>
            <p className="text-sm text-muted-foreground">
              Display multiple items at once with the Carousel.
            </p>
            <div className="mx-auto max-w-md">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
              >
                <CarouselContent className="-ml-1">
                  {Array.from({ length: 10 }).map((_, index) => (
                    <CarouselItem key={index} className="pl-1 basis-1/3">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex aspect-square items-center justify-center p-2">
                            <span className="text-lg font-semibold">{index + 1}</span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            <CodeBlock language="typescript" code={`import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@aptima/ui';
import { Card, CardContent } from '@aptima/ui';

export default function MultipleItemsCarouselExample() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
    >
      <CarouselContent className="-ml-1">
        {Array.from({ length: 10 }).map((_, index) => (
          <CarouselItem key={index} className="pl-1 basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-2">
                  <span className="text-lg font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}`} />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Vertical Orientation</h3>
            <p className="text-sm text-muted-foreground">
              Create a vertical carousel with the orientation prop.
            </p>
            <div className="mx-auto max-w-md h-[300px]">
              <Carousel orientation="vertical">
                <CarouselContent className="-mt-1 h-[300px]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index} className="pt-1 h-[100px]">
                      <div className="p-1">
                        <Card>
                          <CardContent className="flex h-[90px] items-center justify-center p-2">
                            <span className="text-xl font-semibold">{index + 1}</span>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>

            <CodeBlock language="typescript" code={`import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@aptima/ui';
import { Card, CardContent } from '@aptima/ui';

export default function VerticalCarouselExample() {
  return (
    <div className="h-[300px]">
      <Carousel orientation="vertical">
        <CarouselContent className="-mt-1 h-[300px]">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="pt-1 h-[100px]">
              <div className="p-1">
                <Card>
                  <CardContent className="flex h-[90px] items-center justify-center p-2">
                    <span className="text-xl font-semibold">{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}`} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>
            Detailed API reference for the Carousel component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div>
            <h3 className="text-lg font-medium">Carousel</h3>
            <p className="text-sm text-muted-foreground mt-1 mb-3">
              The main container component for the carousel.
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
                  <TableCell className="font-mono">orientation</TableCell>
                  <TableCell>
                    <code className="text-xs">"horizontal" | "vertical"</code>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs">"horizontal"</code>
                  </TableCell>
                  <TableCell>The orientation of the carousel.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono">opts</TableCell>
                  <TableCell>
                    <code className="text-xs">CarouselOptions</code>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs">undefined</code>
                  </TableCell>
                  <TableCell>Options for the embla carousel.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono">plugins</TableCell>
                  <TableCell>
                    <code className="text-xs">CarouselPlugin</code>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs">undefined</code>
                  </TableCell>
                  <TableCell>Plugins for the embla carousel.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono">setApi</TableCell>
                  <TableCell>
                    <code className="text-xs">(api: CarouselApi) =&gt; void</code>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs">undefined</code>
                  </TableCell>
                  <TableCell>Function to get access to the carousel API.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono">className</TableCell>
                  <TableCell>
                    <code className="text-xs">string</code>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs">undefined</code>
                  </TableCell>
                  <TableCell>Additional CSS classes to add to the carousel container.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div>
            <h3 className="text-lg font-medium">CarouselContent</h3>
            <p className="text-sm text-muted-foreground mt-1 mb-3">
              The component that contains all carousel items.
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
                  <TableCell>Additional CSS classes to add to the carousel content.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div>
            <h3 className="text-lg font-medium">CarouselItem</h3>
            <p className="text-sm text-muted-foreground mt-1 mb-3">
              The component for individual carousel slides.
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
                  <TableCell>Additional CSS classes to add to the carousel item.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div>
            <h3 className="text-lg font-medium">CarouselPrevious</h3>
            <p className="text-sm text-muted-foreground mt-1 mb-3">
              The button to navigate to the previous slide.
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
                  <TableCell>Additional CSS classes to add to the previous button.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono">variant</TableCell>
                  <TableCell>
                    <code className="text-xs">string</code>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs">"outline"</code>
                  </TableCell>
                  <TableCell>The button variant to use.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono">size</TableCell>
                  <TableCell>
                    <code className="text-xs">string</code>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs">"icon"</code>
                  </TableCell>
                  <TableCell>The button size to use.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div>
            <h3 className="text-lg font-medium">CarouselNext</h3>
            <p className="text-sm text-muted-foreground mt-1 mb-3">
              The button to navigate to the next slide.
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
                  <TableCell>Additional CSS classes to add to the next button.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono">variant</TableCell>
                  <TableCell>
                    <code className="text-xs">string</code>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs">"outline"</code>
                  </TableCell>
                  <TableCell>The button variant to use.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono">size</TableCell>
                  <TableCell>
                    <code className="text-xs">string</code>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs">"icon"</code>
                  </TableCell>
                  <TableCell>The button size to use.</TableCell>
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
            Accessibility considerations for the Carousel component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Carousel component implements important accessibility features, but there are additional considerations to ensure your carousel implementation is fully accessible:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The carousel navigation buttons use proper ARIA labels for screen readers.</li>
            <li>The carousel is fully keyboard navigable using arrow keys.</li>
            <li>Proper ARIA roles are applied to carousel elements (region, group, etc.).</li>
            <li>Consider providing an alternative way to access content for users who may find carousels difficult to use.</li>
            <li>Ensure there is sufficient time to read content before auto-advancing slides (if auto-play is enabled).</li>
            <li>Provide visible focus styles for all interactive elements within the carousel.</li>
            <li>Consider pausing auto-advancing slides when the user hovers over or focuses on the carousel.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
} 
