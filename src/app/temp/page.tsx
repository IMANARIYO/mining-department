import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
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
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from "@/components/ui/table";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

const SiteInspectionForm = () => {
  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Site Inspection</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-4 mb-6">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Mine Site" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="site1">Site 1</SelectItem>
                <SelectItem value="site2">Site 2</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Tunnel ID" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tunnel1">Tunnel 1</SelectItem>
                <SelectItem value="tunnel2">Tunnel 2</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Shift" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="morning">Morning</SelectItem>
                <SelectItem value="evening">Evening</SelectItem>
                <SelectItem value="night">Night</SelectItem>
              </SelectContent>
            </Select>

            <div className="relative">
              <Calendar mode="single" className="rounded-md border" />
            </div>
          </div>

          <div className="space-y-6">
            {/* Manpower Section */}
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
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-yellow-500" />
                          Eric Rukundo
                        </div>
                      </TableCell>
                      <TableCell>Rod</TableCell>
                      <TableCell>
                        <input type="checkbox" className="w-4 h-4" />
                      </TableCell>
                      <TableCell>Tunnel 1 / wing 1</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Equipment Section */}
            <Card>
              <CardHeader>
                <CardTitle>Equipment</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Equipment</TableHead>
                      <TableHead>Number</TableHead>
                      <TableHead>Present</TableHead>
                      <TableHead>Location</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Pumps</TableCell>
                      <TableCell>2</TableCell>
                      <TableCell>
                        <input type="checkbox" className="w-4 h-4" />
                      </TableCell>
                      <TableCell>Tunnel 1</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

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

            {/* Production Report */}
            <Card>
              <CardHeader>
                <CardTitle>Production Report</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  <Input placeholder="Daily Production Plan" />
                  <Input placeholder="Booked Meter" />
                  <Input placeholder="Actual Meter" />
                  <Input placeholder="Variance" />
                  <Input placeholder="Material excavated (Wagon)" />
                  <Input placeholder="Waste excavated (Wagon)" />
                  <Button className="col-span-3">Generate Tag</Button>
                </div>
              </CardContent>
            </Card>

            {/* Incident Report */}
            <Card>
              <CardHeader>
                <CardTitle>Incident Report</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Incident Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="minor">Minor</SelectItem>
                      <SelectItem value="major">Major</SelectItem>
                      <SelectItem value="critical">Critical</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Tunnel ID" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tunnel1">Tunnel 1</SelectItem>
                      <SelectItem value="tunnel2">Tunnel 2</SelectItem>
                    </SelectContent>
                  </Select>
                  <Textarea placeholder="SOS people" />
                  <Textarea
                    placeholder="People involved"
                    className="col-span-3"
                  />
                  <Textarea
                    placeholder="Root cause analysis"
                    className="col-span-3"
                  />
                  <Textarea
                    placeholder="Measures taken"
                    className="col-span-3"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SiteInspectionForm;
