import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  Paper,
  Text,
  useMantineTheme,
  rem,
  Title,
  Button,
} from "@mantine/core";
import classes from "./Experience.module.css";

interface CardProps {
  timeFrame: string;
  company: string;
  position: string;
  description: string;
  skills: string[];
}

function Card({
  timeFrame,
  company,
  position,
  description,
  skills,
}: CardProps) {
  return (
    <Paper shadow="md" p="lg" radius="md" className={classes.card}>
      <div className={classes.left}>
        <Text fw={"500"} className={classes.left_text} size={"md"}>
          {timeFrame}
        </Text>
      </div>
      <div className={classes.right}>
        <div>
          <Title order={4}>{company}</Title>
          <Title order={5}>{position}</Title>
          <Text className={classes.description}>{description}</Text>
        </div>

        <div className={classes.skills}>
          {skills.map((skill) => (
            <Button variant="light" radius="xl" size="sm">
              {skill}
            </Button>
          ))}
        </div>
      </div>
    </Paper>
  );
}

const data = [
  {
    id: "1",
    timeFrame: "May 2023 - PRESENT",
    company: "Infodat",
    position: "Software Developer",
    description:
      "Worked with cross-functional teams to develop dynamic and responsive user interfaces, effectively translating designs into high-quality functional web components.",
    skills: ["Angular", "TypeScript", "HTML", "CSS"],
  },
  {
    id: "2",
    timeFrame: "Aug 2022 - May 2023",
    company: "University of Houston",
    position: "Teaching Assistant",
    description:
      "Worked with professor to design and execute programming activities and assessments, and facilitated lab sessions, emphasizing practical application of data structures and algorithms in C++.",
    skills: ["C++"],
  },
  {
    id: "3",
    timeFrame: "Dec 2022 - Apr 2023",
    company: "Mainbridge Health Partners",
    position: "Software Engineer Intern",
    description:
      "Developed and expanded features, involving both front-end and back-end tasks which resulted in better user experience.",
    skills: ["C#", "ASP.NET", "Microsoft SQL Server", "HTML", "CSS"],
  },
];

export function Experience() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide>
      <Card
        key={item.id}
        timeFrame={item.timeFrame}
        company={item.company}
        position={item.position}
        description={item.description}
        skills={item.skills}
      />
    </Carousel.Slide>
  ));

  return (
    <div>
      <Text className={classes.carousel_title} size={"sm"}>
        Experience
      </Text>
      <Carousel
        slideSize={{ base: "100%", sm: "50%" }}
        slideGap={{ base: rem(2), sm: "xl" }}
        align="start"
        slidesToScroll={mobile ? 1 : 2}
      >
        {slides}
      </Carousel>
    </div>
  );
}
