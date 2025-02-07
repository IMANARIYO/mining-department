import { userColumns } from "@/components/table/columns/userColumns";
import { DataTable } from "@/components/table/data-table";
import { User } from "@/types/userTypes";

export async function getUserData(): Promise<User[]> {
  const users: User[] = [];

  for (let i = 0; i < 100; i++) {
    const roleOptions: string[] = ['admin', 'manager', 'employee'];
    const statusOptions: ("active" | "inactive")[] = ["active", "inactive"];
    const randomRole = roleOptions[Math.floor(Math.random() * roleOptions.length)];
    const randomStatus = statusOptions[Math.floor(Math.random() * statusOptions.length)];

    users.push({
      id: `${i}-${Math.random().toString(36).substring(2, 10)}`,
      name: `User ${i}`,
      email: `user${i}@example.com`,
      role: randomRole,
      status: randomStatus,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
  }

  return users;
}
export default async function SettingsPage() {
  const data = await getUserData();
  return (
    <div>
      <h1 className="text-2xl font-bold">Settings</h1>
      <div className="container mx-auto py-10">
        <DataTable columns={userColumns} data={data} />
      </div>
    </div>
  );
}
