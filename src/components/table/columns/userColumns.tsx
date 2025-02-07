"use client";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { User } from "@/types/userTypes";
import { createTableColumns } from "@/utils/createTableColumns";

export const userColumns = createTableColumns<User>([
  { accessorKey: "name", header: "Name" },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    }
  },
  {
    accessorKey: "role",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          role
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    }
  },
  { accessorKey: "status", header: "Status" },
  { accessorKey: "createdAt", header: "Created At" },
  { accessorKey: "updatedAt", header: "Updated At" }
]);
