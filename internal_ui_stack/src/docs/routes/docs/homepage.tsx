import { Link } from 'react-router-dom';
import { Button } from '@/lib/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/lib/components/ui/card';

import { ArrowRight, Check, Zap, Palette, Box, Star } from 'lucide-react';

export default function Homepage() {
  return (
    <div className="mx-auto max-w-6xl py-10 space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-12">
        <div className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
          Aptima UI v0.2.0
        </div>
        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
          Beautiful UI components
          <br />
          built for <span className="text-primary">the web,</span>
          <br />
          optimized for <span className="text-primary">human performance</span>
        </h1>
        <p className="mx-auto max-w-2xl text-muted-foreground text-xl">
          A comprehensive library of accessible, customizable, and reusable
          components built with React, Tailwind CSS, and Base UI.
        </p>
        <div className="flex items-center justify-center gap-4 pt-4">
          <Button size="lg">
            <Link
              to="/getting-started"
              className="flex flex-row gap-2 items-center"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg">
            <Link to="/components">Browse Components</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">Why Choose Aptima UI?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Designed for developers who want beautiful, accessible components
            without compromising on quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          <Card>
            <CardHeader>
              <Star className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Accessible</CardTitle>
            </CardHeader>
            <CardContent>
              Built following WCAG guidelines with full keyboard navigation and
              screen reader support.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Palette className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Customizable</CardTitle>
            </CardHeader>
            <CardContent>
              Easily customize components with Tailwind CSS and theme variables
              to match your brand.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Box className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Composable</CardTitle>
            </CardHeader>
            <CardContent>
              Components are designed to work together seamlessly for building
              complex interfaces.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Zap className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Developer Experience</CardTitle>
            </CardHeader>
            <CardContent>
              Fully typed with TypeScript and comprehensive documentation for
              rapid development.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Component Categories */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">Component Categories</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our extensive collection of UI components designed for every
            need.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/components" className="group">
            <Card className="h-full transition-all hover:border-primary/50 hover:shadow-md">
              <CardHeader>
                <CardTitle className="group-hover:text-primary">
                  Input Components
                </CardTitle>
                <CardDescription>
                  Form controls and user input elements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Button</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Checkbox</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Input</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Select</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="group-hover:text-primary">
                  View all input components
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </Link>

          <Link to="/components" className="group">
            <Card className="h-full transition-all hover:border-primary/50 hover:shadow-md">
              <CardHeader>
                <CardTitle className="group-hover:text-primary">
                  Display Components
                </CardTitle>
                <CardDescription>
                  Elements for presenting content and data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Card</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Table</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Avatar</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Badge</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="group-hover:text-primary">
                  View all display components
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </Link>

          <Link to="/components" className="group">
            <Card className="h-full transition-all hover:border-primary/50 hover:shadow-md">
              <CardHeader>
                <CardTitle className="group-hover:text-primary">
                  Navigation Components
                </CardTitle>
                <CardDescription>
                  Elements for navigating your application
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Sidebar</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Navigation Menu</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Breadcrumb</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Pagination</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="group-hover:text-primary">
                  View all navigation components
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </Link>

          <Link to="/components" className="group">
            <Card className="h-full transition-all hover:border-primary/50 hover:shadow-md">
              <CardHeader>
                <CardTitle className="group-hover:text-primary">
                  Overlay Components
                </CardTitle>
                <CardDescription>
                  Dialogs, popovers, and other floating elements
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Dialog</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Drawer</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Popover</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Tooltip</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="group-hover:text-primary">
                  View all overlay components
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </Link>

          <Link to="/components" className="group">
            <Card className="h-full transition-all hover:border-primary/50 hover:shadow-md">
              <CardHeader>
                <CardTitle className="group-hover:text-primary">
                  Layout Components
                </CardTitle>
                <CardDescription>
                  Structure and organize your interface
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Accordion</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Separator</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Resizable</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Tabs</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="group-hover:text-primary">
                  View all layout components
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </Link>

          <Link to="/components" className="group">
            <Card className="h-full transition-all hover:border-primary/50 hover:shadow-md">
              <CardHeader>
                <CardTitle className="group-hover:text-primary">
                  Feedback Components
                </CardTitle>
                <CardDescription>Notify and inform your users</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Alert</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Progress</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Skeleton</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span>Sonner (Toast)</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="group-hover:text-primary">
                  View all feedback components
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">Ready to Get Started?</CardTitle>
            <CardDescription className="text-lg">
              Elevate your React applications with our beautiful component
              library.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary">
                <Link to="/getting-started">Get Started</Link>
              </Button>
              <Button size="lg" variant="secondary">
                <Link to="/components">Browse Components</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
