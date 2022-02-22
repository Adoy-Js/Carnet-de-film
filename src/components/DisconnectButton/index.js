import React from "react";
import myLocalStorage from "../../utils/localeStorage";

import "./styles.scss";

const DisconnectButton = () => {
  const onClickDisconnect = () => {
    myLocalStorage.removeItem("userId");
    window.location.href = "http://localhost:8080/";
  };

  return (
    <button
      className="disconnect"
      onClick={(e) => onClickDisconnect()}
    >
      Se déconnecter
    </button>
  );
};

export default DisconnectButton;
