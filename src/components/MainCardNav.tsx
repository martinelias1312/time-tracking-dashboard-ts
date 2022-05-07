import React from "react";

// styles
import "./MainCardNav.scss";

type Props = {};

const MainCardNav = (props: Props) => {
  return (
    <ul className="main-card-nav">
      <li>Daily</li>
      <li>Weekly</li>
      <li>Monthly</li>
    </ul>
  );
};

export default MainCardNav;
