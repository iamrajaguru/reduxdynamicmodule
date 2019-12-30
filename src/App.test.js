import React from "react";
import TestRenderer from "react-test-renderer";
import Firstcomponent from "./component/firstcomponent";
import MyComponent from "./mycomponent";
import { store } from "./store";
import { Provider } from "react-redux";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

test("Test started", () => {
  TestRenderer.create(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
