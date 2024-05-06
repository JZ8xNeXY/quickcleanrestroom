import type { NextPage } from 'next'
import { useEffect } from 'react'
import { loadGoogleMapsAPI } from '@/utils/loadGoogleMapsAPI'

const Index: NextPage = () => {
  useEffect(() => {
    loadGoogleMapsAPI()
  }, [])

  return (
    <>
      <div id="map" style={{ height: '500px', width: '100%' }}>
        GoogleMaps
      </div>
    </>
  )
}

export default Index
