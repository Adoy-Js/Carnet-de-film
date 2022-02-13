import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import myLocalStorage from "../../utils/localeStorage";

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
    e.preventDefault();
    if (pseudo && password) {
      const user = usersList.find((user) => user.pseudo === pseudo);
      if (user) {
        if (user.password === password) {
          myLocalStorage.setItem("userId", user.id, 1000);
          window.location.href = "http://localhost:8080/list";
        } else {
          window.alert("Mot de passe faux");
          setPseudo();
          setPassword();
          e.target.reset();
        }
      } else {
        window.alert("Compte inexistant");
        setPseudo();
        setPassword();
        e.target.reset();
      }
    } else {
      window.alert("Veuillez remplir tous les champs");
      setPseudo();
      setPassword();
      e.target.reset();
    }
  };

  const onClickBackButton = () => {
    history.push("/");
  };

  return (
    <div className="signin">
      <form className="signin_form" onSubmit={(e) => signInOnSubmit(e)}>
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
        <button type="submit">Se connecter</button>
      </form>
      <button className="signin_back-button" onClick={onClickBackButton}>
        Retour
      </button>
    </div>
  );
};

export default Signin;
