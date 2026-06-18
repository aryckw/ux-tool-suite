import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/lib/components/ui/card';
import { Link } from 'react-router-dom';

interface Component {
  name: string;
  description: string;
  path: string;
  category: string;
}

const components: Component[] = [
  {
    name: 'Accordion',
    description:
      'A vertically stacked set of interactive headings that each reveal a section of content.',
    path: '/components/accordion',
    category: 'Display',
  },
  {
    name: 'Alert',
    description: 'Displays a callout for user attention.',
    path: '/components/alert',
    category: 'Feedback',
  },
  {
    name: 'Alert Dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
    path: '/components/alert-dialog',
    category: 'Overlay',
  },
  {
    name: 'Aspect Ratio',
    description: 'Displays content within a desired ratio.',
    path: '/components/aspect-ratio',
    category: 'Layout',
  },
  {
    name: 'Avatar',
    description: 'An image element with a fallback for representing the user.',
    path: '/components/avatar',
    category: 'Data Display',
  },
  {
    name: 'Badge',
    description:
      'A small visual indicator for notifications, counts, or status.',
    path: '/components/badge',
    category: 'Data Display',
  },
  {
    name: 'Breadcrumb',
    description: 'Displays the hierarchical path to the current resource.',
    path: '/components/breadcrumb',
    category: 'Navigation',
  },
  {
    name: 'Button',
    description: 'Triggers an action or event when clicked.',
    path: '/components/button',
    category: 'Input',
  },
  {
    name: 'Calendar',
    description:
      'A date field component that allows users to enter and edit date values.',
    path: '/components/calendar',
    category: 'Date',
  },
  {
    name: 'Card',
    description:
      'Containers for displaying content and actions about a single subject.',
    path: '/components/card',
    category: 'Layout',
  },
  {
    name: 'Carousel',
    description: 'A slideshow component for cycling through elements.',
    path: '/components/carousel',
    category: 'Display',
  },
  {
    name: 'Chart',
    description:
      'Data visualization components for displaying data in various chart formats.',
    path: '/components/chart',
    category: 'Data Display',
  },
  {
    name: 'Checkbox',
    description:
      'A control that allows the user to toggle between checked and unchecked states.',
    path: '/components/checkbox',
    category: 'Input',
  },
  {
    name: 'Collapsible',
    description: 'A component that can be expanded or collapsed.',
    path: '/components/collapsible',
    category: 'Display',
  },
  {
    name: 'Column Header',
    description:
      'A header component for data tables that provides sorting functionality.',
    path: '/components/column-header',
    category: 'Data Display',
  },
  {
    name: 'Command',
    description: 'Fast, composable, command menu for React.',
    path: '/components/command',
    category: 'Navigation',
  },
  {
    name: 'Context Menu',
    description: 'Displays a menu when right-clicking on an element.',
    path: '/components/context-menu',
    category: 'Overlay',
  },
  {
    name: 'Data Table',
    description:
      'A powerful table component for displaying and interacting with tabular data.',
    path: '/components/data-table',
    category: 'Data Display',
  },
  {
    name: 'Dialog',
    description: 'A window overlaid on the UI for displaying content.',
    path: '/components/dialog',
    category: 'Overlay',
  },
  {
    name: 'Drawer',
    description: 'A panel that slides in from the edge of the screen.',
    path: '/components/drawer',
    category: 'Overlay',
  },
  {
    name: 'Dropdown Menu',
    description:
      'Displays a menu to the user — generally in a dropdown format.',
    path: '/components/dropdown-menu',
    category: 'Overlay',
  },
  {
    name: 'File Drop Target',
    description:
      'A component that allows users to drag and drop files for upload.',
    path: '/components/file-drop-target',
    category: 'Input',
  },
  {
    name: 'Form',
    description: 'Building forms with validation using React Hook Form.',
    path: '/components/form',
    category: 'Input',
  },
  {
    name: 'Hover Card',
    description:
      'For sighted users to preview content available behind a link.',
    path: '/components/hover-card',
    category: 'Overlay',
  },
  {
    name: 'Input',
    description:
      'Displays a form input field or a component that looks like an input field.',
    path: '/components/input',
    category: 'Input',
  },
  {
    name: 'Input OTP',
    description: 'One-time password input for authentication.',
    path: '/components/input-otp',
    category: 'Input',
  },
  {
    name: 'Label',
    description: 'Renders an accessible label associated with controls.',
    path: '/components/label',
    category: 'Input',
  },
  {
    name: 'Menubar',
    description: 'A visually persistent menu common in desktop applications.',
    path: '/components/menubar',
    category: 'Navigation',
  },
  {
    name: 'Multiple Selector',
    description:
      'A versatile component for selecting multiple items from a searchable dropdown.',
    path: '/components/multiple-selector',
    category: 'Input',
  },
  {
    name: 'Navigation Menu',
    description: 'A collection of links for navigating websites.',
    path: '/components/navigation-menu',
    category: 'Navigation',
  },
  {
    name: 'Pagination',
    description: 'Navigate between multiple pages of content.',
    path: '/components/pagination',
    category: 'Navigation',
  },
  {
    name: 'Popover',
    description: 'Displays floating content in relation to a target element.',
    path: '/components/popover',
    category: 'Overlay',
  },
  {
    name: 'Progress',
    description:
      'Displays an indicator showing the completion progress of a task.',
    path: '/components/progress',
    category: 'Feedback',
  },
  {
    name: 'Radio Group',
    description:
      'A set of checkable buttons where only one can be checked at a time.',
    path: '/components/radio-group',
    category: 'Input',
  },
  {
    name: 'Resizable',
    description: 'Allows users to resize elements.',
    path: '/components/resizable',
    category: 'Layout',
  },
  {
    name: 'Scroll Area',
    description: 'Augments native scroll functionality for custom scrollbars.',
    path: '/components/scroll-area',
    category: 'Layout',
  },
  {
    name: 'Select',
    description: 'Displays a list of options for the user to pick from.',
    path: '/components/select',
    category: 'Input',
  },
  {
    name: 'Separator',
    description: 'A visual divider between content.',
    path: '/components/separator',
    category: 'Layout',
  },
  {
    name: 'Sheet',
    description:
      'Extends the Dialog component to display content that complements the main content of the screen.',
    path: '/components/sheet',
    category: 'Overlay',
  },
  {
    name: 'Sidebar',
    description:
      'A navigation component that displays a sidebar with collapsible functionality.',
    path: '/components/sidebar',
    category: 'Navigation',
  },
  {
    name: 'Skeleton',
    description: 'Used to show a placeholder while content is loading.',
    path: '/components/skeleton',
    category: 'Feedback',
  },
  {
    name: 'Slider',
    description: 'Allows users to make selections from a range of values.',
    path: '/components/slider',
    category: 'Input',
  },
  {
    name: 'Sonner',
    description: 'Toast component for displaying notifications.',
    path: '/components/sonner',
    category: 'Feedback',
  },
  {
    name: 'Switch',
    description:
      'A control that allows the user to toggle between checked and unchecked states.',
    path: '/components/switch',
    category: 'Input',
  },
  {
    name: 'Table',
    description: 'A responsive table component with sorting functionality.',
    path: '/components/table',
    category: 'Data Display',
  },
  {
    name: 'Tabs',
    description:
      'A set of layered sections of content that display one panel at a time.',
    path: '/components/tabs',
    category: 'Display',
  },
  {
    name: 'Textarea',
    description:
      'Displays a form textarea or a component that looks like a textarea.',
    path: '/components/textarea',
    category: 'Input',
  },
  {
    name: 'Toast',
    description:
      'A notification component for displaying brief, temporary messages to the user.',
    path: '/components/toast',
    category: 'Feedback',
  },
  {
    name: 'Toaster',
    description:
      'A container component that manages and displays toast notifications.',
    path: '/components/toaster',
    category: 'Feedback',
  },
  {
    name: 'Toggle',
    description: 'A two-state button that can be either on or off.',
    path: '/components/toggle',
    category: 'Input',
  },
  {
    name: 'Toggle Group',
    description:
      'A set of toggle buttons where only one can be active at a time.',
    path: '/components/toggle-group',
    category: 'Input',
  },
  {
    name: 'Tooltip',
    description:
      'A popup that displays information related to an element when the element receives focus or is hovered over.',
    path: '/components/tooltip',
    category: 'Overlay',
  },
];

// Group components by category
const groupedComponents: Record<string, Component[]> = components.reduce(
  (acc: Record<string, Component[]>, component) => {
    if (!acc[component.category]) {
      acc[component.category] = [];
    }
    acc[component.category].push(component);
    return acc;
  },
  {},
);

// Sort categories alphabetically
const sortedCategories = Object.keys(groupedComponents).sort();

export default function Components() {
  return (
    <div className="container mx-auto py-6 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Components</h1>
        <p className="text-muted-foreground">
          Explore the Aptima UI component library, featuring {components.length}{' '}
          components organized by category.
        </p>
      </div>

      {sortedCategories.map((category) => (
        <div key={category} className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">{category}</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {groupedComponents[category].map((component) => (
              <Link
                key={component.name}
                to={component.path}
                className="block no-underline"
              >
                <Card className="h-full transition-colors hover:bg-muted/50">
                  <CardHeader>
                    <CardTitle>{component.name}</CardTitle>
                    <CardDescription>{component.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <span className="text-sm text-primary">
                      View documentation →
                    </span>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

