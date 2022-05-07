import React from "react";
import { NavLink } from "react-router-dom";

type Props = {};

const MainCardNav = (props: Props) => {
  return (
    <nav>
      <NavLink
        to="/daily"
        style={({ isActive }) => (isActive ? { color: "white" } : {})}
      />
      <NavLink
        to="/weekly"
        style={({ isActive }) => (isActive ? { color: "white" } : {})}
      />
      <NavLink
        to="/monthly"
        style={({ isActive }) => (isActive ? { color: "white" } : {})}
      />
    </nav>
  );
};

export default MainCardNav;
