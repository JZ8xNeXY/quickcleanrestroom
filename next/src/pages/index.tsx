import { Box, Container } from '@mui/material'
import camelcaseKeys from 'camelcase-keys'
import type { NextPage } from 'next'
import { useEffect } from 'react'
import useSWR from 'swr'
import { fetcher } from '@/utils'
import { loadGoogleMapsAPI } from '@/utils/loadGoogleMapsAPI'

type PostProps = {
  id: number
  name: string
  address: string
  content: string
  latitude: number
  longitude: number
  createdAt: string
}

const Index: NextPage = () => {
  useEffect(() => {
    loadGoogleMapsAPI()
  }, [])

  return (
    <>
      <Container maxWidth="xl">
        <Box id="map" style={{ height: '500px', width: '100%' }}></Box>
      </Container>
    </>
  )
}

export default Index
