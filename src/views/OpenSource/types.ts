export type TRepository = {
  name: string
  description: string
  html_url: string
  node_id: string
  picture: string
  stargazers_count: number
}

export type TProps = {
  repositories: TRepository[]
}
