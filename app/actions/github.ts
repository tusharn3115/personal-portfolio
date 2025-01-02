'use server'

interface GitHubStats {
  totalRepos: number;
  totalContributions: number;
  languages: Array<{ name: string; percentage: number }>;
  topRepos: Array<{ name: string; stars: number; url: string }>;
}

interface GitHubRepo {
  name: string;
  language: string | null;
  stargazers_count: number;
  html_url: string;
}

export async function fetchGitHubStats(username: string): Promise<GitHubStats> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);

    // Log response status to debug any issues
    if (!response.ok) {
      const errorMessage = `Failed to fetch GitHub data: ${response.statusText} (${response.status})`;
      console.error(errorMessage);
      throw new Error(errorMessage);
    }

    const repos: GitHubRepo[] = await response.json();

    const languageCount: Record<string, number> = {};
    const repoList: Array<{ name: string; stars: number; url: string }> = [];

    repos.forEach((repo) => {
      if (repo.language) {
        languageCount[repo.language] = (languageCount[repo.language] || 0) + 1;
      }
      repoList.push({
        name: repo.name,
        stars: repo.stargazers_count,
        url: repo.html_url
      });
    });

    const totalRepos = repos.length;
    const languages = Object.entries(languageCount)
      .map(([name, count]) => ({
        name,
        percentage: Number(((count / totalRepos) * 100).toFixed(2))
      }))
      .sort((a, b) => b.percentage - a.percentage)
      .slice(0, 5);  // Top 5 languages

    const topRepos = repoList
      .sort((a, b) => b.stars - a.stars)
      .slice(0, 3);  // Top 3 repos by stars

    return {
      totalRepos,
      totalContributions: 815,  // Adjust as needed
      languages,
      topRepos
    };
  } catch (error: unknown) {
    // Use a type guard to handle 'unknown' and cast it to a known type
    if (error instanceof Error) {
      console.error('Error fetching GitHub stats:', error.message);
    } else {
      console.error('Unknown error occurred while fetching GitHub stats.');
    }
    throw error; // Re-throw error to propagate it
  }
}
