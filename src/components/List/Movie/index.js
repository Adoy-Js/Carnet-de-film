import React, { useState, useEffect } from "react";
import jsonServer from "src/api/jsonServer";

import { FaTrash } from "react-icons/fa";

import "./styles.scss";

import PropTypes from "prop-types";

const Movie = ({ movies }) => {

  const deleteMovie = async (id) => {
    await jsonServer.delete(`/movies/${id}`);
    window.location.href = "https://carnet-de-films.netlify.app/list";
  };

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
