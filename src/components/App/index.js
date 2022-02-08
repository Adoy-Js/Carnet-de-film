// == Import npm
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
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
  return (
    <div className="carnet">
      <header className="carnet_title">
        <h1>Carnet de films</h1>
      </header>
      <div className="carnet_main">
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
      </div>
    </div>
  );
};

// == Export
export default App;
