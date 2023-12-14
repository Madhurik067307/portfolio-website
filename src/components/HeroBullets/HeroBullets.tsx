import { Image, Container, Title, Button, Group, Text, List, ThemeIcon, rem } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
// import image from '../../assets/images/image.svg';
import femaleTailor from '../../assets/images/female-tailor.png';
import classes from './HeroBullets.module.css';

export function HeroBullets() {
  const router = useRouter();

  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            Tailor with <span className={classes.highlight}>10+</span> <br /> Years of Experience
          </Title>
          {/* <Text c="dimmed" mt="md">
            Build fully functional accessible web applications faster than ever – Mantine includes
            more than 120 customizable components and hooks to cover you in any situation
          </Text> */}

          <List
            mt={30}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconCheck style={{ width: rem(12), height: rem(12) }} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              <b>Tailoring Excellence</b> – Crafting garments with precision and passion for 10+
              years.
            </List.Item>
            <List.Item>
              <b>Satisfaction Guaranteed</b> – We're dedicated to your satisfaction; your confidence
              in our work is our top priority.
            </List.Item>
            <List.Item>
              <b>Consultation & Styling</b> – Our expert stylists will guide you through the design
              process, ensuring you look your best.
            </List.Item>
            <List.Item>
              <b>Local and Family-Owned</b> – A locally owned and family-operated tailor shop,
              dedicated to our community.
            </List.Item>
          </List>

          <Group mt={30}>
            <Button
              radius="xl"
              size="md"
              className={classes.control}
              onClick={() => router.push('/services')}
            >
              Our Services
            </Button>
          </Group>
        </div>
        <Image src={femaleTailor.src} className={classes.image} />
      </div>
    </Container>
  );
}
