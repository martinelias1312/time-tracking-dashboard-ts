import React, { MouseEvent } from "react";

// styles
import "./MainCardNav.scss";

type Props = {
  switchTimeMode: (arg: string) => void;
  timeMode: string;
};

// component
const MainCardNav = (props: Props) => {
  const setActive = (e: MouseEvent<HTMLButtonElement>) => {
    // click on btn and add active class, reset active on others
    const buttons = document.querySelectorAll(".time-btn");
    buttons.forEach((btn) => btn.classList.remove("active"));
    e.currentTarget.classList.add("active");

    // check if clicked item has class with day/week/month and pass this class to switchTimeMode function
    if (e.currentTarget.classList[0] === "day") {
      props.switchTimeMode("day");
    } else if (e.currentTarget.classList[0] === "week") {
      props.switchTimeMode("week");
    } else {
      props.switchTimeMode("month");
    }
  };
  // template
  return (
    <div className="main-card-nav">
      <button onClick={setActive} className="day time-btn">
        Daily
      </button>
      <button onClick={setActive} className="week time-btn">
        Weekly
      </button>
      <button onClick={setActive} className="month time-btn">
        Monthly
      </button>
    </div>
  );
};
export default MainCardNav;
