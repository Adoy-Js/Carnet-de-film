import React from "react";

import "./styles.scss";

import Movie from "./Movie";

import PropTypes from "prop-types";

const List = ({ movies }) => {
  return (
    <table className="list_movies">
      <thead>
        <tr>
          <th>Date</th>
          <th>Titre</th>
          <th>Vu par</th>
          <th>Note</th>
        </tr>
      </thead>
      <tbody>
        <Movie movies={movies} />
      </tbody>
    </table>
  );
};

List.protoTypes = {
  moviesList: PropTypes.array,
};

List.defaulProps = {
  moviesList: [],
};

export default List;
