'use client';
import { Carousel } from '@/components/Carousel/Carousel';
import { GetInTouch } from '@/components/GetInTouch/GetInTouch';
import { Header } from '@/components/Header/Header';
import React from 'react';
import classes from './page.module.css';

export default function Contact() {
  return (
    <>
      <Header />
      <div className={classes.contactCarousel}>
        <Carousel title="Contact" />
      </div>
      <div className={classes.getInTouch}>
        <GetInTouch />
      </div>
    </>
  );
}
