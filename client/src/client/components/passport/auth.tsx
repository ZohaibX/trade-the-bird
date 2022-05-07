import React from "react";
import axios from 'axios'

function Passport(props) {
  const [user, setUser] = React.useState(null)
  React.useEffect(() => {
    const getUser = async () => {
      let User = await axios.get("http://localhost:5000/api/users/currentUser")
      setUser(User)
    }
    getUser()
    
  }, [] )
  //! whenever we go to the main page -- redux will run and get current user from fb or google and will get their data

  console.log("Current User Is: ", user);
  
  return (
    <div className="App">
      Passport App
      <br />
      <a href="http://localhost:5000/auth/google"> Sign In By Google </a>
      <br />
      <a href="http://localhost:5000/auth/facebook"> Sign In By Facebook </a>
      <br />
      <a href="http://localhost:5000/api/users/signOut">Logout </a>
      <br />
    </div>
  );
}

export default (Passport);
