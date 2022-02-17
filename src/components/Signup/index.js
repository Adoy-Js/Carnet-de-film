import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import jsonServer from "src/api/jsonServer";

import "./styles.scss";

const Signup = () => {
  const [usersList, setUsersList] = useState();

  const [pseudo, setPseudo] = useState();
  const [password, setPassword] = useState();

  const history = useHistory();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const users = await jsonServer.get("/users");
    setUsersList(users.data);
  };

  const signUpOnSubmit = (e) => {
    e.preventDefault();
    if (pseudo && password) {
      if (usersList.find((user) => user.pseudo === pseudo)) {
        window.alert("pseudo deja pris");
        e.target.reset();
      } else {
        jsonServer.post("/users", {
          pseudo: pseudo,
          password: password,
        });
        window.alert("Compte crée");
        window.location.href = "http://localhost:8080/";
      }
    } else {
      window.alert("Veuillez remplir tous les champs");
      e.target.reset();
    }
  };

  const onClickBackButton = () => {
    history.push("/");
  };

  return (
    <div className="signup">
      <form className="signup_form" onSubmit={(e) => signUpOnSubmit(e)}>
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
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Créer un compte</button>
      </form>
      <button className="signin_back-button" onClick={onClickBackButton}>
        Retour
      </button>
    </div>
  );
};

export default Signup;
