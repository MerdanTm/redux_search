import { combineReducers, createStore } from "redux";
import articlelistReducer from "../reducers/articlelistReducer";
import searchReducer from "../reducers/searchReducer";

const rootReducer = combineReducers({
  articlesState: articlelistReducer,
  searchState: searchReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
