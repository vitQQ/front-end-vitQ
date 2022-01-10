import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import userReducers from "./reducers/reducer.user";
import foodReducers from "./reducers/reducer.food";

const reducers = combineReducers({
  userReducers: userReducers,
  foodReducers: foodReducers,
});

export const store = createStore(reducers, {}, applyMiddleware(thunk));
