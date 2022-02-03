import React, { useState } from "react";

import "./styles.scss";

import PropTypes from "prop-types";

const Movie = ({ movies }) => {
  const getRating = (score) => {
    return `${score / 5 * 100}%`;
  };

  return (
    <>
      {movies?.map((movie) => (
        <li className="movie" key={movie.id}>
          <div className="movie_date">
            {new Date(movie.date).toLocaleDateString()}
          </div>
          <div className="movie_title">{movie.name}</div>
          <div className="movie_viewer">{movie.viewer}</div>
          <div className="stars-outer">
            <div
              className="stars-inner"
              style={{ width: `${getRating(movie.score)}` }}
            ></div>
          </div>
        </li>
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
