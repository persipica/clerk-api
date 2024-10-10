import React from 'react'
import { FaCodeBranch, FaEye, FaStar } from 'react-icons/fa'
const username = 'bradtraversy'

export default async function ReposPage() {
  const response = await fetch(`https://api.github.com/users/${username}/repos`)
  const repos = await response.json()

  //console.log(repos)

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        Github repositories of {username}
      </h2>
      <ul>
        {repos.map((repo: any) => (
          <li key={repo.id} className="bg-gray-100 m-4 p-4 rounded-md">
            <h3 className="text-xl font-bold">{repo.name}</h3>
            <p>{repo.description}</p>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1">
                <FaStar /> {repo.stargazers_count}
              </span>
              <span className="flex items-center gap-1">
                <FaCodeBranch /> {repo.forks_count}
              </span>
              <span className="flex items-center gap-1">
                <FaEye /> {repo.watchers_count}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
