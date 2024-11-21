import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./styles.scss";

const Home = () => {
  const navigate = useNavigate();
  
  const onClickSignIn = () => {
    navigate("/signin")
  };

  const onClickSignUp = () => {
    navigate("/signup")
  };

  return (
    <div className="home">
      <div className="home_buttons">
        <button className="home_buttons_signin" onClick={onClickSignIn}>
          Se Connecter
        </button>
        <button className="home_buttons_signup" onClick={onClickSignUp}>
          Créer un compte
        </button>
      </div>
    </div>
  );
};

export default Home;
