"use client";
import CustomDatePicker from "@/components/CustomDatePicker";
import MyDrawer from "@/components/Drawer";
import React, { useState } from "react";
import { Combobox } from "@/components/Combobox";
import { DynamicPieChartComponent } from "@/components/DynamicPieChart";
import { ChartComponent } from "@/components/chartComponent";
import { Calendar } from "@/components/ui/calendar";

// import { SummaryCards } from "@/components/SummaryCards";

const tunnelOptions = [
  { tunnelId: "tunnel_2a", tunnelName: "TUNNEL 2A" },
  { tunnelId: "off_reef", tunnelName: "OFF REEF" },
  { tunnelId: "on_reef", tunnelName: "ON REEF" },
  { tunnelId: "rse", tunnelName: "RSE" },
  { tunnelId: "down_dip", tunnelName: "DOWN DIP" },
  { tunnelId: "orepass", tunnelName: "OREPASS" },
  { tunnelId: "stope", tunnelName: "STOPE" },
  { tunnelId: "shifts", tunnelName: "SHIFTS" },
  { tunnelId: "production", tunnelName: "PRODUCTION" },
  { tunnelId: "material_available", tunnelName: "MATERIAL AVAILIBLE" },
  { tunnelId: "loco", tunnelName: "LOCO" },
  { tunnelId: "bob_cat", tunnelName: "BOB CAT" },
  { tunnelId: "wagons", tunnelName: "WAGONS" },
  { tunnelId: "compressor", tunnelName: "COMPRESSOR" },
  { tunnelId: "boesman", tunnelName: "BOESMAN" },
  { tunnelId: "pumps", tunnelName: "PUMPS" },
  { tunnelId: "lamps", tunnelName: "LAMPS" },
  { tunnelId: "labour", tunnelName: "LABOUR" },
  { tunnelId: "present", tunnelName: "PRESENT" },
  { tunnelId: "absent", tunnelName: "ABSENT" },
  { tunnelId: "sub_co", tunnelName: "SUB CO" },
  { tunnelId: "rdo", tunnelName: "RDO" },
  { tunnelId: "rutongo", tunnelName: "RUTONGO" }
];

function page() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedTunnel, setSelectedTunnel] = useState<string>("");
  const handleTunnelChange = (value: string) => {
    setSelectedTunnel(value);
    console.log("Selected Tunnel ID:", value); // Handle selected tunnel ID
  };

  const mappedOptions = tunnelOptions.map((option) => ({
    value: option.tunnelId,
    label: option.tunnelName
  }));
  return (
    <div>
      <div className="flex w-full justify-evenly">
        <div className="flex w-[100%] justify-evenly flex-col">
          <div className="flex justify-evenly">
            <Combobox
              options={mappedOptions}
              onChange={handleTunnelChange}
              placeholder="Select a tunnel..."
              noOptionsMessage="No tunnels available." // Custom message
              width="250px"
            />
            <CustomDatePicker />

            <Combobox
              options={mappedOptions}
              onChange={handleTunnelChange}
              placeholder="Select a tunnel..."
              noOptionsMessage="No tunnels available." // Custom message
              width="250px"
            />
          </div>

        </div>

        {/* <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        /> */}
        <MyDrawer />
      </div>

      <ChartComponent />
      {/* <DynamicPieChartComponent /> */}
    </div>
  );
}

export default page;
