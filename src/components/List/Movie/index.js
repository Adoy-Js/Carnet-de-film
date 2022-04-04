import React, { useState, useEffect } from "react";
import api from "src/api";

import { FaTrash } from "react-icons/fa";

import "./styles.scss";

import PropTypes from "prop-types";

const Movie = ({ movies }) => {
  const deleteMovie = async (id) => {
    await api.delete(`/delete-movie/${id}`, { withCredentials: true });
    window.location.href = "http://localhost:8080/list";
  };

  return (
    <>
      {movies?.map((movie) => (
        <tr className="movie" key={movie.id}>
          <td className="movie_date" data-label="DATE">
            {movie.date}
          </td>
          <td className="movie_title" data-label="TITRE">
            {movie.name}
          </td>
          <td
            style={{ "--rating": `${movie.score}` }}
            className="movie_score"
            data-label="NOTE"
          ></td>
          <td>
            <FaTrash
              cursor={"pointer"}
              onClick={(e) => deleteMovie(movie.id)}
            />
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
