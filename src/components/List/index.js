import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

import Movie from "./Movie";

import api from "src/api";

const List = () => {
  const [movies, setMovies] = useState([]);

  const [dateOrder, setDateOrder] = useState(true);
  const [titleOrder, setTitleOrder] = useState(false);
  const [scoreOrder, setScoreOrder] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const movies = await api.get(`/list`, { withCredentials: true });
    const moviesArray = movies.data.moviesUser.Movies;
    let newMoviesArray = [];
    for (const movie of moviesArray) {
      const date = new Date(movie.User_movie.date).toLocaleDateString("fr");
      const movieObject = {
        id: movie.id,
        date,
        name: movie.name,
        score: Number(movie.User_movie.score),
      };
      newMoviesArray.push(movieObject);
    }
    setMovies(newMoviesArray);
  };

  const sortArrayBy = (array, sort, desc) => {
    array.sort(function (a, b) {
      if (a[sort] < b[sort]) return -1;
      if (a[sort] > b[sort]) return 1;
      return 0;
    });
    if (desc) array.reverse();
    return array;
  };

  const moviesOrder = (e) => {
    const desc = true;
    switch (e.target.innerHTML) {
      case "Date":
        if (dateOrder) {
          sortArrayBy(movies, "date");
          setDateOrder(false);
        } else {
          sortArrayBy(movies, "date", desc);
          setDateOrder(true);
          setTitleOrder(false);
          setScoreOrder(false);
        }
        break;
      case "Titre":
        if (titleOrder) {
          sortArrayBy(movies, "name", desc);
          setTitleOrder(false);
        } else {
          sortArrayBy(movies, "name");
          setTitleOrder(true);
          setDateOrder(false);
          setScoreOrder(false);
        }
        break;
      case "Note":
        if (scoreOrder) {
          sortArrayBy(movies, "score");
          setScoreOrder(false);
        } else {
          sortArrayBy(movies, "score", desc);
          setScoreOrder(true);
          setDateOrder(false);
          setTitleOrder(false);
        }
        break;

      default:
        break;
    }
  };

  return (
    <div className="movies-list">
      <div className="movies-list_addbutton">
        <Link to={"/add-movie"}>
          {" "}
          <button className="button">Ajouter un film </button>
        </Link>

        <Link to={"/search-list"}>
          {" "}
          <button className="button"> Rechercher une liste </button>
        </Link>
      </div>
      <table className="movies-list_list-movies">
        <thead>
          <tr>
            <th className="list-movies_date" onClick={(e) => moviesOrder(e)}>
              Date
            </th>
            <th className="list-movies_title" onClick={(e) => moviesOrder(e)}>
              Titre
            </th>
            <th className="list-movies_score" onClick={(e) => moviesOrder(e)}>
              Note
            </th>
          </tr>
        </thead>
        <tbody>
          <Movie movies={movies} />
        </tbody>
      </table>
    </div>
  );
};

export default List;
