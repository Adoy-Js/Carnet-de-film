// == Import npm
import React from "react";
import { Route, Switch } from "react-router-dom";

// Import des composants
import AddButton from "../AddButton";
import List from "../List";
import Add from "../Add";

// == Import
import "./styles.scss";

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
            <AddButton />
            <List />
          </Route>
          <Route path="/add" exact>
            <Add />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

// == Export
export default App;
