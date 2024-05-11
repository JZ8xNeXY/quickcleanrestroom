interface UserGeoLocationProps {
  map: google.maps.Map | null
}
export const userGeoLocation = ({ map }: UserGeoLocationProps) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const userPos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }

        const userPositionImg = document.createElement('img')
        userPositionImg.src = '/userposition.png'
        userPositionImg.width = 75
        userPositionImg.height = 75
        // バウンドが機能しない
        userPositionImg.classList.add('bounce')

        const { AdvancedMarkerElement } = (await google.maps.importLibrary(
          'marker',
        )) as google.maps.MarkerLibrary

        new AdvancedMarkerElement({
          map,
          position: userPos,
          title: 'Your Location',
          content: userPositionImg,
        })

        console.log(userPos)

        if (map) {
          map.setCenter(userPos)
        }
      },
      () => {
        // 現在地を取得できない場合、東京駅の位置を使用
        const handleLocationError = async (
          tokyoStationPos = { lat: 35.681236, lng: 139.767125 },
        ) => {
          console.log(tokyoStationPos)

          const userPositionImg = document.createElement('img')
          userPositionImg.src = '/userposition.png'
          userPositionImg.width = 75
          userPositionImg.height = 75
          // バウンドが機能しない
          userPositionImg.classList.add('bounce')
          console.log(userPositionImg)

          const { AdvancedMarkerElement } = (await google.maps.importLibrary(
            'marker',
          )) as google.maps.MarkerLibrary

          new AdvancedMarkerElement({
            map,
            position: tokyoStationPos,
            title: 'Your Location',
            content: userPositionImg,
          })

          if (map) {
            map.setCenter(tokyoStationPos)
          }
        }

        handleLocationError()
      },
    )
  } else {
    alert('Geolocation is not supported by this browser.')
  }
}
