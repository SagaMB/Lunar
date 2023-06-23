import React from "react";
import { Carousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import phase1 from "../Resources/phase1.jpg";
import  phase2 from "../Resources/phase2.jpg";
export const Phases = () => {
  return (
    <Carousel infiniteLoop autoPlay showThumbs={false} showStatus={false} interval={1000}>
      <div>
        <img src={phase1} alt="phase1" />
      </div>

      <div>
        <img src={phase2} alt="phase2" />
      </div>
    </Carousel>
  );
};
