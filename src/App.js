import React, { Component } from 'react';
import { Alert } from "react-bootstrap";

import Header from "./Header/Header.js";
import SearchBar from "./SearchBar/SearchBar.js";
import UserCard from "./UserCard/UserCard.js";

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userInfo: {},
      userName: "",
      error: false
    };
  }
  render() {
    return (
      <div>
        <Header></Header>
        <div className="container" id="content">
          <SearchBar
            addData={this.addUserData}
            addError={this.addError}
            >
            </SearchBar>
          <div className={this.state.userName === "" ? "hidden" : ""}>
            {
              //TODO: maybe refactor with component ?
            }
            {this.state.error === true ?
            (
              <Alert bsStyle="danger">Error, user {this.state.userName} not found</Alert>
            ) :
            (
              <div>
                <UserCard data={this.state.UserInfo}></UserCard>
                <h2>Repositories</h2>
                <hr/>
                <div className="blocks"></div>
                <div className="blocks"></div>
                <div className="blocks"></div>
                <h2>Subscribed</h2>
                <hr/>
                <div className="blocks"></div>
                <div className="blocks"></div>
                <div className="blocks"></div>
                <h2>Followers</h2>
                <hr/>
                <div className="block"></div>
                <div className="block spacing"></div>
                <div className="block spacing "></div>
                <div className="block spacing"></div>
              </div>
            )}

          </div>
        </div>
      </div>
    );
  }

  addUserData = (data, userName) =>{
    console.log(data, userName);
    this.setState({UserInfo : data});
    this.setState({userName: userName});
    this.setState({error : false});
  }

  addError = (error, userName) =>{
    console.log(error, userName);
    this.setState({error : error});
    this.setState({userName: userName});
  }

}

export default App;
