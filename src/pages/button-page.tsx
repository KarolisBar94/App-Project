import { Stack, Button, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import React from 'react';
const ButtonPage = () => (
  <Stack spacing={4}>
  <Stack spacing={2} direction='row'>
   <Button variant='text' href='https://google.com' color='success'>Google</Button>
   <Button variant='contained'href='https://youtube.com' color='error'>Youtube</Button>
   <Button variant='outlined'>Outlined</Button>
   </Stack>
  <Stack spacing={2} direction='row'>
    <Button variant='contained' color='primary'>Primary</Button>
    <Button variant='contained' color='secondary'>Secondary</Button>
    <Button variant='contained' color='error'>Error</Button>
    <Button variant='contained' color='warning'>Warning</Button>
    <Button variant='contained' color='info'>Info</Button>
    <Button variant='contained' color='success'>Success</Button>
  </Stack>
  <Stack display='block' spacing={2} direction='row'>
    <Button variant='contained' size='small' color='warning'>Small</Button>
    <Button variant='contained' size='medium' color='info'>Medium</Button>
    <Button variant='contained' size='large' color='secondary'>Large</Button>
  </Stack>
  <Stack spacing={2} direction='row'>
    <Button variant='contained' startIcon={<SendIcon/>} disableRipple onClick={() => alert('paspausta')} >Send</Button>
    <Button variant='contained' endIcon={<SendIcon/>}>Send</Button>
    <IconButton aria-label='send'color='success' size='small'>
    <SendIcon/>
    </IconButton>
  </Stack>
  </Stack>
);

export default ButtonPage;
