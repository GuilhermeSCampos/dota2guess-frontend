import React from "react";

function ClearLocalStorageBtn() {
  const clear = () => {
    localStorage.clear();
  };
  return <button onClick={clear}>Limpar Local Storage</button>;
}

export default ClearLocalStorageBtn;
