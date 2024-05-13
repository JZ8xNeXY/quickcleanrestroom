import { initMap } from './initMap'

interface GoogleMapsConfig {
  key: string | undefined
  v: string
}

export const loadGoogleMapsAPI = (
  setMap: React.Dispatch<React.SetStateAction<google.maps.Map | null>>,
) => {
  ;((g: GoogleMapsConfig) => {
    let h: Promise<void>, a, k
    const p = 'The Google Maps JavaScript API'
    const c = 'google'
    const l = 'importLibrary'
    const q = '__ib__'
    const m = document
    let b = window
    b = b[c] || (b[c] = {})
    const d = b.maps || (b.maps = {}),
      e = new URLSearchParams(),
      u = () =>
        h ||
        (h = new Promise(
          // eslint-disable-next-line no-async-promise-executor
          async (f, n) => {
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
          },
        ))
    if (!d[l]) {
      d[l] = (f, ...n) => u().then(() => d[l](f, ...n))
      // APIのロードを試みる
      return u().then(() => {
        //マップを表示する
        initMap(setMap)
      })
    }
  })({
    key: process.env.GOOGLE_MAPS_API_KEY,
    v: 'beta',
  })
}
