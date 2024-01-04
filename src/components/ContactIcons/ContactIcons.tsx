import { Text, Box, Stack, rem } from "@mantine/core";
import { IconSun, IconPhone, IconMapPin, IconAt } from "@tabler/icons-react";
import classes from "./ContactIcons.module.css";

interface ContactIconProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "title"> {
  icon: typeof IconSun;
  title: React.ReactNode;
  description: React.ReactNode;
}

function ContactIcon({
  icon: Icon,
  title,
  description,
  ...others
}: ContactIconProps) {
  return (
    <div className={classes.wrapper} {...others}>
      <Box mr="md">
        <Icon className={classes.icon} />
      </Box>

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

const MOCKDATA = [
  { title: "Email", description: "hello@mantine.dev", icon: IconAt },
  { title: "Phone", description: "(949) 303 9118", icon: IconPhone },
  {
    title: "Address",
    description: "5297 Sunset Lake Rd #3768",
    icon: IconMapPin,
  },
  {
    title: "Working hours",
    description:
      "Mon - Fri: 10 a.m. – 6 p.m. Sat: 10 a.m - 4 p.m. Sunday: closed",
    icon: IconSun,
  },
];

// export function ContactIconsList() {
//   const items = MOCKDATA.map((item, index) => (
//     <ContactIcon key={index} {...item} />
//   ));
//   return <Stack>{items}</Stack>;
// }

export function ContactIconsList() {
  const items = MOCKDATA.map((item, index) => (
    <ContactIcon key={index} {...item} />
  ));
  return (
    <Stack>
      <div className={classes.wrapper}>
        <Box mr="md">
          <IconAt className={classes.icon} />
        </Box>

        <div>
          <Text size="xs" className={classes.title}>
            Email
          </Text>
          <Text className={classes.description}>hello@mantine.dev</Text>
        </div>
      </div>
      <div className={classes.wrapper}>
        <Box mr="md">
          <IconPhone className={classes.icon} />
        </Box>

        <div>
          <Text size="xs" className={classes.title}>
            Phone
          </Text>
          <Text className={classes.description}>(949) 303 9118</Text>
        </div>
      </div>
      <div className={classes.wrapper}>
        <Box mr="md">
          <IconMapPin className={classes.icon} />
        </Box>

        <div>
          <Text size="xs" className={classes.title}>
            Address
          </Text>
          <Text className={classes.description}>
            5297 Sunset Lake Rd #3768, Holy Springs, NC 27540
          </Text>
        </div>
      </div>
      <div className={classes.wrapper}>
        <Box mr="md">
          <IconSun className={classes.icon} />
        </Box>

        <div>
          <Text size="xs" className={classes.title}>
            Working hours
          </Text>
          <Text className={classes.description}>Mon - Fri: 10 AM – 6 PM</Text>
          <Text className={classes.description}>Sat: 10 AM - 4 PM</Text>
          <Text className={classes.description}>Sunday: CLOSED</Text>
        </div>
      </div>
    </Stack>
  );
}
