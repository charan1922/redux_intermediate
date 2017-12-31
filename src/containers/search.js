import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getCars } from "../actions";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: ""
    };
  }

  searchCars = event => {
    event.preventDefault();
    this.props.getCars(this.state.keyword);
  };

  handleChange = event => {
    this.setState({ keyword: event.target.value });
  };

  componentDidMount(){
    console.log(this.state)
}

  render() {
    return (
      <div className="main_search">
        <form onSubmit={this.searchCars}>
          <input type="text" onChange={this.handleChange} />
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getCars }, dispatch);
}

export default connect(null, mapDispatchToProps)(Search);
