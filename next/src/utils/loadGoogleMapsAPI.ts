import { initMap } from './initMap'

interface GoogleMapsConfig {
  key: string
  v: string
}

//GoogleMapsAPIのマニュアルで公表されている式を修正
export const loadGoogleMapsApi = (
  setMap: React.Dispatch<React.SetStateAction<google.maps.Map | null>>,
) => {
  // Google Maps APIの設定
  const config: GoogleMapsConfig = {
    key: process.env.GOOGLE_MAPS_API_KEY || '',
    v: 'beta',
  }

  // Google Maps APIのスクリプトを非同期でロードする関数
  const loadScript = (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script')
      script.src = src
      script.onload = () => resolve()
      script.onerror = () => reject(new Error('Script load error'))
      document.head.appendChild(script)
    })
  }

  // Google Maps APIのスクリプトURLを作成
  const scriptSrc = `https://maps.googleapis.com/maps/api/js?key=${config.key}&v=${config.v}`

  // スクリプトをロードして地図を初期化
  loadScript(scriptSrc)
    .then(() => {
      initMap(setMap) // スクリプトのロードが成功したら地図を初期化
    })
    .catch((error) => {
      console.error(error) // エラーが発生したらログに出力
    })
}
