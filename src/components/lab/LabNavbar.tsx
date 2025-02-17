"use client";

import React, { useState } from "react";
import { Menu, Home, FileText, BarChart, File, PieChart } from "lucide-react";

const LabNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Dashboard");

 const navItems = [
     { name: "Dashboard", icon: <Home />, link: "/dashboard/lab" },
     { name: "Samples", icon: <FileText />, link: "/dashboard/lab" },
     { name: "Analysis", icon: <BarChart />, link: "/dashboard/lab/analysis" },
     { name: "Reports", icon: <File />, link: "/dashboard/lab" },
     { name: "Analytics", icon: <PieChart />, link: "/dashboard/lab" }
   ];
  return (
    <nav className="bg-white w-full shadow-md">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-10 items-center h-16 w-full">
          {/* Logo & Mobile Menu */}
          <div className="flex items-center space-x-8 w-full">
            <h1 className="text-xl font-bold">MineLab Insights</h1>
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}>
              <Menu className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className={`md:flex items-center md:space-x-4 ${
              menuOpen ? "flex" : "hidden"
            } flex-col md:flex-row absolute md:static top-16 left-0 w-full bg-white p-4 md:p-0 shadow-md md:shadow-none`}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => setActiveTab(item.name)}
                className={`flex items-center px-3 py-2 text-sm space-x-2 ${
                  activeTab === item.name
                    ? "text-blue-600 font-bold"
                    : "text-gray-500"
                } hover:text-blue-500 transition`}>
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LabNavbar;
