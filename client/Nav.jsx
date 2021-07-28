import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

export const Nav = () => {
  const history = useHistory();
  function logout() {
    fetch("/logout").then(history.push("/"));
  }
  return (
    <div className="navBar">
      <div>
        <button className="navButtons">
          <Link to="/Questionnaire" className="navButtons">
            Take the Questionnaire
          </Link>
        </button>
      </div>
      <div>
        <button className="navButtons">
          <Link className="navButtons" to="/About">
            About
          </Link>
        </button>
      </div>
      <div>
        <button onClick={logout} className="navButtons">
          Sign Out
        </button>
      </div>
    </div>
  );
};
