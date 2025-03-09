import { Anchor, Card, Divider, Group, Modal, Table, Text, UnstyledButton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconFileText } from "@tabler/icons-react";

interface ResearchItem {
  firm: string;
  firmLink: string;
  date: string;
  subjectLine: string;
  documentLink: string;
}

interface ResearchTableProps {
  items: ResearchItem[];
}

export default function ResearchTable({ items }: ResearchTableProps) {
    const [opened, { open, close }] = useDisclosure(false);
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="lg"
      withBorder
      className="max-w-4xl w-full"
    >
      <Table verticalSpacing="md" horizontalSpacing="lg">
        <Table.Thead>
          <Table.Tr>
            <Table.Th fz="sm">Firm</Table.Th>
            <Table.Th fz="sm">Date</Table.Th>
            <Table.Th fz="sm">Subject Line</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {items.map((item, index) => (
            <Table.Tr key={index}>
              <Table.Td>
                <Anchor href={item.firmLink} fz="sm" c="blue">
                  {item.firm}
                </Anchor>
              </Table.Td>
              <Table.Td>
                <Text fz="sm">{item.date}</Text>
              </Table.Td>
              <Table.Td>
                <Group justify="space-between" align="center">
                  <Text fz="sm" tt="uppercase">
                    {item.subjectLine}
                  </Text>
                  <UnstyledButton onClick={open}>
                    <IconFileText size={20} style={{ color: "#868E96" }} />
                  </UnstyledButton>
                </Group>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
      <Modal
        opened={opened}
        onClose={close}
        title="Research Overview"
        centered
        size="lg"
      >
        <Divider />
        <Text fz={12} c="dimmed" py={16}>
          IEQ is primarily focused on researching and identifying private
          markets opportunities with external managers. The firm invests in
          private strategies through a white-labeled platform through iCapital
          as well as on occasion through direct investments in funds. The firm’s
          manager research team is led by Colin Mark-Griffin
          (cmarkgriffin@ieqcapital.com) and supported by Directors of Research
          Tim Altman (taltman@ieqcapital.com), Sergio Gonzalez
          (sgonzalez@ieqcapital.com) and Bhavika Booragadda
          (bbooragadda@ieqcapital.com). Mark-Griffin focuses on ongoing due
          diligence and the pipeline of new investments, Altman is responsible
          for sourcing and conducting due diligence on new investments and
          monitoring the existing portfolio of alternative investments, Gonzalez
          is responsible for operational oversight of the research team and
          Booragadda is responsible for sourcing and conducting due diligence
          for new investments and monitoring the existing portfolio of
          alternative investments. Also involved in alternative investments is
          Director Samantha Lee, who sources and conducts due diligence on
          potential new investments, Senior Associate Michael Verdeguez-Schardt,
          Research Associate Remington DuBois and Research Associate Adit
          Gorawara. Additionally, Eric Harrison, a founder and managing partner
          of the firm, is responsible for identifying and structuring
          alternative investments. Chief Market Strategist Mike McIntosh focuses
          on end-to-end portfolio construction ranging from macroeconomics to
          asset allocation to diligence of underlying investments.
        </Text>
      </Modal>
    </Card>
  );
}
