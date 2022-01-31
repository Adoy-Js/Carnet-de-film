import React, { useState } from "react";
import PropTypes from "prop-types";
import api from "src/api";
import { useHistory } from "react-router-dom";

import "./styles.scss";

const Add = ({ viewers }) => {
  const [date, setDate] = useState(null);
  const [name, setName] = useState("");
  const [viewer, setViewer] = useState([]);
  const [score, setScore] = useState(0);

  const [redirect, setRedirect] = useState(false);

  const history = useHistory();

  const addMovieOnSubmit = async (e) => {
    e.preventDefault();
    await api.post("/movies", {
      name: name,
      date: date,
      viewer: viewer,
      score: score,
    });
    window.location.href = "http://localhost:8080/";
  };

  const addViewer = (e) => {
    if (e.target.checked) {
      console.log(e.target.value, "checked !");
      setViewer((viewer) => [...viewer, e.target.value]);
    } else {
      console.log(e.target.value, "pas checked !");
      setViewer(viewer.filter((element) => element !== e.target.value));
    }
  };

  return (
    <div className="add">
      <form onSubmit={(e) => addMovieOnSubmit(e)} className="addMovie">
        <div className="addMovie_date">
          Date :
          <input
            type="date"
            className="date"
            onChange={(e) => setDate(e.target.value)}
            required
            pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
          />
        </div>
        <div className="addMovie_name">
          Titre :
          <input
            type="text"
            className="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="addMovie_viewer">
          Qui l'a regardé ? :
          <ul className="viewersList">
            {viewers.map((viewer) => (
              <li key={viewer.id}>
                <input
                  type="checkbox"
                  name="viewers"
                  value={viewer.name}
                  onChange={(e) => addViewer(e)}
                />
                <label htmlFor={viewer.name}>{viewer.name}</label>
              </li>
            ))}
          </ul>
        </div>
        <div className="addMovie_score">
          Note:
          <select className="score" onChange={(e) => setScore(e.target.value)}>
            <option>0</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <button type="submit" className="submitButton">
          Ajouter
        </button>
      </form>
    </div>
  );
};

Add.propTypes = {
  viewers: PropTypes.array,
};

Add.defaultProps = {
  viewers: [],
};

export default Add;
