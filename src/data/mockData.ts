import type { StatCard, RevenueData, Order, Activity, KanbanColumn, CalendarEvent } from '../types/dashboard.types';

export const statsCards: StatCard[] = [
  {
    id: 'revenue',
    title: 'Total Revenue',
    value: 285400,
    prefix: '$',
    change: 12.5,
    changeLabel: 'vs last month',
    icon: 'dollar-sign',
    gradient: 'from-blue-600 to-blue-400',
    chartData: [30, 40, 35, 50, 49, 60, 70, 91, 125].map((v) => ({ value: v })),
  },
  {
    id: 'users',
    title: 'Total Users',
    value: 18240,
    change: 8.2,
    changeLabel: 'vs last month',
    icon: 'users',
    gradient: 'from-violet-600 to-violet-400',
    chartData: [10, 25, 20, 35, 30, 45, 60, 70, 90].map((v) => ({ value: v })),
  },
  {
    id: 'orders',
    title: 'Orders',
    value: 5640,
    change: -3.1,
    changeLabel: 'vs last month',
    icon: 'shopping-cart',
    gradient: 'from-emerald-600 to-emerald-400',
    chartData: [15, 20, 18, 25, 22, 30, 28, 40, 55].map((v) => ({ value: v })),
  },
  {
    id: 'conversion',
    title: 'Conversion Rate',
    value: 3.24,
    suffix: '%',
    change: 1.8,
    changeLabel: 'vs last month',
    icon: 'trending-up',
    gradient: 'from-amber-600 to-amber-400',
    chartData: [2.1, 2.3, 2.5, 2.4, 2.8, 3.0, 3.1, 3.2, 3.24].map((v) => ({ value: v })),
  },
];

export const revenueData: RevenueData[] = [
  { month: 'Jan', revenue: 18000, users: 1200, orders: 450 },
  { month: 'Feb', revenue: 22000, users: 1800, orders: 520 },
  { month: 'Mar', revenue: 25000, users: 2100, orders: 610 },
  { month: 'Apr', revenue: 28000, users: 2500, orders: 680 },
  { month: 'May', revenue: 32000, users: 3000, orders: 750 },
  { month: 'Jun', revenue: 35000, users: 3500, orders: 820 },
  { month: 'Jul', revenue: 38000, users: 4200, orders: 900 },
  { month: 'Aug', revenue: 42000, users: 5000, orders: 980 },
  { month: 'Sep', revenue: 45000, users: 5800, orders: 1050 },
  { month: 'Oct', revenue: 48000, users: 6500, orders: 1120 },
  { month: 'Nov', revenue: 52000, users: 7200, orders: 1200 },
  { month: 'Dec', revenue: 58000, users: 8200, orders: 1350 },
];

export const orders: Order[] = Array.from({ length: 20 }, (_, i) => ({
  id: `ORD-${String(1000 + i).slice(1)}`,
  customer: ['Alice Johnson', 'Bob Smith', 'Charlie Brown', 'Diana Prince', 'Eve Wilson'][i % 5],
  email: ['alice@email.com', 'bob@email.com', 'charlie@email.com', 'diana@email.com', 'eve@email.com'][i % 5],
  product: ['UltraViewer Pro', 'UltraViewer Enterprise', 'UltraViewer Free', 'Premium Support', 'Training Package'][i % 5],
  date: `2024-${String((i % 12) + 1).padStart(2, '0')}-${String((i % 28) + 1).padStart(2, '0')}`,
  status: (['completed', 'pending', 'processing', 'cancelled'] as const)[i % 4],
  amount: Math.floor(Math.random() * 500) + 50,
  avatar: `https://i.pravatar.cc/40?u=${i}`,
}));

