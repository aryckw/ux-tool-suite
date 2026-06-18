import {
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
  Breadcrumb,
} from '@/lib/components/ui/breadcrumb';
import { useLocation } from 'react-router-dom';
import React from 'react';

const AppBreadcrumbs = () => {
  const location = useLocation();

  // Split the pathname into segments and filter out empty strings
  const pathSegments = location.pathname.split('/').filter(Boolean);

  // Create a list of crumb objects with href and label
  const crumbs = pathSegments.map((segment, index) => {
    // Build the href by joining all segments up to this one
    const href = '/' + pathSegments.slice(0, index + 1).join('/');

    // Format the segment for display (capitalize first letter, replace hyphens with spaces)
    const label = segment
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');

    return { href, label };
  });

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>

        {crumbs.map((crumb, index) => (
          <React.Fragment key={crumb.href}>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {index === crumbs.length - 1 ? (
                <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink href={crumb.href}>{crumb.label}</BreadcrumbLink>
              )}
            </BreadcrumbItem>
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default AppBreadcrumbs;
