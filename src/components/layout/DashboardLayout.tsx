import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import DashboardHeader from './DashboardHeader';
import { useSidebarStore } from '../../store/dashboard.store';

export default function DashboardLayout() {
  const { collapsed } = useSidebarStore();

  return (
    <div className="min-h-screen bg-slate-950">
      <Sidebar />
      <div className={`transition-all duration-300 ${collapsed ? 'lg:ml-[72px]' : 'lg:ml-64'}`}>
        <DashboardHeader />
        <main className="p-4 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
