import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import userReducers from "./reducers/reducer.user";
import foodReducers from "./reducers/reducer.food";
import handleCalculateReducers from "./reducers/reducer.calculate";

const reducers = combineReducers({
  userReducers: userReducers,
  foodReducers: foodReducers,
  handleCalculateReducers: handleCalculateReducers,
});

export const store = createStore(reducers, {}, applyMiddleware(thunk));
