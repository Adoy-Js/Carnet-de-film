import React from "react";
import { useHistory } from "react-router-dom";

import "./styles.scss";

const HomeButton = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/list");
  };


  return (
    <div className="HomeButton">
      <button className="homeButton" onClick={handleClick}>Accueil</button>
    </div>
  );
};

export default HomeButton;
