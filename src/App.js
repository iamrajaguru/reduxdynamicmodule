import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Firstcomponent from "./component/firstcomponent";
import    dynamic   from "./dynamic/dynamicmodule"
import { Route, BrowserRouter } from "react-router-dom";
class App extends React.Component {
  render = () => {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={Firstcomponent} />
          <Route exact path="/second" component={dynamic} />
        </BrowserRouter>
      </div>
    );
  };
}

export default App;
