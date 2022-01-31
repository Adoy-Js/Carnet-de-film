import React from "react";

import "./styles.scss";

import Movie from "./Movie";

import PropTypes from "prop-types";

const List = ({ movies }) => {

  return (
    <ul className="list_movies">
      <Movie movies={movies} />
    </ul>
  );
};

List.protoTypes = {
  moviesList: PropTypes.array,
};

List.defaulProps = {
  moviesList: [],
};

export default List;
