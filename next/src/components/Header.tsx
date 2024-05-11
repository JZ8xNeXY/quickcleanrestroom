import { AppBar, Box, Button, Container } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

const headerButtonStyle = {
  textTransform: 'none',
  fontSize: {
    xs: 14,
    sm: 14,
    md: 18,
    lg: 18,
    xl: 18,
  },
  borderRadius: 2,
  boxShadow: 'none',
  border: 'none',
  ml: {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 5,
    xl: 5,
  },
}

const Header = () => {
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
      <Container maxWidth="xl" sx={{ px: 2 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box>
            <Link href="/">
              <Box
                sx={{
                  width: '100%',
                  maxWidth: {
                    xs: '120px',
                    sm: '140px',
                    md: '160px',
                    lg: '180px',
                    xl: '200px',
                  },
                  height: 'auto',
                  '& img': {
                    width: '100%',
                    height: 'auto',
                  },
                }}
              >
                <Image
                  src="/headerlogo.png"
                  alt="logo"
                  width={200}
                  height={50}
                  priority
                />
              </Box>
            </Link>
          </Box>
          <Box>
            <Button color="secondary" variant="outlined" sx={headerButtonStyle}>
              紹介
            </Button>
            <Button color="secondary" variant="outlined" sx={headerButtonStyle}>
              新規登録
            </Button>
            <Button color="secondary" variant="outlined" sx={headerButtonStyle}>
              ログイン
            </Button>
          </Box>
        </Box>
      </Container>
    </AppBar>
  )
}

export default Header
