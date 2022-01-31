import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaStar } from "react-icons/fa";

import "./styles.scss";

import PropTypes from "prop-types";

const Movie = ({ movies }) => {
  const [rating, setRating] = useState(false);
  
  return (
    <>
      {movies?.map((movie) => (
        <li className="movie" key={movie.id}>
          <div className="movie_date">{movie.date}</div>
          <div className="movie_title">{movie.name}</div>
          <div className="movie_viewer">{movie.viewer}</div>
          <div className="movie_score">{movie.score}</div>
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
