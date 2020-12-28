import React from "react";
import Input from "./input";

function Forms(props) {
  let overCol = "#253736";
  const [headText, setText] = React.useState("Login");

  const [isMouseOver, setMouseOver] = React.useState(false);
  const [fullname, setFullName] = React.useState({
    fname: "",
    lname: "",
    email: ""
  });

  function mouseov() {
    setMouseOver(true);
  }
  function mouseout() {
    console.log("mouse out");
    setMouseOver(false);
  }
  /*
  function updateHandle(event) {
    const { value, name } = event.target;
    setFullName((prev) => {
      if (name === "fname") {
        return {
          fname: value,
          lname: prev.lname,
          email: prev.email
        };
      } else if (name === "lname") {
        return {
          fname: prev.fname,
          lname: value,
          email: prev.email
        };
      } else if (name === "email") {
        return {
          fname: prev.fname,
          lname: prev.lname,
          email: value
        };
      }
    });
  }*/
  function updateHandle(event) {
    const { value, name } = event.target;
    setFullName((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  function updateHeading(event) {
    //setHeading(name);
    // event.preventDefault();
  }

  return (
    <div>
      <form onClick={updateHeading}>
        <h1 className="greet">
          {headText} {fullname.fname} {fullname.lname}
        </h1>
        <p>{fullname.email}</p>
        <input
          onChange={updateHandle}
          className="form-cont"
          name="fname"
          id="uName"
          type="text"
          placeholder="First Name"
          value={fullname.fname}
        />
        <input
          style={{ width: "245px" }}
          onChange={updateHandle}
          name="lname"
          className="form-cont"
          type="text"
          placeholder="Last Name"
          value={fullname.lname}
        />
        <input
          style={{ width: "245px" }}
          onChange={updateHandle}
          type="text"
          className="form-cont"
          placeholder="Email"
          name="email"
        />
        <Input onChange type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        {props.isLoggedIn === false && (
          <Input type="password" placeholder="Confirm Password" />
        )}
        <button
          type="submit"
          style={{ background: isMouseOver ? overCol : "white" }}
          onMouseOver={mouseov}
          onMouseOut={mouseout}
          className="form-cont"
          id="login"
        >
          {props.isLoggedIn === true ? "Login" : "Register"}
        </button>
      </form>
    </div>
  );
}

export default Forms;
