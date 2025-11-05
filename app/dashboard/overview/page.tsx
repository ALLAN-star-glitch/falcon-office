// app/dashboard/overview/page.tsx
import QuickOverviewCard from "@/components/dashboard/Cards/QuickOverviewCard";
import LineChart from "@/components/dashboard/Charts/LineChart";
import { UserIcon, UsersIcon, FolderIcon, ClipboardListIcon } from "lucide-react";

export default function OverviewPage() {
  const dummyData = [
    { date: "2025-11-01", users: 120 },
    { date: "2025-11-02", users: 150 },
    { date: "2025-11-03", users: 180 },
    { date: "2025-11-04", users: 200 },
  ];

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <QuickOverviewCard
          title="Total Users"
          value={1200}
          icon={<UserIcon />}
          color="from-royalBlue to-skyBlue"
        />
        <QuickOverviewCard
          title="Active Departments"
          value={35}
          icon={<UsersIcon />}
          color="from-skyBlue to-lightBlue"
        />
        <QuickOverviewCard
          title="Pending Requests"
          value={12}
          icon={<ClipboardListIcon />}
          color="from-royalBlue to-lightBlue"
        />
        <QuickOverviewCard
          title="Reports Generated"
          value={87}
          icon={<FolderIcon />}
          color="from-skyBlue to-royalBlue"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-sm font-medium text-slate-600 mb-4">Active Users Over Time</h3>
          <LineChart data={dummyData} />
        </div>

        <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
          <h3 className="text-sm font-medium text-slate-600 mb-4">Task Completion</h3>
          {/* You can replace with a progress chart or pie chart */}
          <p className="text-sm text-gray-500">Chart coming soon...</p>
        </div>
      </div>

      {/* Recent Activity / System Logs */}
      <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
        <h3 className="text-sm font-medium text-slate-600 mb-4">Recent Activity</h3>
        <ul className="space-y-2">
          <li className="flex justify-between">
            <span>User John Doe created a new project</span>
            <span className="text-gray-400 text-xs">2h ago</span>
          </li>
          <li className="flex justify-between">
            <span>Mary approved department request</span>
            <span className="text-gray-400 text-xs">4h ago</span>
          </li>
          <li className="flex justify-between">
            <span>File &quot;Budget.pdf&quot; uploaded</span>
            <span className="text-gray-400 text-xs">6h ago</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
