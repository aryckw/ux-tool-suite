import { CodeBlock } from '@/lib/components/ui/code-block';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@/lib/components/ui/pagination';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/lib/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/lib/components/ui/table';

export default function PaginationDoc() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Pagination</h1>
        <p className="text-muted-foreground">
          Navigate between multiple pages of content.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            The Pagination component allows users to navigate between multiple pages of content.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Pagination is used when content is split across multiple pages, allowing users to navigate between them.
            It typically displays the current page, adjacent pages, and navigation buttons for moving to the previous or next page.
          </p>
          <p>
            The Aptima UI Pagination component is built with accessibility in mind, providing
            proper ARIA attributes and keyboard navigation support.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the Pagination component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Pagination component is part of the Aptima UI library. You can import it directly:
          </p>
          <CodeBlock language="typescript" code={`import { 
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@aptima/ui';`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            Basic usage example of the Pagination component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" size="default" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" size="default">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" size="default" isActive>2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" size="default">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" size="default" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>

          <CodeBlock language="typescript" code={`import { 
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@aptima/ui';

export default function PaginationExample() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Dynamic Pagination</CardTitle>
          <CardDescription>
            Using the Pagination component with dynamic data.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="rounded-md border p-4">
              <div className="text-sm text-muted-foreground mb-4">
                This example demonstrates how you would implement a dynamic pagination component with React state.
              </div>
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { useState } from 'react';
import { 
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@aptima/ui';

export default function DynamicPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  
  // Generate array of page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    
    if (totalPages <= maxPagesToShow) {
      // If total pages is less than max to show, display all pages
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Always show first page
      pageNumbers.push(1);
      
      // Calculate start and end of page numbers to show
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);
      
      // Adjust if at the beginning or end
      if (currentPage <= 2) {
        end = 4;
      } else if (currentPage >= totalPages - 1) {
        start = totalPages - 3;
      }
      
      // Add ellipsis after first page if needed
      if (start > 2) {
        pageNumbers.push('ellipsis-start');
      }
      
      // Add page numbers
      for (let i = start; i <= end; i++) {
        pageNumbers.push(i);
      }
      
      // Add ellipsis before last page if needed
      if (end < totalPages - 1) {
        pageNumbers.push('ellipsis-end');
      }
      
      // Always show last page
      pageNumbers.push(totalPages);
    }
    
    return pageNumbers;
  };
  
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };
  
  return (
    <div>
      <div className="mb-4">
        <p>Current Page: {currentPage} of {totalPages}</p>
      </div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(currentPage - 1);
              }}
              aria-disabled={currentPage === 1}
              tabIndex={currentPage === 1 ? -1 : 0}
              className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>
          
          {getPageNumbers().map((pageNumber, i) => {
            if (pageNumber === 'ellipsis-start' || pageNumber === 'ellipsis-end') {
              return (
                <PaginationItem key={pageNumber}>
                  <PaginationEllipsis />
                </PaginationItem>
              );
            }
            
            return (
              <PaginationItem key={pageNumber}>
                <PaginationLink 
                  href="#" 
                  isActive={currentPage === pageNumber}
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(pageNumber);
                  }}
                >
                  {pageNumber}
                </PaginationLink>
              </PaginationItem>
            );
          })}
          
          <PaginationItem>
            <PaginationNext 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                handlePageChange(currentPage + 1);
              }}
              aria-disabled={currentPage === totalPages}
              tabIndex={currentPage === totalPages ? -1 : 0}
              className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Customized Pagination</CardTitle>
          <CardDescription>
            Customizing the appearance of the Pagination component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" size="default" className="border border-primary hover:bg-primary/10" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" size="default" className="border border-primary hover:bg-primary/10 font-medium">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" size="default" isActive className="bg-primary hover:bg-primary/90 font-medium">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" size="default" className="border border-primary hover:bg-primary/10 font-medium">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" size="default" className="border border-primary hover:bg-primary/10" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>

          <CodeBlock language="typescript" code={`import { 
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from '@aptima/ui';

export default function CustomizedPagination() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" className="border border-primary hover:bg-primary/10" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" className="border border-primary hover:bg-primary/10 font-medium">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive className="bg-primary hover:bg-primary/90 font-medium">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" className="border border-primary hover:bg-primary/10 font-medium">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" className="border border-primary hover:bg-primary/10" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>
            Detailed API reference for the Pagination component.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold">Pagination</h3>
              <p className="text-sm text-muted-foreground mt-2">The root container for pagination controls.</p>
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
                    <TableCell>Additional CSS class names to apply to the pagination container.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <p className="text-sm text-muted-foreground mt-4">
                The Pagination component extends the HTML <code>&lt;nav&gt;</code> element and accepts all its props.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold">PaginationLink</h3>
              <p className="text-sm text-muted-foreground mt-2">A link element for navigating to a specific page.</p>
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
                    <TableCell className="font-mono text-xs">isActive</TableCell>
                    <TableCell className="font-mono text-xs">boolean</TableCell>
                    <TableCell className="font-mono text-xs">false</TableCell>
                    <TableCell>Whether the link represents the current page.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">size</TableCell>
                    <TableCell className="font-mono text-xs">'default' | 'sm' | 'lg' | 'icon'</TableCell>
                    <TableCell className="font-mono text-xs">'icon'</TableCell>
                    <TableCell>The size of the pagination link.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <p className="text-sm text-muted-foreground mt-4">
                The PaginationLink component extends the HTML <code>&lt;a&gt;</code> element and accepts all its props, including <code>href</code>.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold">PaginationPrevious and PaginationNext</h3>
              <p className="text-sm text-muted-foreground mt-2">Navigation links for moving to the previous or next page.</p>
              <p className="text-sm text-muted-foreground mt-2">
                These components extend PaginationLink and accept all its props, plus:
              </p>
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
                    <TableCell>Additional CSS class names to apply to the navigation link.</TableCell>
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
            Accessibility considerations for the Pagination component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Pagination component follows accessibility best practices:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Uses <code>role="navigation"</code> with <code>aria-label="pagination"</code> for the container</li>
            <li>The active page link uses <code>aria-current="page"</code> to indicate the current page</li>
            <li>Previous and Next buttons include descriptive <code>aria-label</code> attributes</li>
            <li>Ellipsis elements have <code>aria-hidden</code> with a screen reader friendly text inside</li>
            <li>All interactive elements are navigable via keyboard</li>
            <li>Disabled navigation buttons are properly indicated with <code>aria-disabled</code></li>
          </ul>
          <p className="mt-4">
            When implementing pagination in your application:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Ensure all interactive elements are keyboard accessible</li>
            <li>Make the active page visually distinct with proper color contrast</li>
            <li>Consider adding the total number of pages in a screen reader accessible way</li>
            <li>Implement proper focus management when changing pages</li>
            <li>Consider providing options to change the number of items per page</li>
            <li>For dynamic pagination, ensure updates are announced to screen readers</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
} 
