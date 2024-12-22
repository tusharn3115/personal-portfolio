'use server'

interface GitHubStats {
  totalRepos: number;
  totalContributions: number;
  languages: Array<{ name: string; percentage: number }>;
  topRepos: Array<{ name: string; stars: number; url: string }>;
}

export async function fetchGitHubStats(username: string): Promise<GitHubStats> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch GitHub data');
    }

    const repos = await response.json();

    // let totalStars = 0;
    const languageCount: Record<string, number> = {};
    const repoList: Array<{ name: string; stars: number; url: string }> = [];

    repos.forEach((repo: any) => {
      // totalStars += repo.stargazers_count;
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
      .slice(0, 5);  // Top 6 languages

    const topRepos = repoList
      .sort((a, b) => b.stars - a.stars)
      .slice(0, 3);  // Top 3 repos by stars

    return {
      totalRepos,
      totalContributions: 770, 
      languages,
      topRepos
    };
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    throw error;
  }
}

