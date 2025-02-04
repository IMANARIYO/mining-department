"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { FaChartBar, FaCog, FaHome, FaSignOutAlt } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { GiAutoRepair } from "react-icons/gi";
import { useSidebarStore } from "@/store/sidebarStore";

// Sidebar Item Component
type SidebarItemProps = {
  icon: React.ReactNode;
  label: string;
  path: string;
  isActive: boolean;
};

const SidebarItem = ({ icon, label, path, isActive }: SidebarItemProps) => {
  const { isSidebarOpen } = useSidebarStore();

  return (
    <Link
      href={path}
      className={`relative flex items-center p-4 rounded-xl transition-all group h-14 text-[#000000CC] font-medium 
        ${
          isActive
            ? "bg-[#FF9501] text-white "
            : "hover:bg-[#FF9501] hover:text-white"
        }
       ${isSidebarOpen ? "" : "justify-center" }`}>
      <span className="text-2xl">{icon}</span> {/* Bigger Icons */}
      {isSidebarOpen ? (
        <span className="ml-3">{label}</span>
      ) : (
        <span className="absolute left-16 bg-gray-800 text-white text-sm px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
          {label}
        </span>
      )}
    </Link>
  );
};

// Sidebar items array
const sidebarItems = [
  {
    icon: <FaHome className="w-8 h-8" />,
    label: "Dashboard",
    path: "/dashboard"
  },
  {
    icon: <FaChartBar className="w-8 h-8" />,
    label: "Reports",
    path: "/dashboard/reports"
  },
  {
    icon: <FaCog className="w-8 h-8" />,
    label: "Settings",
    path: "/dashboard/settings"
  }
];

export const Sidebar = function () {
  const { isSidebarOpen, toggleSidebar } = useSidebarStore();
  const pathname = usePathname(); // Get current active path

  return (
    <motion.aside
      initial={{ width: 64 }}
      animate={{ width: isSidebarOpen ? 256 : 64 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="bg-[#F5F5F5] h-screen text-[#000000CC] sticky top-0 left-0 flex flex-col shadow-lg p-2">
      {/* Header - Logo & Toggle Button */}
      <div className='flex items-center  p-2 h-20 border-b-2  ${isSidebarOpen ? "" : "justify-center" }'>
        <GiAutoRepair className="min-h-12 min-w-12" />
        {isSidebarOpen && <h1 className="text-lg font-bold">Company</h1>}
      </div>

      {/* Sidebar Navigation */}
      <nav className="mt-4 flex-1 space-y-2">
        {sidebarItems.map((item) => (
          <SidebarItem
            key={item.path}
            icon={item.icon}
            label={item.label}
            path={item.path}
            isActive={pathname === item.path}
          />
        ))}
      </nav>

      {/* Logout Button */}
      <div className="mb-4">
        <SidebarItem
          icon={<FaSignOutAlt className="w-8 h-8" />}
          label="Logout"
          path="/logout"
          isActive={false}
        />
      </div>
    </motion.aside>
  );
};
