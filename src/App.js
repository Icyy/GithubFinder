import React from "react";
import "./App.css"
import Navbar from "./components/Navbar";
import User from "./components/users/User";
import SearchBar from "./components/SearchBar";
import axios from 'axios';

class App extends React.Component{

  state = {
    loading : false,
    users : []
  }
  async componentDidMount(){
    
  }

  searchUser = async (text)=>{
    this.setState({loading : true});
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);
    this.setState({users : res.data.items, loading : false});

  }

  render(){
  return(
    <div className="App">
      <Navbar title = "Github Finder" icon="fab fa-github"/>
      <div className="container">
        <SearchBar searchUser={this.searchUser} />
        <User users = {this.state.users} loading = {this.state.loading}/>

      </div>
    </div>
  );
}
}

export default App;