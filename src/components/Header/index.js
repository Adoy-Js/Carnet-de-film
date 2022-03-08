import React from "react";

import "./styles.scss";

const Header = () => {
  return (
    <header className="carnet_header">
      <h1 className="carnet_header_title">
        <span className="carnet_header_title_carnet">Carnet</span>{" "}
        <span className="carnet_header_title_de">de </span>
        <span className="carnet_header_title_film">films</span>{" "}
      </h1>
    </header>
  );
};

export default Header;
