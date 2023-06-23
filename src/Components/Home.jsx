import React from "react";
import "../Styles/home.scss";
import halfMoon from "../Resources/pngwing.com.png";
import { Contact } from "./Contact";
import { Phases } from "./Phases";

export const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1> Lunar </h1>
          <p>
            an eclipse in which the moon appears darkened as it passes into the
            earth's shadow.
          </p>
        </main>
      </div>

      <div className="home2" id="what">
        <img src={halfMoon} alt="Moon" />
        <p>
          Lunar eclipses occur at the full moon phase. When Earth is positioned
          precisely between the Moon and Sun, Earth's shadow falls upon the
          surface of the Moon, dimming it and sometimes turning the lunar
          surface a striking red over the course of a few hours.
        </p>
      </div>

      <div className="home3" id="why">
        <div>
          <h1>Why does the Moon turn red during a lunar eclipse?</h1>
          <p>
            The same phenomenon that makes our sky blue and our sunsets red
            causes the Moon to turn red during a lunar eclipse.
          </p>
          <p>
            It’s called Rayleigh scattering. Light travels in waves, and
            different colors of light have different physical properties. Blue
            light has a shorter wavelength and is scattered more easily by
            particles in Earth’s atmosphere than red light, which has a longer
            wavelength.
          </p>
        </div>
      </div>

      <Phases></Phases>
      <Contact></Contact>
    </>
  );
};
