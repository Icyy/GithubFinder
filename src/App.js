import React from "react";
import "./App.css"
import Navbar from "./components/Navbar";
import User from "./components/users/User";
import axios from 'axios';

class App extends React.Component{

  state = {
    loading : false,
    users : []
  }
  async componentDidMount(){
    this.setState({loading : true});
    const res = await axios.get('https://api.github.com/users');
    this.setState({users : res.data, loading : false});

  }

  render(){
  return(
    <div className="App">
      <Navbar title = "Github Finder" icon="fab fa-github"/>
      <div className="container">
        <User users = {this.state.users} loading = {this.state.loading}/>
      </div>
    </div>
  );
}
}

export default App;