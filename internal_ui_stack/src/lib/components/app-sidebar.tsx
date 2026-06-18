import aptimaLogoLightUrl from '../../assets/2025-Aptima-Primary-Logo-NO-Tagline.svg';
import aptimaLogoDarkUrl from '../../assets/2025-Aptima-Reversed-Logo-NO-Tagline.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Badge } from '@/lib/components/ui/badge';
import { Button } from '@/lib/components/ui/button';
import { ScrollArea } from '@/lib/components/ui/scroll-area';
import { Gitlab } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useTheme } from '@/lib/components/theme-provider';
import { ModeToggle } from './mode-toggle';

export function AppSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  const { theme } = useTheme();

  const [aptimaLogoUrl, setAptimaLogoUrl] = useState<string>('');

  useEffect(() => {
    if (theme === 'dark') {
      setAptimaLogoUrl(aptimaLogoDarkUrl);
    } else if (theme === 'light') {
      setAptimaLogoUrl(aptimaLogoLightUrl);
    } else if (
      theme === 'system' &&
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setAptimaLogoUrl(aptimaLogoDarkUrl);
    } else {
      setAptimaLogoUrl(aptimaLogoLightUrl);
    }
  }, [theme]);

  const isActive = (path: string) => {
    return currentPath === path || currentPath.startsWith(path + '/');
  };

  return (
    <div className="hidden lg:block h-[100dvh] border-r w-72 sticky top-0 left-0 overflow-y-auto bg-sidebar">
      <div className="py-6 pr-6 pl-4">
        <div
          className="flex items-center gap-2 px-2 cursor-pointer"
          onClick={() => navigate('/')}
        >
          <img src={aptimaLogoUrl} alt="Aptima, Inc." className="h-16" />
          <Badge variant="secondary" className="ml-auto">
            v0.2.0
          </Badge>
        </div>

        <ScrollArea className="h-[calc(100vh-11rem)] py-6">
          <div className="space-y-6">
            <nav className="flex flex-col space-y-1">
              <Link
                to="/getting-started"
                className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                  isActive('/getting-started')
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                }`}
              >
                Getting Started
              </Link>
              <Link
                to="/installation"
                className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                  isActive('/installation')
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                }`}
              >
                Installation
              </Link>
              <Link
                to="/design-principles"
                className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                  isActive('/design-principles')
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                }`}
              >
                Design Principles
              </Link>
              <Link
                to="/optimizations"
                className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                  isActive('/optimizations')
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                }`}
              >
                Human Performance
              </Link>
              <Link
                to="/components"
                className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                  isActive('/components') && currentPath === '/components'
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                }`}
              >
                Components
              </Link>
            </nav>

            {isActive('/components') && (
              <div className="space-y-1">
                <h4 className="text-xs font-medium text-muted-foreground px-2 py-1">
                  DATA DISPLAY
                </h4>
                <nav className="flex flex-col space-y-1">
                  <Link
                    to="/components/avatar"
                    className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                      isActive('/components/avatar')
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    Avatar
                  </Link>
                  <Link
                    to="/components/badge"
                    className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                      isActive('/components/badge')
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    Badge
                  </Link>
                  <Link
                    to="/components/chart"
                    className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                      isActive('/components/chart')
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    Chart
                  </Link>
                  <Link
                    to="/components/table"
                    className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                      isActive('/components/table')
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    Table
                  </Link>
                </nav>

                <h4 className="text-xs font-medium text-muted-foreground px-2 py-1 mt-4">
                  DISPLAY
                </h4>
                <nav className="flex flex-col space-y-1">
                  <Link
                    to="/components/accordion"
                    className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                      isActive('/components/accordion')
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    Accordion
                  </Link>
                  <Link
                    to="/components/carousel"
                    className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                      isActive('/components/carousel')
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    Carousel
                  </Link>
                  <Link
                    to="/components/collapsible"
                    className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                      isActive('/components/collapsible')
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    Collapsible
                  </Link>
                  <Link
                    to="/components/tabs"
                    className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                      isActive('/components/tabs')
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    Tabs
                  </Link>
                </nav>

                <h4 className="text-xs font-medium text-muted-foreground px-2 py-1 mt-4">
                  FEEDBACK
                </h4>
                <nav className="flex flex-col space-y-1">
                  <Link
                    to="/components/alert"
                    className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                      isActive('/components/alert')
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    Alert
                  </Link>
                  <Link
                    to="/components/progress"
                    className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                      isActive('/components/progress')
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    Progress
                  </Link>
                  <Link
                    to="/components/skeleton"
                    className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                      isActive('/components/skeleton')
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    Skeleton
                  </Link>
                  <Link
                    to="/components/sonner"
                    className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                      isActive('/components/sonner')
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    Sonner
                  </Link>
                </nav>

                <h4 className="text-xs font-medium text-muted-foreground px-2 py-1 mt-4">
                  INPUT
                </h4>
                <nav className="flex flex-col space-y-1">
                  <Link
                    to="/components/button"
                    className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                      isActive('/components/button')
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    Button
                  </Link>
                  <Link
                    to="/components/checkbox"
                    className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                      isActive('/components/checkbox')
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    Checkbox
                  </Link>
                  <Link
                    to="/components/form"
                    className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                      isActive('/components/form')
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    Form
                  </Link>
                  <Link
                    to="/components/input"
                    className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                      isActive('/components/input')
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    Input
                  </Link>
                  <Link
                    to="/components/input-otp"
                    className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                      isActive('/components/input-otp')
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    Input OTP
                  </Link>
                  <Link
                    to="/components/label"
                    className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                      isActive('/components/label')
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    Label
                  </Link>
                  <Link
                    to="/components/radio-group"
                    className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                      isActive('/components/radio-group')
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    Radio Group
                  </Link>
                  <Link
                    to="/components/select"
                    className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                      isActive('/components/select')
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    Select
                  </Link>
                  <Link
                    to="/components/slider"
                    className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                      isActive('/components/slider')
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    Slider
                  </Link>
                  <Link
                    to="/components/switch"
                    className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                      isActive('/components/switch')
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    Switch
                  </Link>
                  <Link
                    to="/components/textarea"
                    className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                      isActive('/components/textarea')
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    Textarea
                  </Link>
                  <Link
                    to="/components/toggle"
                    className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                      isActive('/components/toggle')
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    Toggle
                  </Link>
                  <Link
                    to="/components/toggle-group"
                    className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                      isActive('/components/toggle-group')
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    Toggle Group
                  </Link>
                </nav>

                <h4 className="text-xs font-medium text-muted-foreground px-2 py-1 mt-4">
                  LAYOUT
                </h4>
                <nav className="flex flex-col space-y-1">
                  <Link
                    to="/components/aspect-ratio"
                    className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                      isActive('/components/aspect-ratio')
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    Aspect Ratio
                  </Link>
                  <Link
                    to="/components/card"
                    className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                      isActive('/components/card')
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    Card
                  </Link>
                  <Link
                    to="/components/resizable"
                    className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                      isActive('/components/resizable')
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    Resizable
                  </Link>
                  <Link
                    to="/components/scroll-area"
                    className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                      isActive('/components/scroll-area')
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    Scroll Area
                  </Link>
                  <Link
                    to="/components/separator"
                    className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                      isActive('/components/separator')
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    Separator
                  </Link>
                </nav>

                <h4 className="text-xs font-medium text-muted-foreground px-2 py-1 mt-4">
                  NAVIGATION
                </h4>
                <nav className="flex flex-col space-y-1">
                  <Link
                    to="/components/breadcrumb"
                    className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                      isActive('/components/breadcrumb')
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    Breadcrumb
                  </Link>
                  <Link
                    to="/components/command"
                    className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                      isActive('/components/command')
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    Command
                  </Link>
                  <Link
                    to="/components/menubar"
                    className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                      isActive('/components/menubar')
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    Menubar
                  </Link>
                  <Link
                    to="/components/navigation-menu"
                    className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                      isActive('/components/navigation-menu')
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    Navigation Menu
                  </Link>
                  <Link
                    to="/components/pagination"
                    className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                      isActive('/components/pagination')
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    Pagination
                  </Link>
                  <Link
                    to="/components/sidebar"
                    className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                      isActive('/components/sidebar')
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    Sidebar
                  </Link>
                </nav>

                <h4 className="text-xs font-medium text-muted-foreground px-2 py-1 mt-4">
                  OVERLAY
                </h4>
                <nav className="flex flex-col space-y-1">
                  <Link
                    to="/components/alert-dialog"
                    className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                      isActive('/components/alert-dialog')
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    Alert Dialog
                  </Link>
                  <Link
                    to="/components/context-menu"
                    className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                      isActive('/components/context-menu')
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    Context Menu
                  </Link>
                  <Link
                    to="/components/dialog"
                    className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                      isActive('/components/dialog')
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    Dialog
                  </Link>
                  <Link
                    to="/components/drawer"
                    className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                      isActive('/components/drawer')
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    Drawer
                  </Link>
                  <Link
                    to="/components/dropdown-menu"
                    className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                      isActive('/components/dropdown-menu')
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    Dropdown Menu
                  </Link>
                  <Link
                    to="/components/hover-card"
                    className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                      isActive('/components/hover-card')
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    Hover Card
                  </Link>
                  <Link
                    to="/components/popover"
                    className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                      isActive('/components/popover')
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    Popover
                  </Link>
                  <Link
                    to="/components/sheet"
                    className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                      isActive('/components/sheet')
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    Sheet
                  </Link>
                  <Link
                    to="/components/tooltip"
                    className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                      isActive('/components/tooltip')
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    Tooltip
                  </Link>
                </nav>

                <h4 className="text-xs font-medium text-muted-foreground px-2 py-1 mt-4">
                  DATE
                </h4>
                <nav className="flex flex-col space-y-1">
                  <Link
                    to="/components/calendar"
                    className={`text-sm font-medium px-2 py-2 rounded-md transition-colors ${
                      isActive('/components/calendar')
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'
                    }`}
                  >
                    Calendar
                  </Link>
                </nav>
              </div>
            )}
          </div>
        </ScrollArea>
        <div className="mt-6 px-2 flex flex-row gap-2">
          <Button variant="outline" className="flex flex-row gap-2">
            <Gitlab />
            <a
              href="https://gitlab.aptima.com/platform/core/library/aptima-ui/aptima-ui"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gitlab
            </a>
          </Button>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
