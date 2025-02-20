import { Topbar } from "@/components/Topbar";
import { AppSidebar } from "@/components/dashboardSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    
    
   <SidebarProvider>
       
      <AppSidebar />
      <main className="w-full">
        <Topbar />
        {children}
      </main>
    </SidebarProvider>
  )
}
