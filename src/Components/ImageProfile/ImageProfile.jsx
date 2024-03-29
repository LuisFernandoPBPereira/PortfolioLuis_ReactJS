import React from 'react'
import ProfileImage from "../../Assets/luis.jpeg"
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


function ImageProfile() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Imagem de Perfil"
              src={ProfileImage}
              sx={{ width: 350, height: 350 }}/>
    </Stack>
  )
}

export default ImageProfile