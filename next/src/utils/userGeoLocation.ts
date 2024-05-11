interface UserGeoLocationProps {
  map: google.maps.Map | null
  setUserPos: (pos: { lat: number; lng: number }) => void
}

export const userGeoLocation = ({ map, setUserPos }: UserGeoLocationProps) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const currentUserPos = {
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
          position: currentUserPos,
          title: 'Your Location',
          content: userPositionImg,
        })

        setUserPos(currentUserPos)

        if (map) {
          map.setCenter(currentUserPos)
        }
      },
      () => {
        // 現在地を取得できない場合、東京駅の位置を使用
        const handleLocationError = async (
          tokyoStationPos = { lat: 35.681236, lng: 139.767125 },
        ) => {
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

          setUserPos(tokyoStationPos)

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
