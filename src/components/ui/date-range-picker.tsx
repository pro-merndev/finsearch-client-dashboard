import { Box } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { IconCalendar } from "@tabler/icons-react";
import { useState } from "react";

function DateRangePicker() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const formatDate = (date: Date | null) => {
    if (!date) return "";
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-indexed
    const year = date.getFullYear() % 100; // Get last two digits of the year
    return `${month}-${day}-${year}`;
  };

  return (
    <Box mb="lg">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Start Date Input */}
        <DateInput
          value={startDate}
          onChange={setStartDate}
          placeholder="Start"
          size="xs"
          sx={{
            width: "42%",
            border: "1px solid #ced4da",
            borderRadius: "4px",
            overflow: "hidden",
          }}
          rightSection={<IconCalendar size={16} color="#495057" />}
          valueFormat={formatDate(startDate)}
        />

        <Box
          sx={{
            width: "16%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "80%",
              height: "1px",
              backgroundColor: "#ced4da",
            }}
          />
        </Box>

        {/* End Date Input */}
        <DateInput
          value={endDate}
          onChange={setEndDate}
          placeholder="End"
          size="xs"
          sx={{
            width: "42%",
            border: "1px solid #ced4da",
            borderRadius: "4px",
            overflow: "hidden",
          }}
          rightSection={<IconCalendar size={16} color="#495057" />}
          valueFormat={formatDate(endDate)}
        />
      </Box>
    </Box>
  );
}

export default DateRangePicker;
