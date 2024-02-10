import { Text } from "@mantine/core";
import Link from "next/link";
import React from "react";
import classes from "./Repository.module.css";
import { IconBookDownload, IconCircleFilled } from "@tabler/icons-react";

export interface RepositoryProps {
  id: string;
  title: string;
  githubLink: string;
  technologies: string;
  description: string;
}

interface RepositoryComponentProps {
  repositories: RepositoryProps[];
}

const RepositoryComponent = ({
  id,
  title,
  githubLink,
  technologies,
  description,
}: RepositoryProps) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <div className={classes.title_container}>
          <IconBookDownload />
          <Link href={githubLink!} target="_blank" className={classes.title}>
            {title}
          </Link>
        </div>
        <div className={classes.technologies_container}>
          <IconCircleFilled
            size={"15px"}
            className={classes.technologies_circle}
          />
          <Text className={classes.technologies} fz={"sm"}>
            {technologies}
          </Text>
        </div>

        <Text fz="sm">{description}</Text>
      </div>
    </div>
  );
};

export default function Repository({ repositories }: RepositoryComponentProps) {
  return (
    <div className={classes.container}>
      <Text className={classes.bottom_right_repo_title} fz={"sm"}>
        Pinned Repositories
      </Text>
      <div className={classes.repo_container}>
        {repositories.map((repo) => (
          <RepositoryComponent
            key={repo.id}
            id={repo.id}
            title={repo.title}
            technologies={repo.technologies}
            githubLink={repo.githubLink}
            description={repo.description}
          />
        ))}
      </div>
    </div>
  );
}
