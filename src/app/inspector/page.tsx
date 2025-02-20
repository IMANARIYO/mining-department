"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertTriangle, CheckCircle } from "lucide-react"; 
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

import CustomSelect from "@/components/CustomSelect";
import { DatePicker } from "@/components/DatePicker";

const TunnelManagementSystem = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [manpowerData, setManpowerData] = useState([
    {
      id: "1",
      warning: { status: true, message: "No safety helmet" },
      name: "Eric Rukundo",
      role: "Rod",
      location: "Tunnel 1 / Wing 1",
      present: false
    },
    {
      id: "2",
      warning: { status: true, message: "Expired ID" },
      name: "Nshuti Warning",
      role: "SubContractor",
      location: "Tunnel 1 / Wing 1",
      present: false
    },
    {
      id: "3",
      warning: { status: false, message: "" },
      name: "John Doe",
      role: "Foreman",
      location: "Tunnel 2 / Wing 2",
      present: false
    }
  ]);

  const [equipmentData, setEquipmentData] = useState([
    {
      id: "1",
      warning: { status: true, message: "Needs maintenance" },
      equipment: "Pumps",
      number: "2",
      location: "Tunnel 1",
      present: false
    },
    {
      id: "2",
      warning: { status: false, message: "" },
      equipment: "Bobcat",
      number: "1",
      location: "Site 1",
      present: false
    }
  ]);
  const [selectedMineSite, setSelectedMineSite] = useState<string | null>(null);
  const [selectedTunnel, setSelectedTunnel] = useState<string | null>(null);
  const [selectedShift, setSelectedShift] = useState<string | null>(null);
  const [selectedSupport, setSelectedSupport] = useState("");
  const [selectedCrossCut, setSelectedCrossCut] = useState("");
  const [selectedProcessType, setSelectedProcessType] = useState("");
  const [selectedBlastType, setSelectedBlastType] = useState("");
  const [incidentType, setIncidentType] = useState("");
  const [tunnelId, setTunnelId] = useState("");
  const [sosPeople, setSosPeople] = useState("");
  const [peopleInvolved, setPeopleInvolved] = useState("");
  const [rootCause, setRootCause] = useState("");
  const [measuresTaken, setMeasuresTaken] = useState("");
   const [comments, setComments] = useState("");

  const mineSites = [
    { value: "site1", label: "Mine Site 1" },
    { value: "site2", label: "Mine Site 2" },
    { value: "site3", label: "Mine Site 3" }
  ];
  const tunnels = [
    { value: "tunnel1", label: "Tunnel 1" },
    { value: "tunnel2", label: "Tunnel 2" },
    { value: "tunnel3", label: "Tunnel 3" },
    { value: "tunnel4", label: "Tunnel 4" },
    { value: "tunnel5", label: "Tunnel 5" },
    { value: "tunnel6", label: "Tunnel 6" },
    { value: "tunnel7", label: "Tunnel 7" },
    { value: "tunnel8", label: "Tunnel 8" }
  ];
  const shifts = [
    { value: "day", label: "Day Shift" },
    { value: "night", label: "Night Shift" }
  ];
  const incidents = [
    { value: "fall", label: "Rock Fall" },
    { value: "fire", label: "Fire" }
  ];
  // Function to toggle presence
  const togglePresence = (id: string, type: "manpower" | "equipment") => {
    if (type === "manpower") {
      setManpowerData((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, present: !item.present } : item
        )
      );
    } else {
      setEquipmentData((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, present: !item.present } : item
        )
      );
    }
  };

  const manpowerColumns: GridColDef[] = [
    { field: "id", headerName: "ID", hideable: false, width: 20 },
    {
      field: "warning",
      headerName: "Warning",
      renderCell: (params) => (
        <div
          style={{
            backgroundColor: params.value.status ? "#FFD700" : "transparent", // Yellow if warning
            color: params.value.status ? "black" : "inherit",
            padding: "5px",
            borderRadius: "4px"
          }}>
          {params.value.status ? `⚠ ${params.value.message}` : "✅ Safe"}
        </div>
      ),
      width: 200
    },
    { field: "name", headerName: "Name", type: "string", width: 200 },
    { field: "role", headerName: "Role", type: "string" },
    { field: "location", headerName: "Location", type: "string", width: 200 },
    {
      field: "present",
      headerName: "Present",
      renderCell: (params) => (
        <Checkbox
          checked={params.row.present}
          onCheckedChange={() => togglePresence(params.row.id, "manpower")}
        />
      )
    }
  ];
  const equipmentColumns: GridColDef[] = [
    { field: "id", headerName: "ID", hideable: false },
    {
      field: "warning",
      headerName: "Warning",
      renderCell: (params) => {
        if (params.value?.status) {
          return (
            <div className="flex items-center gap-2">
              <AlertTriangle className="text-red-500" size={20} />
              <span className="text-red-500">{params.value.message}</span>
            </div>
          );
        } else {
          return (
            <div className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={20} />
              <span className="text-green-500">No Warning</span>
            </div>
          );
        }
      }
    },
    { field: "equipment", headerName: "Equipment", type: "string" },
    { field: "number", headerName: "Number", type: "string" },
    { field: "location", headerName: "Location", type: "string" },
    {
      field: "present",
      headerName: "Present",
      renderCell: (params) => (
        <Checkbox
          checked={params.row.present}
          onCheckedChange={() => togglePresence(params.row.id, "equipment")}
        />
      )
    }
  ];
  // Function to allow only numeric input
  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      e.target.value = value; // Ensure only numbers
    } else {
      e.target.value = value.replace(/\D/g, ""); // Remove non-numeric characters
    }
  };
  const DataTable = ({
    columns,
    rows,
    title
  }: {
    columns: GridColDef[];
    rows: any[];
    title: string;
  }) => {
    return (
      <Card className="w-full">
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle>{title}</CardTitle>
          <Button variant="outline" size="icon">
            <span className="text-xl">+</span>
          </Button>
        </CardHeader>
        <CardContent>
          <div style={{ height: "100%", width: "100%" }}>
            <DataGrid
              rows={rows}
              columns={columns}
              checkboxSelection
              pageSizeOptions={[2, 5, 10, 25, 50, 100, 200]}
              disableRowSelectionOnClick
              getRowClassName={(params) =>
                params.row.warning.status
                  ? "bg-red-500 text-white"
                  : "bg-green-200"
              }
            />
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4 w-full">
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
              {/* <div className="p-4 border mt-4">
                <p>Selected Mine Site: {selectedMineSite}</p>
                <p>Selected Tunnel: {selectedTunnel}</p>
                <p>Selected Shift: {selectedShift}</p>
                <p>Selected date: {selectedDate?.toLocaleDateString()}</p>
              </div> */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <CustomSelect
                  options={mineSites}
                  placeholder="Select Mine Site"
                  onChange={(value) => setSelectedMineSite(value)}
                />
                <CustomSelect
                  options={tunnels}
                  placeholder="Select Tunnel ID"
                  onChange={(value) => setSelectedTunnel(value)}
                />
                <CustomSelect
                  options={shifts}
                  placeholder="Select Shift"
                  onChange={(value) => setSelectedShift(value)}
                />
                <div className="relative">
                  <DatePicker onDateChange={(date) => setSelectedDate(date)} />
                </div>
              </div>

              <DataTable
                title="Roll Call Manpower on Site"
                columns={manpowerColumns}
                rows={manpowerData}
              />
              <DataTable
                title="Equipments"
                columns={equipmentColumns}
                rows={equipmentData}
              />

              {/* Tunnel Dimensions */}
              <Card>
                <CardHeader>
                  <CardTitle>Tunnel Dimensions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    <Input placeholder="Main Axis length" />
                    <Input placeholder="Grade (%)" />
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Design Profile type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="type1">Type 1</SelectItem>
                        <SelectItem value="type2">Type 2</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input placeholder="Height dimensions" />
                    <Input placeholder="Width dimensions" />
                    <Input placeholder="Cross-section Area(m2)" />
                  </div>
                </CardContent>
              </Card>
              {/*Tunnel Component*/}
              <Card className="w-full">
                <CardHeader>
                  <CardTitle className="text-lg">Tunnel Components</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Tunnel Type Input */}
                  <Input
                    className="w-full"
                    placeholder="crosscut, Drift (ID), Raise (ID), Winze (ID), Heading (ID), Siding (ID), Stope (ID)"
                  />

                  {/* Grid Layout for Inputs & Selects */}
                  <div className="grid grid-cols-3 gap-4">
                    {/* Crosscut Select */}
                    <CustomSelect
                      options={[
                        { value: "id1", label: "ID 1" },
                        { value: "id2", label: "ID 2" }
                      ]}
                      placeholder="CrossCut (ID)"
                      onChange={setSelectedCrossCut}
                    />

                    {/* Other Inputs */}
                    <Input placeholder="Distance from main entry (m)" />
                    <Input placeholder="Length dimensions (m)" />
                    <Input placeholder="Deviation angle (degrees)" />
                    <Input placeholder="Width dimensions (m)" />
                    <Input placeholder="Height dimensions (m)" />

                    {/* Supported Select */}
                    <CustomSelect
                      options={[
                        { value: "yes", label: "Yes" },
                        { value: "no", label: "No" }
                      ]}
                      placeholder="Supported"
                      onChange={setSelectedSupport}
                    />

                    {/* Other Inputs */}
                    <Input placeholder="Grade (%)" />
                    <Textarea placeholder="Note" />
                  </div>

                  {/* Save Button */}
                  <Button variant="outline" className="ml-auto">
                    Save
                  </Button>
                </CardContent>
              </Card>
              {/*Tunneladvance ment*/}
              <Card className="w-full sm:p-0">
                <CardHeader>
                  <CardTitle className="text-lg">Tunnel Advancements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Crosscut Select */}
                  <CustomSelect
                    options={[
                      { value: "id1", label: "ID 1" },
                      { value: "id2", label: "ID 2" }
                    ]}
                    placeholder="CrossCut (ID)"
                    onChange={setSelectedCrossCut}
                  />

                  {/* Grid Layout for Inputs & Selects */}
                  <div className="grid grid-cols-1  md:grid-cols-3 gap-4">
                    <Input placeholder="Length Advanced (m)" />
                    <Button variant="secondary">Upload Face Video</Button>
                    <Input placeholder="Grade (%)" />
                    <Textarea placeholder="Note" />
                    <Input placeholder="Length Advanced (m)" />

                    {/* Process Type Select */}
                    <CustomSelect
                      options={[
                        { value: "type1", label: "Type 1" },
                        { value: "type2", label: "Type 2" }
                      ]}
                      placeholder="Process Type"
                      onChange={setSelectedProcessType}
                    />
                  </div>

                  {/* Save Button */}
                  <Button variant="outline" className="ml-auto">
                    Save
                  </Button>
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
                    <Input placeholder="Failed blasts (QTY)" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <Input placeholder="Delay Pattern" />
                    <Input placeholder="Blast Pattern" />
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
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-lg">
            Blast Log Detail (If applicable)
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            {/* Blast Type Select */}
            <CustomSelect
              options={[
                { value: "type1", label: "Type 1" },
                { value: "type2", label: "Type 2" }
              ]}
              placeholder="Blast Type"
              onChange={setSelectedBlastType}
            />

            {/* Numeric Inputs */}
            <Input
              placeholder="Quantity"
              type="text"
              onChange={handleNumberChange}
            />
            <Input
              placeholder="Failed Blasts (QTY)"
              type="text"
              onChange={handleNumberChange}
            />
            <Input placeholder="Delay Pattern" />
            <Input placeholder="Blast Pattern" />
            <Input
              placeholder="Misfired Blasts (QTY)"
              type="text"
              onChange={handleNumberChange}
            />
          </div>

          {/* Save Button */}
          <Button variant="outline" className="ml-auto">
            Save
          </Button>
        </CardContent>
      </Card>

      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-lg">Incident Report</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            {/* Incident Type Select */}
            <CustomSelect
              options={[
                { value: "type1", label: "Type 1" },
                { value: "type2", label: "Type 2" }
              ]}
              placeholder="INCIDENT TYPE"
              onChange={setIncidentType}
            />

            {/* Tunnel ID Select */}
            <CustomSelect
              options={[
                { value: "id1", label: "ID 1" },
                { value: "id2", label: "ID 2" }
              ]}
              placeholder="TUNNEL ID"
              onChange={setTunnelId}
            />

            {/* SOS People */}
            <Textarea
              placeholder="SOS people"
              value={sosPeople}
              onChange={(e) => setSosPeople(e.target.value)}
            />

            {/* Full-Width Textareas */}
            <Textarea
              placeholder="People involved"
              className="col-span-3"
              value={peopleInvolved}
              onChange={(e) => setPeopleInvolved(e.target.value)}
            />

            <Textarea
              placeholder="Root cause analysis"
              className="col-span-3"
              value={rootCause}
              onChange={(e) => setRootCause(e.target.value)}
            />

            <Textarea
              placeholder="Measures taken"
              className="col-span-3"
              value={measuresTaken}
              onChange={(e) => setMeasuresTaken(e.target.value)}
            />
          </div>

          {/* Save Button */}
          <Button variant="outline" className="ml-auto">
            Save
          </Button>
        </CardContent>
      </Card>
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="text-lg">Additional Comments</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            className="min-h-[200px]"
            placeholder="Enter additional comments..."
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
          <Button variant="outline" className="ml-auto">
            Save
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default TunnelManagementSystem;
