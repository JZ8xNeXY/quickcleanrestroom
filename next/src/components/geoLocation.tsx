// import { Box, Button } from '@mui/material'
// import type { NextPage } from 'next'
// import { useEffect, useRef } from 'react'
// import { userGeoLocation } from '@/utils/userGeoLocation'

// interface GeoLocationProps {
//   map: google.maps.Map | null
// }

// const GeoLocation: NextPage<GeoLocationProps> = ({ map }) => {
//   const locationButtonRef = useRef<HTMLButtonElement>(null)

//   useEffect(() => {
//     if (map && locationButtonRef.current) {
//       const controlPosition = google.maps.ControlPosition.TOP_CENTER
//       map.controls[controlPosition].push(locationButtonRef.current)

//       return () => {
//         const controls = map.controls[controlPosition]
//         for (let i = 0; i < controls.getLength(); i++) {
//           // eslint-disable-next-line react-hooks/exhaustive-deps
//           if (controls.getAt(i) === locationButtonRef.current) {
//             controls.removeAt(i)
//             break
//           }
//         }
//       }
//     }
//   }, [map])

//   return (
//     <>
//       <Box sx={{ display: 'flex', justifyContent: 'center' }}>
//         <Button
//           ref={locationButtonRef}
//           //現在地を取得
//           onClick={() => userGeoLocation({ map })}
//           sx={{
//             height: '60px',
//             fontSize: '16px',
//             color: '#FFFFFF',
//             fontWeight: 'bold',
//             bgcolor: '#4CAF50',
//             pt: 2,
//             pb: 2,
//             pl: 4,
//             pr: 4,
//             mt: 2,
//           }}
//         >
//           最寄りのトイレを探す
//         </Button>
//       </Box>
//     </>
//   )
// }

// export default GeoLocation
