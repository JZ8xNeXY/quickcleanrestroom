import { Box } from '@mui/material'
import camelcaseKeys from 'camelcase-keys'
import type { NextPage } from 'next'
import { useEffect } from 'react'
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
const AddMarkers: NextPage<{ map: google.maps.Map | null }> = ({ map }) => {
  //Railsからデータを読み込み indexアクション
  const url = 'http://localhost:3000/api/v1/posts'
  const { data, error } = useSWR(url, fetcher, { revalidateOnFocus: false })
  const posts: PostProps[] = data ? camelcaseKeys(data) : []

  useEffect(() => {
    const addMarkers = async () => {
      if (map && data) {
        const { AdvancedMarkerElement } =
          await google.maps.importLibrary('marker')

        posts.forEach((post) => {
          //画像の読み込み
          const restroomImg = document.createElement('img')
          restroomImg.src = './restroom.png'
          restroomImg.alt = post.name
          restroomImg.width = 75
          restroomImg.height = 75

          new AdvancedMarkerElement({
            map,
            position: { lat: post.latitude, lng: post.longitude },
            title: post.name,
            content: restroomImg,
          })
        })
      }
    }

    addMarkers()
  }, [map, data])

  if (error) return <Box>An error has occurred.</Box>
  if (!data) return <Box>Loading...</Box>

  return <></>
}

export default AddMarkers
