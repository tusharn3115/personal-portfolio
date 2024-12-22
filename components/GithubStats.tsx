'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Star, GitFork, ExternalLink } from 'lucide-react'
import { fetchGitHubStats } from '@/app/actions/github'
import { Button } from "@/components/ui/button"

interface GitHubStats {
  totalRepos: number;
  totalContributions: number;
  languages: Array<{ name: string; percentage: number }>;
  topRepos: Array<{ name: string; stars: number; url: string }>;
}

const GithubStats = () => {
  const [stats, setStats] = useState<GitHubStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadStats = async () => {
      try {
        const data = await fetchGitHubStats('tusharn3115')
        setStats(data)
      } catch (err) {
        setError('Failed to load GitHub stats. Please try again later.')
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    loadStats()
  }, [])

  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <div className="h-[300px] flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="h-[300px] flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (error) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="text-destructive text-center">{error}</div>
        </CardContent>
      </Card>
    )
  }

  if (!stats) return null

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Languages Card */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4">Most Used Languages</h3>
          <div className="space-y-4">
            {stats.languages.map((lang) => (
              <div key={lang.name}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{lang.name}</span>
                  <span>{lang.percentage}%</span>
                </div>
                <Progress value={lang.percentage} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* GitHub Stats Card */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold mb-4">GitHub Stats</h3>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold">{stats.totalRepos}</div>
                <div className="text-sm text-muted-foreground">Total Repositories</div>
              </div>
              <div>
                <div className="text-3xl font-bold">{stats.totalContributions}</div>
                <div className="text-sm text-muted-foreground">Total Contributions</div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Top Repositories</h4>
              {stats.topRepos.map((repo) => (
                <div key={repo.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <GitFork className="h-4 w-4 text-primary" />
                    <span>{repo.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-400" />
                    <span>{repo.stars}</span>
                    <Button variant="ghost" size="sm" className="ml-2" asChild>
                      <a href={repo.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default GithubStats

