"use client";

import { Stack } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { useState } from "react";
import moment, { Moment } from "moment";
import "moment/locale/en-gb";

export const Difference = () => {
  const [startDate, setStartDate] = useState<Moment | null>(moment());
  const [endDate, setEndDate] = useState<Moment | null>(
    moment().add(7, "days")
  );

  return (
    <LocalizationProvider dateAdapter={AdapterMoment} adapterLocale="en-gb">
      <Stack>
        <Stack direction={"row"} spacing={2} p={2}>
          <DatePicker
            label="Start Date"
            value={startDate}
            onChange={setStartDate}
          />
          <DatePicker label="End Date" value={endDate} onChange={setEndDate} />
        </Stack>
        <p>
          The difference is: {Math.abs(startDate?.diff(endDate, "days") || 0)}{" "}
          days
        </p>
      </Stack>
    </LocalizationProvider>
  );
};
