import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }
    setIsOpen(open)
  }

  const menuItems = [
    { text: '紹介', href: '/' },
    { text: '新規登録', href: '/' },
    { text: 'ログイン', href: '/' },
    { text: 'お問い合わせ', href: '/' },
    { text: '利用規約', href: '/' },
    { text: 'プライバシーポリシー', href: '/' },
  ]

  const list = () => (
    <div
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map(({ text, href }) => (
          <ListItem key={text}>
            <Link href={href} passHref key={text}>
              <ListItem>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  )

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
            justifyContent: 'left',
            alignItems: 'center',
          }}
        >
          <Box>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
            <Drawer anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
              {list()}
            </Drawer>
          </Box>
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
        </Box>
      </Container>
    </AppBar>
  )
}

export default Header
