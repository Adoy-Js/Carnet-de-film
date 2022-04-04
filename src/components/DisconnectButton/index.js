import React from "react";
import { useCookies } from "react-cookie";

import api from "src/api";

import "./styles.scss";

const DisconnectButton = () => {

  const [cookies, setCookie, removeCookie] = useCookies();

  const onClickDisconnect = async () => {
    removeCookie("token");
    removeCookie("userId");
  };

  return (
    <button className="disconnect" onClick={(e) => onClickDisconnect()}>
      Se déconnecter
    </button>
  );
};

export default DisconnectButton;
