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
        <Box id="map" style={{ height: '800px', width: '100%' }}></Box>
      </Container>
    </>
  )
}

export default Index
