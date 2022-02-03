import React, { useState } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

import "./styles.scss";

import PropTypes from "prop-types";

const Movie = ({ movies }) => {
  const getRating = (movie, score) => {
    let starArray = [];
    if (Number.isInteger(score)) {
      for (let i = 0; i < score; i++) {
        starArray.push(<FaStar color="yellow" />);
      }
    } else {
      for (let i = 0; i < score - 1; i++) {
        starArray.push(<FaStar color="yellow" />);
      }
      starArray.push(<FaStarHalf color="yellow" />);
    }

    return starArray;
  };

  return (
    <>
      {movies?.map((movie) => (
        <tr className="movie" key={movie.id}>
          <td className="movie_date">
            {new Date(movie.date).toLocaleDateString()}
          </td>
          <td className="movie_title">{movie.name}</td>
          <td className="movie_viewer">{movie.viewer}</td>
          <td className="movie_score">
            <div className="star-white">
              {[...Array(5)].map((star, index) => {
                return <FaStar key={"white" + index} />;
              })}
            </div>
            <div className="star-yellow">{getRating(movie, movie.score)}</div>
          </td>
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
