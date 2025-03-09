import { useState } from "react"
import { Box, Text, Group, Anchor, Image, Stack, Divider, ActionIcon } from "@mantine/core"
import {
  IconFlag,
  IconUpload,
  IconPrinter,
  IconDownload,
  IconBookmark,
  IconMail,
  IconWorld,
  IconPhone,
  IconBrandLinkedin,
  IconSchool,
  IconMapPin,
  IconChevronLeft,
  IconChevronRight,
} from "@tabler/icons-react"


interface ActionButtonProps {
  icon: React.ReactNode
}

interface ContactItemProps {
  icon: React.ReactNode
  content: React.ReactNode
}

export function ContactSidebar() {
  const [collapsed, setCollapsed] = useState(false)

  const toggleSidebar = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Box
      sx={{
        width: collapsed ? "80px" : "300px",
        borderRight: "1px solid #dee2e6",
        overflowY: "auto",
        padding: "16px",
        position: "relative",
        transition: "width 0.3s ease",
        backgroundColor: "#fff",
        borderRadius: "5px"
      }}
    >
      {/* Toggle Button */}
      <ActionIcon
        variant="subtle"
        onClick={toggleSidebar}
        style={{
          position: "absolute",
          top: "16px",
          right: "8px",
          zIndex: 10,
        }}
      >
        {collapsed ? <IconChevronRight size={18} /> : <IconChevronLeft size={18} />}
      </ActionIcon>

      {/* Action Icons */}
      <Group mb="lg" align={collapsed ? "center" : "center"} gap={collapsed ? "xs" : "md"}>
        <ActionButton icon={<IconFlag size={24} stroke={1.5} color="#495057" />} />
        {!collapsed && (
          <>
            <ActionButton icon={<IconUpload size={16} stroke={1.5} color="#495057" />} />
            <ActionButton icon={<IconPrinter size={16} stroke={1.5} color="#495057" />} />
            <ActionButton icon={<IconDownload size={16} stroke={1.5} color="#495057" />} />
            <ActionButton icon={<IconBookmark size={16} stroke={1.5} color="#495057" />} />
          </>
        )}
      </Group>

      {/* Profile Image */}
      <Box
        mb="md"
        style={{
          width: collapsed ? "60px" : "100%",
          maxWidth: collapsed ? "60px" : "240px",
          margin: "0 auto",
          padding: "4px",
          borderRadius: "16px",
          border: "2px solid #fa5252",
        }}
      >
        <Image
          src="/placeholder.svg?height=240&width=240"
          alt="Profile Photo"
          style={{ borderRadius: "12px", width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>

      {/* Contact Info - Only show when not collapsed */}
      {!collapsed && (
        <>
          <Text size="xl" fw={700} mb="md">
            Contact Info
          </Text>
          <Stack gap="lg">
            <ContactItem
              icon={<IconMail size={20} stroke={1.5} color="#495057" />}
              content={
                <Anchor href="mailto:aronalexandex.asgbix.com" color="#0a66c2">
                  aronalexandex.asgbix.com
                </Anchor>
              }
            />

            <ContactItem
              icon={<IconWorld size={20} stroke={1.5} color="#495057" />}
              content={
                <Anchor href="https://www.acgbiz.com" color="#868e96">
                  www.acgbiz.com
                </Anchor>
              }
            />

            <ContactItem
              icon={<IconPhone size={20} stroke={1.5} color="#495057" />}
              content={
                <Anchor href="tel:612-230-3000" color="#868e96">
                  612-230-3000
                </Anchor>
              }
            />

            <ContactItem
              icon={
                <Box style={{ color: "#0a66c2" }}>
                  <IconBrandLinkedin size={20} stroke={1.5} />
                </Box>
              }
              content={
                <Anchor href="#" color="#0a66c2">
                  View Profile
                </Anchor>
              }
            />

            <ContactItem
              icon={<IconSchool size={20} stroke={1.5} color="#495057" />}
              content={<Text color="#868e96">University of Miami</Text>}
            />

            <Divider my="sm" />

            <ContactItem
              icon={<IconMapPin size={20} stroke={1.5} color="#495057" />}
              content={
                <Text color="#868e96">
                  Ex. 50 South Sixth Street Suite 975
                  <br />
                  Minneapolis, MN 55402
                </Text>
              }
            />
          </Stack>

          {/* Map */}
          <Box mt="lg" mb="lg" style={{ borderRadius: "8px", overflow: "hidden" }}>
            <Image
              src="/placeholder.svg?height=160&width=268"
              alt="Map of San Francisco"
              style={{ width: "100%", height: "160px", objectFit: "cover" }}
            />
          </Box>

          <ContactItem
            icon={<IconMapPin size={20} stroke={1.5} color="#495057" />}
            content={<Text color="#868e96">Greater Cleveland</Text>}
          />
        </>
      )}
    </Box>
  )
}
// Helper components
const ActionButton: React.FC<ActionButtonProps> = ({ icon }) => {
  return (
    <Box
      style={{
        width: "48px",
        height: "48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "8px",
        border: "1px solid #e9ecef",
        cursor: "pointer",
      }}
    >
      {icon}
    </Box>
  )
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, content }) => {
  return (
    <Group align="center" gap="md">
      <Box style={{ width: "24px", display: "flex", alignItems: "center", justifyContent: "center" }}>{icon}</Box>
      <Box style={{ flex: 1 }}>{content}</Box>
    </Group>
  )
}

