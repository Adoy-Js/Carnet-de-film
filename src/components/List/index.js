import React from "react";

import "./styles.scss";

import Movie from "./Movie";

const List = () => {
  return (
    <ul className="list_movies">
      <Movie />
    </ul>
  );
};

export default List;
