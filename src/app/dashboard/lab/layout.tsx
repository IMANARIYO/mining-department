"use client";

import LabNavbar from "@/components/lab/LabNavbar";
import React from "react";


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <LabNavbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <footer className="mt-8 text-center text-sm text-gray-500">
        <div className="flex justify-between items-center">
          <div>© 2025 MineLab Insights. All rights reserved.</div>
          <div className="space-x-4">
            <a href="#" className="hover:text-gray-900">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-900">
              Terms of Service
            </a>
            <a href="#" className="hover:text-gray-900">
              Support
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DashboardLayout;
