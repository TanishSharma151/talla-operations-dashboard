import { ReactNode } from "react";
import { AppSidebar } from "./app-sidebar";
import { AppHeader } from "./app-header";

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <AppSidebar />

      <div className="lg:pl-72">
        <AppHeader />

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}