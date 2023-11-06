import { combineReducers, createStore } from "redux";
import entriesReducer from "../reducers/entries.reducers";
export const configureStore = () => {
  const combinedReducers = combineReducers({
    entries: entriesReducer,
  });
  const store = createStore(combinedReducers);

  return store;
};
