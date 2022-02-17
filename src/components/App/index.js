// == Import npm
import React, { useEffect, useState } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// Import des composants
import AddSearchButton from "../AddSearchButton";
import List from "../List";
import AddMovieForm from "../AddMovieForm";
import HomeButton from "../HomeButton";
import Home from "../Home";
import Signin from "../Signin";
import Signup from "../Signup";
import DisconnectButton from "../DisconnectButton";
import SearchList from "../SearchList";
import FriendList from "../FriendList";

//import locaux
import myLocalStorage from "../../utils/localeStorage";

// == Import
import "./styles.scss";

//import datas

// == Composant
const App = () => {

  return (
    <div className="carnet">
      <header className="carnet_header">
        <h1 className="carnet_header_title">Carnet de films</h1>
      </header>
      <div className="carnet_main">
        {myLocalStorage.getItem("userId") ? (
          <Switch>
            <Route path="/" exact>
              <Redirect to="/list" />
            </Route>
            <Route path="/signin" exact>
              <Redirect to="/list" />
            </Route>
            <Route path="/signup" exact>
              <Redirect to="/list" />
              <List />
            </Route>
            <Route path="/list" exact>
              <DisconnectButton />
              <AddSearchButton />
              <List />
            </Route>
            <Route path="/add-movie" exact>
              <DisconnectButton />
              <HomeButton />
              <AddMovieForm />
            </Route>
            <Route path="/search-list" exact>
              <DisconnectButton />
              <HomeButton />
              <SearchList />
            </Route>
            <Route path={`/search-list/:pseudo`} exact>
              <DisconnectButton />
              <HomeButton />
              <FriendList />
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
              <Redirect to="/" />
            </Route>
            <Route path="/add-movie" exact>
              <Redirect to="/" />
            </Route>
            <Route path="/search-list" exact>
              <Redirect to="/" />
            </Route>
            <Route path={`/search-list/:pseudo`} exact>
              <Redirect to="/" />
            </Route>
          </Switch>
        )}
      </div>
    </div>
  );
};

// == Export
export default App;
