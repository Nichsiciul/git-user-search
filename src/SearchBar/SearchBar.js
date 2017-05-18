import React, { Component } from 'react';
import ReactDOM from "react-dom"
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
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
    //start loader
    this.setState({isLoading: true});

    //make ajax request.


    //addData on success
    this.props.addData(this.state.value);

    //display message if failed
  }

  handleChange = (a) => {
    //TO DO find a better way to bypass uncontrolled input from bootstrap-react
    this.setState({value: ReactDOM.findDOMNode(this.input).value});
  }
}

export default SearchBar;
