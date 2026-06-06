export interface StatCard {
  id: string;
  title: string;
  value: number;
  prefix?: string;
  suffix?: string;
  change: number;
  changeLabel: string;
  icon: string;
  gradient: string;
  chartData: { value: number }[];
}

export interface RevenueData {
  month: string;
  revenue: number;
  users: number;
  orders: number;
}

export interface Order {
  id: string;
  customer: string;
  email: string;
  product: string;
  date: string;
  status: 'completed' | 'pending' | 'cancelled' | 'processing';
  amount: number;
  avatar: string;
}

export interface Activity {
  id: string;
  user: string;
  action: string;
  target: string;
  timestamp: string;
  avatar: string;
}

export interface KanbanTask {
  id: string;
  title: string;
  description: string;
  priority: 'low' | 'medium' | 'high';
  assignee: string;
  avatar: string;
}

export interface KanbanColumn {
  id: string;
  title: string;
  tasks: KanbanTask[];
}

export interface CalendarEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  type: 'meeting' | 'deadline' | 'reminder';
  attendees: number;
}

export interface MenuItem {
  label: string;
  icon: string;
  path: string;
  badge?: number;
}
