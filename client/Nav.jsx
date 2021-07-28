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
        <button>
          <Link to="/Questionnaire">Take the Questionnaire</Link>
        </button>
      </div>
      <div>
        <button>
          <Link to="/About">About</Link>
        </button>
      </div>
      <div>
        <button onClick={logout}>Sign Out</button>
      </div>
    </div>
  );
};
