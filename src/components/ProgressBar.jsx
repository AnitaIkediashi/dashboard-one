import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ChangingProgressProvider from "./ChangingProgressProvider";


const ProgressBar = () => {
  
  return (
    <div style={{ width: 120, height: 120 }}>
      <ChangingProgressProvider valueStart={0} valueEnd={60}>
        {(value) => (
          <CircularProgressbar
            value={value}
            styles={buildStyles({
              strokeLinecap: "butt",
              pathColor: "#4640de",
            })}
          />
        )}
      </ChangingProgressProvider>
    </div>
  );
};

export default ProgressBar;
