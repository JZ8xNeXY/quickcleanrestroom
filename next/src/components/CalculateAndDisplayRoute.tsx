import type { NextPage } from 'next'

interface PlaceProps {
  latitude: number | undefined
  longitude: number | undefined
}

//ルート検索機能
// const directionsService = new google.maps.DirectionsService()
// const directionsRenderer = new google.maps.DirectionsRenderer()

const CalculateAndDisplayRoute: NextPage<PlaceProps> = (props) => {
  return (
    <>
      <h1>
        {props.latitude},{props.longitude}
      </h1>
    </>
  )
}

export default CalculateAndDisplayRoute
