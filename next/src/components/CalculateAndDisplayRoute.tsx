import type { GoogleMap } from '@react-google-maps/api'
import type { NextPage } from 'next'
import { useEffect } from 'react'

interface CalculateAndDisplayRouteProps {
  userPos?: { lat?: number; lng?: number }
  latitude?: number
  longitude?: number
  map: GoogleMap | null
}

const CalculateAndDisplayRoute: NextPage<CalculateAndDisplayRouteProps> = (
  props,
) => {
  useEffect(() => {
    if (
      !props.map ||
      !props.userPos ||
      !props.userPos.lat ||
      !props.userPos.lng ||
      props.latitude === undefined ||
      props.longitude === undefined
    ) {
      console.log('Required props are missing')
      return
    }

    const directionsService = new google.maps.DirectionsService()
    const directionsRenderer = new google.maps.DirectionsRenderer()

    directionsService.route(
      {
        origin: props.userPos,
        destination: { lat: props.latitude, lng: props.longitude },
        travelMode: google.maps.TravelMode.WALKING,
      },
      (response, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
          directionsRenderer.setDirections(response)
          const durationText = response.routes[0].legs[0].duration.text
          const midPointIndex = Math.floor(
            response.routes[0].overview_path.length / 2,
          )
          const midLatLng = response.routes[0].overview_path[midPointIndex]
          const originParam = `${props.userPos.lat},${props.userPos.lng}`
          const destinationParam = `${props.latitude},${props.longitude}`
          const googleMapsLink = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(originParam)}&destination=${encodeURIComponent(destinationParam)}&travelmode=walking`

          const durationInfoWindow = new google.maps.InfoWindow({
            content: `<div>推定徒歩時間: ${durationText}<br><a href="${googleMapsLink}" target="_blank">ルートを案内する</a></div>`,
            position: midLatLng,
          })
          durationInfoWindow.open(props.map)
          directionsRenderer.setMap(props.map)
        } else {
          console.error('Directions request failed due to ' + status)
        }
      },
    )

    return () => {
      directionsRenderer.setMap(null)
    }
  }, [props.map, props.userPos, props.latitude, props.longitude])

  return null
}

export default CalculateAndDisplayRoute
