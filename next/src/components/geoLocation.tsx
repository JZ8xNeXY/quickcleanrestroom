import { Box, Button } from '@mui/material'
import type { NextPage } from 'next'
import { useEffect, useRef } from 'react'

interface AddMarkersProps {
  map: google.maps.Map | null
}

const GeoLocation: NextPage<AddMarkersProps> = ({ map }) => {
  const locationButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
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
  }, [map])

  const userGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const userPos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          }

          const userPositionImg = document.createElement('img')
          userPositionImg.src = '/userposition.png'
          userPositionImg.width = 75
          userPositionImg.height = 75
          // バウンドが機能しない
          userPositionImg.classList.add('bounce')

          const { AdvancedMarkerElement } = (await google.maps.importLibrary(
            'marker',
          )) as google.maps.MarkerLibrary

          new AdvancedMarkerElement({
            map,
            position: userPos,
            title: 'Your Location',
            content: userPositionImg,
          })

          map.setCenter(userPos)
        },
        () => {
          // 現在地を取得できない場合、東京駅の位置を使用
          const handleLocationError = async (
            tokyoStationPos = { lat: 35.681236, lng: 139.767125 },
          ) => {
            console.log(tokyoStationPos)

            const userPositionImg = document.createElement('img')
            userPositionImg.src = '/userposition.png'
            userPositionImg.width = 75
            userPositionImg.height = 75
            // バウンドが機能しない
            userPositionImg.classList.add('bounce')
            console.log(userPositionImg)

            const { AdvancedMarkerElement } = (await google.maps.importLibrary(
              'marker',
            )) as google.maps.MarkerLibrary

            new AdvancedMarkerElement({
              map,
              position: tokyoStationPos,
              title: 'Your Location',
              content: userPositionImg,
            })
            map.setCenter(tokyoStationPos)
          }

          handleLocationError()
        },
      )
    } else {
      alert('Geolocation is not supported by this browser.')
    }
  }

  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          ref={locationButtonRef}
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
          onClick={userGeoLocation}
        >
          最寄りのトイレを探す
        </Button>
      </Box>
    </>
  )
}

export default GeoLocation
