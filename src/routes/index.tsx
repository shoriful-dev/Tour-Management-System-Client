import App from '@/App';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { role } from '@/constants/role';
import About from '@/pages/About';
import Analytics from '@/pages/Admin/Analytics';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import Verify from '@/pages/Verify';
import type { TRole } from '@/types';
import { generateRoutes } from '@/utils/generateRoutes';
import { withAuth } from '@/utils/withAuth';
import { createBrowserRouter, Navigate } from 'react-router';
import { userSidebarItems } from './userSidebarItems';

export const router = createBrowserRouter([
  {
    Component: App,
    path: '/',
    children: [
      {
        Component: About,
        path: 'about',
      },
    ],
  },
  {
    Component: DashboardLayout,
    path: '/admin',
    children: [
      {
        Component: Analytics,
        path: 'analytics',
      },
    ],
  },
  {
    Component: withAuth(DashboardLayout, role.user as TRole),
    path: '/user',
    children: [
      { index: true, element: <Navigate to="/user/bookings" /> },
      ...generateRoutes(userSidebarItems),
    ],
  },
  {
    Component: Login,
    path: '/login',
  },
  {
    Component: Register,
    path: '/register',
  },
  {
    Component: Verify,
    path: '/verify',
  },
]);
