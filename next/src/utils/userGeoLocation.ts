import '../styles/Home.module.css'

interface UserGeoLocationProps {
  map: google.maps.Map | null
  setCurrentUserPos: (pos: { lat: number; lng: number }) => void
}

export const userGeoLocation = ({
  map,
  setCurrentUserPos,
}: UserGeoLocationProps) => {
  //GPS機能で現在地を取得できた場合
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const UserPos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }

        const userPosImg = document.createElement('img')
        userPosImg.src = '/userposition.png'
        userPosImg.width = 75
        userPosImg.height = 75
        // FIX バウンドが機能しない
        userPosImg.classList.add('bounce')

        const { AdvancedMarkerElement } = (await google.maps.importLibrary(
          'marker',
        )) as google.maps.MarkerLibrary

        const pos = new AdvancedMarkerElement({
          map,
          position: UserPos,
          title: 'Your Location',
          content: userPosImg,
        })

        console.log(pos)

        setCurrentUserPos(UserPos)

        if (map) {
          map.setCenter(UserPos)
        }
      },
      () => {
        // GPS機能で現在地を取得できない場合、東京駅の位置を使用
        const handleLocationError = async (
          tokyoStationPos = { lat: 35.681236, lng: 139.767125 },
        ) => {
          const userPosImg = document.createElement('img')
          userPosImg.src = '/userposition.png'
          userPosImg.width = 75
          userPosImg.height = 75
          // FIX バウンドが機能しない
          userPosImg.classList.add('bounce')

          const { AdvancedMarkerElement } = (await google.maps.importLibrary(
            'marker',
          )) as google.maps.MarkerLibrary

          const pos = new AdvancedMarkerElement({
            map,
            position: tokyoStationPos,
            title: 'Your Location',
            content: userPosImg,
          })

          console.log(pos)

          setCurrentUserPos(tokyoStationPos)

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
