"use client";

import { useState } from "react";

interface Role {
  id: number;
  name: string;
  status: "Active" | "Inactive";
}

export default function RolesAllPage() {
  const [roles, setRoles] = useState<Role[]>([
    { id: 1, name: "Super Admin", status: "Active" },
    { id: 2, name: "Admin", status: "Active" },
    { id: 3, name: "Registered User", status: "Active" },
    { id: 4, name: "Premium User", status: "Inactive" },
  ]);

  return (
    <main className="flex-1 p-6 bg-[#F9FBFF] overflow-y-auto">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-2">
        <div>
          <h1 className="text-3xl font-bold text-[#1E293B]">Roles Management</h1>
          <p className="text-sm text-[#64748B] mt-1">
            Manage user roles and access levels across your organization.
          </p>
        </div>
        <button className="self-start sm:self-auto bg-gradient-to-r from-[#165DFC] to-[#4EA8FF] text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-sm hover:from-[#4EA8FF] hover:to-[#165DFC] transition-all">
          + Create New Role
        </button>
      </div>

      {/* Roles Table */}
      <div className="bg-white rounded-xl shadow-[0_4px_12px_rgba(22,93,252,0.08)] overflow-hidden border border-[#E5E9F2]">
        <table className="min-w-full divide-y divide-[#E5E9F2]">
          <thead className="bg-[#F9FBFF]">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-[#64748B] uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-[#64748B] uppercase tracking-wider">
                Role Name
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-[#64748B] uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-[#64748B] uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-y divide-[#E5E9F2]">
            {roles.map((role, idx) => (
              <tr
                key={role.id}
                className={`transition-colors ${
                  idx % 2 === 0 ? "bg-white" : "bg-[#F5F8FF]"
                } hover:bg-[#E5F0FF]`}
              >
                <td className="px-6 py-4 text-sm text-[#1E293B]">{role.id}</td>
                <td className="px-6 py-4 text-sm text-[#1E293B] font-medium">{role.name}</td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                      role.status === "Active"
                        ? "bg-[#34C759]/20 text-[#34C759]"
                        : "bg-[#FF4C4C]/20 text-[#FF4C4C]"
                    }`}
                  >
                    {role.status}
                  </span>
                </td>
                <td className="px-6 py-4 flex gap-2">
                  <button className="bg-gradient-to-r from-[#165DFC] to-[#4EA8FF] text-white px-3 py-1 rounded-lg text-sm font-medium hover:from-[#4EA8FF] hover:to-[#165DFC] transition-all">
                    Edit
                  </button>
                  <button className="bg-[#FF4C4C]/20 text-[#FF4C4C] px-3 py-1 rounded-lg text-sm font-medium hover:bg-[#FF4C4C]/30 transition-all">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Guidance / Info Box */}
      <div className="mt-6 p-4 bg-[#A5B4FC]/20 rounded-lg text-sm text-[#1E293B]">
        Tip: Roles define the access level of users in your organization. 
        Super Admins have full permissions, while other roles may have restricted access.
      </div>
    </main>
  );
}
