import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "src/api";

import "./styles.scss";

const Signin = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

  const [message, setMessage] = useState();

  const signInOnSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      const response = await api.post("/signin", {
        email,
        password,
      });
      console.log(response.data.user);
      const userId = response.data.user.id;
      if (response.data.user) {
        const result = await api.get("/auth", {
          withCredentials: true,
          headers: {
            userId,
          },
        });
        console.log(result.data);
        location.reload();
      } else {
        setMessage(response.data.message);
      }
    } else {
      setMessage("Veuillez remplir tous les champs");
    }
  };

  return (
    <div className="signin">
      <form className="signin_form" onSubmit={(e) => signInOnSubmit(e)}>
        <div className="signin_form_email">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
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
        <p>{message}</p>
      </form>
    </div>
  );
};

export default Signin;
