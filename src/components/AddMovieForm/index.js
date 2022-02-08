import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from "src/api";

import "./styles.scss";

const AddMovieForm = () => {
  const [viewersList, setViewersList] = useState([]);

  const [date, setDate] = useState(null);
  const [name, setName] = useState("");
  const [viewer, setViewer] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const viewers = await api.get(
      `/viewers?userId=${localStorage.getItem("userId")}`
    );
    setViewersList(viewers.data);
  };

  const addMovieOnSubmit = async (e) => {
    e.preventDefault();
    await api.post("/movies", {
      name: name,
      date: date,
      viewersId: viewer,
      score: Number(score),
      userId: Number(localStorage.getItem("userId")),
    });
    window.location.href = "http://localhost:8080/list";
  };

  const addViewer = (e, viewerId) => {
    if (e.target.checked) {
      setViewer((viewer) => [...viewer, viewerId]);
    } else {
      setViewer(viewer.filter((element) => element !== viewerId));
    }
  };

  return (
    <div className="addMovieForm">
      <form onSubmit={(e) => addMovieOnSubmit(e)} className="addMovieForm-form">
        <div className="addMovieForm-date">
          Date :
          <input
            type="date"
            className="date"
            onChange={(e) => setDate(e.target.value)}
            required
            pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
          />
        </div>
        <div className="addMovieForm-name">
          Titre :
          <input
            type="text"
            className="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="addMovieForm-viewer">
          Qui l'a regardé ? :
          <ul className="viewersList">
            {viewersList.map((viewer) => (
              <li key={viewer.id}>
                <input
                  type="checkbox"
                  name="viewers"
                  value={viewer.name}
                  onChange={(e) => addViewer(e, viewer.id)}
                />
                <label htmlFor={viewer.name}>{viewer.name}</label>
              </li>
            ))}
          </ul>
        </div>
        <div className="addMovieForm-score">
          Note:
          <select
            name="addMovieForm-score-listScore"
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

AddMovieForm.propTypes = {
  viewers: PropTypes.array,
};

AddMovieForm.defaultProps = {
  viewers: [],
};

export default AddMovieForm;
