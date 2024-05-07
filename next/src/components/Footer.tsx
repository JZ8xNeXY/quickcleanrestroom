import { AppBar, Box, Container, Link as MuiLink } from '@mui/material'
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
            <MuiLink
              component={NextLink}
              href="#"
              color="inherit"
              sx={{ ml: 4 }}
            >
              利用規約
            </MuiLink>

            <MuiLink
              component={NextLink}
              href="#"
              color="inherit"
              sx={{ ml: 4 }}
            >
              プライバシーポリシー
            </MuiLink>

            <MuiLink
              component={NextLink}
              href="#"
              color="inherit"
              sx={{ ml: 4 }}
            >
              お問い合わせ
            </MuiLink>
          </Box>
        </Box>
      </Container>
    </AppBar>
  )
}

export default Footer
