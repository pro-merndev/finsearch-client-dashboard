import { Accordion, Grid, Group, Text, UnstyledButton } from "@mantine/core";
import { Link } from "react-router";
import { IDesktopMenuItem } from "../_data/menu-links";

const MobileMenuItem = ({ link }: { link: IDesktopMenuItem }) => {
  const hasMegaMenu = link.megaMenu && link.megaMenu.length > 0;
  if (!hasMegaMenu) {
    return (
      <UnstyledButton key={link.label} py="xs" px="md" component={Link} to={link.link}>
        <Group justify="space-between">
          <Text>{link.label}</Text>
        </Group>
      </UnstyledButton>
    );
  } else {
    return (
      <Accordion>
        {link.megaMenu && (
          <Accordion.Item key={link.label} value={link.label}>
            <Accordion.Control>{link.label}</Accordion.Control>
            <Accordion.Panel>
              <Grid>
                {link?.megaMenu &&
                  link?.megaMenu.map((item, i) => (
                    <Grid.Col key={i} span={12}>
                      <UnstyledButton component={Link} to={item.link}>
                        <Text size="14px" c="dark" fw={700}>
                          {item.title}
                        </Text>
                        {item.description && (
                          <Text size="12px" c="gray" mt={6}>
                            {item.description}
                          </Text>
                        )}
                      </UnstyledButton>
                    </Grid.Col>
                  ))}
              </Grid>
            </Accordion.Panel>
          </Accordion.Item>
        )}
      </Accordion>
    );
  }
};

export default MobileMenuItem;
