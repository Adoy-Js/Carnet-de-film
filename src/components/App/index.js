// == Import npm
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import api from "src/api";

// Import des composants
import AddButton from "../AddButton";
import List from "../List";
import Add from "../Add";

// == Import
import "./styles.scss";

//import datas


// == Composant
const App = () => {
  const [moviesList, setMoviesList] = useState([]);
  const [viewersList, setviewersList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const movies = await api.get("/movies");
    const viewers = await api.get("/viewers");
    setMoviesList(movies.data);
    setviewersList(viewers.data);
  };

  return (
    <div className="carnet">
      <header className="carnet_title">
        <h1>Carnet de films</h1>
      </header>
      <div className="carnet_main">
        <Switch>
          <Route path="/" exact>
            <AddButton />
            <List movies={moviesList} />
          </Route>
          <Route path="/add" exact>
            <Add viewers={viewersList} />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

// == Export
export default App;
