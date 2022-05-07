import React from "react";

// styles
import "./Dashboard.scss";

type Props = {
  data: {
    id: number;
    title: string;
    timeframes: {
      daily: {
        current: number;
        previous: number;
      };
      weekly: {
        current: number;
        previous: number;
      };
      monthly: {
        current: number;
        previous: number;
      };
    };
  }[];
};

const Dashboard = (props: Props) => {
  const { data } = props;
  return (
    <ul className="stats-dashboard">
      {data.map((data) => (
        <li key={data.id.toString()} className={data.title.toLocaleLowerCase()}>
          <img
            src={"../assets/images/icon-" + data.title.toLowerCase() + ".svg"}
            alt=""
            aria-hidden="true"
          />
          <div className="stats">
            <div className="stats-heading">
              <h2>{data.title}</h2>
              <img
                src="../assets/images/icon-ellipsis.svg"
                alt=""
                aria-hidden="true"
              />
            </div>

            <div className="time">
              <p className="time-current">
                {data.timeframes.weekly.current}hrs
              </p>
              <p className="time-previous">
                Last Week - {data.timeframes.weekly.previous}hrs
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Dashboard;
