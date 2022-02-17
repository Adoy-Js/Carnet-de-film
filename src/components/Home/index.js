import React from "react";

import { Link } from "react-router-dom";

import "./styles.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="home_welcome">
        <p>
          Bienvenue sur votre carnet de film. Lister, noter, et partager vos
          films regardés !
        </p>
      </div>
      <div className="home_buttons">
        <Link to={"/signin"}>
          <button className="home_signin"> Se Connecter </button>
        </Link>

        <Link to={"/signup"}>
          <button className="home_signup"> Créer un compte </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
