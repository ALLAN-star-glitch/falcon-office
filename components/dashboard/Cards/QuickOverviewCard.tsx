// components/cards/QuickOverviewCard.tsx
"use client";

interface QuickOverviewCardProps {
  title: string;
  value: number | string;
  icon?: React.ReactNode;
  color?: string; // Tailwind gradient class
}

export default function QuickOverviewCard({ title, value, icon, color }: QuickOverviewCardProps) {
  return (
    <div className={`p-4 rounded-lg shadow-sm bg-white border border-gray-100 hover:shadow-md transition`}>
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-slate-600">{title}</h3>
          <p className="mt-1 text-xl font-semibold text-royalBlue">{value}</p>
        </div>
        {icon && <div className={`p-2 rounded-full bg-linear-to-br ${color} text-white`}>{icon}</div>}
      </div>
    </div>
  );
}
