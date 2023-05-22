import React from "react";

const Header = () => {
  return (
    <div className="header">
      <img
        className="header__icon"
        src="https://img.icons8.com/ios/50/023047/marker-sun--v1.png"
        alt="app-icon"
      />
      <p className="header__title">Weather Info</p>
    </div>
  );
};

export default Header;
