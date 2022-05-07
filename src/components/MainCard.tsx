import React from "react";

// styles
import "./MainCard.scss";

// children
import MainCardNav from "./MainCardNav";

// img
import person from "../assets/images/image-jeremy.png";

type Props = {};

// component
const MainCard = (props: Props) => {
  // template
  return (
    <div className="main-card">
      <figure className="person-card">
        <div className="person-img-wrap">
          <img src={person} alt="Person face" className="person-img" />
        </div>
        <figcaption>
          Report for<p className="person-name">Jeremy Robson</p>
        </figcaption>
      </figure>

      <MainCardNav />
    </div>
  );
};

export default MainCard;
