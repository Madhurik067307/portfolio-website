import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
  FileInput,
} from "@mantine/core";
import { ContactIconsList } from "../ContactIcons/ContactIcons";
import bg from "../../assets/images/bg.svg";
import classes from "./GetInTouch.module.css";
import { FormEvent, useRef } from "react";
import emailjs from "@emailjs/browser";

export function GetInTouch() {
  const form = useRef(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hv1ey4k",
        "template_me4q41r",
        form.current!,
        "i6HsuH3KN-1EhW_RH"
      )
      .then(
        (result) => {
          console.log(result.text);
          // form.current!.reset()
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Paper shadow="md" radius="lg">
      <div className={classes.wrapper}>
        <div
          className={classes.contacts}
          style={{ backgroundImage: `url(${bg.src})` }}
        >
          <Text fz="lg" fw={700} className={classes.title} c="#fff">
            Contact information
          </Text>

          <ContactIconsList />
        </div>

        <form
          className={classes.form}
          ref={form}
          onSubmit={(event) => sendEmail(event)}
        >
          <Text fz="lg" fw={700} className={classes.title}>
            Get in touch
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={{ base: 1, sm: 2 }}>
              <TextInput
                label="Your name"
                name="user_name"
                placeholder="Your name"
              />
              <TextInput
                name="user_email"
                label="Your email"
                type="email"
                placeholder="sender@email.com"
                required
              />
            </SimpleGrid>

            <TextInput
              mt="md"
              name="subject"
              label="Subject"
              placeholder="Subject"
              required
            />

            <Textarea
              mt="md"
              name="message"
              label="Your message"
              placeholder="Please include all relevant information"
              autosize
              minRows={3}
            />

            <Group justify="flex-end" mt="md">
              <Button type="submit" className={classes.control}>
                Send message
              </Button>
            </Group>
          </div>
        </form>
      </div>
    </Paper>
  );
}
