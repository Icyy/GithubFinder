import React from "react";
import "./App.css"
import Navbar from "./components/Navbar";
import User from "./components/users/User";
import SearchBar from "./components/SearchBar";
import { Alert } from "./components/Alert";
import axios from 'axios';

class App extends React.Component{

  state = {
    loading : false,
    users : [],
    alert : null 
  }
  async componentDidMount(){
    
  }

  searchUser = async (text)=>{
    this.setState({loading : true});
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`);
    this.setState({users : res.data.items, loading : false});

  }

  clearUsers = ()=>{
    this.setState({users : [], loading: false});
  }

  onAlert = (msg, type)=>{
    this.setState({alert : {msg : msg, type: type}});
    setTimeout(()=>{
      this.setState({alert:null});
    }, 5000);
  }

  render(){
  return(
    <div className="App">
      <Navbar title = "Github Finder" icon="fab fa-github"/>
      <div className="container">
        <Alert alert ={this.state.alert} />
        <SearchBar 
          searchUser={this.searchUser} 
          clearusers={this.clearUsers} 
          showBtn = {this.state.users.length >0 ? true : false}
          alert = {this.onAlert}

          />
        <User users = {this.state.users} loading = {this.state.loading}/>

      </div>
    </div>
  );
}
}

export default App;