import React from "react";
import logo from "../logo.svg";
import "../App.css";
import { connect } from "react-redux";
import * as actionCreator from "../action/secondaction";
import { Route, Link } from "react-router-dom";

class secondcomponent extends React.Component {
  render = () => {
    return (
      <div>
        <p>{this.props.name}</p>
        <Link to="/">first</Link>
      </div>
    );
  };
}

const mapStateToProps = state => {
  console.log(state);
  return {
    name: state.nameTwo.name
  };
};

const mapDispatch = dispatch => {
  return {
    nameChange: () => dispatch(actionCreator.onchange())
  };
};

export default connect(mapStateToProps, mapDispatch)(secondcomponent);
