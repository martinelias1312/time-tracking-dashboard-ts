import React from "react";

// components
import MainCardNav from "./MainCardNav";

// img
import person from "../assets/images/image-jeremy.png";

type Props = {};

const MainCard = (props: Props) => {
  return (
    <div className="main-card">
      <figure className="person-card">
        <img src={person} alt="Person face" className="person-img" />
        <figcaption>
          Report for<p className="person-name">Jeremy Robson</p>
        </figcaption>
      </figure>

      <MainCardNav />
    </div>
  );
};

export default MainCard;
