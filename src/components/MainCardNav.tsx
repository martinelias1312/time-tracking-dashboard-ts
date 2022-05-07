import React from "react";

// styles
import "./MainCardNav.scss";

type Props = {};

const MainCardNav = (props: Props) => {
  return (
    <div className="main-card-nav">
      <button>Daily</button>
      <button>Weekly</button>
      <button>Monthly</button>
    </div>
  );
};

export default MainCardNav;
