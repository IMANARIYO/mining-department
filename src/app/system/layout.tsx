import { Topbar } from "@/components/Topbar";
import { AppSidebar } from "@/components/dashboardSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { SystemManagerSideBar } from "./SideBarForSystemManager";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <SystemManagerSideBar />
      <main className="w-full">
        <Topbar />
        {children}
      </main>
    </SidebarProvider>
  );
}
