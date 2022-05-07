import React from "react";

// styles

// components
import StatsCards from "./StatsCards";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <section className="stats-dashboard">
      <StatsCards />
    </section>
  );
};

export default Dashboard;
