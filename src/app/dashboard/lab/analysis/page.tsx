"use client";

import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { Plus } from "lucide-react";

interface Department {
  id: string;
  name: string;
}

interface LabRequest {
  requestType: string;
  priority: string;
  sampleDescription: string;
  departments: Department[];
  supportingDocuments: File[];
}

const Page: React.FC = () => {
  const [request, setRequest] = useState<LabRequest>({
    requestType: "Chemical Analysis",
    priority: "Normal",
    sampleDescription: "",
    departments: [
      { id: "1", name: "Geology" },
      { id: "2", name: "Mining" },
      { id: "3", name: "Environmental" }
    ],
    supportingDocuments: []
  });

  // Sample dynamic data (this could be fetched from an API or dynamic source)
  const availableDepartments: Department[] = [
    { id: "1", name: "Geology" },
    { id: "2", name: "Mining" },
    { id: "3", name: "Environmental" },
    { id: "4", name: "Safety" },
    { id: "5", name: "Exploration" }
  ];

  const priorities = ["Normal", "Urgent", "High"];
  const requestTypes = [
    "Chemical Analysis",
    "Physical Analysis",
    "Biological Analysis"
  ];

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setRequest((prev) => ({
        ...prev,
        supportingDocuments: [...prev.supportingDocuments, ...Array.from(files)]
      }));
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Submitting request:", request);
  };

  // Add Department logic ensuring no duplicates
  const addDepartment = (department: Department) => {
    if (!request.departments.some((dept) => dept.id === department.id)) {
      setRequest((prev) => ({
        ...prev,
        departments: [...prev.departments, department]
      }));
    }
  };

  // Disable condition when no departments left to add
  const isDepartmentDisabled = availableDepartments.every((dept) =>
    request.departments.some((d) => d.id === dept.id)
  );

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6 pt-6">
          <h2 className="text-2xl font-bold mb-6">New Analysis Request</h2>

          {/* Request Type Dropdown */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Request Type</label>
              <Select
                // value={request.requestType}
                onValueChange={(value) =>
                  setRequest((prev) => ({ ...prev, requestType: value }))
                }>
                <SelectTrigger>
                  <SelectValue placeholder="Request type" />
                </SelectTrigger>
                <SelectContent>
                  {requestTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Priority Dropdown */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Priority</label>
              <Select
                value={request.priority}
                onValueChange={(value) =>
                  setRequest((prev) => ({ ...prev, priority: value }))
                }>
                <SelectTrigger>
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  {priorities.map((priority) => (
                    <SelectItem key={priority} value={priority}>
                      {priority}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Sample Description */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Sample Description</label>
            <Textarea
              value={request.sampleDescription}
              onChange={(e) =>
                setRequest((prev) => ({
                  ...prev,
                  sampleDescription: e.target.value
                }))
              }
              className="h-32"
              placeholder="Enter sample description..."
            />
          </div>

          {/* Departments to Notify */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Departments to Notify</label>
            <div className="flex flex-wrap gap-2">
              {request.departments.map((dept) => (
                <div
                  key={dept.id}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  {dept.name}
                </div>
              ))}
              <Select
                onValueChange={(value) => {
                  const selectedDepartment = availableDepartments.find(
                    (dept) => dept.id === value
                  );
                  if (selectedDepartment) {
                    addDepartment(selectedDepartment);
                  }
                }}
                disabled={isDepartmentDisabled} // Disable dropdown when no departments left
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Department" />
                </SelectTrigger>
                <SelectContent>
                  {availableDepartments
                    .filter(
                      (dept) =>
                        !request.departments.some((d) => d.id === dept.id)
                    )
                    .map((dept) => (
                      <SelectItem key={dept.id} value={dept.id}>
                        {dept.name}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
              {/* Plus Icon */}
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  if (!isDepartmentDisabled) {
                    const departmentToAdd = availableDepartments.find(
                      (dept) =>
                        !request.departments.some((d) => d.id === dept.id)
                    );
                    if (departmentToAdd) {
                      addDepartment(departmentToAdd);
                    }
                  }
                }}
                disabled={isDepartmentDisabled} 
                className="ml-2">
                <Plus className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* File Upload Section */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Supporting Documents</label>
            <div className="border-2 border-dashed rounded-lg p-6 text-center">
              <Input
                type="file"
                multiple
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="cursor-pointer text-blue-600 hover:text-blue-800">
                Drag files here or click to upload
              </label>
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex justify-end space-x-4">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit">Submit Request</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default Page;
