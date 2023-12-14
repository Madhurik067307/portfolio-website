import { Menu, Button, rem, Burger, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconHome,
  IconMessageCircle,
  IconNeedleThread,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import classes from "./HeaderMenu.module.css";

export function HeaderMenu() {
  const router = useRouter();
  const [opened, { toggle }] = useDisclosure(false);

  const options = [
    {
      title: "Home",
      link: "/",
      icon: IconHome,
    },
    {
      title: "Services",
      link: "/services",
      icon: IconNeedleThread,
    },
    {
      title: "Contact",
      link: "/contact",
      icon: IconMessageCircle,
    },
  ];
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Menu.Target>

      <Menu.Dropdown className={classes.menuDropdown}>
        {options.map((option) => (
          <div key={option.title}>
            <Menu.Item
              onClick={() => router.push(option.link)}
              leftSection={<option.icon className={classes.icon} />}
            >
              <Text fw={500} size="xl">
                {option.title}
              </Text>
            </Menu.Item>
            <Menu.Divider />
          </div>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}
