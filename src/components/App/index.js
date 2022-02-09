// == Import npm
import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import api from "src/api";

// Import des composants
import AddButton from "../AddButton";
import List from "../List";
import AddMovieForm from "../AddMovieForm";
import HomeButton from "../HomeButton";
import AddViewerForm from "../AddViewerForm";
import Home from "../Home";
import Signin from "../Signin";
import Signup from "../Signup";

// == Import
import "./styles.scss";

//import datas

// == Composant
const App = () => {
  const onClickDisconnect = () => {
    localStorage.removeItem("userId");
    window.location.href = "http://localhost:8080/";
  };

  return (
    <div className="carnet">
      <header className="carnet_header">
        <h1 className="carnet_header_title">Carnet de films</h1>
        {localStorage.getItem("userId") && (
          <>
            <button
              className="carnet_header_disconnect"
              onClick={(e) => onClickDisconnect()}
            >
              Se déconnecter
            </button>
          </>
        )}
      </header>
      <div className="carnet_main">
        {localStorage.getItem("userId") ? (
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/signin" exact>
              <Signin />
            </Route>
            <Route path="/signup" exact>
              <Signup />
            </Route>
            <Route path="/list" exact>
              <AddButton />
              <List />
            </Route>
            <Route path="/add-movie" exact>
              <HomeButton />
              <AddMovieForm />
            </Route>
            <Route path="/add-viewer" exact>
              <HomeButton />
              <AddViewerForm />
            </Route>
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/signin" exact>
              <Signin />
            </Route>
            <Route path="/signup" exact>
              <Signup />
            </Route>
            <Route path="/list" exact>
              <Redirect Home />
            </Route>
            <Route path="/add-movie" exact>
            <Redirect Home />
            </Route>
            <Route path="/add-viewer" exact>
            <Redirect Home />
            </Route>
          </Switch>
        )}
      </div>
    </div>
  );
};

// == Export
export default App;
