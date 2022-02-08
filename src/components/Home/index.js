import React from "react";

import { useHistory } from "react-router-dom";

import "./styles.scss";

const Home = () => {
  const history = useHistory();

  const onClickSignIn = () => {
    history.push("/signin");
  };

  const onClickSignUp = () => {
    history.push("/signup");
  };

  return (
    <div className="home">
      <button className="home_signin" onClick={onClickSignIn}>
        Se Connecter
      </button>
      <button className="home_signup" onClick={onClickSignUp}>
        Créer un compte
      </button>
    </div>
  );
};

export default Home;
