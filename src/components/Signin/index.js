import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import api from "src/api";

import "./styles.scss";

const Signin = () => {
  const [usersList, setUsersList] = useState();

  const [pseudo, setPseudo] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const users = await api.get("/users");
    setUsersList(users.data);
  };

  const signInOnSubmit = (e) => {
    console.log(usersList);
    e.preventDefault();

    const user = usersList?.find((user) => user.pseudo === pseudo);
    if (user) {
      if (user.password === password) {
        localStorage.setItem("userId", user.id);
        history.push("/list");
      } else {
        window.alert("Mot de passe faux");
      }
    } else {
      window.alert("Compte inexistant");
    }
  };

  return (
    <div className="signin">
      <form className="signin_form" onSubmit={signInOnSubmit}>
        <div className="pseudo">
          <label htmlFor="pseudo">Pseudo</label>
          <input
            type="text"
            name="pseudo"
            onChange={(e) => setPseudo(e.target.value)}
          />
        </div>
        <div className="password">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="text"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

Signin.propTypes = {
  users: PropTypes.array,
};

Signin.defaultProps = {
  users: [],
};

export default Signin;
