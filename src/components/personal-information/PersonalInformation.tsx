import { Button, Text, Title } from "@mantine/core";
import {
  IconBrandGithub,
  IconMapPin,
  IconInbox,
  IconPhone,
} from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import classes from "./PersonalInformation.module.css";

export default function PersonalInformation() {
  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className={classes.container}>
      <div className={classes.avatar}>
        <div className={classes.name}>
          <Title>Chuong Tran</Title>
        </div>

        <div className={classes.github_container}>
          <IconBrandGithub
            className={classes.icon}
            style={{ width: "1.5rem", height: "1.5rem" }}
            stroke={1.5}
            color="var(--mantine-color-blue-filled)"
          />
          <Link
            href={"https://github.com/chuongtran01"}
            target="_blank"
            className={classes.github}
          >
            chuongtran01
          </Link>
        </div>
        <div className={classes.button_container}>
          <Button
            className={classes.button}
            radius="md"
            mt="xl"
            size="md"
            variant="default"
            onClick={() => openInNewTab("ChuongTran_Resume.pdf")}
          >
            View Resume
          </Button>
        </div>
      </div>

      <div className={classes.information_container}>
        <div className={classes.title_container}>
          <Text>Software Engineer</Text>
        </div>

        <div className={classes.information}>
          <div className={classes.information_element}>
            <IconMapPin
              className={classes.icon}
              style={{ width: "1.5rem", height: "1.5rem" }}
              stroke={1.5}
              color="var(--mantine-color-blue-filled)"
            />
            <Text>United States</Text>
          </div>
          <div className={classes.information_element}>
            <IconPhone
              className={classes.icon}
              style={{ width: "1.5rem", height: "1.5rem" }}
              stroke={1.5}
              color="var(--mantine-color-blue-filled)"
            />
            <Text>346-401-8929</Text>
          </div>
          <div className={classes.information_element}>
            <IconInbox
              className={classes.icon}
              style={{ width: "1.5rem", height: "1.5rem" }}
              stroke={1.5}
              color="var(--mantine-color-blue-filled)"
            />
            <Text>chuongtran2001@gmail.com</Text>
          </div>
        </div>
      </div>

      <div className={classes.divider}></div>
    </div>
  );
}
