"use client";
import { Carousel } from "@/components/Carousel/Carousel";
import { Header } from "@/components/Header/Header";
import { TableScrollArea } from "@/components/TableScrollArea/TableScrollArea";
import React from "react";
import classes from "./page.module.css";

export default function Services() {
  return (
    <>
      <Header />
      <Carousel title="Services" />
      <div className={classes.table}>
        <TableScrollArea />
      </div>
    </>
  );
}
