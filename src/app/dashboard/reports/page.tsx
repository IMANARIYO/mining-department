import React from "react";
import { Payment, columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/data-table";

type PaymentStatus = 'pending' | 'processing' | 'success' | 'failed';

async function getData(): Promise<Payment[]> {
  const payments: Payment[] = [];

  for (let i = 0; i < 100; i++) {
    const statusOptions: PaymentStatus[] = ['pending', 'processing', 'success', 'failed'];
    const randomStatus = statusOptions[Math.floor(Math.random() * statusOptions.length)];

    payments.push({
      id: `${i}-${Math.random().toString(36).substring(2, 10)}`,
      amount: Math.floor(Math.random() * 1000),
      status: randomStatus,
      email: `user${i}@example.com`,
    });
  }

  return payments;
}
 async function page() {
   const data = await getData();
   return (
     <div>
       <h1>reports page</h1>
       <div className="container mx-auto py-10">
         <DataTable
       columns={columns} data={data} />
       </div>
     </div>
   );
 }

export default page
