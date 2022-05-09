import React from "react";

type Props = {
  timeMode: string;
  activity: {
    current: number;
    previous: number;
  };
};

const Time = (props: Props) => {
  const { timeMode, activity } = props;

  return (
    <div className="time">
      <p className="time-current">{activity.current}hrs</p>
      <p className="time-previous">
        Last {timeMode.charAt(0).toUpperCase() + timeMode.slice(1)} -{" "}
        {activity.previous} hrs
      </p>
    </div>
  );
};

export default Time;
