import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { AboutMe } from "./components/Pages/AboutMe";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Alert } from "./components/Alert";
import axios from "axios";
import HomePage from "./components/Pages/Home";

class App extends React.Component {
  state = {
    loading: false,
    users: [],
    alert: null,
  };
  async componentDidMount() {}

  searchUser = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  onAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });
    setTimeout(() => {
      this.setState({ alert: null });
    }, 5000);
  };

  render() {
    return (
      <Router>      
      <div className="App"> 
          <Navbar title="Github Finder" icon="fab fa-github" />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Routes>
              <Route
                exact
                path='/'
                element={
                <HomePage 
                      searchUser={this.searchUser}
                      clearusers={this.clearUsers}
                      showBtn={this.state.users.length > 0 ? true : false}
                      alert={this.onAlert}
                      users={this.state.users}
                      loading={this.state.loading}
                />}
                
              />
              <Route exact path='/aboutme' element={<AboutMe />} />

              
            </Routes>
          </div>
        
      </div>
      </Router>
    );
  }
}

export default App;
