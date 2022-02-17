import React from "react";
import { useHistory } from "react-router-dom";

import "./styles.scss";

const AddButton = () => {
  const history = useHistory();

  const onClickAddMovie = () => {
    history.push("/add-movie");
  };

  const onClickSearchList = () => {
    history.push("/search-list");
  };

  return (
    <div className="addbutton">
      <button className="button" onClick={onClickAddMovie}>
        Ajouter un film
      </button>
      <button className="button" onClick={onClickSearchList}>
        Rechercher une liste
      </button>
    </div>
  );
};

export default AddButton;
