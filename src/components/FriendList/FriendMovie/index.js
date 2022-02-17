import React, { useState, useEffect } from "react";
import jsonServer from "src/api/jsonServer";

import "./styles.scss";

import PropTypes from "prop-types";

const Movie = ({ movies }) => {

  return (
    <>
      {movies?.map((movie) => (
        <tr className="movie" key={movie.id}>
          <td className="movie_date" data-label="DATE">
            {new Date(movie.date).toLocaleDateString()}
          </td>
          <td className="movie_title" data-label="TITRE">
            {movie.name}
          </td>
          <td
            style={{ "--rating": `${movie.score}` }}
            className="movie_score"
            data-label="NOTE"
          ></td>
        </tr>
      ))}
    </>
  );
};

Movie.protoTypes = {
  moviesList: PropTypes.array,
};

Movie.defaulProps = {
  moviesList: [],
};

export default Movie;
