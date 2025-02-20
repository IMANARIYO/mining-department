"use client"
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Calendar } from "@/components/ui/calendar";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Textarea } from "@/components/ui/textarea";
import { AlertTriangle } from "lucide-react";
import CustomSelect from "@/components/CustomSelect";
import { DatePicker } from "@/components/DatePicker";

const TunnelManagementSystem = () => {
    const mineSites = [
      { value: "site1", label: "Mine Site 1" },
      { value: "site2", label: "Mine Site 2" },
      { value: "site3", label: "Mine Site 3" }
    ];

    const tunnels = [
      { value: "tunnel1", label: "Tunnel 1" },
      { value: "tunnel2", label: "Tunnel 2" }
    ];

    const shifts = [
      { value: "day", label: "Day Shift" },
      { value: "night", label: "Night Shift" }
    ];

    const incidents = [
      { value: "fall", label: "Rock Fall" },
      { value: "fire", label: "Fire" }
    ];

    const crossCuts = [
      { value: "cut1", label: "Cross Cut 1" },
      { value: "cut2", label: "Cross Cut 2" }
    ];

    const blastTypes = [
      { value: "primary", label: "Primary Blast" },
      { value: "secondary", label: "Secondary Blast" }
    ];

    const progressTypes = [
      { value: "excavation", label: "Excavation" },
      { value: "support", label: "Support Installation" }
    ];

    const designProfileTypes = [
      { value: "rectangular", label: "Rectangular" },
      { value: "arch", label: "Arch" }
    ];

interface Equipment {
  id: string; // Unique ID for each equipment item
  warning: boolean;
  equipment: string;
  number: string;
  location: string;
}
const equipmentData: Equipment[] = [
  {
    id: "1",
    warning: true,
    equipment: "Pumps",
    number: "2",
    location: "Tunnel 1"
  },
  {
    id: "2",
    warning: true,
    equipment: "Bobcat",
    number: "1",
    location: "Site 1"
  }
];

    const equipmentColumns = [
      { field: "id", headerName: "ID", hide: true },
      { field: "warning", headerName: "", width: "40px" },
      { field: "equipment", headerName: "Equipment" },
      { field: "number", headerName: "Number" },
      { field: "present", headerName: "Present" },
      { field: "location", headerName: "Location" }
    ];
interface Manpower {
  id: string; // Unique ID for each worker
  warning: boolean;
  name: string;
  role: string;
  location: string;
}
const manpowerData: Manpower[] = [
  {
    id: "1",
    warning: true,
    name: "Eric Rukundo",
    role: "Rod",
    location: "Tunnel 1 / wing 1"
  },
  {
    id: "2",
    warning: true,
    name: "Nshuti Warning",
    role: "SubContractor",
    location: "Tunnel 1 / wing 1"
  }
];
const manpowerColumns = [
  { field: "id", headerName: "ID", hide: true },
  { field: "warning", headerName: "", width: "40px" },
  { field: "name", headerName: "Name" },
  { field: "role", headerName: "Role" },
  { field: "present", headerName: "Present" },
  { field: "location", headerName: "Location" }
];



interface DataTableProps {
  columns: GridColDef[];
  rows: any[];
  title: string;
}

 const [selectedDate, setSelectedDate] = React.useState<Date | undefined>();

  return (
    <div className="w-full max-w-7xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <Select>
            <option value="">Select Company</option>
          </Select>
          <Input className="w-64" placeholder="Search..." />
        </div>
        <div className="flex items-center gap-2">
          <div className="text-green-500 flex items-center gap-2">
            <span className="h-2 w-2 bg-green-500 rounded-full" />
            SYSTEM ONLINE
          </div>
          <Select>
            <option value="">SITE INSPECTOR</option>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="inspection" className="w-full">
        <TabsList>
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="inspection">Inspection</TabsTrigger>
          <TabsTrigger value="production">Production</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="inspection">
          <Card>
            <CardHeader>
              <CardTitle>Site Inspection</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-4 gap-4">
                <CustomSelect
                  options={mineSites}
                  placeholder="Select Mine Site"
                  onChange={(value) => console.log("Mine Site:", value)}
                />

                <CustomSelect
                  options={tunnels}
                  placeholder="Select Tunnel ID"
                  onChange={(value) => console.log("Tunnel ID:", value)}
                />
                <CustomSelect
                  options={shifts}
                  placeholder="Select Shift"
                  onChange={(value) => console.log("Shift:", value)}
                />

                <div className="relative">
                  {/* <Calendar mode="single" className="rounded-md border" /> */}
                  <DatePicker onDateChange={(date) => setSelectedDate(date)} />
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Roll call Manpower on site</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Present</TableHead>
                        <TableHead>Location</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-yellow-500" />
                          Eric Rukundo
                        </TableCell>
                        <TableCell>Rod</TableCell>
                        <TableCell>
                          <input type="checkbox" className="rounded" />
                        </TableCell>
                        <TableCell>Tunnel 1 / wing 1</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Create Tunnel Dimensions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <Input placeholder="Main Axis length" />
                    <Input placeholder="Grade (%)" />
                    <Select>
                      <option value="">Design Profile type</option>
                    </Select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="height dimensions" />
                    <Input placeholder="Width dimensions" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Blast Log Detail</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4">
                    <Select>
                      <option value="">Blast Type</option>
                    </Select>
                    <Input placeholder="Quantity" />
                    <Input placeholder="Failed blasts(QTY)" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="Delay Pattern" />
                    <Input placeholder="Blast pattern" />
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="production">
          <Card>
            <CardHeader>
              <CardTitle>Production Report</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <Input placeholder="Daily Production Plan" />
                <Input placeholder="Booked Meter" />
                <Input placeholder="Actual Meter" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <Input placeholder="Variance" />
                <Input placeholder="Material excavated (Wagon)" />
                <Input placeholder="Waste excavated (Wagon)" />
              </div>
              <Button className="w-full">GENERATE TAG</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Incident report</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <Select>
              <option value="">INCIDENT TYPE</option>
            </Select>
            <Select>
              <option value="">TUNNEL ID</option>
            </Select>
            <Textarea placeholder="SOS people" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Textarea placeholder="People involved" />
            <Textarea placeholder="Root cause analysis" />
            <Textarea placeholder="Measures taken" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TunnelManagementSystem;
