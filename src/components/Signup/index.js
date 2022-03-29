import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "src/api";

import "./styles.scss";

const Signup = () => {
  const navigate = useNavigate();

  const [pseudo, setPseudo] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const [message, setMessage] = useState();

  const signUpOnSubmit = async (e) => {
    e.preventDefault();
    if (pseudo && password && email) {
      const response = await api.post("/signup", {
        email,
        pseudo,
        password,
      });
      if (response.data.user) {
        console.log(response.data);
        navigate("/");
      } else {
        setMessage(response.data.message);
      }
    } else {
      setMessage("Veuillez remplir tous les champs");
      e.target.reset();
    }
  };

  return (
    <div className="signup">
      <form className="signup_form" onSubmit={(e) => signUpOnSubmit(e)}>
        <div className="signup_form_email">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
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
        <p>{message}</p>
      </form>
    </div>
  );
};

export default Signup;
