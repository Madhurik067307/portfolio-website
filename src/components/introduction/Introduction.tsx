import { Text, Title } from "@mantine/core";
import React from "react";
import classes from "./Introduction.module.css";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

export default function Introduction() {
  const skills = {
    languages: "C++, C#, Java, JavaScript, TypeScript, Python, HTML, CSS, SQL.",
    frameworksLibraries:
      "Spring Boot, Angular, React, Redux, Express.js, Node.js, ASP.NET, REST API.",
    developerTools: ": Git/GitHub, Postman, Azure, MongoDB.",
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>Chuong Tran</Title>

        <Text className={classes.introduction} fz="sm">
          I am a software developer specializing in building exceptional digital
          experience.
        </Text>

        <div className={classes.connect_title_container}>
          <Text className={classes.connect_title} fw={500} fz="lg" mb={5}>
            Connect with me
          </Text>
          <div className={classes.icons_container}>
            <IconBrandLinkedin
              className={classes.icon}
              style={{ width: "1.5rem", height: "1.5rem" }}
              stroke={1.5}
              color="var(--mantine-color-blue-filled)"
            />
            <IconMail
              className={classes.icon}
              style={{ width: "1.5rem", height: "1.5rem" }}
              stroke={1.5}
              color="var(--mantine-color-blue-filled)"
            />
          </div>
        </div>

        <div className={classes.skills_container}>
          <Text className={classes.skills_title} fw={500} fz="lg" mb={5}>
            Technical skills
          </Text>
          <ul className={classes.skills_list}>
            <li>
              <Text fz="sm">
                <strong>Languages: </strong>
                {skills.languages}
              </Text>
            </li>
            <li>
              <Text fz="sm">
                <strong>Frameworks &amp; Libraries: </strong>
                {skills.frameworksLibraries}
              </Text>
            </li>
            <li>
              <Text fz="sm">
                <strong>Developer Tools: </strong> {skills.developerTools}
              </Text>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
