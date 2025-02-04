"use client";
import React from "react";
import { ComboboxDemo } from "@/components/Combobox";
import { SummaryCards } from "@/components/SummaryCards";
import { ChartComponent } from "@/components/chartComponent";
import { Calendar } from "@/components/ui/calendar";

function page() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <div>
      <h1>dash board home page</h1>
      <div className="flex w-64 justify-between">
        <ComboboxDemo /> <ComboboxDemo />{" "}
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
      </div>
      <SummaryCards /> 
      <ChartComponent/>
    </div>
  );
}

export default page
