import { AppShell, Container } from "@mantine/core";
import { Outlet } from "react-router";
import Header from "./_components/header";
import MantineThemeProvider from "@/providers/mantine-theme-provider";

const MainDashboardLayout = () => {
  return (
    <MantineThemeProvider>
      <AppShell header={{ height: 75 }} padding="md">
        <AppShell.Header>
          <Container size="xl" h="100%">
            <Header />
          </Container>
        </AppShell.Header>
        <AppShell.Main>
          <Container size="xl" mt="md">
            <Outlet />
          </Container>
        </AppShell.Main>
      </AppShell>
    </MantineThemeProvider>
  );
};

export default MainDashboardLayout;
