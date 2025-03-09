import { Box, Divider, Collapse, Group, Text, Checkbox, Stack } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { IconChevronDown } from "@tabler/icons-react"

const compensationTypes = [
    "Percentage of AUM",
    "Hourly Charges",
]

const CollapsibleCompensationType = ({ isHidden }: { isHidden: string }) => {
  const [opened, { toggle }] = useDisclosure(false)

  return (
    <Box
      w={"100%"}
      style={{
        border: "1px solid #DEE2E6",
        borderRadius: "5px",
        cursor: "pointer",
      }}
      mx="auto"
      display={isHidden}
      p={8}
    >
      <Group justify="space-between" align="center" onClick={toggle}>
        <Text size="xs" fw={500}>
          Compensation Type
        </Text>
        <IconChevronDown
          size="16"
          color="#868E96"
          style={{
            transform: opened ? "rotate(-180deg)" : "none",
            transition: "transform 200ms ease",
          }}
        />
      </Group>
      <Collapse in={opened}>
        <Divider color="gray.2" mt={10} mb={10} />
        <Stack gap={8}>
          {compensationTypes.map((type) => (
            <Checkbox
              key={type}
              label={type}
              size="xs"
              styles={{
                label: { fontSize: "12px" },
              }}
            />
          ))}
        </Stack>
      </Collapse>
    </Box>
  )
}

export default CollapsibleCompensationType


// import type React from "react"
// import { useState } from "react"
// import { Box, Text, Checkbox, UnstyledButton, ActionIcon } from "@mantine/core"
// import { IconChevronUp, IconChevronDown } from "@tabler/icons-react"

// interface CompensationTypeProps {
//   onChange?: (selected: string[]) => void
// }

// const CompensationType: React.FC<CompensationTypeProps> = ({ onChange }) => {
//   const [isOpen, setIsOpen] = useState(true)
//   const [selected, setSelected] = useState<string[]>(["Hourly Charges"])

//   const options = [
//     "Percentage of AUM",
//     "Hourly Charges",
//     "Hourly Charges", // Duplicate as shown in the image
//   ]

//   const toggleCollapse = () => {
//     setIsOpen(!isOpen)
//   }

//   const handleChange = (option: string) => {
//     let newSelected: string[]

//     if (selected.includes(option)) {
//       newSelected = selected.filter((item) => item !== option)
//     } else {
//       newSelected = [...selected, option]
//     }

//     setSelected(newSelected)
//     onChange?.(newSelected)
//   }

//   return (
//     <Box
//       style={{
//         border: "1px solid #dee2e6",
//         borderRadius: "8px",
//         overflow: "hidden",
//         backgroundColor: "#f8f9fa",
//       }}
//     >
//       <UnstyledButton
//         onClick={toggleCollapse}
//         style={{
//           width: "100%",
//           padding: "16px",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         <Text size="md" weight={500} color="#343a40">
//           Compensation Type
//         </Text>
//         <ActionIcon variant="subtle" color="gray">
//           {isOpen ? <IconChevronUp size={18} /> : <IconChevronDown size={18} />}
//         </ActionIcon>
//       </UnstyledButton>

//       {isOpen && (
//         <Box p="md" pt={0}>
//           {options.map((option, index) => (
//             <Checkbox
//               key={`${option}-${index}`}
//               label={option}
//               checked={selected.includes(option)}
//               onChange={() => handleChange(option)}
//               styles={{
//                 root: { marginTop: 12 },
//                 input: {
//                   cursor: "pointer",
//                   "&:checked": {
//                     backgroundColor: "#155f98",
//                     borderColor: "#155f98",
//                   },
//                 },
//                 label: {
//                   fontSize: "16px",
//                   color: "#343a40",
//                   cursor: "pointer",
//                 },
//               }}
//             />
//           ))}
//         </Box>
//       )}
//     </Box>
//   )
// }

// export default CompensationType