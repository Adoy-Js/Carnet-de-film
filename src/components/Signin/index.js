import React, { useState } from "react";

import "./styles.scss";

const Signin = () => {
  const [usersList, setUsersList] = useState();

  const signInOnSubmit = (e) => {
    e.preventDefault();
    if (pseudo && password) {
      const user = usersList.find((user) => user.pseudo === pseudo);
      if (user) {
        if (user.password === password) {
          // myLocalStorage.setItem("userId", user.id, 1000);
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

  return (
    <div className="signin">
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
  );
};

export default Signin;
