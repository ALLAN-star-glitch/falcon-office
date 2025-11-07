"use client";

import {
  HomeIcon,
  UsersIcon,
  UserIcon,
  ClipboardListIcon,
  FolderIcon,
  MessageSquareIcon,
  PieChartIcon,
  SettingsIcon,
  CalendarIcon,
  DollarSignIcon,
} from "lucide-react";

export interface SubItem {
  name: string;
  href: string;
}

export interface MenuItem {
  name: string;
  icon: React.ElementType; // changed from ReactNode to ElementType for flexibility
  href: string;
  subItems?: SubItem[];
}

export interface MenuGroup {
  group: string;
  items: MenuItem[];
}

export const menuGroups: MenuGroup[] = [
  {
    group: "General",
    items: [
      {
        name: "Overview",
        icon: HomeIcon,
        href: "/dashboard",
      },
    ],
  },
  {
    group: "Organization Mgmt",
    items: [
      {
        name: "Organizations",
        icon: FolderIcon,
        href: "/dashboard/organizations",
        subItems: [
          { name: "All Orgs", href: "/dashboard/organizations/all" },
          { name: "Add Org", href: "/dashboard/organizations/add" },
        ],
      },
      {
        name: "Users",
        icon: UsersIcon,
        href: "/dashboard/users",
        subItems: [
          { name: "All Users", href: "/dashboard/users/all" },
          { name: "Add User", href: "/dashboard/users/add" },
          { name: "Invite Users", href: "/dashboard/users/invite" },
        ],
      },
      {
        name: "Roles",
        icon: UserIcon,
        href: "/dashboard/roles",
        subItems: [
          { name: "All Roles", href: "/dashboard/roles/all" },
          { name: "Create Role", href: "/dashboard/roles/create" },
        ],
      },
      {
        name: "Departments",
        icon: ClipboardListIcon,
        href: "/dashboard/departments",
        subItems: [
          { name: "All Departments", href: "/dashboard/departments/all" },
          { name: "Add Department", href: "/dashboard/departments/add" },
        ],
      },
    ],
  },
  {
    group: "Projects & Tasks",
    items: [
      {
        name: "Project & Task Center",
        icon: FolderIcon,
        href: "/dashboard/projects",
        subItems: [
          { name: "Active Projects", href: "/dashboard/projects/active" },
          { name: "Archived Projects", href: "/dashboard/projects/archived" },
        ],
      },
      {
        name: "Events",
        icon: CalendarIcon,
        href: "/dashboard/events",
        subItems: [
          { name: "All Events", href: "/dashboard/events/all" },
          { name: "Add Event", href: "/dashboard/events/add" },
        ],
      },
    ],
  },
  {
    group: "Communication",
    items: [
      {
        name: "Communication Hub",
        icon: MessageSquareIcon,
        href: "/dashboard/communication",
        subItems: [
          { name: "Messages", href: "/dashboard/communication/messages" },
          { name: "Announcements", href: "/dashboard/communication/announcements" },
        ],
      },
    ],
  },
  {
    group: "Finance",
    items: [
      {
        name: "Payments & Dues",
        icon: DollarSignIcon,
        href: "/dashboard/payments",
        subItems: [
          { name: "All Payments", href: "/dashboard/payments/all" },
          { name: "Reports", href: "/dashboard/payments/reports" },
        ],
      },
    ],
  },
  {
    group: "Reports",
    items: [
      {
        name: "Reports & Analytics",
        icon: PieChartIcon,
        href: "/dashboard/reports",
        subItems: [
          { name: "User Reports", href: "/dashboard/reports/users" },
          { name: "System Logs", href: "/dashboard/reports/logs" },
        ],
      },
    ],
  },
  {
    group: "Settings",
    items: [
      {
        name: "Settings",
        icon: SettingsIcon,
        href: "/dashboard/settings",
        subItems: [
          { name: "Profile", href: "/dashboard/settings/profile" },
          { name: "Platform Settings", href: "/dashboard/settings/platform" },
        ],
      },
    ],
  },
];
