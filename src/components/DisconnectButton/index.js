import React from "react";
import { useCookies } from "react-cookie";

import api from "src/api";

import "./styles.scss";

const DisconnectButton = () => {

  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  const onClickDisconnect = async () => {
    removeCookie("token");
  };

  return (
    <button className="disconnect" onClick={(e) => onClickDisconnect()}>
      Se déconnecter
    </button>
  );
};

export default DisconnectButton;
