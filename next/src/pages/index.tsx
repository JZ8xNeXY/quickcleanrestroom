import { Box, Container } from '@mui/material'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import AddMarkers from '@/components/AddMarkers'
import { loadGoogleMapsAPI } from '@/utils/loadGoogleMapsAPI'

const Index: NextPage = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null)

  useEffect(() => {
    loadGoogleMapsAPI()
    console.log(map)
  }, [])

  return (
    <>
      <Container maxWidth="xl">
        <Box id="map" style={{ height: '500px', width: '100%' }}></Box>
        <AddMarkers />
      </Container>
    </>
  )
}

export default Index
