// == Import npm
import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

// Import des composants
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
          <>
            <DisconnectButton />
            <Routes>
              <Route path="/" element={<Navigate to="/list" />} />
              <Route path="/signin" element={<Navigate to="/list" />} />
              <Route path="/signup" element={<Navigate to="/list" />} />
              <Route path="/list" element={<List />} />
              <Route
                path="/add-movie"
                element={
                  <>
                    <HomeButton /> <AddMovieForm />
                  </>
                }
              ></Route>
              <Route
                path="/search-list"
                element={
                  <>
                    <HomeButton /> <SearchList />
                  </>
                }
              ></Route>
              <Route
                path={`/search-list/:pseudo`}
                element={
                  <>
                    <HomeButton />
                    <FriendList />
                  </>
                }
              ></Route>
            </Routes>
          </>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/list" element={<Navigate to="/" />} />
            <Route path="/add-movie" element={<Navigate to="/" />} />
            <Route path="/search-list" element={<Navigate to="/" />} />
            <Route
              path={`/search-list/:pseudo`}
              element={<Navigate to="/" />}
            />
          </Routes>
        )}
      </div>
    </div>
  );
};

// == Export
export default App;
