"use client";
import MessagesPanel from "./TopBarPanels/MessagesPanel";
import NotificationsPanel from "./TopBarPanels/NotificationsPanel";
import ProfilePanel from "./TopBarPanels/ProfilePanel";
import VisibleControlSidebar from "./TopBarPanels/VisibleControlSidebar";
import { useState } from "react";
import { FaTasks } from "react-icons/fa";
import { FiBell, FiUser } from "react-icons/fi";
import { useSidebarStore } from "@/store/sidebarStore";

import { 
  X, 
  Sun, 
  Settings, 
  MessageSquare, 
  User,
   
  Bell, 
  Maximize, 
  Menu, 
  Minimize, 
  Search, 
  
} from "lucide-react";

type PanelType =
  | "notifications"
  | "messages"
  | "profile"
  | "SidebarPanel"
  | null;
export const Topbar = () => {
      const {  toggleSidebar } = useSidebarStore();
    const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
    const [activePanel, setActivePanel] = useState<PanelType>(null);
    const [isControlOpen, setIsControlOpen] = useState<boolean>(false);
    const toggleFullscreen = () => {
      setIsFullscreen((prevState) => !prevState);
      if (!isFullscreen) {
        document.documentElement.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    };

    const togglePanel = (panel: PanelType) => {
      setActivePanel(activePanel === panel ? null : panel);
    };

    const toggleControl = () => {
      setIsControlOpen(!isControlOpen);
      setActivePanel(null);
    };

  return (
    <div className="flex justify-between items-center pr-2  relative border-b-2 h-20">
      <div className="flex-1 flex items-center justify-between space-x-4">
        <div className="flex items-center space-x-4 pl-2">
          <button onClick={toggleSidebar}>
            {" "}
            <Menu />
          </button>

          <div className="flex items-center bg-gray-100 rounded-md p-2 space-x-2 text-customGreen">
          well coming  manager message or name  manager</div>
{/*   
          <div className="flex items-center bg-gray-100 rounded-md p-2 space-x-2 text-customGreen">
            <Search />
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-100 text-customGreen focus:outline-none focus:ring-0"
            />
          </div> */}
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={() => togglePanel("notifications")}
            className="relative">
            <Bell className="h-8" />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </button>

          <button
            onClick={() => togglePanel("SidebarPanel")}
            className="hover:bg-gray-100 p-2 rounded-full transition-colors">
            <Settings
              className={`w-5 h-5 ${isControlOpen ? "text-blue-500" : ""}`}
            />
          </button>

          <button onClick={() => togglePanel("messages")} className="relative">
            <MessageSquare className="h-8" />
            <span className="absolute top-[-2] right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </button>

          <button onClick={toggleFullscreen}>
            {isFullscreen ? <Minimize /> : <Maximize />}
          </button>

          <button onClick={() => togglePanel("profile")}>
            <User />
          </button>
        </div>
      </div>

      {/* Right-Side Panels */}
      {activePanel && (
        <div className="fixed top-20 right-0 w-80 h-full bg-white shadow-lg border-l border-gray-300 p-4 transition-transform transform duration-300">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">
              {activePanel === "SidebarPanel"
                ? "Sidebar Control"
                : activePanel === "notifications"
                ? "Notifications"
                : activePanel === "messages"
                ? "Messages"
                : "User Profile"}
            </h2>
            <button onClick={() => setActivePanel(null)}>
              <X />
            </button>
          </div>

          {activePanel === "SidebarPanel" && <VisibleControlSidebar />}
          {activePanel === "notifications" && <NotificationsPanel />}
          {activePanel === "messages" && <MessagesPanel />}
          {activePanel === "profile" && <ProfilePanel />}
        </div>
      )}
    </div>
  );
}





