import React, { useState, useEffect } from "react";

import "./styles.scss";

import Movie from "./Movie";

import PropTypes from "prop-types";

import api from "src/api";

const List = () => {
  const [movies, setMovies] = useState([]);


  const [dateOrder, setDateOrder] = useState(true);
  const [titleOrder, setTitleOrder] = useState(true);
  const [viewerOrder, setViewerOrder] = useState(true);
  const [scoreOrder, setScoreOrder] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const movies = await api.get(
      `/movies?userId=${localStorage.getItem("userId")}`
    );
    setMovies(movies.data);
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
          sortArrayBy(movies, "date", desc);
          setDateOrder(false);
        } else {
          sortArrayBy(movies, "date");
          setDateOrder(true);
          setTitleOrder(false);
          setScoreOrder(false);
          setViewerOrder(false);
        }

        break;
      case "Titre":
        if (titleOrder) {
          sortArrayBy(movies, "name");
          setTitleOrder(false);
        } else {
          sortArrayBy(movies, "name", desc);
          setTitleOrder(true);
          setDateOrder(false);
          setScoreOrder(false);
          setViewerOrder(false);
        }
        break;
      case "Vu par":
        if (viewerOrder) {
          sortArrayBy(movies, "viewer");
          setViewerOrder(false);
        } else {
          sortArrayBy(movies, "viewer", desc);
          setViewerOrder(true);
          setDateOrder(false);
          setScoreOrder(false);
          setTitleOrder(false);
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
          setViewerOrder(false);
        }
        break;

      default:
        break;
    }
  };

  return (
    <table className="list-movies">
      <thead>
        <tr>
          <th className="list-movies_date" onClick={(e) => moviesOrder(e)}>
            Date
          </th>
          <th className="list-movies_title" onClick={(e) => moviesOrder(e)}>
            Titre
          </th>
          <th className="list-movies_viewer" onClick={(e) => moviesOrder(e)}>
            Vu par
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
  );
};

List.protoTypes = {
  moviesList: PropTypes.array,
};

List.defaulProps = {
  moviesList: [],
};

export default List;
