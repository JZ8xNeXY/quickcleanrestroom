import { Box, Button } from '@mui/material'
import camelcaseKeys from 'camelcase-keys'
import type { NextPage } from 'next'
import { useEffect, useState, useRef } from 'react'
import useSWR from 'swr'
import CalculateAndDisplayRoute from './CalculateAndDisplayRoute'
import PostModal from './PostModal'
import { fetcher } from '@/utils'
import { userGeoLocation } from '@/utils/userGeoLocation'

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
  const url = 'http://localhost:3000/api/v1/posts'
  const { data, error } = useSWR(url, fetcher, { revalidateOnFocus: false })

  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)

  const [selectedPostName, setSelectedPostName] = useState<string>('')
  const [selectedPostAddress, setSelectedPostAddress] = useState<string>('')
  const [selectedPostContent, setSelectedPostContent] = useState<string>('')
  const [selectedPostLatitude, setSelectedPostLatitude] = useState<number>()
  const [selectedPostLongitude, setSelectedPostLongitude] = useState<number>()

  const locationButtonRef = useRef<HTMLButtonElement>(null)

  const [userPos, setUserPos] = useState<{
    lat: number | undefined
    lng: number | undefined
  }>()

  const handleFindLocation = () => {
    if (map) {
      userGeoLocation({ map, setUserPos })
    }
  }

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

    if (map && locationButtonRef.current) {
      const controlPosition = google.maps.ControlPosition.TOP_CENTER
      map.controls[controlPosition].push(locationButtonRef.current)

      return () => {
        const controls = map.controls[controlPosition]
        for (let i = 0; i < controls.getLength(); i++) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          if (controls.getAt(i) === locationButtonRef.current) {
            controls.removeAt(i)
            break
          }
        }
      }
    }
  }, [map, data])

  useEffect(() => {
    console.log(userPos)
  }, [userPos])

  if (error) return <Box>An error has occurred.</Box>
  if (!data) return <Box>Loading...</Box>

  return (
    <>
      <PostModal
        open={open}
        onClose={handleClose}
        name={selectedPostName}
        address={selectedPostAddress}
        content={selectedPostContent}
      />
      <CalculateAndDisplayRoute
        userPos={userPos}
        latitude={selectedPostLatitude}
        longitude={selectedPostLongitude}
        map={map}
      />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          ref={locationButtonRef}
          //現在地を取得
          onClick={handleFindLocation}
          sx={{
            height: '60px',
            fontSize: '16px',
            color: '#FFFFFF',
            fontWeight: 'bold',
            bgcolor: '#4CAF50',
            pt: 2,
            pb: 2,
            pl: 4,
            pr: 4,
            mt: 2,
          }}
        >
          現在地を表示する
        </Button>
      </Box>
    </>
  )
}

export default AddMarkers
