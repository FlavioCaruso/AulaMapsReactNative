export interface GithubProfile {
  avatar_url: string;
  bio: string;
  html_url: string;
  login: string;
  name: string;
  public_repos: number;
  public_gists: number;
  repos_url: string;
}

export interface GithubRepos {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
}
