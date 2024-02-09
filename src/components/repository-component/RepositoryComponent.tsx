import { Text } from "@mantine/core";
import Link from "next/link";
import React from "react";
import classes from "./RepositoryComponent.module.css";
import { IconBookDownload, IconCircleFilled } from "@tabler/icons-react";

export interface Repository {
  id: string;
  title: string;
  githubLink: string;
  technologies: string;
  description: string;
}

interface RepositoryComponentProps {
  repository: Repository;
}

export default function RepositoryComponent({
  repository,
}: RepositoryComponentProps) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <div className={classes.title_container}>
          <IconBookDownload />
          <Link
            href={repository.githubLink}
            target="_blank"
            className={classes.title}
          >
            {repository.title}
          </Link>
        </div>

        <div className={classes.technologies_container}>
          <IconCircleFilled
            size={"15px"}
            className={classes.technologies_circle}
          />
          <Text className={classes.technologies} fz={"xs"}>
            {repository.technologies}
          </Text>
        </div>

        <Text fz="xs">{repository.description}</Text>
      </div>
    </div>
  );
}
