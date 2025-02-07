// types/userTypes.ts

export interface User {
  id: string; // Unique identifier for the user
  name: string; // User's full name
  email: string; // User's email address
  role: string; // Role of the user (e.g., "admin", "manager", "employee")
  status: "active" | "inactive"; // Status of the user (active or inactive)
  createdAt: string; // Date when the user was created
  updatedAt: string; // Date when the user was last updated
}
