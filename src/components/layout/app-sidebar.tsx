// "use client";

// import { Sparkles } from "lucide-react";

// import { NAVIGATION } from "@/constants/navigation";
// import SidebarItem from "./sidebar/sidebar-item";

// export function AppSidebar() {
//   return (
//     <aside className="fixed inset-y-0 left-0 z-50 hidden w-72 flex flex-col border-r border-slate-200 bg-white lg:flex">
//       {/* Logo */}
//       <div className="flex h-20 items-center border-b border-slate-200 px-6 shrink-0">
//         <div className="flex items-center gap-3">
//           <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-lg">
//             <Sparkles className="h-5 w-5" />
//           </div>

//           <div>
//             <h1 className="text-lg font-bold tracking-tight">
//               Talla Jewellers
//             </h1>

//             <p className="text-xs text-slate-500">
//               Operations Suite
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 space-y-2 overflow-y-auto px-4 py-6">
//         {NAVIGATION.map((item) => (
//           <SidebarItem
//             key={item.href}
//             title={item.title}
//             href={item.href}
//             icon={item.icon}
//           />
//         ))}
//       </nav>

//       {/* Footer */}
//       <div className="shrink-0 border-t border-slate-200 p-5">
//         <div className="rounded-2xl border border-emerald-100 bg-gradient-to-r from-emerald-50 to-white p-4">
//           <p className="text-sm font-semibold text-slate-800">
//             Talla Operations
//           </p>

//           <p className="mt-1 text-xs leading-5 text-slate-500">
//             Inventory, staff and showroom management in one place.
//           </p>
//         </div>
//       </div>
//     </aside>
//   );
// }

"use client";

import { Crown } from "lucide-react";

import { NAVIGATION } from "@/constants/navigation";
import SidebarItem from "./sidebar/sidebar-item";

export function AppSidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-50 hidden w-72 flex-col border-r border-[#E8E2D8] bg-[#FBF8F3] lg:flex">
      {/* Logo */}
      <div className="flex h-24 shrink-0 items-center border-b border-[#E8E2D8] px-6">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#6B103E] text-white shadow-md">
            <Crown className="h-6 w-6 text-[#D4AF37]" />
          </div>

          <div>
            <h1 className="text-lg font-bold tracking-tight text-[#4A0E2E]">
              Talla Jewellers
            </h1>

            <p className="text-xs text-slate-500">
              Operations Suite
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 overflow-y-auto px-4 py-6">
        {NAVIGATION.map((item) => (
          <SidebarItem
            key={item.href}
            title={item.title}
            href={item.href}
            icon={item.icon}
          />
        ))}
      </nav>

      {/* Footer */}
      <div className="shrink-0 border-t border-[#E8E2D8] p-5">
        <div className="rounded-2xl border border-[#E8E2D8] bg-white p-4 shadow-sm">
          <div className="mb-2 flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-[#D4AF37]" />

            <p className="text-sm font-semibold text-[#4A0E2E]">
              Talla Operations
            </p>
          </div>

          <p className="text-xs leading-5 text-slate-500">
            Inventory, staff and showroom management in one place.
          </p>
        </div>
      </div>
    </aside>
  );
}