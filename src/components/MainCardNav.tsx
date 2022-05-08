import React, { MouseEvent } from "react";

// styles
import "./MainCardNav.scss";

type Props = {};

// component
const MainCardNav = (props: Props) => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    let buttons = document.querySelectorAll(".time-btn");
    buttons.forEach((butt) => butt.classList.remove("active"));

    e.currentTarget.classList.add("active");
  };
  // template
  return (
    <div className="main-card-nav">
      <button onClick={handleClick} className="time-btn">
        Daily
      </button>
      <button onClick={handleClick} className="time-btn">
        Weekly
      </button>
      <button onClick={handleClick} className="time-btn">
        Monthly
      </button>
    </div>
  );
};

export default MainCardNav;
