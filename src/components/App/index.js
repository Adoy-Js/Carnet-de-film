// == Import npm
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// Import des composants
import AddButton from "../AddButton";
import List from "../List";
import AddMovieForm from "../AddMovieForm";
import HomeButton from "../HomeButton";
import AddViewerForm from "../AddViewerForm";
import Home from "../Home";
import Signin from "../Signin";
import Signup from "../Signup";
import DisconnectButton from "../DisconnectButton";

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
              <AddButton />
              <List />
            </Route>
            <Route path="/add-movie" exact>
              <DisconnectButton />
              <HomeButton />
              <AddMovieForm />
            </Route>
            <Route path="/add-viewer" exact>
              <DisconnectButton />
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
              <Redirect to="/" />
            </Route>
            <Route path="/add-movie" exact>
              <Redirect to="/" />
            </Route>
            <Route path="/add-viewer" exact>
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
