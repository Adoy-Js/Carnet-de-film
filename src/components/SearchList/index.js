import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

import jsonServer from "src/api/jsonServer";

const SearchList = () => {
  const [user, setUser] = useState({});
  const [userSearch, setUserSearch] = useState("");

  const [message, setMessage] = useState("Résultats de la recherche");


  const onClickSearch = async (e) => {
    e.preventDefault();
    const response = await jsonServer.get(`/users?pseudo=${userSearch}`);
    if (!response.data.length) {
      setUser({});
      setMessage("Compte inexistant");
    } else {
      setUser(response.data[0]);
      setMessage(response.data[0].pseudo);
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
            <Link to={`/search-list/${user.pseudo}`}>{message}</Link>
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
