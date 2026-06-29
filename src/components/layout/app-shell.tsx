// import { ReactNode } from "react";

// import { AppHeader } from "./app-header";
// import { AppSidebar } from "./app-sidebar";

// type Props = {
//   children: ReactNode;
// };

// export function AppShell({
//   children,
// }: Props) {
//   return (
//     <div className="min-h-screen bg-slate-100">
//       <AppSidebar />

//       <div className="lg:ml-72">
//         <AppHeader />

//         <main className="px-6 pb-6 pt-24">
//           <div className="mx-auto max-w-7xl">
//             {children}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

import { ReactNode } from "react";
import { AppHeader } from "./app-header";
import { AppSidebar } from "./app-sidebar";

type Props = {
  children: ReactNode;
};

export function AppShell({ children }: Props) {
  return (
    <div className="min-h-screen bg-white">
      <AppSidebar />
      <div className="lg:ml-72">
        <AppHeader />
        <main className="p-6 bg-slate-50 min-h-[calc(100vh-5rem)]">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}