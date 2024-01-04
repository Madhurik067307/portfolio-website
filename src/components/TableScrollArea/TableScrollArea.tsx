import cx from "clsx";
import { useState } from "react";
import { Table, ScrollArea, Text } from "@mantine/core";
import classes from "./TableScrollArea.module.css";

const data = [
  {
    service: "Shorten Pants Hems",
    price: "$11",
  },
  {
    service: "Shorten Pants Hems w/ Lining",
    price: "$13",
  },
  {
    service: "Shorten Jeans Hems",
    price: "$12",
  },
  {
    service: "Shorten Sleeve",
    price: "$28",
  },
  {
    service: "Shorten Sleeve w/ Button Hole",
    price: "$30",
  },
  {
    service: "Take in Side seams",
    price: "$36 and up",
  },
  {
    service: "Shorten Dress w/ Lining",
    price: "$43 and up",
  },
];

export function TableScrollArea() {
  const [scrolled, setScrolled] = useState(false);

  const rows = data.map((row) => (
    <Table.Tr key={row.service}>
      <Table.Td className={classes.row}>{row.service}</Table.Td>
      <Table.Td className={classes.row}>{row.price}</Table.Td>
    </Table.Tr>
  ));

  return (
    <ScrollArea
      h={400}
      onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
    >
      <Table miw={700} withTableBorder withColumnBorders striped>
        <Table.Thead
          className={cx(classes.header, { [classes.scrolled]: scrolled })}
        >
          <Table.Tr>
            <Table.Th className={classes.rowTitle}>Service</Table.Th>
            <Table.Th className={classes.rowTitle}>Price</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
      <div className={classes.information}>
        <Text size={"sm"}>
          For additional information and services, please don&apos;t hesitate to
          get in touch with us, or feel free to visit our store in person.
        </Text>
      </div>
    </ScrollArea>
  );
}