export const activities: Activity[] = [
  { id: '1', user: 'Alice Johnson', action: 'created a new order', target: '#ORD-1023', timestamp: '2 min ago', avatar: 'https://i.pravatar.cc/40?u=1' },
  { id: '2', user: 'Bob Smith', action: 'updated product', target: 'UltraViewer Pro', timestamp: '15 min ago', avatar: 'https://i.pravatar.cc/40?u=2' },
  { id: '3', user: 'Charlie Brown', action: 'completed payment', target: '$450.00', timestamp: '1 hour ago', avatar: 'https://i.pravatar.cc/40?u=3' },
  { id: '4', user: 'Diana Prince', action: 'signed up', target: 'New account', timestamp: '2 hours ago', avatar: 'https://i.pravatar.cc/40?u=4' },
  { id: '5', user: 'Eve Wilson', action: 'requested refund', target: '#ORD-1015', timestamp: '3 hours ago', avatar: 'https://i.pravatar.cc/40?u=5' },
  { id: '6', user: 'Admin', action: 'updated settings', target: 'Email config', timestamp: '5 hours ago', avatar: 'https://i.pravatar.cc/40?u=6' },
];

export const kanbanData: KanbanColumn[] = [
  {
    id: 'todo', title: 'To Do',
    tasks: [
      { id: 't1', title: 'Update landing page', description: 'Redesign hero section', priority: 'high', assignee: 'Alice', avatar: 'https://i.pravatar.cc/40?u=1' },
      { id: 't2', title: 'Fix login bug', description: 'Google OAuth not working', priority: 'high', assignee: 'Bob', avatar: 'https://i.pravatar.cc/40?u=2' },
      { id: 't3', title: 'Write docs', description: 'API documentation', priority: 'low', assignee: 'Eve', avatar: 'https://i.pravatar.cc/40?u=5' },
    ],
  },
  {
    id: 'in-progress', title: 'In Progress',
    tasks: [
      { id: 't4', title: 'Dashboard charts', description: 'Add Recharts integration', priority: 'medium', assignee: 'Charlie', avatar: 'https://i.pravatar.cc/40?u=3' },
      { id: 't5', title: 'Email templates', description: 'Welcome + reset password', priority: 'medium', assignee: 'Diana', avatar: 'https://i.pravatar.cc/40?u=4' },
    ],
  },
  {
    id: 'review', title: 'Review',
    tasks: [
      { id: 't6', title: 'Payment gateway', description: 'Stripe integration', priority: 'high', assignee: 'Alice', avatar: 'https://i.pravatar.cc/40?u=1' },
    ],
  },
  {
    id: 'done', title: 'Completed',
    tasks: [
      { id: 't7', title: 'User auth system', description: 'Login + Register + OAuth', priority: 'high', assignee: 'Bob', avatar: 'https://i.pravatar.cc/40?u=2' },
      { id: 't8', title: 'Database setup', description: 'MongoDB Atlas + models', priority: 'medium', assignee: 'Charlie', avatar: 'https://i.pravatar.cc/40?u=3' },
    ],
  },
];

export const calendarEvents: CalendarEvent[] = [
  { id: 'e1', title: 'Sprint Planning', date: '2024-06-10', time: '09:00 AM', type: 'meeting', attendees: 8 },
  { id: 'e2', title: 'Client Demo', date: '2024-06-12', time: '02:00 PM', type: 'meeting', attendees: 5 },
  { id: 'e3', title: 'Release v2.0', date: '2024-06-15', time: 'All day', type: 'deadline', attendees: 0 },
  { id: 'e4', title: 'Team Lunch', date: '2024-06-18', time: '12:00 PM', type: 'reminder', attendees: 12 },
  { id: 'e5', title: 'Code Review', date: '2024-06-20', time: '10:00 AM', type: 'meeting', attendees: 4 },
];

export const menuItems = [
  { label: 'Dashboard', icon: 'layout-dashboard', path: '/dashboard' },
  { label: 'Analytics', icon: 'bar-chart-3', path: '/dashboard/analytics' },
  { label: 'Orders', icon: 'shopping-cart', path: '/dashboard/orders', badge: 12 },
  { label: 'Customers', icon: 'users', path: '/dashboard/customers' },
  { label: 'Products', icon: 'package', path: '/dashboard/products' },
  { label: 'Messages', icon: 'message-square', path: '/dashboard/messages', badge: 5 },
  { label: 'Calendar', icon: 'calendar', path: '/dashboard/calendar' },
  { label: 'Finance', icon: 'dollar-sign', path: '/dashboard/finance' },
  { label: 'Reports', icon: 'file-text', path: '/dashboard/reports' },
  { label: 'Settings', icon: 'settings', path: '/dashboard/settings' },
];
