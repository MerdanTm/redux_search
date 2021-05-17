const initialState = {
  searchTerm: "",
};

function articleReducer(state = initialState, action) {
  switch (action.type) {
    case "SEARCH_SET":
      return { ...state, searchTerm: action.searchTerm };

    default:
      return state;
  }
}
export default articleReducer;
