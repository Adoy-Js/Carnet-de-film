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
      <div className="home_welcome">
        <p>
          Bienvenue sur votre carnet de film. Lister, noter, et partager vos films regardés !
        </p>
      </div>
      <div className="home_buttons">
        <button className="home_signin" onClick={onClickSignIn}>
          Se Connecter
        </button>
        <button className="home_signup" onClick={onClickSignUp}>
          Créer un compte
        </button>
      </div>
    </div>
  );
};

export default Home;
