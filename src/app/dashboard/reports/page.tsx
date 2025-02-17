"use client";

import React, { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button, Stack, Typography } from "@mui/material";
import CustomModal from "./CustomModal"; // Import the modal

// Sample Data
const departments = ["Mining", "Logistics", "Security", "Finance", "IT"];
const statuses = ["Unread", "Pending", "Confirmed", "Reviewed"];

interface Report {
  id: number;
  name: string;
  department: string;
  status: string;
  date: string;
  owner: boolean;
}

const reports: Report[] = [];

for (let i = 1; i <= 10000; i++) {
  reports.push({
    id: i,
    name: `Report ${i}`,
    department: departments[i % departments.length],
    status: statuses[i % statuses.length],
    date: `2024-02-${String(i * 2).padStart(2, "0")}`,
    owner: i % 2 === 0
  });
}

function Page() {
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [reportData, setReportData] = useState(reports); // Store reports in state

  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  // Handle Confirm Action
  const handleConfirm = (reportId: number) => {
    setReportData((prevReports) =>
      prevReports.map((r) =>
        r.id === reportId ? { ...r, status: "Confirmed" } : r
      )
    );
  };

  // Handle Reject Action
  const handleReject = (reportId: number, reason: string) => {
    setReportData((prevReports) =>
      prevReports.map((r) =>
        r.id === reportId ? { ...r, status: "Rejected" } : r
      )
    );
    console.log(`Report ${reportId} rejected for reason: ${reason}`);
  };

  // Apply filtering on reportData instead of reports
  const filteredReports = reportData.filter((report) => {
    const matchesDepartment =
      selectedDepartment === "All" || report.department === selectedDepartment;
    const matchesStatus =
      selectedStatus === "All" || report.status === selectedStatus;

    return matchesDepartment && matchesStatus;
  });

  const columns: GridColDef[] = [
    { field: "name", headerName: "Report Name", flex: 1 },
    { field: "department", headerName: "Department", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
    { field: "date", headerName: "Date", flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => (
        <Button
          variant="contained"
          onClick={() => {
            setSelectedReport(params.row);
            setIsModalOpen(true);
          }}>
          View
        </Button>
      )
    }
  ];

  return (
    <div style={{ padding: "20px", height: "100vh" }}>
      {/* Filters */}
      <div>
        <Typography variant="h6">Filter by Department</Typography>
        <Stack direction="row" spacing={1} style={{ marginBottom: "10px" }}>
          <div className="grid  grid-cols-3  md:grid-cols-4 gap-4">
            <Button
              variant={selectedDepartment === "All" ? "contained" : "outlined"}
              onClick={() => setSelectedDepartment("All")}>
              All
            </Button>
            {departments.map((dept) => (
              <Button
                key={dept}
                variant={selectedDepartment === dept ? "contained" : "outlined"}
                onClick={() => setSelectedDepartment(dept)}>
                {dept}
              </Button>
            ))}
          </div>
        </Stack>

        <Typography variant="h6">Filter by Status</Typography>
        <Stack direction="row" spacing={1} style={{ marginBottom: "20px" }}>
          <Button
            variant={selectedStatus === "All" ? "contained" : "outlined"}
            onClick={() => setSelectedStatus("All")}>
            All
          </Button>
          {statuses.map((status) => (
            <Button
              key={status}
              variant={selectedStatus === status ? "contained" : "outlined"}
              onClick={() => setSelectedStatus(status)}>
              {status}
            </Button>
          ))}
        </Stack>
      </div>

      {/* Report List */}
      <Typography variant="h6">Report List</Typography>
      <div style={{ height: "80vh", width: "100%" }}>
        <DataGrid
          rows={filteredReports}
          columns={columns}
          pageSizeOptions={[2, 5, 10, 25, 50, 100, 200]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </div>

      {/* Custom Modal */}
      <CustomModal
        report={selectedReport}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirm}
        onReject={handleReject}
      />
    </div>
  );
}

export default Page;
