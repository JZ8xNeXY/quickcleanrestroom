import { Box, Button, Modal, Typography } from '@mui/material'
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
  width: '33%',
  height: '80%',
  bgcolor: '#F9F9F9',
  boxShadow: 24,
  p: 4,
}

const getStyle = (name: string) => {
  if (name.length >= 15) {
    return {
      fontSize: '12px',
      margin: '0 auto',
      textAlign: 'center',
      verticalAlign: 'middle',
      maxWidth: '200px',
    }
  } else if (name.length >= 10) {
    return {
      fontSize: '16px',
      margin: '0 auto',
      textAlign: 'center',
      verticalAlign: 'middle',
      maxWidth: '200px',
    }
  } else {
    return {
      fontSize: '18px',
      margin: '0 auto',
      textAlign: 'center',
      verticalAlign: 'middle',
      maxWidth: '200px',
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
      <Box sx={{ display: 'flex', bgcolor: '#F0F0F0', alignItems: 'center' }}>
        <Button>←閉じる</Button>
        <Typography
          id="modal-description"
          sx={{
            ...getStyle(name),
            ml: 2,
          }}
        >
          {name}
        </Typography>
        <Button>ルート検索</Button>
      </Box>
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
    </Box>
  </Modal>
)

export default PostModal
