import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const HomeButton = () => {
  return (
    <div className="HomeButton">
      <Link to={"/"}>
        <button className="homeButton"> Accueil </button>
      </Link>
    </div>
  );
};

export default HomeButton;
