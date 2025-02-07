import React, { useState } from "react";
import type { DatePickerProps } from "antd";
import { DatePicker, Select, Space } from "antd";

// Function to handle date selection
const handleDateChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log("Selected Date Object:.......", date);
  console.log("Formatted Date String:........", dateString);
};

// Custom DatePicker Component
const CustomDatePicker: React.FC = () => {
  const [pickerType, setPickerType] = useState<"date" | "week" | "month" | "quarter" | "year">("date");

  const handlePickerChange = (value: "date" | "week" | "month" | "quarter" | "year") => {
    setPickerType(value);
  };

  return (
    <Space direction="vertical">
      {/* Picker type selector */}
      <Select
        defaultValue="date"
        style={{ width: 120 }}
        onChange={handlePickerChange}
        options={[
          { label: "Date", value: "date" },
          { label: "Week", value: "week" },
          { label: "Month", value: "month" },
          { label: "Quarter", value: "quarter" },
          { label: "Year", value: "year" },
        ]}
      />

      {/* DatePicker with dynamic picker type */}
      <DatePicker
        onChange={handleDateChange}
        picker={pickerType}
      />
    </Space>
  );
};

export default CustomDatePicker;
