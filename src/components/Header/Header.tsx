import { useEffect, useState } from "react";
import {
  Container,
  Group,
  Burger,
  Title,
  createTheme,
  MantineProvider,
  Menu,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./Header.module.css";
import cx from "clsx";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { IconMessageCircle, IconSettings } from "@tabler/icons-react";
import { HeaderMenu } from "../Menu/HeaderMenu";

const links = [
  { link: "/", label: "Home" },
  { link: "/services", label: "Services" },
  { link: "/contact", label: "Contact" },
];

const theme = createTheme({
  components: {
    Container: Container.extend({
      classNames: (_, { size }) => ({
        root: cx({ [classes.responsiveContainer]: size === "responsive" }),
      }),
    }),
  },
});

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(
    pathname === "/" ? links[0].link : pathname
  );
  const [menuOpened, setMenuOpened] = useState(false);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={`${classes.link} ${
        active === link.link ? classes.active : ""
      }`}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        router.push(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <MantineProvider theme={theme}>
      <header className={classes.header}>
        <Container size="responsive" className={classes.inner}>
          <Link className={classes.titleLink} href="/">
            <Title className={classes.title}>
              <Text fw={500}>Tailor Experts</Text>
            </Title>
          </Link>
          <Group gap={5} visibleFrom="xs">
            {items}
          </Group>

          {/* <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" /> */}
          <HeaderMenu />
        </Container>
      </header>
    </MantineProvider>
  );
}
