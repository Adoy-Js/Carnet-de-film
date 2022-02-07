import React from "react";
import { useHistory } from "react-router-dom";

import "./styles.scss";

const AddButton = () => {
  const history = useHistory();

  const handleClickMovie = () => {
    history.push("/add-movie");
  };

  const handleClickviewer = () => {
    history.push("/add-viewer");
  };

  return (
    <div className="addbutton">
      <button className="button" onClick={handleClickMovie}>Ajouter un film</button>
      <button className="button" onClick={handleClickviewer}>Ajouter un spectateur</button>
    </div>
  );
};

export default AddButton;
