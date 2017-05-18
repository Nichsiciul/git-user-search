import React, { Component } from 'react';
import SearchBar from "./SearchBar/SearchBar.js";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data : ""
    };
  }
  render() {
    return (
      <div>
        <div className="container-fluid" id="header">
          <h1 className="App-intro"> Git User Search using <img className="App-logo" src={logo} alt="logo"/></h1>
        </div>
        <div className="container" id="content">
          <SearchBar addData={this.addDataToApp}></SearchBar>
          <p>
            {this.state.data}
          </p>
        </div>
      </div>
    );
  }

  addDataToApp = (data) =>{
    console.log(data);
    this.setState({data : data})
    console.log(this)
  }

}

export default App;
