import { combineReducers, createStore } from "redux";
import entriesReducer from "../reducers/entries.reducers";
import { applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import modalsReducer from "../reducers/modals.reducers";

const configureStore = () => {
  return createStore(
    combineReducers({
      entries: entriesReducer,
      modals: modalsReducer,
    }),
    composeWithDevTools()
  );
};

export default configureStore;
