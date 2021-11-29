import React from "react";
import "./App.css"
import Navbar from "./components/Navbar";
import User from "./components/users/User";
class App extends React.Component{
render(){
  return(
    <div className="App">
      <Navbar title = "Github Finder" icon="fab fa-github"/>
      <div className="container">
        <User />
      </div>
    </div>
  );
}
}

export default App;