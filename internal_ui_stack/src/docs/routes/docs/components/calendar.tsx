import { CodeBlock } from '@/lib/components/ui/code-block';
import React from 'react';
import { Calendar } from '@/lib/components/ui/calendar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/lib/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/lib/components/ui/table';

export default function CalendarDoc() {
  const today = new Date();
  const [date, setDate] = React.useState<Date | undefined>(today);

  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Calendar</h1>
        <p className="text-muted-foreground">
          A date field component that allows users to enter and edit date values.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
          <CardDescription>
            The Calendar component provides a way to select dates from a monthly display of days.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            Calendars provide a simple way for users to select dates. They're commonly used within date pickers, forms, and appointment scheduling. The Aptima UI Calendar component is built on top of <code>react-day-picker</code> for accessible, customizable date selection.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Installation</CardTitle>
          <CardDescription>
            How to install and import the Calendar component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Calendar component is part of the Aptima UI library. You can import it directly:
          </p>
          <CodeBlock language="typescript" code={`import { Calendar } from '@aptima/ui';`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Usage</CardTitle>
          <CardDescription>
            Basic usage examples of the Calendar component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex flex-col items-start md:flex-row md:items-center gap-4">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="border rounded-md"
            />
            <div className="text-sm">
              <p>Selected date: {date ? date.toDateString() : "None"}</p>
            </div>
          </div>

          <CodeBlock language="jsx" code={`import { Calendar } from '@aptima/ui';
import React from 'react';

export default function CalendarExample() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="border rounded-md"
    />
  );
}`} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Examples</CardTitle>
          <CardDescription>
            Advanced examples of the Calendar component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Date Range Selection</h3>
            <p className="text-sm text-muted-foreground">
              Select a range of dates using the Calendar in range mode.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <Calendar
                mode="range"
                className="border rounded-md"
              />
            </div>

            <CodeBlock language="jsx" code={`import { Calendar } from '@aptima/ui';
import { DateRange } from 'react-day-picker';
import React from 'react';

export default function DateRangeCalendarExample() {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: new Date(new Date().setDate(new Date().getDate() + 7)),
  });
  
  return (
    <Calendar
      mode="range"
      selected={date}
      onSelect={setDate}
      className="border rounded-md"
    />
  );
}`} />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Custom Styling</h3>
            <p className="text-sm text-muted-foreground">
              The Calendar component can be customized with different styles.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="border rounded-md bg-muted"
              />
            </div>

            <CodeBlock language="jsx" code={`import { Calendar } from '@aptima/ui';
import React from 'react';

export default function CustomStyledCalendarExample() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="border rounded-md bg-muted"
    />
  );
}`} />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-medium">Disabled Dates</h3>
            <p className="text-sm text-muted-foreground">
              Disable specific dates or date ranges.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={{ before: new Date() }}
                className="border rounded-md"
              />
            </div>

            <CodeBlock language="jsx" code={`import { Calendar } from '@aptima/ui';
import React from 'react';

export default function DisabledDatesCalendarExample() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  
  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      disabled={{ before: new Date() }}
      className="border rounded-md"
    />
  );
}`} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Reference</CardTitle>
          <CardDescription>
            Detailed API reference for the Calendar component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div>
            <h3 className="text-lg font-medium">Calendar</h3>
            <p className="text-sm text-muted-foreground mt-1 mb-3">
              Calendar is built on top of react-day-picker and accepts all of its props.
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
                  <TableCell className="font-mono">mode</TableCell>
                  <TableCell>
                    <code className="text-xs">"single" | "multiple" | "range" | "default"</code>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs">"single"</code>
                  </TableCell>
                  <TableCell>The selection mode of the calendar.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono">selected</TableCell>
                  <TableCell>
                    <code className="text-xs">Date | Date[] | DateRange | undefined</code>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs">undefined</code>
                  </TableCell>
                  <TableCell>The selected date(s).</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono">onSelect</TableCell>
                  <TableCell>
                    <code className="text-xs">function</code>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs">undefined</code>
                  </TableCell>
                  <TableCell>The callback function called when a date is selected.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono">disabled</TableCell>
                  <TableCell>
                    <code className="text-xs">DateRange | Matcher | Matcher[]</code>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs">undefined</code>
                  </TableCell>
                  <TableCell>The days that should be disabled for selection.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono">showOutsideDays</TableCell>
                  <TableCell>
                    <code className="text-xs">boolean</code>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs">true</code>
                  </TableCell>
                  <TableCell>Whether to show days from the previous and next months.</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-mono">className</TableCell>
                  <TableCell>
                    <code className="text-xs">string</code>
                  </TableCell>
                  <TableCell>
                    <code className="text-xs">undefined</code>
                  </TableCell>
                  <TableCell>Additional CSS classes to add to the calendar.</TableCell>
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
            Accessibility considerations for the Calendar component.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            The Calendar component is built on top of <code>react-day-picker</code> which follows WAI-ARIA best practices for date pickers. When implementing the Calendar component, consider the following:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The calendar is keyboard accessible, allowing users to navigate using arrow keys.</li>
            <li>The component uses proper ARIA roles and labels for screen readers.</li>
            <li>Disabled dates are properly conveyed to assistive technologies.</li>
            <li>When using the Calendar in a form, associate it with a label for better accessibility.</li>
            <li>Consider providing text input alternatives for keyboard users who prefer direct date entry.</li>
            <li>The calendar navigation has sufficient contrast and focus indicators for better visibility.</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
} 
