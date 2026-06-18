import { AppSidebar } from '@/lib/components/app-sidebar';
import { ThemeProvider } from '@/lib/components/theme-provider';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SidebarProvider, SidebarInset } from '@/lib/components/ui/sidebar';
import { Toaster } from '@/lib/components/ui/sonner';

// Documentation Pages
import GettingStarted from '@/docs/routes/docs/getting-started';
import Installation from '@/docs/routes/docs/installation';
import Components from '@/docs/routes/docs/components';
import Homepage from '@/docs/routes/docs/homepage';

// Component Documentation Pages
import AccordionDoc from '@/docs/routes/docs/components/accordion';
import AlertDoc from '@/docs/routes/docs/components/alert';
import AlertDialogDoc from '@/docs/routes/docs/components/alert-dialog';
import AspectRatioDoc from '@/docs/routes/docs/components/aspect-ratio';
import AvatarDoc from '@/docs/routes/docs/components/avatar';
import BadgeDoc from '@/docs/routes/docs/components/badge';
import BreadcrumbDoc from '@/docs/routes/docs/components/breadcrumb';
import ButtonDoc from '@/docs/routes/docs/components/button';
import CalendarDoc from '@/docs/routes/docs/components/calendar';
import CardDoc from '@/docs/routes/docs/components/card';
import CarouselDoc from '@/docs/routes/docs/components/carousel';
import ChartDoc from '@/docs/routes/docs/components/chart';
import CheckboxDoc from '@/docs/routes/docs/components/checkbox';
import CollapsibleDoc from '@/docs/routes/docs/components/collapsible';
import ColumnHeaderDoc from '@/docs/routes/docs/components/column-header';
import CommandDoc from '@/docs/routes/docs/components/command';
import ContextMenuDoc from '@/docs/routes/docs/components/context-menu';
import DataTableDoc from '@/docs/routes/docs/components/data-table';
import DialogDoc from '@/docs/routes/docs/components/dialog';
import DrawerDoc from '@/docs/routes/docs/components/drawer';
import DropdownMenuDoc from '@/docs/routes/docs/components/dropdown-menu';
import FileDropTargetDoc from '@/docs/routes/docs/components/file-drop-target';
import FormDoc from '@/docs/routes/docs/components/form';
import HoverCardDoc from '@/docs/routes/docs/components/hover-card';
import InputDoc from '@/docs/routes/docs/components/input';
import InputOtpDoc from '@/docs/routes/docs/components/input-otp';
import LabelDoc from '@/docs/routes/docs/components/label';
import MenubarDoc from '@/docs/routes/docs/components/menubar';
import MultipleSelectorDoc from '@/docs/routes/docs/components/multiple-selector';
import NavigationMenuDoc from '@/docs/routes/docs/components/navigation-menu';
import PaginationDoc from '@/docs/routes/docs/components/pagination';
import PopoverDoc from '@/docs/routes/docs/components/popover';
import ProgressDoc from '@/docs/routes/docs/components/progress';
import RadioGroupDoc from '@/docs/routes/docs/components/radio-group';
import ResizableDoc from '@/docs/routes/docs/components/resizable';
import ScrollAreaDoc from '@/docs/routes/docs/components/scroll-area';
import SelectDoc from '@/docs/routes/docs/components/select';
import SeparatorDoc from '@/docs/routes/docs/components/separator';
import SheetDoc from '@/docs/routes/docs/components/sheet';
import SidebarDoc from '@/docs/routes/docs/components/sidebar';
import SkeletonDoc from '@/docs/routes/docs/components/skeleton';
import SliderDoc from '@/docs/routes/docs/components/slider';
import SonnerDoc from '@/docs/routes/docs/components/sonner';
import SwitchDoc from '@/docs/routes/docs/components/switch';
import TableDoc from '@/docs/routes/docs/components/table';
import TabsDoc from '@/docs/routes/docs/components/tabs';
import TextareaDoc from '@/docs/routes/docs/components/textarea';
import ToggleDoc from '@/docs/routes/docs/components/toggle';
import ToggleGroupDoc from '@/docs/routes/docs/components/toggle-group';
import TooltipDoc from '@/docs/routes/docs/components/tooltip';
import Optimizations from '@/docs/routes/docs/optimizations';
import DesignPrinciples from '@/docs/routes/docs/design-principles';
import { ScrollToTop } from '@/lib/components/ScrollToTop';

