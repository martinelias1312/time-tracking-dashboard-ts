import React from "react";
import { Data } from "../types";

// styles
import "./Dashboard.scss";

type Props = {
  data: Data[];
};

// component
const Dashboard = (props: Props) => {
  const { data } = props;

  // template
  return (
    <ul className="stats-dashboard">
      {data.map((data) => (
        <li
          key={data.id.toString()}
          className={data.title.replace(" ", "").toLowerCase()}
        >
          <div className="stats-img-wrap">
            <img
              src={require("../assets/images/icon-" +
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
