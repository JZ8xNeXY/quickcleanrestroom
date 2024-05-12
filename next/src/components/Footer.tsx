import { AppBar, Box, Container, Link } from '@mui/material'
import NextLink from 'next/link'

const Footer = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'white',
        color: 'black',
        boxShadow: 'none',
        py: '12px',
      }}
    >
      <Container maxWidth="xl" sx={{ px: 2, mt: 2 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box>
            <Link component={NextLink} href="#" color="inherit" sx={{ ml: 4 }}>
              利用規約
            </Link>

            <Link component={NextLink} href="#" color="inherit" sx={{ ml: 4 }}>
              プライバシーポリシー
            </Link>

            <Link component={NextLink} href="#" color="inherit" sx={{ ml: 4 }}>
              お問い合わせ
            </Link>
          </Box>
        </Box>
        <Box sx={{ textAlign: 'center', mt: 2 }}>
          Copyright © Quick Clean Restroom Map All rights reserved.
        </Box>
      </Container>
    </AppBar>
  )
}

export default Footer
