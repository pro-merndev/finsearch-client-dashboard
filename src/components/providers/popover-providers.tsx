import { Divider, Modal, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useEffect } from "react";

const PopoverProviders = ({ children }: { children: React.ReactNode }) => {
  const [opened, { open, close }] = useDisclosure(false);

  useEffect(() => {
    const researchOverview = sessionStorage.getItem("researchOverview");
    if (!researchOverview) {
      open();
      sessionStorage.setItem("researchOverview", "true");
    }
  }, [open]);

  return (
    <div>
      {children}
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
    </div>
  );
};

export default PopoverProviders;
