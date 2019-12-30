import React from "react";
import logo from "../logo.svg";
import "../App.css";
import { connect } from "react-redux";
import { onchange } from "../action/firstaction";
import { Route, Link } from "react-router-dom";

class Firstcomponent extends React.Component {
  render = () => {
    return (
      <div>
        <p onClick={this.props.nameChange}>{this.props.name}</p>
       
          <Link to="/second">Secondpage</Link>
       
      </div>
    );
  };
}

const mapStateToProps = state => {
  console.log(state);
  let m = { name: state.nameOne.name };
  console.log(m);
  return m;
};

const mapDispatch = dispatch => {
  return {
    nameChange: () => dispatch(onchange())
  };
};

export default connect(mapStateToProps, mapDispatch)(Firstcomponent);
