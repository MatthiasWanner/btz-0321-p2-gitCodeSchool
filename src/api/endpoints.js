export const HOME_REPOS_URL = `/search/repositories?q=stars:%3E1&sort=stars&per_page=20`;
export const AUTH_URL = `/user`;
export const PROFIL_URL = `/users/{username}`;
export const PROFIL_REPOS = `/users/{username}/repos`;
export const ONE_REPO_URL = `/repos/{user}/{repo}`;

export default { HOME_REPOS_URL, AUTH_URL, ONE_REPO_URL, PROFIL_REPOS, PROFIL_URL };
