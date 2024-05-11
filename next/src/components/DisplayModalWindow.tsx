import CloseIcon from '@mui/icons-material/Close'
import { Box, Button, Modal, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

interface DisplayModalWindowProps {
  openModalWindow: boolean
  closeModalWindow: () => void
  name: string
  address: string
  content: string
}

const modalStyle = {
  position: 'absolute' as const,
  top: '47%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {
    xs: '80%',
    sm: '65%',
    md: '40%',
    lg: '30%',
    xl: '25%',
  },
  height: '80%',
  bgcolor: '#F9F9F9',
  boxShadow: 24,
  p: 3,
  overflow: 'auto',
}

const changeFontSize = (name: string) => {
  if (name.length >= 15) {
    return {
      fontSize: '24px',
      fontWeight: 'bold',
      margin: '0 auto',
      textAlign: 'center',
      verticalAlign: 'middle',
    }
  } else if (name.length >= 10) {
    return {
      fontSize: '26px',
      fontWeight: 'bold',
      margin: '0 auto',
      textAlign: 'center',
      verticalAlign: 'middle',
    }
  } else {
    return {
      fontSize: '28px',
      fontWeight: 'bold',
      margin: '0 auto',
      textAlign: 'center',
      verticalAlign: 'middle',
    }
  }
}

const DisplayModalWindow: React.FC<DisplayModalWindowProps> = ({
  openModalWindow,
  closeModalWindow,
  name,
  address,
  content,
}) => (
  <Modal
    open={openModalWindow}
    onClose={closeModalWindow}
    aria-labelledby="modal-title"
    aria-describedby="modal-description"
  >
    <Box sx={modalStyle}>
      <Box sx={{ display: 'flex', justifyContent: 'right' }}>
        <Button
          sx={{
            color: '#000000',
          }}
          onClick={closeModalWindow}
        >
          <CloseIcon />
        </Button>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: 'auto',
          '& img': {
            width: '100%',
            height: 'auto',
          },
        }}
      >
        <Image
          src="/point1.png"
          alt="restroom"
          width={200}
          height={200}
          priority
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          bgcolor: '#F0F0F0',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            ...changeFontSize(name),
          }}
        >
          {name}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'right' }}>
        <Button
          sx={{
            height: '40px',
            color: '#FFFFFF',
            fontWeight: 'bold',
            bgcolor: '#4CAF50',
            pt: 2,
            pb: 2,
            mt: 2,
          }}
          onClick={closeModalWindow}
        >
          編集する
        </Button>
      </Box>
      <Box sx={{ mt: 0 }}>
        <Typography variant="h6" fontWeight="bold">
          住所
        </Typography>
        <Typography sx={{ ml: 2 }}>{address}</Typography>
        <Typography variant="h6" fontWeight="bold">
          コメント
        </Typography>
        <Typography sx={{ ml: 2 }}>{content}</Typography>
        <Typography variant="h6" fontWeight="bold">
          設備情報
        </Typography>
        <Typography sx={{ ml: 2 }}>パウダーコーナー</Typography>
        <Typography variant="h6" fontWeight="bold">
          レビュー
        </Typography>
        <Typography sx={{ ml: 2 }}>
          平均4.7 ⭐️⭐️⭐️⭐️⭐️ (3件の評価をみる)
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          sx={{
            height: '40px',
            color: '#FFFFFF',
            fontWeight: 'bold',
            bgcolor: '#4CAF50',
            pt: 2,
            pb: 2,
            mt: 2,
          }}
          onClick={closeModalWindow}
        >
          評価する
        </Button>
      </Box>
    </Box>
  </Modal>
)

export default DisplayModalWindow
