import "./Task2.css";
import { useState } from "react";
import Card from "./Card/Card";
import day from "./imgs/day.png";
import night from "./imgs/night.png";

const Task2 = () => {
  const [cardTitle, setCardTitle] = useState("");
  const [img, setCardimg] = useState("");
  const [timePeriod, setTimePeriod] = useState("");
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const getCurrentTimePeriod = () => {
    setIsButtonPressed(true);
    const currentTime = new Date();
    const hours = currentTime.getHours();

    if (hours >= 0 && hours < 12) {
      setTimePeriod("AM");
    } else {
      setTimePeriod("PM");
    }
  };

  return (
    <div className="task2">
      <h5 className="btn-label">
        Press button to reveal if it is day or night
      </h5>
      <button onClick={getCurrentTimePeriod} className="day-night-btn">
        Night/Day
      </button>
      {isButtonPressed ? (
        <div className="img-display">
          {timePeriod === "AM" ? (
            <div className="img-day">
              <Card img={day} cardTitle={"Day"} />
            </div>
          ) : (
            <div className="img-night">
              <Card img={night} cardTitle={"Night"} />
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Task2;
