import { CodeBlock } from '@/lib/components/ui/code-block';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/lib/components/ui/input-otp';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/lib/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/lib/components/ui/table';

// Create a type-safe wrapper for InputOTPSlot to handle custom props
interface CustomInputOTPSlotProps {
  index: number;
  placeholder?: string; // For documentation only, not actually used
  mask?: boolean; // For documentation only, not actually used
}

// This is just a wrapper component to make TypeScript happy in the demo
// In a real implementation, these props would be properly handled
function CustomInputOTPSlot({ index }: CustomInputOTPSlotProps) {
  return (
    <InputOTPSlot index={index} />
  );
}

export default function InputOtpDoc() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Input OTP</h1>
        <p className="text-muted-foreground">
          One-time password input for authentication.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            The Input OTP component is designed for one-time password verification flows.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            One-time passwords (OTPs) are commonly used for two-factor authentication, email verification,
            phone verification, and other security-sensitive operations. The InputOTP component provides
            a user-friendly way to input these codes with proper accessibility and keyboard support.
          </p>
          <p>
            The Aptima UI InputOTP component is built on top of <code>@react-input-otp</code>,
            with a focus on usability and accessibility.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the Input OTP component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Input OTP component is part of the Aptima UI library. You can import its parts as needed:
          </p>
          <CodeBlock language="typescript" code={`import { InputOTP, InputOTPGroup, InputOTPSlot } from '@aptima/ui';`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            Basic usage example of the Input OTP component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex flex-col items-center space-y-2">
              <InputOTP maxLength={6}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { useState } from 'react';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@aptima/ui';

export default function InputOTPExample() {
  const [value, setValue] = useState("");
  
  return (
    <InputOTP 
      maxLength={6} 
      value={value} 
      onChange={setValue}
    >
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Separated Groups</CardTitle>
          <CardDescription>
            Grouping OTP slots for better readability.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex flex-col items-center space-y-2">
              <InputOTP maxLength={6}>
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                </InputOTPGroup>
                <InputOTPGroup>
                  <InputOTPSlot index={3} />
                  <InputOTPSlot index={4} />
                  <InputOTPSlot index={5} />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { InputOTP, InputOTPGroup, InputOTPSlot } from '@aptima/ui';

export default function SeparatedGroupsExample() {
  return (
    <InputOTP maxLength={6}>
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Pattern</CardTitle>
          <CardDescription>
            Using a specific pattern for OTP values.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex flex-col items-center space-y-2">
              <InputOTP maxLength={4} pattern="^[0-9]+$">
                <InputOTPGroup>
                  <InputOTPSlot index={0} />
                  <InputOTPSlot index={1} />
                  <InputOTPSlot index={2} />
                  <InputOTPSlot index={3} />
                </InputOTPGroup>
              </InputOTP>
              <p className="text-sm text-muted-foreground">Only numbers are allowed</p>
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { InputOTP, InputOTPGroup, InputOTPSlot } from '@aptima/ui';

export default function PatternExample() {
  return (
    <div className="space-y-2">
      <InputOTP maxLength={4} pattern="^[0-9]+$">
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>
      <p className="text-sm text-muted-foreground">Only numbers are allowed</p>
    </div>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Custom Placeholder</CardTitle>
          <CardDescription>
            Customizing the placeholder shown in empty slots.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex flex-col items-center space-y-2">
              <InputOTP maxLength={4}>
                <InputOTPGroup>
                  <CustomInputOTPSlot index={0} placeholder="●" />
                  <CustomInputOTPSlot index={1} placeholder="●" />
                  <CustomInputOTPSlot index={2} placeholder="●" />
                  <CustomInputOTPSlot index={3} placeholder="●" />
                </InputOTPGroup>
              </InputOTP>
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { InputOTP, InputOTPGroup, InputOTPSlot } from '@aptima/ui';

export default function CustomPlaceholderExample() {
  return (
    <InputOTP maxLength={4}>
      <InputOTPGroup>
        <InputOTPSlot index={0} placeholder="●" />
        <InputOTPSlot index={1} placeholder="●" />
        <InputOTPSlot index={2} placeholder="●" />
        <InputOTPSlot index={3} placeholder="●" />
      </InputOTPGroup>
    </InputOTP>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Masked Input</CardTitle>
          <CardDescription>
            Creating a masked OTP input for sensitive information.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex flex-col items-center space-y-2">
              <InputOTP maxLength={4}>
                <InputOTPGroup>
                  {Array.from({ length: 4 }).map((_, i) => (
                    <CustomInputOTPSlot key={i} index={i} mask />
                  ))}
                </InputOTPGroup>
              </InputOTP>
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { InputOTP, InputOTPGroup, InputOTPSlot } from '@aptima/ui';

export default function MaskedInputExample() {
  return (
    <InputOTP maxLength={4}>
      <InputOTPGroup>
        {Array.from({ length: 4 }).map((_, i) => (
          <InputOTPSlot key={i} index={i} mask />
        ))}
      </InputOTPGroup>
    </InputOTP>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>With Form Validation</CardTitle>
          <CardDescription>
            Using the Input OTP component with form validation.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 rounded-md border p-4">
            <div className="text-sm text-muted-foreground mb-4">
              This example demonstrates how to integrate the InputOTP component with form validation.
            </div>
          </div>

          <CodeBlock language="typescript" code={`import { useState } from 'react';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@aptima/ui';
import { Button } from '@aptima/ui';
import { Label } from '@aptima/ui';

export default function FormValidationExample() {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (value.length < 6) {
      setError('Please enter all 6 digits of the code');
      return;
    }
    
    setError('');
    // Process the form
    console.log('Submitting code:', value);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="otp">Enter the 6-digit code sent to your device</Label>
        <InputOTP 
          id="otp"
          maxLength={6} 
          value={value} 
          onChange={(value) => {
            setValue(value);
            if (error) setError('');
          }}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        
        {error && <p className="text-sm text-red-500">{error}</p>}
      </div>
      
      <Button type="submit">Verify Code</Button>
    </form>
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>
            Detailed API reference for the Input OTP component.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold">InputOTP</h3>
              <p className="text-sm text-muted-foreground mt-2">The main container component for the OTP input.</p>
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
                    <TableCell className="font-mono text-xs">value</TableCell>
                    <TableCell className="font-mono text-xs">string</TableCell>
                    <TableCell className="font-mono text-xs">''</TableCell>
                    <TableCell>The value of the OTP input.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">onChange</TableCell>
                    <TableCell className="font-mono text-xs">(value: string) =&gt; void</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>Event handler called when the value changes.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">maxLength</TableCell>
                    <TableCell className="font-mono text-xs">number</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>The maximum number of characters allowed.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">pattern</TableCell>
                    <TableCell className="font-mono text-xs">string</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>A regex pattern to validate input characters.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">disabled</TableCell>
                    <TableCell className="font-mono text-xs">boolean</TableCell>
                    <TableCell className="font-mono text-xs">false</TableCell>
                    <TableCell>When true, prevents the user from interacting with the input.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">id</TableCell>
                    <TableCell className="font-mono text-xs">string</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>The ID attribute of the hidden input element.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-semibold">InputOTPGroup</h3>
              <p className="text-sm text-muted-foreground mt-2">A component to group OTP slots together.</p>
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
                    <TableCell>The content of the group, typically InputOTPSlot components.</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div>
              <h3 className="text-lg font-semibold">InputOTPSlot</h3>
              <p className="text-sm text-muted-foreground mt-2">A component that represents a single slot in the OTP input.</p>
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
                    <TableCell className="font-mono text-xs">index</TableCell>
                    <TableCell className="font-mono text-xs">number</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>The index of the slot within the OTP input (required).</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">className</TableCell>
                    <TableCell className="font-mono text-xs">string</TableCell>
                    <TableCell className="font-mono text-xs">-</TableCell>
                    <TableCell>Additional CSS class names.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">placeholder</TableCell>
                    <TableCell className="font-mono text-xs">string</TableCell>
                    <TableCell className="font-mono text-xs">○</TableCell>
                    <TableCell>The character to display as a placeholder when the slot is empty.</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-mono text-xs">mask</TableCell>
                    <TableCell className="font-mono text-xs">boolean</TableCell>
                    <TableCell className="font-mono text-xs">false</TableCell>
                    <TableCell>When true, masks the input character for security.</TableCell>
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
            Accessibility considerations for the Input OTP component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Input OTP component follows accessibility best practices:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Uses a single, visually hidden input for screen readers</li>
            <li>Maintains focus and proper keyboard navigation</li>
            <li>Supports clipboard pasting of the entire code</li>
            <li>Supports keyboard arrow keys for navigation between slots</li>
            <li>Has clear visual indication of the active slot</li>
            <li>Supports proper form association and validation</li>
          </ul>
          <p className="mt-4">
            When implementing OTP inputs in your application:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Always provide clear instructions about the expected input</li>
            <li>Include information about where the code was sent</li>
            <li>Provide a way to resend the code if needed</li>
            <li>Consider timeout and expiration handling for OTP codes</li>
            <li>Implement proper error handling and validation feedback</li>
            <li>Test with screen readers to ensure the component is announced properly</li>
            <li>Ensure the component works with both touch and keyboard input methods</li>
            <li>Consider using auto-focus to improve usability, but be mindful of mobile experiences</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
} 
