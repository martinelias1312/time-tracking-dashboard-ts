import React from "react";
import { Data } from "../../types";

// styles
import "./Dashboard.scss";

// children
import Time from "./Time";

type Props = {
  data: Data[];
  timeMode: string;
};

// component
const Dashboard = (props: Props) => {
  const { data, timeMode } = props;
  // template
  return (
    <>
      <h1 className="sr-only">Time Dashboard</h1>
      <ul className="stats-dashboard">
        {data.map((data) => (
          <li
            key={data.id.toString()}
            className={data.title.replace(" ", "").toLowerCase()}
          >
            <div className="stats-img-wrap">
              <img
                src={require("../../assets/images/icon-" +
                  data.title.replace(" ", "").toLowerCase() +
                  ".svg")}
                alt=""
                aria-hidden="true"
              />
            </div>

            <div className="stats">
              <div className="stats-heading">
                <h2>{data.title}</h2>
                <div className="dots-wrap">
                  <svg
                    width="21"
                    height="5"
                    className="img-dots"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                      fill="#BBC0FF"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
              </div>

              <Time
                timeMode={timeMode}
                activity={
                  data.timeframes[
                    timeMode === "day"
                      ? "daily"
                      : timeMode === "week"
                      ? "weekly"
                      : "monthly"
                  ]
                }
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Dashboard;
