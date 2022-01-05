const FETCH_PROJECTS = "FETCH_PROJECTS";

const GithubAction = (projects) => {
  return {
    type: "FETCH_PROJECTS",
    projects: projects,
  };
};

export { FETCH_PROJECTS, GithubAction };
