import { Box, Button, Modal, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

interface PostModalProps {
  open: boolean
  onClose: () => void
  name: string
  address: string
  content: string
}

//modalのスタイル
const style = {
  position: 'absolute' as const,
  top: '46.6%',
  left: '19%',
  transform: 'translate(-50%, -50%)',
  width: '20%',
  height: '80%',
  bgcolor: '#F9F9F9',
  boxShadow: 24,
  p: 4,
  overflow: 'auto',
}

const getStyle = (name: string) => {
  if (name.length >= 15) {
    return {
      fontSize: '12px',
      fontWeight: 'bold',
      margin: '0 auto',
      textAlign: 'center',
      verticalAlign: 'middle',
      maxWidth: '150px',
    }
  } else if (name.length >= 10) {
    return {
      fontSize: '16px',
      fontWeight: 'bold',
      margin: '0 auto',
      textAlign: 'center',
      verticalAlign: 'middle',
      maxWidth: '150px',
    }
  } else {
    return {
      fontSize: '18px',
      fontWeight: 'bold',
      margin: '0 auto',
      textAlign: 'center',
      verticalAlign: 'middle',
      maxWidth: ' 150px',
    }
  }
}

const PostModal: React.FC<PostModalProps> = ({
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
    <Box sx={style}>
      <Box sx={{ width: '100%' }}>
        <Image
          src="/point2.png"
          alt="restroom"
          layout="responsive"
          width={100}
          height={100}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          bgcolor: '#F0F0F0',
          alignItems: 'center',
        }}
      >
        <Button
          sx={{
            height: '40px',
            color: '#000000',
            fontWeight: 'bold',
            bgcolor: '#FFFFFF',
            pt: 4,
            pb: 4,
            m: 1,
          }}
          onClick={onClose}
        >
          ←閉じる
        </Button>
        <Typography
          id="modal-description"
          sx={{
            ...getStyle(name),
          }}
        >
          {name}
        </Typography>
        <Button
          sx={{
            backgroundImage: 'url("/route.png")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: 'auto',
            height: '60px',
            m: 1,
          }}
        ></Button>
      </Box>
      <Box sx={{ mt: 2 }}>
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
    </Box>
  </Modal>
)

export default PostModal
