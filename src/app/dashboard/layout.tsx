"use client";
import { Sidebar } from "@/components/Sidebar";
import { Topbar } from "@/components/Topbar";
import { useSidebarStore } from "@/store/sidebarStore";

export default function Layout({ children }: { children: React.ReactNode }) {
  const { isSidebarOpen } = useSidebarStore();

  return (
    <div className="flex h-screen fixed inset-0">
      <div className="sticky inset-0">
        <Sidebar />
      </div>

      <div className={` flex-1 flex flex-col  transition-all `}>
        <div className="sticky inset-0">
          <Topbar />
        </div>

        <main className="p-2 h-screen overflow-y-auto ">{children}</main>
      </div>
    </div>
  );
}
