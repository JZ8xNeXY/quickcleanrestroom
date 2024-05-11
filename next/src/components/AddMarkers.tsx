import { Box } from '@mui/material'
import camelcaseKeys from 'camelcase-keys'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import CalculateAndDisplayRoute from './CalculateAndDisplayRoute'
import PostModal from './PostModal'
import { fetcher } from '@/utils'

interface PostProps {
  id: number
  name: string
  address: string
  content: string
  latitude: number
  longitude: number
  createdAt: string
}

interface AddMarkersProps {
  map: google.maps.Map | null
}

const AddMarkers: NextPage<AddMarkersProps> = ({ map }) => {
  //Railsからデータを読み込み indexアクション
  const url = 'http://localhost:3000/api/v1/posts'
  const { data, error } = useSWR(url, fetcher, { revalidateOnFocus: false })

  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)

  const [selectedPostName, setSelectedPostName] = useState<string>('')
  const [selectedPostAddress, setSelectedPostAddress] = useState<string>('')
  const [selectedPostContent, setSelectedPostContent] = useState<string>('')
  const [selectedPostLatitude, setSelectedPostLatitude] = useState<number>()
  const [selectedPostLongitude, setSelectedPostLongitude] = useState<number>()

  useEffect(() => {
    const addMarkers = async () => {
      if (map && data) {
        const posts: PostProps[] = data ? camelcaseKeys(data) : []
        const { AdvancedMarkerElement } = (await google.maps.importLibrary(
          'marker',
        )) as google.maps.MarkerLibrary

        //マーカーの作成
        posts.forEach((post) => {
          //画像の読み込み
          const restroomImg = document.createElement('img')
          restroomImg.src = '/restroom.png'
          restroomImg.alt = post.name
          restroomImg.width = 75
          restroomImg.height = 75

          //マーカーの表示
          const marker = new AdvancedMarkerElement({
            map,
            position: { lat: post.latitude, lng: post.longitude },
            title: post.name,
            content: restroomImg,
          })

          //modalの表示
          marker.addListener('gmp-click', function () {
            setOpen(true)
            setSelectedPostName(post.name)
            setSelectedPostAddress(post.address)
            setSelectedPostContent(post.content)
            //クリックしたら該当箇所の緯度経度情報に更新
            setSelectedPostLatitude(post.latitude)
            setSelectedPostLongitude(post.longitude)
          })
        })
      }
    }

    addMarkers()
  }, [map, data])

  if (error) return <Box>An error has occurred.</Box>
  if (!data) return <Box>Loading...</Box>

  return (
    <div>
      {/* modalの表示 */}
      <PostModal
        open={open}
        onClose={handleClose}
        name={selectedPostName}
        address={selectedPostAddress}
        content={selectedPostContent}
      />
      <CalculateAndDisplayRoute
        latitude={selectedPostLatitude}
        longitude={selectedPostLongitude}
      />
    </div>
  )
}

export default AddMarkers
