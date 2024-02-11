import { Text } from "@mantine/core";
import Link from "next/link";
import React from "react";
import classes from "./Repository.module.css";
import { IconBookDownload, IconCircleFilled } from "@tabler/icons-react";

export interface RepositoryProps {
  id: string;
  title: string;
  dotColor: string;
  githubLink: string;
  technologies: string;
  description: string;
}

const RepositoryComponent = ({
  id,
  title,
  githubLink,
  dotColor,
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
            className={classes["technologies_circle_" + dotColor]}
          />
          <Text className={classes.technologies} fz={"xs"}>
            {technologies}
          </Text>
        </div>

        <Text fz="sm">{description}</Text>
      </div>
    </div>
  );
};

export default function Repository() {
  const repositories: RepositoryProps[] = [
    {
      id: "1",
      title: "Brain tumors classification",
      githubLink: "https://github.com/chuongtran01/brain-tumors-classification",
      dotColor: "orange",
      technologies: "Python, TensorFlow, NumPy",
      description:
        "Categorized brain tumors by developing and training machine learning model leveraging ResNet 50 architecture.",
    },
    {
      id: "2",
      title: "Internship Recommender",
      githubLink: "https://github.com/chuongtran01/internship-recommender",
      dotColor: "orange",
      technologies: "Python, NLTK, Selenium, BeautifulSoup",
      description:
        "Applied NLP techniques to build recommendation system that matches opportunities with user resumes.",
    },

    {
      id: "3",
      title: "Amusement Park Website",
      githubLink: "",
      dotColor: "green",
      technologies: "C#, ASP.NET Core, MySQL, React, HTML, CSS, Azure",
      description:
        "Led database design, SQL queries, RESTful API endpoints development for amusement park management.",
    },
  ];

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
            dotColor={repo.dotColor}
          />
        ))}
      </div>
    </div>
  );
}
