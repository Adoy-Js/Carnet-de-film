import React, { useState } from "react";
import PropTypes from "prop-types";
import api from "src/api";

import "./styles.scss";

const AddViewerForm = () => {
  const [name, setName] = useState("");

  const addMovieOnSubmit = async (e) => {
    e.preventDefault();
    await api.post("/viewers", {
      name: name,
      userId: Number(localStorage.getItem("userId")),
    });
    window.location.href = "http://localhost:8080/list";
  };

  return (
    <div className="addViewerForm">
      <form
        onSubmit={(e) => addMovieOnSubmit(e)}
        className="addViewerForm-form"
      >
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <button type="submit" className="addViewerForm-submitButton">
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default AddViewerForm;
