import React, { useState, useEffect } from "react";

import jsonServer from "src/api/jsonServer";

import axios from "axios";

import "./styles.scss";

const AddMovieForm = () => {
  const [date, setDate] = useState(null);
  const [name, setName] = useState("");
  const [score, setScore] = useState(0);

  const [moviesData, setMoviesData] = useState([]);

  useEffect(async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=664c463bbf48d0b98f512bbb55bea7b2&query=${name}&language=fr-FR&sort_by=popularity.desc`
    );
    setMoviesData(response.data.results);
  }, [name]);

  const addMovieOnSubmit = async (e) => {
    e.preventDefault();
    await jsonServer.post("/movies", {
      name: name,
      date: date,
      score: Number(score),
      userId: Number(localStorage.getItem("userId")),
    });
    window.location.href = "http://localhost:8080/list";
  };

  const onChangeValue = (e) => {
    setName(e.target.innerText);
  };

  return (
    <div className="addMovieForm">
      <form onSubmit={(e) => addMovieOnSubmit(e)} className="addMovieForm_form">
        <div className="addMovieForm_form_date">
          Date :
          <input
            type="date"
            className="date"
            onChange={(e) => setDate(e.target.value)}
            required
            pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
          />
        </div>
        <div className="addMovieForm_form_name">
          Titre :
          <div className="addMovieForm_form_name_search">
            <input
              type="text"
              className="addMovieForm_form_name_search_input"
              onChange={(e) => setName(e.target.value)}
              placeholder="Chercher un film"
              value={name}
            />
            <div className="addMovieForm_form_name_search_result">
              <ul className="addMovieForm_form_name_search_result_ul">
                {name
                  ? moviesData
                      .slice(0, 5)
                      .map((movie) => (
                        <li
                          className="addMovieForm_form_name_search_result_ul_li"
                          key={movie.id}
                          onClick={(e) => onChangeValue(e)}
                        >{movie.title}</li>
                      ))
                  : "Résultats de la recherche"}
              </ul>
            </div>
          </div>
        </div>

        <div className="addMovieForm_form_score">
          Note:
          <select
            name="addMovieForm_form_score_listScore"
            onChange={(e) => setScore(e.target.value)}
          >
            <option value="0">0</option>
            <option value="0.5">0.5</option>
            <option value="1">1</option>
            <option value="1.5">1.5</option>
            <option value="2">2</option>
            <option value="2.5">2.5</option>
            <option value="3">3</option>
            <option value="3.5">3.5</option>
            <option value="4">4</option>
            <option value="4.5">4.5</option>
            <option value="5">5</option>
          </select>
        </div>
        <button type="submit" className="addMovieForm-submitButton">
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default AddMovieForm;
