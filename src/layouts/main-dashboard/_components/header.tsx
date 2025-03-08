import Logo from "@/components/common/logo";
import { Burger, Drawer, Group, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";
import {
  authMenuLinks,
  IDesktopMenuItem,
  noAuthMenuLinks,
} from "../_data/menu-links";
import DesktopMenuItem from "./desktop-menu-item";
import MobileMenuItem from "./mobile-menu-item";
import SearchBar from "./searchbar";
import UnauthorizedActions from "./unauthorized-actions";
import UserMenu from "./user-menu";

export default function Header() {
  // State management
  const [authorized, setAuthorized] = useState(true);
  const [menuLinks, setMenuLinks] = useState<IDesktopMenuItem[]>([]);
  const [opened, { close, toggle }] = useDisclosure(false);

  // Update menu links based on authorization status
  useEffect(() => {
    setMenuLinks(authorized ? authMenuLinks : noAuthMenuLinks);
  }, [authorized]);

  // Fake Auth handlers
  const handleSignin = () => setAuthorized(true);
  const handleSignout = () => setAuthorized(false);

  const DesktopMenu = (
    <Group gap={0} visibleFrom="lg">
      {menuLinks.map((link, i) => (
        <DesktopMenuItem key={i} link={link} />
      ))}
    </Group>
  );

  return (
    <Group justify="space-between" align="center" h="100%">
      {/* Left section */}
      <Group>
        <Logo />
        {authorized && DesktopMenu}
      </Group>

      {/* Middle section */}
      {!authorized && DesktopMenu}

      {/* Right section */}
      <Group>
        {!authorized && <UnauthorizedActions handleSignin={handleSignin} />}
        {authorized && (
          <Group visibleFrom="sm">
            <SearchBar />
          </Group>
        )}
        {authorized && <UserMenu handleSignout={handleSignout} />}
        <Burger opened={opened} onClick={toggle} hiddenFrom="lg" />
      </Group>

      {/* Mobile drawer */}
      <Drawer opened={opened} onClose={close} hiddenFrom="lg" position="right">
        <Stack>
          {menuLinks.map((link, i) => (
            <MobileMenuItem key={i} link={link} />
          ))}
        </Stack>
        {authorized && (
          <Group hiddenFrom="sm" px="md" mt="xl">
            <SearchBar />
          </Group>
        )}
        <Group justify="center" mt="xl">
          {!authorized && (
            <UnauthorizedActions mobile={true} handleSignin={handleSignin} />
          )}
        </Group>
      </Drawer>
    </Group>
  );
}
