import { AppBar, Box, Button, Container } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'

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
              <Image
                src="/headerlogo.png"
                width={160}
                height={40}
                priority
                alt="logo"
              />
            </Link>
          </Box>
          <Box>
            <Button
              color="secondary"
              variant="outlined"
              sx={{
                textTransform: 'none',
                fontSize: 18,
                borderRadius: 2,
                boxShadow: 'none',
                border: 'none',
                ml: 5,
              }}
            >
              紹介
            </Button>
            <Button
              color="secondary"
              variant="outlined"
              sx={{
                textTransform: 'none',
                fontSize: 18,
                boxShadow: 'none',
                border: 'none',
                ml: 5,
              }}
            >
              新規登録
            </Button>
            <Button
              color="secondary"
              variant="outlined"
              sx={{
                textTransform: 'none',
                fontSize: 18,
                borderRadius: 2,
                boxShadow: 'none',
                border: 'none',
                ml: 5,
              }}
            >
              ログイン
            </Button>
          </Box>
        </Box>
      </Container>
    </AppBar>
  )
}

export default Header
