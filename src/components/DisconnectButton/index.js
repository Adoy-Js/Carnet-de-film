import React from "react";
import myLocalStorage from "../../utils/localeStorage";

import "./styles.scss";

const DisconnectButton = () => {
  const onClickDisconnect = () => {
    myLocalStorage.removeItem("userId");
    window.location.href = "https://carnet-de-films.netlify.app/";
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
