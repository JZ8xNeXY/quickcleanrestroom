import { initMap } from './initMap'

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
      return u().then(() => {
        //マップを表示する
        return initMap()
      })
    }
  })({
    key: 'AIzaSyBn3XhYjntZhpSHJJHtjc0AMsjXuhY-cPQ',
    v: 'beta',
  })
}
