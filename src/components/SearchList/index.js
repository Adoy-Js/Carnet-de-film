import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import "./styles.scss";

import jsonServer from "src/api/jsonServer";

const SearchList = ({ updateUser }) => {
  const [user, setUser] = useState({});
  const [userSearch, setUserSearch] = useState("");

  const [message, setMessage] = useState("Résultats de la recherche");

  const history = useHistory();

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

  const onClickUserFounded = () => {
    updateUser(user);
    history.push(`/search-list/${user.pseudo}`);
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
          <div className="searchList_form_result" onClick={onClickUserFounded}>
            {message}
          </div>
        ) : (
          <p className="searchList_form_noResult">{message}</p>
        )}
        <button type="submit">Lancer la recherche</button>
      </form>
    </div>
  );
};

SearchList.propTypes = {
  updateUser: PropTypes.func,
};

SearchList.defaultProps = {
  updateUser: () => {},
};

export default SearchList;
