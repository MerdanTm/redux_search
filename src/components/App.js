import React from "react";
import { connect } from "react-redux";
import Articles from "./Articles";
import Search from "./Search";

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <h1>REDUX ARTİCLELİST SEARCH APP</h1>
      <Search onSearch={props.onSearch}></Search>
      <Articles {...props} />
    </div>
  );
}
const mapStateToProps = (state) => ({
  articles: state.articlesState.articles,
  searchTerm: state.searchState.searchTerm,
});
const mapDispatchToProps = (dispatch) => ({
  onSearch: (searchTerm) => dispatch({ type: "SEARCH_SET", searchTerm }),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
