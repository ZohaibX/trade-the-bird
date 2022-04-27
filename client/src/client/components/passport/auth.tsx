import React from "react";

function Passport(props) {
  //! whenever we go to the main page -- redux will run and get current user from fb or google and will get their data

  return (
    <div className="App">
      Passport App
      <br />
      <a href="http://localhost:4000/auth/google"> Sign In By Google </a>
      <br />
      <a href="/auth/facebook"> Sign In By Facebook </a>
      <br />
      <a href="/api/logout">Logout </a>
    </div>
  );
}

export default (Passport);
