import { Box, Container } from '@mui/material'
import type { NextPage } from 'next'
import { useEffect } from 'react'
import { loadGoogleMapsAPI } from '@/utils/loadGoogleMapsAPI'

const Index: NextPage = () => {
  useEffect(() => {
    loadGoogleMapsAPI()
  }, [])

  return (
    <>
      <Container maxWidth="xl">
        <div id="map" style={{ height: '900px', width: '100%' }}>
          GoogleMaps
        </div>
      </Container>
    </>
  )
}

export default Index
