import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

import api from "src/api";

const SearchList = () => {
  const [user, setUser] = useState({});
  const [userSearch, setUserSearch] = useState("");

  const [message, setMessage] = useState("Résultats de la recherche");

  const onClickSearch = async (e) => {
    e.preventDefault();
    if (userSearch === "") {
      setMessage("Veuillez remplir le champ");
    } else {
      const response = await api.post(
        `/search-user`,
        { user: userSearch },
        { withCredentials: true }
      );
      if (response.data === null) {
        setUser({});
        setMessage("Compte inexistant");
      } else {
        console.log(response.data);
        setUser(response.data.pseudo);
        setMessage(response.data.pseudo);
      }
    }
  };

  return (
    <div className="searchList">
      <form onSubmit={(e) => onClickSearch(e)} className="searchList_form">
        <input
          type="text"
          className="searchList_form_input"
          onChange={(e) => setUserSearch(e.target.value)}
          placeholder="Rechercher une liste"
        />
        {Object.keys(user).length ? (
          <div className="searchList_form_result">
            <Link to={`/search-list/${user}`}>{message}</Link>
          </div>
        ) : (
          <p className="searchList_form_noResult">{message}</p>
        )}
        <button type="submit">Lancer la recherche</button>
      </form>
    </div>
  );
};

export default SearchList;