export default function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <Router basename={import.meta.env.VITE_BASE_URL}>
        <ScrollToTop />
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <div className="flex flex-1 flex-col p-4 max-w-[1200px]">
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/getting-started" element={<GettingStarted />} />
                <Route path="/installation" element={<Installation />} />
                <Route path="/components" element={<Components />} />
                <Route path="/optimizations" element={<Optimizations />} />
                <Route
                  path="/design-principles"
                  element={<DesignPrinciples />}
                />

                {/* Component Documentation Routes */}
                <Route
                  path="/components/accordion"
                  element={<AccordionDoc />}
                />
                <Route path="/components/alert" element={<AlertDoc />} />
                <Route
                  path="/components/alert-dialog"
                  element={<AlertDialogDoc />}
                />
                <Route
                  path="/components/aspect-ratio"
                  element={<AspectRatioDoc />}
                />
                <Route path="/components/avatar" element={<AvatarDoc />} />
                <Route path="/components/badge" element={<BadgeDoc />} />
                <Route
                  path="/components/breadcrumb"
                  element={<BreadcrumbDoc />}
                />
                <Route path="/components/button" element={<ButtonDoc />} />
                <Route path="/components/calendar" element={<CalendarDoc />} />
                <Route path="/components/card" element={<CardDoc />} />
                <Route path="/components/carousel" element={<CarouselDoc />} />
                <Route path="/components/chart" element={<ChartDoc />} />
                <Route path="/components/checkbox" element={<CheckboxDoc />} />
                <Route
                  path="/components/collapsible"
                  element={<CollapsibleDoc />}
                />
                <Route
                  path="/components/column-header"
                  element={<ColumnHeaderDoc />}
                />
                <Route path="/components/command" element={<CommandDoc />} />
                <Route
                  path="/components/context-menu"
                  element={<ContextMenuDoc />}
                />
                <Route
                  path="/components/data-table"
                  element={<DataTableDoc />}
                />
                <Route path="/components/dialog" element={<DialogDoc />} />
                <Route path="/components/drawer" element={<DrawerDoc />} />
                <Route
                  path="/components/dropdown-menu"
                  element={<DropdownMenuDoc />}
                />
                <Route
                  path="/components/file-drop-target"
                  element={<FileDropTargetDoc />}
                />
                <Route path="/components/form" element={<FormDoc />} />
                <Route
                  path="/components/hover-card"
                  element={<HoverCardDoc />}
                />
                <Route path="/components/input" element={<InputDoc />} />
                <Route path="/components/input-otp" element={<InputOtpDoc />} />
                <Route path="/components/label" element={<LabelDoc />} />
                <Route path="/components/menubar" element={<MenubarDoc />} />
                <Route
                  path="/components/multiple-selector"
                  element={<MultipleSelectorDoc />}
                />
                <Route
                  path="/components/navigation-menu"
                  element={<NavigationMenuDoc />}
                />
                <Route
                  path="/components/pagination"
                  element={<PaginationDoc />}
                />
                <Route path="/components/popover" element={<PopoverDoc />} />
                <Route path="/components/progress" element={<ProgressDoc />} />
                <Route
                  path="/components/radio-group"
                  element={<RadioGroupDoc />}
                />
                <Route
                  path="/components/resizable"
                  element={<ResizableDoc />}
                />
                <Route
                  path="/components/scroll-area"
                  element={<ScrollAreaDoc />}
                />
                <Route path="/components/select" element={<SelectDoc />} />
                <Route
                  path="/components/separator"
                  element={<SeparatorDoc />}
                />
                <Route path="/components/sheet" element={<SheetDoc />} />
                <Route path="/components/sidebar" element={<SidebarDoc />} />
                <Route path="/components/skeleton" element={<SkeletonDoc />} />
                <Route path="/components/slider" element={<SliderDoc />} />
                <Route path="/components/sonner" element={<SonnerDoc />} />
                <Route path="/components/switch" element={<SwitchDoc />} />
                <Route path="/components/table" element={<TableDoc />} />
                <Route path="/components/tabs" element={<TabsDoc />} />
                <Route path="/components/textarea" element={<TextareaDoc />} />
                <Route path="/components/toggle" element={<ToggleDoc />} />
                <Route
                  path="/components/toggle-group"
                  element={<ToggleGroupDoc />}
                />
                <Route path="/components/tooltip" element={<TooltipDoc />} />
              </Routes>
            </div>
          </SidebarInset>
          <Toaster />
        </SidebarProvider>
      </Router>
    </ThemeProvider>
  );
}
