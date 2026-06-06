import { statsCards } from "../data/mockData";
import StatsCard from "../components/dashboard/StatsCard";
import { RevenueChart, UsersChart } from "../components/dashboard/RevenueChart";
import OrdersTable from "../components/dashboard/OrdersTable";
import ActivityTimeline from "../components/dashboard/ActivityTimeline";
import KanbanBoard from "../components/dashboard/KanbanBoard";
import CalendarWidget from "../components/dashboard/CalendarWidget";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsCards.map((card, i) => (
          <StatsCard key={card.id} card={card} index={i} />
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RevenueChart />
        <UsersChart />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <OrdersTable />
        </div>
        <ActivityTimeline />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <KanbanBoard />
        <CalendarWidget />
      </div>
    </div>
  );
}
