import React from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { User, Image } from "lucide-react";

export default function BlastReportForm() {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-slate-100 p-2 rounded">
            <Image />
          </div>
          <h2 className="text-2xl font-semibold">
            Blasting Team Pre-Blast Report
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-500">Status: Draft</span>
          <Button variant="secondary">Save Draft</Button>
        </div>
      </CardHeader>

      <CardContent className="space-y-8">
        {/* Basic Information */}
        <section className="space-y-6">
          <h3 className="text-lg font-semibold">Basic Information</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="reportId">Report ID</Label>
              <Input id="reportId" defaultValue="BLT-2025-001" readOnly />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dateTime">Date & Time</Label>
              <Input id="dateTime" type="datetime-local" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="blastLocation">Blast Location</Label>
              <Select>
                <option>Level 3 - North Zone (L3-NZ)</option>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="blastId">Blast ID</Label>
              <Input id="blastId" />
            </div>
          </div>
        </section>

        {/* Ground Conditions Assessment */}
        <section className="space-y-6">
          <h3 className="text-lg font-semibold">
            Ground Conditions Assessment
          </h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="rockType">Rock Type</Label>
              <Select defaultValue="granite">
                <option value="granite">Granite</option>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="groundStability">Ground Stability</Label>
              <Select defaultValue="stable">
                <option value="stable">Stable</option>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="waterPresence">Water Presence</Label>
              <Select defaultValue="dry">
                <option value="dry">Dry</option>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="groundTemp">Ground Temperature (°C)</Label>
              <Input id="groundTemp" type="number" />
            </div>
          </div>
        </section>

        {/* Blast Hole Preparation */}
        <section className="space-y-6">
          <h3 className="text-lg font-semibold">Blast Hole Preparation</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="numberOfHoles">Number of Holes</Label>
              <Input id="numberOfHoles" type="number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="holeDiameter">Hole Diameter (mm)</Label>
              <Input id="holeDiameter" type="number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="holeDepth">Hole Depth (m)</Label>
              <Input id="holeDepth" type="number" />
            </div>
            <div className="space-y-2">
              <Label>Hole Condition</Label>
              <div className="flex gap-4 mt-2">
                <div className="flex items-center gap-2">
                  <Checkbox id="clean" />
                  <Label htmlFor="clean">Clean</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="blocked" />
                  <Label htmlFor="blocked">Blocked</Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox id="partiallyBlocked" />
                  <Label htmlFor="partiallyBlocked">Partially Blocked</Label>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Checklist */}
        <section className="space-y-4">
          <h3 className="text-lg font-semibold">Safety Checklist</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Checkbox id="ventilation" />
              <Label htmlFor="ventilation">Ventilation Plan Implemented</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="evacuation" />
              <Label htmlFor="evacuation">Area Evacuated and Secured</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="personnel" />
              <Label htmlFor="personnel">Personnel Accounted For</Label>
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="equipment" />
              <Label htmlFor="equipment">
                Equipment Removed from Blast Area
              </Label>
            </div>
          </div>
        </section>

        {/* Team Sign-off */}
        <section className="space-y-6">
          <h3 className="text-lg font-semibold">Team Sign-off</h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Team Lead Signature</Label>
              <div className="border rounded-lg p-4 text-center text-gray-500">
                Click to sign
              </div>
            </div>
            <div className="space-y-2">
              <Label>Team Members</Label>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <User className="w-6 h-6" />
                  <span>John Doe</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-6 h-6" />
                  <span>Jane Smith</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex justify-end gap-4">
          <Button variant="outline">Cancel</Button>
          <Button>Submit Report</Button>
        </div>
      </CardContent>
    </Card>
  );
}
