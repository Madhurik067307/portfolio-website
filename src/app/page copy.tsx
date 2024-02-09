"use client";

import Introduction from "@/components/introduction/Introduction";
import PersonalInformation from "@/components/personal-information/PersonalInformation";
import RepositoryComponent, {
  Repository,
} from "@/components/repository-component/RepositoryComponent";
import ThemeToggleButton from "@/components/theme-toggle-button/ThemeToggleButton";
import { Text, useMantineColorScheme } from "@mantine/core";
import classes from "./page.module.css";

export default function Home() {
  const { setColorScheme, clearColorScheme } = useMantineColorScheme();

  const repositories: Repository[] = [
    {
      id: "1",
      title: "Brain tumors classification",
      githubLink: "https://github.com/chuongtran01/brain-tumors-classification",
      technologies: "Python, TensorFlow, NumPy",
      description:
        "Categorized brain tumors by developing and training machine learning model leveraging ResNet 50 architecture.",
    },
    {
      id: "2",
      title: "Internship Recommender",
      githubLink: "",
      technologies: "Python, NLTK, Selenium, BeautifulSoup",
      description:
        "Applied NLP techniques to build recommendation system that matches opportunities with user resumes.",
    },

    {
      id: "1",
      title: "Brain tumors classification",
      githubLink: "",
      technologies: "Python, TensorFlow, NumPy",
      description:
        "Categorized brain tumors by developing and training machine learning model leveraging ResNet 50 architecture.",
    },

    {
      id: "1",
      title: "Brain tumors classification",
      githubLink: "",
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
            <Text className={classes.bottom_right_repo_title} fz={"sm"}>
              Pinned Repositories
            </Text>
            <div className={classes.bottom_right_repo}>
              {repositories.map((repo) => {
                return <RepositoryComponent key={repo.id} repository={repo} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
