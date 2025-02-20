
import { BlastingSidebar } from "@/components/blastingComponents/blastingSideBar";
import { Topbar } from "@/components/Topbar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger
} from "@/components/ui/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <BlastingSidebar />
      <main className="w-full">
             <Topbar />
             {children}
           </main>
    </SidebarProvider>
  );
}
