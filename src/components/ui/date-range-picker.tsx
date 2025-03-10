import { Box, TextInput } from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { IconCalendar } from "@tabler/icons-react";
import { useState } from "react";

function DateRangePicker() {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [startDateInput, setStartDateInput] = useState<string>("");
  const [endDateInput, setEndDateInput] = useState<string>("");
  const [startPickerOpen, setStartPickerOpen] = useState<boolean>(true);
  const [endPickerOpen, setEndPickerOpen] = useState<boolean>(false);

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
    setStartDateInput(date ? date.toLocaleDateString() : "");
    setStartPickerOpen(false);
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
    setEndDateInput(date ? date.toLocaleDateString() : "");
    setEndPickerOpen(false);
  };

  console.log(startPickerOpen);

  return (
    <Box mb="lg">
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Start Date Input */}
          <Box
            sx={{
              position: "relative",
              width: "42%",
              border: "1px solid #ced4da",
              borderRadius: "4px",
              overflow: "hidden",
              cursor: "pointer", // Make the entire box clickable
            }}
            onClick={() => setStartPickerOpen(true)} // Open date picker on click
          >
            <TextInput
              placeholder="Start"
              size="xs"
              value={startDateInput}
              sx={{
                cursor: "pointer",
                paddingRight: "30px",
                color: "#000000",
                border: "none",
              }}
              styles={{
                input: {
                  border: "none",
                  color: "#000000",
                  "&::placeholder": {
                    color: "#495057",
                  },
                },
              }}
              readOnly
            />
            {startPickerOpen && (
              <DatePicker
                value={startDate}
                onChange={handleStartDateChange}
                sx={{ position: "absolute", top: "100%", zIndex: 1 }}
              />
            )}
            <Box
              sx={{
                position: "absolute",
                right: "8px",
                top: "60%",
                transform: "translateY(-50%)",
                pointerEvents: "none",
                border: "none",
              }}
            >
              <IconCalendar size={16} color="#495057" />
            </Box>
          </Box>

          {/* Connecting line with gap */}
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
          <Box
            sx={{
              position: "relative",
              width: "42%",
              border: "1px solid #ced4da",
              borderRadius: "4px",
              overflow: "hidden",
              cursor: "pointer", // Make the entire box clickable
            }}
            onClick={() => setEndPickerOpen(true)} // Open date picker on click
          >
            <TextInput
              placeholder="End"
              size="xs"
              value={endDateInput}
              sx={{
                cursor: "pointer",
                paddingRight: "30px",
                color: "#000000",
                border: "none",
              }}
              styles={{
                input: {
                  border: "none",
                  color: "#000000",
                  "&::placeholder": {
                    color: "#495057",
                  },
                },
              }}
              readOnly
            />
            {endPickerOpen && (
              <DatePicker
                value={endDate}
                onChange={handleEndDateChange}
                sx={{ position: "absolute", top: "100%", zIndex: 1 }}
              />
            )}
            <Box
              sx={{
                position: "absolute",
                right: "8px",
                top: "60%",
                transform: "translateY(-50%)",
                pointerEvents: "none",
                border: "none",
              }}
            >
              <IconCalendar size={16} color="#495057" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default DateRangePicker;
