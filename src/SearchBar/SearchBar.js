import React, { Component } from 'react';
import ReactDOM from "react-dom";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import axios from 'axios';
require('promise.prototype.finally').shim();

import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      value: ""
    };
  }

  render () {
    let isLoading = this.state.isLoading;
    return (
      <div className="spacing">
        <FormGroup>
          <ControlLabel>Type in a valid github username!</ControlLabel>
          <FormControl type="text" placeholder="Search"
            onChange={this.handleChange}
            ref={(input) => this.input = input}
          />
        </FormGroup>
        <Button
          bsStyle="primary"
          disabled={isLoading}
          onClick={!isLoading ? this.handleClick : null}>
          {isLoading ? 'Loading...' : 'Search'}
          </Button>
      </div>
    );
  }

  handleClick = (event) => {
    event.preventDefault();
    if(this.state.value.length === 0) return; // TODO: create error component.
    //start loader
    this.setState({isLoading: true});

    //make ajax request.
    axios.get(`https://api.github.com/search/users?q="${this.state.value}"`)
      .then((response) => {
        var data = response.data;
        var bestFit = data.items[0];
        if(data.total_count > 0){
          this.props.addData({
            name: bestFit.login,
            type: bestFit.type,
            url: bestFit.html_url,
            score: bestFit.score,
            site_admin: bestFit.site_admin
          });
        }
        else{
          this.props.addData({error: true}, this.state.value);
        }

      })
      .catch(function (error) {
        //log message if failed
        console.log("error on get users", error);
      })
      .finally(() => {
        this.setState({isLoading: false});
      });

  }

  handleChange = (a) => {
    //TODO find a better way to bypass uncontrolled input from bootstrap-react
    this.setState({value: ReactDOM.findDOMNode(this.input).value});
  }
}

export default SearchBar;
