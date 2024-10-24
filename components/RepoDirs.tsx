import { username } from '@/app/constants'
import Link from 'next/link'
interface RepoProps {
  name: string
}
const RepoDirs: React.FC<RepoProps> = async ({ name }) => {
  const response = await fetch(
    `https://api.github.com/repos/${username}/${name}/contents`
  )
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const contents = await response.json()
  const dirs = contents.filter((content: any) => content.type === 'dir')
  // console.log(dirs)
  return (
    <div className="mt-2 ">
      <h3 className="text-xl font-bold">Directories</h3>
      <ul>
        {dirs.map((dir: any) => (
          <li key={dir.path}>
            <Link
              className="underline"
              href={`https://github.com/${username}/${name}/tree/master/${dir.path}`}
            >
              {dir.path}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RepoDirs
