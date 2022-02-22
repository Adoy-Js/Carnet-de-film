import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "./styles.scss";

import projector from "./video/projector.mp4";
import myLocalStorage from "../../utils/localeStorage";
import jsonServer from "src/api/jsonServer";

const Home = () => {
  /*  Signin Function */
  const [usersList, setUsersList] = useState();
  const [pseudo, setPseudo] = useState();
  const [password, setPassword] = useState();
  const [displaySignIn, setDisplaySignIn] = useState(false);
  const [displaySignUp, setDisplaySignUp] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const users = await jsonServer.get("/users");
    setUsersList(users.data);
  };

  const signInOnSubmit = (e) => {
    e.preventDefault();
    if (pseudo && password) {
      const user = usersList.find((user) => user.pseudo === pseudo);
      if (user) {
        if (user.password === password) {
          myLocalStorage.setItem("userId", user.id, 1000);
          window.location.href = "https://carnet-de-films.netlify.app/list";
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

  const onClickSignIn = () => {
    setDisplaySignIn(!displaySignIn);
    setDisplaySignUp(false);
  };

  const onClickSignUp = () => {
    setDisplaySignUp(!displaySignUp);
    setDisplaySignIn(false);
  };

  /*  Signup Function */

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

  return (
    <div className="home">
      <video autoPlay loop muted id="video">
        <source src={projector} type="video/mp4" />
      </video>
      <div className="home_buttons">
        <button className="home_buttons_signin" onClick={onClickSignIn}>
          Se Connecter
        </button>
        <button className="home_buttons_signup" onClick={onClickSignUp}>
          Créer un compte
        </button>
      </div>
      <div className={`signin ${displaySignIn ? "" : "hidden"}`}>
        <form className="signin_form" onSubmit={(e) => signInOnSubmit(e)}>
          <div className="signin_form_pseudo">
            <label htmlFor="pseudo">Pseudo</label>
            <input
              type="text"
              name="pseudo"
              onChange={(e) => setPseudo(e.target.value)}
            />
          </div>
          <div className="signin_form_password">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Se connecter</button>
        </form>
      </div>
      <div className={`signin ${displaySignUp ? "" : "hidden"}`}>
        <form className="signup_form" onSubmit={(e) => signUpOnSubmit(e)}>
          <div className="signup_form_pseudo">
            <label htmlFor="pseudo">Pseudo</label>
            <input
              type="text"
              name="pseudo"
              onChange={(e) => setPseudo(e.target.value)}
            />
          </div>
          <div className="signup_form_password">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Créer un compte</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
