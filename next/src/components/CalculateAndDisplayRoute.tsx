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
      return
    }

    const directionsService = new google.maps.DirectionsService()
    const directionsRenderer = new google.maps.DirectionsRenderer()
    let durationInfoWindow = new google.maps.InfoWindow()

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

            // ルートの所要時間を取得して表示
            const firstLeg = response.routes[0].legs[0]
            const durationText =
              firstLeg.duration && firstLeg.duration.text
                ? firstLeg.duration.text
                : undefined

            const midPointIndex = Math.floor(
              response.routes[0].overview_path.length / 2,
            )

            const midLatLng = response.routes[0].overview_path[midPointIndex]

            // Google Mapsで詳細を見るためのリンクを作成
            const originParam = `${props.userPos ? props.userPos.lat : undefined},${props.userPos ? props.userPos.lng : undefined}`
            const destinationParam = `${props.latitude},${props.longitude}`
            const googleMapsLink = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(originParam)}&destination=${encodeURIComponent(destinationParam)}&travelmode=walking`

            // InfoWindowを作成し、ルートの中間地点に所要時間とリンクを表示
            durationInfoWindow = new google.maps.InfoWindow({
              content: `<div>推定徒歩時間: ${durationText}<br><u><a href="${googleMapsLink}" target="_blank">GoogleMapアプリで案内する</a></u></div>`,
              position: midLatLng,
            })
            durationInfoWindow.open(props.map)

            // DirectionsRendererでルートを表示
            directionsRenderer.setMap(props.map)
          }
        } else {
          console.error('Directions request failed due to ' + status)
        }
      },
    )

    return () => {
      directionsRenderer.setMap(null)
      durationInfoWindow.close()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.userPos, props.latitude, props.longitude, props.map])

  return null
}

export default CalculateAndDisplayRoute
