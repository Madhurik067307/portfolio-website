"use client";

import { Header } from "@/components/Header/Header";
import { HeroBullets } from "@/components/HeroBullets/HeroBullets";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <HeroBullets />
    </>
  );
}
