import { FETCH_PROJECTS } from "../actions/GithubAction";

const initialState = {
  projects: [],
};

const GithubReducer = (state = initialState, action) => {
  if (action.type === FETCH_PROJECTS) {
    return {
      ...state,
      projects: action.projects,
    };
  }

  return state;
};

export default GithubReducer;
