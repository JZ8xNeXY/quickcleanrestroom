import CloseIcon from '@mui/icons-material/Close'
import { Box, Button, Modal, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

interface DisplayModalWindowProps {
  open: boolean
  onClose: () => void
  name: string
  address: string
  content: string
}

const modalStyle = {
  position: 'absolute' as const,
  top: '46.6%',
  left: '19%',
  transform: 'translate(-50%, -50%)',
  width: '30%',
  height: '80%',
  bgcolor: '#F9F9F9',
  boxShadow: 24,
  p: 4,
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
  open,
  onClose,
  name,
  address,
  content,
}) => (
  <Modal
    open={open}
    onClose={onClose}
    aria-labelledby="modal-title"
    aria-describedby="modal-description"
  >
    <Box sx={modalStyle}>
      <Box sx={{ display: 'flex', justifyContent: 'right' }}>
        <Button
          sx={{
            height: '20px',
            color: '#000000',
            fontWeight: 'bold',

            m: 1,
          }}
          onClick={onClose}
        >
          <CloseIcon />
        </Button>
      </Box>
      <Box sx={{ width: '100%' }}>
        <Image
          src="/point2.png"
          alt="restroom"
          width={300}
          height={300}
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
          id="modal-description"
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
          onClick={onClose}
        >
          編集する
        </Button>
      </Box>
      <Box sx={{ mt: 0 }}>
        <Typography id="modal-description" variant="h6" fontWeight="bold">
          住所
        </Typography>
        <Typography id="modal-description" sx={{ ml: 2 }}>
          {address}
        </Typography>
        <Typography id="modal-description" variant="h6" fontWeight="bold">
          コメント
        </Typography>
        <Typography id="modal-description" sx={{ ml: 2 }}>
          {content}
        </Typography>
        <Typography id="modal-description" variant="h6" fontWeight="bold">
          設備情報
        </Typography>
        <Typography id="modal-description" sx={{ ml: 2 }}>
          パウダーコーナー
        </Typography>
        <Typography id="modal-description" variant="h6" fontWeight="bold">
          レビュー
        </Typography>
        <Typography id="modal-description" sx={{ ml: 2 }}>
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
          onClick={onClose}
        >
          評価する
        </Button>
      </Box>
    </Box>
  </Modal>
)

export default DisplayModalWindow
