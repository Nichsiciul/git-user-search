import React, { Component } from 'react';
import SearchBar from "./SearchBar/SearchBar.js";
import Header from "./Header/Header.js";
import { Alert } from "react-bootstrap";

import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data : "",
      userName: ""
    };
  }
  render() {
    return (
      <div>
        <Header></Header>
        <div className="container" id="content">
          <SearchBar addData={this.addDataToApp}></SearchBar>
          <div className={this.state.data === "" ? "hidden" : ""}>
            {
              //TODO: maybe refactor with component ?
            }
            {this.state.data.error === true ?
            (
              <Alert bsStyle="danger">Error, user {this.state.userName} not found</Alert>
            ) :
            (
              <div>
                <div className="block"></div>
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

  addDataToApp = (data, userName) =>{
    console.log(data, userName);
    this.setState({data : data});
    this.setState({userName: userName});

  }

}

export default App;
