import { Box, TextInput } from "@mantine/core"
import { IconCalendar } from "@tabler/icons-react"

function DateRangePicker() {
  
  return (
    <Box mb="lg">
      {/* Custom date range picker that matches the design */}
      <Box sx={{ position: "relative" }} >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
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
            }}
          >
            <TextInput
              placeholder="Start Date"
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
            }}
          >
            <TextInput
              placeholder="End Date"
              size="xs"
              sx={{
                cursor: "pointer",
                paddingRight: "30px",
                color: "#000000",
                border: "none",
                fontSize: ""
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
  )
}

export default DateRangePicker;