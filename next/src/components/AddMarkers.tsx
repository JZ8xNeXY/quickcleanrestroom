import { Box } from '@mui/material'
import camelcaseKeys from 'camelcase-keys'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
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

  //名称
  const [selectedPostName, setSelectedPostName] = useState<string>('')
  //住所
  const [selectedPostAddress, setSelectedPostAddress] = useState<string>('')
  //内容
  const [selectedPostContent, setSelectedPostContent] = useState<string>('')

  useEffect(() => {
    const addMarkers = async () => {
      if (map && data) {
        const posts: PostProps[] = data ? camelcaseKeys(data) : []
        const { AdvancedMarkerElement } = (await google.maps.importLibrary(
          'marker',
        )) as google.maps.MarkerLibrary

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
    </div>
  )
}

export default AddMarkers
