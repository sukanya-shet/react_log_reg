import React from "react";
import ReactDOM from "react-dom";
import Forms from "./components/forms";

var userCanLogin = false;
function updateLoginState(){
  userCanLogin = true;
}
ReactDOM.render(
  <div>
    <Forms isLoggedIn={userCanLogin} />
    <a onKeyPress={updateLoginState} href="#">Register now</a>
  </div>,
  document.getElementById("root")
);
