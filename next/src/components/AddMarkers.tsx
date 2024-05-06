import { Box } from '@mui/material'
import camelcaseKeys from 'camelcase-keys'
import type { NextPage } from 'next'
import useSWR from 'swr'
import { fetcher } from '@/utils'

type PostProps = {
  id: number
  name: string
  address: string
  content: string
  latitude: number
  longitude: number
  createdAt: string
}

const AddMarkers: NextPage = (props) => {
  const url = 'http://localhost:3000/api/v1/posts'
  const { data, error } = useSWR(url, fetcher)

  if (error) return <div>An error has occurred.</div>
  if (!data) return <div>Loading...</div>

  const posts: PostProps[] = camelcaseKeys(data)

  console.log(props.map)
  return (
    <>
      {posts.map((post) => (
        <Box key={post.id}>
          <h2>{post.name}</h2>
          <p>{post.address}</p>
          <p>{post.content}</p>
          <p>{post.latitude}</p>
          <p>{post.longitude}</p>
          <p>{post.createdAt}</p>
        </Box>
      ))}
    </>
  )
}

export default AddMarkers
