import { Box, Button } from '@mui/material'
import camelcaseKeys from 'camelcase-keys'
import type { NextPage } from 'next'
import { useEffect, useState, useRef } from 'react'
import useSWR from 'swr'
import CalculateAndDisplayRoute from './CalculateAndDisplayRoute'
import DisplayModalWindow from './DisplayModalWindow'
import { fetcher } from '@/utils'
import { userGeoLocation } from '@/utils/userGeoLocation'

interface AddMarkersProps {
  map: google.maps.Map | null
}

interface Restroom {
  id: number
  name: string
  address: string
  content: string
  latitude: number
  longitude: number
  createdAt: string
  nursingRoom: boolean
  anyoneToilet: boolean
  diaperChangingStation: boolean
  powderCorner: boolean
  strollerAccessible: boolean
}

const AddMarkers: NextPage<AddMarkersProps> = ({ map }) => {
  // const url = 'http://localhost:3000/api/v1/posts'
  const url = 'https://backend.quickcleanrestrooms.com/api/v1/posts'
  const { data, error } = useSWR(url, fetcher, { revalidateOnFocus: false })

  const [openModalWindow, setOpenModalWindow] = useState(false)
  const closeModalWindow = () => setOpenModalWindow(false)

  const [selectedRestroomName, setSelectedRestroomName] = useState<string>('')
  const [selectedRestroomAddress, setSelectedRestroomAddress] =
    useState<string>('')
  const [selectedRestroomContent, setSelectedRestroomContent] =
    useState<string>('')
  const [selectedRestroomLatitude, setSelectedRestroomLatitude] =
    useState<number>()
  const [selectedRestroomLongitude, setSelectedRestroomLongitude] =
    useState<number>()
  const [selectedNursingRoom, setSelectedNursingRoom] = useState<boolean>()
  const [selectedAnyoneToilet, setSelectedAnyoneToilet] = useState<boolean>()
  const [selectedDiaperChangingStation, setSelectedDiaperChangingStation] =
    useState<boolean>()
  const [selectedPowderCorner, setSelectedPowderCorner] = useState<boolean>()
  const [selectedStrollerAccessible, setSelectedStrollerAccessible] =
    useState<boolean>()

  const [currentUserPos, setCurrentUserPos] = useState<{
    lat: number
    lng: number
  }>()

  const showGeolocationButton = useRef<HTMLButtonElement>(null)

  const FindCurrentLocation = () => {
    if (map) {
      userGeoLocation({ map, setCurrentUserPos })
    }
  }

  useEffect(() => {
    const addMarkers = async () => {
      if (map && data) {
        const restrooms: Restroom[] = data ? camelcaseKeys(data) : []

        const { AdvancedMarkerElement } = (await google.maps.importLibrary(
          'marker',
        )) as google.maps.MarkerLibrary

        //マーカーの作成
        restrooms.forEach((restroom) => {
          //画像の読み込み
          const restroomImg = document.createElement('img')
          restroomImg.src = '/restroom.png'
          restroomImg.alt = restroom.name
          restroomImg.width = 75
          restroomImg.height = 75

          //マーカーの表示
          const marker = new AdvancedMarkerElement({
            map,
            position: { lat: restroom.latitude, lng: restroom.longitude },
            title: restroom.name,
            content: restroomImg,
          })

          marker.addListener('gmp-click', function () {
            setOpenModalWindow(true)
            setSelectedRestroomName(restroom.name)
            setSelectedRestroomAddress(restroom.address)
            setSelectedRestroomContent(restroom.content)
            setSelectedRestroomLatitude(restroom.latitude)
            setSelectedRestroomLongitude(restroom.longitude)
            setSelectedNursingRoom(restroom.nursingRoom)
            setSelectedAnyoneToilet(restroom.anyoneToilet)
            setSelectedDiaperChangingStation(restroom.diaperChangingStation)
            setSelectedPowderCorner(restroom.powderCorner)
            setSelectedStrollerAccessible(restroom.strollerAccessible)
          })
        })
      }
    }

    addMarkers()

    if (map && showGeolocationButton.current) {
      const controlPosition = google.maps.ControlPosition.TOP_CENTER
      map.controls[controlPosition].push(showGeolocationButton.current)

      return () => {
        //既存のボタンがある場合削除
        const controls = map.controls[controlPosition]
        for (let i = 0; i < controls.getLength(); i++) {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          if (controls.getAt(i) === showGeolocationButton.current) {
            controls.removeAt(i)
            break
          }
        }
      }
    }
  }, [map, data])

  if (error) return <Box>An error has occurred.</Box>
  if (!data) return <Box>Loading...</Box>

  return (
    <>
      <DisplayModalWindow
        openModalWindow={openModalWindow}
        closeModalWindow={closeModalWindow}
        name={selectedRestroomName}
        address={selectedRestroomAddress}
        content={selectedRestroomContent}
        nursingRoom={selectedNursingRoom}
        anyoneToilet={selectedAnyoneToilet}
        diaperChangingStation={selectedDiaperChangingStation}
        powderCorner={selectedPowderCorner}
        strollerAccessible={selectedStrollerAccessible}
      />
      <CalculateAndDisplayRoute
        userPos={currentUserPos}
        latitude={selectedRestroomLatitude}
        longitude={selectedRestroomLongitude}
        map={map}
      />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          ref={showGeolocationButton}
          onClick={FindCurrentLocation}
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
            ':hover': {
              backgroundColor: '#006400',
            },
          }}
        >
          現在地を表示する
        </Button>
      </Box>
    </>
  )
}

export default AddMarkers
