"use client";

import React, { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Button, Stack, Typography } from "@mui/material";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu";

// Sample report data
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

import { Drawer } from "vaul";
import ViewReport from "@/components/viewRepport";
function ViewReportModal({
  report,
  isOpen,
  onClose
}: {
  report: Report | null;
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!report) return null;

  return (
    <Drawer.Root open={isOpen} onOpenChange={onClose} onClose={onClose}>
      {/* <Drawer.Portal> */}
      <Drawer.Overlay className="fixed inset-0 bg-black/40" />
      <Drawer.Content className="fixed inset-x-0 mx-auto top-[50%] translate-y-[-50%] bg-white rounded-lg w-full max-w-2xl p-6">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <Drawer.Title className="text-2xl font-semibold">
              {report.name}
            </Drawer.Title>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700">
              ✕
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-gray-900">Department</h3>
              <p className="text-gray-600">{report.department}</p>
            </div>

            <div>
              <h3 className="font-medium text-gray-900">Status</h3>
              <p className="text-gray-600">{report.status}</p>
            </div>

            <div>
              <h3 className="font-medium text-gray-900">Date</h3>
              <p className="text-gray-600">{report.date}</p>
            </div>

            <div>
              <h3 className="font-medium text-gray-900">Report ID</h3>
              <p className="text-gray-600">#{report.id}</p>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-2">Report Details</h3>
            <p className="text-gray-600">
              Detailed information about the report would go here. This could
              include description, findings, recommendations, and any other
              relevant information.
            </p>
          </div>

          <div className="mt-6 flex justify-end gap-3">
            <Button variant="outlined" onClick={onClose}>
              Close
            </Button>
            {report.owner && (
              <Button
                variant="contained"
                onClick={() => console.log("Edit report", report.id)}>
                Edit Report
              </Button>
            )}
          </div>
        </div>
      </Drawer.Content>
      {/* </Drawer.Portal> */}
    </Drawer.Root>
  );
}

function page() {
  const [selectedDepartment, setSelectedDepartment] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");
  const [selectedReport, setSelectedReport] = useState<Report | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const filteredReports = reports.filter((report) => {
    const matchesDepartment =
      selectedDepartment === "All" || report.department === selectedDepartment;
    const matchesStatus =
      selectedStatus === "All" || report.status === selectedStatus;

    return matchesDepartment && matchesStatus;
  });
  interface HandleViewReport {
    (report: Report): void;
  }

  const handleViewReport: HandleViewReport = (report) => {
    setSelectedReport(report);
    setIsModalOpen(true);
  };

  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Report Name",
      flex: 1,
      headerClassName: "super-app-theme--header"
    },
    {
      field: "department",
      headerName: "Department",
      flex: 1,
      headerClassName: "super-app-theme--header"
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
      headerClassName: "super-app-theme--header"
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
      headerClassName: "super-app-theme--header"
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      headerClassName: "super-app-theme--header",
      renderCell: (params) => (
        <DropdownMenu>
          <DropdownMenuTrigger disabled={false} asChild>
            <Button variant="contained">Actions</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {/* <DropdownMenuItem
              onSelect={(e) => {
                e.preventDefault();
                handleViewReport(params.row);
              }}>
              View
            </DropdownMenuItem> */}
            <DropdownMenu>
              <ViewReport />
            </DropdownMenu>
            <DropdownMenuItem
              onClick={() => console.log("Downloading report", params.row.id)}>
              Download
            </DropdownMenuItem>
            {params.row.owner && (
              <>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={() => console.log("Editing report", params.row.id)}>
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => console.log("Deleting report", params.row.id)}>
                  Delete
                </DropdownMenuItem>
              </>
            )}
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => console.log("Confirming report", params.row.id)}>
              Confirm
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => console.log("Rejecting report", params.row.id)}>
              Reject
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => console.log("Reporting issue", params.row.id)}>
              Report Issue
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  ];

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        height: "100vh"
      }}>
      <div>
        <Typography variant="h6">Filter by Department</Typography>
        <Stack direction="row" spacing={1} style={{ marginBottom: "10px" }}>
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

      <div style={{ flex: 1, height: "calc(100vh - 200px)", width: "100%" }}>
        <DataGrid
          rows={filteredReports}
          columns={columns}
          pageSizeOptions={[25, 50, 100]}
          initialState={{
            pagination: {
              paginationModel: { pageSize: 25, page: 0 }
            }
          }}
          sx={{
            height: "100%",
            "& .super-app-theme--header": {
              backgroundColor: "rgba(25, 118, 210, 0.08)",
              fontWeight: "bold",
              fontSize: "1.5rem"
            },
            "& .MuiDataGrid-columnHeaders": {
              position: "sticky",
              top: 0,
              zIndex: 2
            },
            "& .MuiDataGrid-footerContainer": {
              position: "sticky",
              bottom: 0,
              zIndex: 2
            },
            "& .MuiDataGrid-virtualScroller": {
              overflow: "auto"
            }
          }}
        />
      </div>
      <ViewReportModal
        report={selectedReport}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedReport(null);
        }}
      />
    </div>
  );
}

export default page;
