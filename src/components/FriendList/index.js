import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles.scss";

import api from "src/api";

import FriendMovie from "./FriendMovie";

const FriendList = () => {

  const [movies, setMovies] = useState([]);

  const {pseudo} = useParams();

  const [dateOrder, setDateOrder] = useState(true);
  const [titleOrder, setTitleOrder] = useState(false);
  const [scoreOrder, setScoreOrder] = useState(false);

  useEffect(async () => {
    const response = await api.get(
      `/users?pseudo=${pseudo}&_sort=date&_order=desc`
    );
    const user = response.data[0];
    const userMovie = await api.get(
      `/movies?userId=${user.id}&_sort=date&_order=desc`
    );
    setMovies(userMovie.data);
  }, []);

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
    <>
      <h1 className="titleList">Liste de {pseudo}</h1>
      <table className="list-movies">
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
          <FriendMovie movies={movies} />
        </tbody>
      </table>
    </>
  );
};


export default FriendList;
