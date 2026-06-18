import { CodeBlock } from '@/lib/components/ui/code-block';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/lib/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/lib/components/ui/table';
import { MultipleSelector } from '@/lib/components/ui/multiple-selector';
import { useState } from 'react';

export default function MultipleSelectorDoc() {
  // Sample options for the demo
  const defaultOptions = [
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Angular', value: 'angular' },
    { label: 'Svelte', value: 'svelte' },
    { label: 'Next.js', value: 'nextjs' },
    { label: 'Nuxt.js', value: 'nuxtjs' },
    { label: 'Gatsby', value: 'gatsby' },
  ];
  
  const [selectedOptions, setSelectedOptions] = useState([
    { label: 'React', value: 'react' },
    { label: 'Next.js', value: 'nextjs' },
  ]);
  
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Multiple Selector</h1>
        <p className="text-muted-foreground">
          A versatile component for selecting multiple items from a searchable dropdown.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            The MultipleSelector component allows users to select multiple options from a searchable dropdown with support for keyboard navigation and grouping.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            This component is perfect for scenarios that require selecting multiple items from a potentially long list of options, complete with search capabilities, keyboard navigation, and grouping support.
          </p>
          
          <div className="border rounded-md p-4">
            <MultipleSelector
              value={selectedOptions}
              onChange={setSelectedOptions}
              defaultOptions={defaultOptions}
              placeholder="Select frameworks..."
            />
            
            {selectedOptions.length > 0 && (
              <div className="mt-4">
                <h4 className="text-sm font-medium">Selected Frameworks:</h4>
                <ul className="list-disc pl-6 mt-2">
                  {selectedOptions.map((option) => (
                    <li key={option.value} className="text-sm">
                      {option.label}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the MultipleSelector component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The MultipleSelector component is part of the Aptima UI library. You can import it directly:
          </p>
          <CodeBlock language="typescript" code={`import { MultipleSelector } from '@aptima/ui';`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            Basic usage of the MultipleSelector component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <p>
            Here's how to use the MultipleSelector component:
          </p>

          <CodeBlock language="typescript" code={`import { MultipleSelector } from '@aptima/ui';
import { useState } from 'react';

function FrameworkSelector() {
  const [selectedFrameworks, setSelectedFrameworks] = useState([
    { label: 'React', value: 'react' }
  ]);
  
  const frameworks = [
    { label: 'React', value: 'react' },
    { label: 'Vue', value: 'vue' },
    { label: 'Angular', value: 'angular' },
    { label: 'Svelte', value: 'svelte' },
    { label: 'Next.js', value: 'nextjs' },
  ];
  
  return (
    <MultipleSelector
      value={selectedFrameworks}
      onChange={setSelectedFrameworks}
      defaultOptions={frameworks}
      placeholder="Select frameworks..."
    />
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>
            Detailed API reference for the MultipleSelector component.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium">MultipleSelector Props</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                The MultipleSelector component accepts the following props:
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
                      <code className="text-xs">Option[]</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>The currently selected options.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">defaultOptions</TableCell>
                    <TableCell>
                      <code className="text-xs">Option[]</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">[]</code>
                    </TableCell>
                    <TableCell>The initial list of options to select from.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">options</TableCell>
                    <TableCell>
                      <code className="text-xs">Option[]</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>Manually controlled options list.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">placeholder</TableCell>
                    <TableCell>
                      <code className="text-xs">string</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>Placeholder text for the input.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">onChange</TableCell>
                    <TableCell>
                      <code className="text-xs">(options: Option[]) =&gt; void</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>Called when the selected options change.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">onSearch</TableCell>
                    <TableCell>
                      <code className="text-xs">(value: string) =&gt; Promise&lt;Option[]&gt;</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>Async search function to get options based on input.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">onSearchSync</TableCell>
                    <TableCell>
                      <code className="text-xs">(value: string) =&gt; Option[]</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>Sync search function to filter options.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">delay</TableCell>
                    <TableCell>
                      <code className="text-xs">number</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>Debounce time for async search in milliseconds.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">maxSelected</TableCell>
                    <TableCell>
                      <code className="text-xs">number</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">Number.MAX_SAFE_INTEGER</code>
                    </TableCell>
                    <TableCell>Maximum number of options that can be selected.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">onMaxSelected</TableCell>
                    <TableCell>
                      <code className="text-xs">(maxLimit: number) =&gt; void</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>Called when the number of selected options exceeds the limit.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">disabled</TableCell>
                    <TableCell>
                      <code className="text-xs">boolean</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">false</code>
                    </TableCell>
                    <TableCell>Whether the selector is disabled.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">groupBy</TableCell>
                    <TableCell>
                      <code className="text-xs">string</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">undefined</code>
                    </TableCell>
                    <TableCell>Key to group options by.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono">creatable</TableCell>
                    <TableCell>
                      <code className="text-xs">boolean</code>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs">false</code>
                    </TableCell>
                    <TableCell>Allows creating new options when no match is found.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-medium">Option Interface</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                The Option interface for the MultipleSelector component:
              </p>
              <CodeBlock language="typescript" code={`interface Option {
  value: string;
  label: string;
  disable?: boolean;
  fixed?: boolean;
  [key: string]: string | boolean | undefined;
}`} />
            </div>

            <div>
              <h3 className="text-lg font-medium">Examples</h3>
              <p className="text-sm text-muted-foreground mt-1 mb-3">
                Here are a few more examples of using the MultipleSelector component:
              </p>
              <CodeBlock language="typescript" code={`// With async search
function AsyncSearchExample() {
  const [selected, setSelected] = useState([]);
  
  const searchUsers = async (query) => {
    // In a real app, this would be an API call
    const response = await fetch(\`/api/users?search=\${query}\`);
    const data = await response.json();
    
    // Transform the API response to Option format
    return data.map(user => ({
      label: user.name,
      value: user.id
    }));
  };
  
  return (
    <MultipleSelector
      value={selected}
      onChange={setSelected}
      onSearch={searchUsers}
      delay={300}
      placeholder="Search for users..."
    />
  );
}

// With grouping
function GroupedExample() {
  const [selected, setSelected] = useState([]);
  
  const options = [
    { label: 'React', value: 'react', category: 'Frontend' },
    { label: 'Vue', value: 'vue', category: 'Frontend' },
    { label: 'Angular', value: 'angular', category: 'Frontend' },
    { label: 'Node.js', value: 'nodejs', category: 'Backend' },
    { label: 'Express', value: 'express', category: 'Backend' },
    { label: 'MongoDB', value: 'mongodb', category: 'Database' },
    { label: 'PostgreSQL', value: 'postgres', category: 'Database' },
  ];
  
  return (
    <MultipleSelector
      value={selected}
      onChange={setSelected}
      defaultOptions={options}
      groupBy="category"
      placeholder="Select technologies..."
    />
  );
}

// With max selection limit
function LimitedSelectionExample() {
  const [selected, setSelected] = useState([]);
  const [error, setError] = useState('');
  
  const handleMaxSelected = (maxLimit) => {
    setError(\`You can only select up to \${maxLimit} items\`);
    
    // Clear the error after 3 seconds
    setTimeout(() => setError(''), 3000);
  };
  
  return (
    <div>
      <MultipleSelector
        value={selected}
        onChange={setSelected}
        defaultOptions={techOptions}
        maxSelected={3}
        onMaxSelected={handleMaxSelected}
        placeholder="Select up to 3 technologies..."
      />
      {error && <p className="text-red-500 mt-1">{error}</p>}
    </div>
  );
}

// With creatable options
function CreatableExample() {
  const [selected, setSelected] = useState([]);
  
  return (
    <MultipleSelector
      value={selected}
      onChange={setSelected}
      defaultOptions={initialOptions}
      creatable={true}
      placeholder="Add tags (type to create new ones)..."
    />
  );
}`} />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Accessibility</CardTitle>
          <CardDescription>
            Accessibility considerations for the MultipleSelector component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The MultipleSelector component is designed with accessibility in mind:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Supports full keyboard navigation for selecting options.</li>
            <li>Maintains focus states for keyboard users.</li>
            <li>Provides clear visual feedback for selected items.</li>
            <li>Includes proper ARIA attributes for screen readers.</li>
            <li>Implements focus trapping within the dropdown while it's open.</li>
            <li>Automatically scrolls to bring active options into view.</li>
            <li>Supports disabled states to indicate unavailable options.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
} 
