import React from "react";

const Instructions = () => {
  return (
    <div className="content__instructions">
      <p className="content__instructions-text">- type a location</p>
      <p className="content__instructions-text">&nbsp;&nbsp;OR</p>
      <p>
        - use your device position (press the&nbsp;
        <span>
          <img
            className="content__position-icon"
            src="https://img.icons8.com/ios-filled/50/fafaf8/center-direction.png"
            alt="position-icon"
          />
        </span>
        &nbsp;button)
      </p>
      <p className="content__instructions-text">&nbsp;&nbsp;OR</p>
      <p className="content__instructions-text">- select from previously searched locations</p>
    </div>
  );
};

export default Instructions;
