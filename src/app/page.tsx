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
          <div className={classes.bottom_right_experience_container}>
            <Experience />
          </div>
          <div className={classes.bottom_right_repo_container}>
            <Repository />
          </div>
        </div>
      </div>
    </div>
  );
}
