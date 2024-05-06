export const loadGoogleMapsAPI = () => {
  ;((g) => {
    let h,
      a,
      k,
      p = 'The Google Maps JavaScript API',
      c = 'google',
      l = 'importLibrary',
      q = '__ib__',
      m = document,
      b = window
    b = b[c] || (b[c] = {})
    const d = b.maps || (b.maps = {}),
      e = new URLSearchParams(),
      u = () =>
        h ||
        (h = new Promise(async (f, n) => {
          await (a = m.createElement('script'))
          e.set('libraries', +'')
          for (k in g)
            e.set(
              k.replace(/[A-Z]/g, (t) => '_' + t[0].toLowerCase()),
              g[k],
            )
          e.set('callback', c + '.maps.' + q)
          a.src = `https://maps.${c}apis.com/maps/api/js?` + e
          d[q] = f
          a.onerror = () => (h = n(Error(p + ' could not load.')))
          a.nonce = m.querySelector('script[nonce]')?.nonce || ''
          m.head.append(a)
        }))
    if (!d[l]) {
      d[l] = (f, ...n) => u().then(() => d[l](f, ...n))

      // APIのロードを試みる
      u()
        .then(() => {
          //ここは別のファイルへ移行させる予定
          const mapElement = document.getElementById('map')

          if (mapElement) {
            const map = new google.maps.Map(mapElement, {
              zoom: 16,
              mapId: 'DEMO_MAP_ID',
              maxZoom: 25,
              center: { lat: 35.681236, lng: 139.767125 },
            })
          }
        })
        .catch((error) => {
          console.error('Google Maps APIのロードに失敗しました:', error)
        })
    }
  })({
    key: 'AIzaSyBn3XhYjntZhpSHJJHtjc0AMsjXuhY-cPQ',
    v: 'beta',
  })
}
