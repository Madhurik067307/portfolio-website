"use client";

import { Experience } from "@/components/experience/Experience";
import Introduction from "@/components/introduction/Introduction";
import PersonalInformation from "@/components/personal-information/PersonalInformation";
import Repository, {
  RepositoryProps,
} from "@/components/repository-component/Repository";
import ThemeToggleButton from "@/components/theme-toggle-button/ThemeToggleButton";
import { Text, useMantineColorScheme } from "@mantine/core";
import classes from "./page.module.css";

export default function Home() {
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

    {
      id: "1",
      title: "Brain tumors classification",
      githubLink: "https://github.com/chuongtran01/Park-Database",
      dotColor: "green",
      technologies: "Python, TensorFlow, NumPy",
      description:
        "Categorized brain tumors by developing and training machine learning model leveraging ResNet 50 architecture.",
    },
  ];

  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <ThemeToggleButton />
      </div>
      <div className={classes.bottom}>
        <div className={classes.bottom_left}>
          <PersonalInformation />
        </div>
        <div className={classes.bottom_right}>
          <div className={classes.bottom_right_introduction}>
            <Introduction />
          </div>
          <div className={classes.bottom_right_repo_container}>
            <Repository repositories={repositories} />
          </div>
          <div className={classes.bottom_right_experience_container}>
            <Experience />
          </div>
        </div>
      </div>
    </div>
  );
}
