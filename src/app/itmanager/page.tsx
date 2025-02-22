"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

import { Pencil, Check, X, Trash } from "lucide-react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Drawer } from "vaul";

import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction
} from "@/components/ui/alert-dialog";


export default function UserManagement() {
  interface User {
    id: number;
    name: string;
    project: string;
    department: string;
    role: string;
    email: string;
    status: string;
    lastLogin: string;
  }
  const initialUsers = [
    {
      id: 1,
      name: "Janice Monahan",
      project: "MINE SITE A",
      department: "SAFETY DEPARTMENT",
      role: "ENVIRONMENT LEAD",
      email: "Janice_Monahan@",
      status: "ACTIVE",
      lastLogin: "Today, 11pm"
    },
    {
      id: 2,
      name: "Rollin Fadel",
      project: "MINE SITE B",
      department: "OPERATIONS DEPARTMENT",
      role: "Inventory Lead",
      email: "Rollin_Fadel@gm",
      status: "SUSPENDED",
      lastLogin: "Today, 11pm"
    }
  ];
  const [showNewUserForm, setShowNewUserForm] = useState(false);
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
const [openDialog, setOpenDialog] = useState(false);
  // Columns for Data Grid
  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", flex: 1 },
    { field: "project", headerName: "Project", flex: 1 },
    { field: "department", headerName: "Department", flex: 1 },
    { field: "role", headerName: "Role", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "status", headerName: "Status", flex: 1 },
    { field: "lastLogin", headerName: "Last Login", flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => (
        <div className="space-x-2 flex">
          <Drawer.Root direction="right">
            <Drawer.Trigger className="relative flex h-10 flex-shrink-0 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-4 text-sm font-medium shadow-sm transition-all hover:bg-[#FAFAFA] dark:bg-[#161615] dark:hover:bg-[#1A1A19] dark:text-white">
              <Pencil className="h-4 w-4 mr-1" />
              Edit
            </Drawer.Trigger>
            <Drawer.Portal>
              <Drawer.Overlay className="fixed inset-0 bg-black/40" />
              <Drawer.Content
                className="right-2 top-2 bottom-2 fixed z-10 outline-none w-[310px] flex"
                // The gap between the edge of the screen and the drawer is 8px in this case.
                style={
                  {
                    "--initial-transform": "calc(100% + 8px)"
                  } as React.CSSProperties
                }>
                <div className="bg-zinc-50 h-full w-full grow p-5 flex flex-col rounded-[16px]">
                  <div className="max-w-md mx-auto">
                    <Drawer.Title className="font-medium mb-2 text-zinc-900">
                   edit the user
                    </Drawer.Title>
                    <Drawer.Description className="text-zinc-600 mb-2">
 
                    </Drawer.Description>
                  </div>
                </div>
              </Drawer.Content>
            </Drawer.Portal>
          </Drawer.Root>

          {/* Delete Button (ShadCN Dialog) */}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="text-red-500"
                onClick={() => {
                  setSelectedUser(params.row);
                  setOpenDeleteDialog(true);
                }}>
                <Trash className="h-4 w-4 mr-1" />
                Delete
              </Button>
            </AlertDialogTrigger>

            {openDeleteDialog && (
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Are you sure you want to delete this user?
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently remove{" "}
                    {selectedUser?.name} from the system.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel onClick={() => setOpenDeleteDialog(false)}>
                    Cancel
                  </AlertDialogCancel>
                  <AlertDialogAction onClick={handleDelete}>
                    Delete
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            )}
          </AlertDialog>
        </div>
      )
    }
  ];
  // Handle user edit
  const handleEdit = (updatedUser: User) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };
  // Delete function
  const handleDelete = () => {
    if (selectedUser) {
      setUsers(users.filter((user) => user.id !== selectedUser.id));
    }
    setOpenDialog(false);
  };

  return (
    <div className="space-y-6 p-6">
      {/* Users Table */}

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid rows={users} columns={columns} pageSizeOptions={[5]} />
      </div>

      {/* Create New User Button */}
      <Button
        className="bg-black text-white hover:bg-gray-800"
        onClick={() => setShowNewUserForm(!showNewUserForm)}>
        + Create a new User
      </Button>

      {/* New User Form */}
      {showNewUserForm && (
        <Card className="p-6">
          <CardContent className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">USER NAME</label>
                <Input placeholder="Enter username" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input placeholder="Enter email" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Password</label>
                <Input type="password" placeholder="Enter password" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Assign Project</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mineA">MINE SITE A</SelectItem>
                    <SelectItem value="mineB">MINE SITE B</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Role</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="env">ENVIRONMENT LEAD</SelectItem>
                    <SelectItem value="inv">Inventory Lead</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Task</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="task1">Safety Monitoring</SelectItem>
                    <SelectItem value="task2">Inventory Management</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex justify-end">
              <Button className="bg-black text-white hover:bg-gray-800">
                <Check className="h-4 w-4 mr-1" />
                Save
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Requests Section */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold bg-gray-100 p-2">REQUESTS</h2>
        <Card className="mt-4">
          <CardContent className="p-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">USER NAME</label>
                <Input disabled placeholder="John Smith" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input disabled placeholder="john.smith@company.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Password</label>
                <Input disabled type="password" placeholder="••••••••" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Assign Project</label>
                <Select disabled>
                  <SelectTrigger>
                    <SelectValue placeholder="MINE SITE A" />
                  </SelectTrigger>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Role</label>
                <Select disabled>
                  <SelectTrigger>
                    <SelectValue placeholder="Safety Officer" />
                  </SelectTrigger>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Task</label>
                <Select disabled>
                  <SelectTrigger>
                    <SelectValue placeholder="Safety Inspections" />
                  </SelectTrigger>
                </Select>
              </div>
            </div>

            <div className="flex justify-between mt-6">
              <Button variant="outline" className="text-red-500">
                <X className="h-4 w-4 mr-1" />
                Deny
              </Button>
              <Button className="bg-black text-white hover:bg-gray-800">
                <Check className="h-4 w-4 mr-1" />
                Accept
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
