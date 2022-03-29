import React, { useState } from "react";

import "./styles.scss";

const Signup = () => {
  const [usersList, setUsersList] = useState();
  const [pseudo, setPseudo] = useState();
  const [password, setPassword] = useState();

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
    <div className="signup">
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
  );
};

export default Signup;
