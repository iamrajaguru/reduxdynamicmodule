
import { getThunkExtension } from "redux-dynamic-modules-thunk";
import { createStore } from "redux-dynamic-modules";
import { getInitial } from "./modules/getFirstModule";
export const store = createStore(
  {
    initialState: {},
    enhancers: [
      /** enhancers to include */
    ],
    extensions: [getThunkExtension()]
  },
  getInitial()
);
