import Image from "next/image";
import CarouselImage from "../../assets/images/tailoring-items-arrangement-still-life.jpg";
import classes from "./Carousel.module.css";

interface CarouselProps {
  title: string;
}

export function Carousel({ title }: CarouselProps) {
  return (
    <div className={classes.carouselContainer}>
      <Image
        className={classes.carousel}
        src={CarouselImage}
        title="Carousel"
        alt="Carousel"
      />
      <div className={classes.carouselTitle}>{title}</div>
    </div>
  );
}
