import { Octokit } from "octokit";

const githubToken = import.meta.env.GithubToken;

let _octokit: Octokit;

export function useOctokit() {
  if (!_octokit) {
    _octokit = new Octokit({
      auth: githubToken,
    });
  }
  return _octokit;
}
