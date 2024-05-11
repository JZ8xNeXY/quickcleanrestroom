import type { NextPage } from 'next'
import { useEffect } from 'react'

interface CalculateAndDisplayRouteProps {
  userPos?: { lat: number; lng: number }
  latitude?: number
  longitude?: number
  map: google.maps.Map | null
}

const CalculateAndDisplayRoute: NextPage<CalculateAndDisplayRouteProps> = (
  props,
) => {
  useEffect(() => {
    if (
      !props.map ||
      props.userPos === undefined ||
      props.userPos.lat === undefined ||
      props.userPos.lng === undefined ||
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
          if (response) {
            directionsRenderer.setDirections(response)
            const firstLeg = response.routes[0].legs[0]
            const durationText =
              firstLeg.duration && firstLeg.duration.text
                ? firstLeg.duration.text
                : undefined

            const midPointIndex = Math.floor(
              response.routes[0].overview_path.length / 2,
            )

            const midLatLng = response.routes[0].overview_path[midPointIndex]
            const originParam = `${props.userPos ? props.userPos.lat : undefined},${props.userPos ? props.userPos.lng : undefined}`
            const destinationParam = `${props.latitude},${props.longitude}`
            const googleMapsLink = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(originParam)}&destination=${encodeURIComponent(destinationParam)}&travelmode=walking`

            const durationInfoWindow = new google.maps.InfoWindow({
              content: `<div>推定徒歩時間: ${durationText}<br><a href="${googleMapsLink}" target="_blank">GoogleMapアプリで案内する</a></div>`,
              position: midLatLng,
            })
            durationInfoWindow.open(props.map)
            directionsRenderer.setMap(props.map)
          }
        } else {
          console.error('Directions request failed due to ' + status)
        }
      },
    )

    return () => {
      directionsRenderer.setMap(null)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.userPos, props.latitude, props.longitude, props.map])

  return null
}

export default CalculateAndDisplayRoute
