import React from "react";
import { useHistory } from "react-router-dom";

import "./styles.scss";

const AddButton = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/add");
  };

  return (
    <div className="addbutton">
      <button onClick={handleClick}>Ajouter un film</button>
    </div>
  );
};

export default AddButton;
