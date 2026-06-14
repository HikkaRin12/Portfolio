const GitHub = {
  async getRepos() {
    const { username, fallback } = portfolioData.projects;

    try {
      const res = await fetch(
        `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
      );

      if (!res.ok) throw new Error(`GitHub API: ${res.status}`);

      const repos = await res.json();
      const filtered = repos.filter((r) => !r.fork && r.description).slice(0, 3);

      return filtered.length ? filtered : fallback;

    } catch (err) {
      console.error("GitHub API недоступен, используем fallback:", err);
      return fallback;
    }
  },
};