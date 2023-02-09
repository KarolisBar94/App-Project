import { Stack, Avatar, AvatarGroup } from '@mui/material';

const AvatarPage = () => {
  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={1}>
            <Avatar sx={{ bgcolor: 'error.light'}}>RB</Avatar>
            <Avatar sx={{ bgcolor: 'warning.light'}}>KB</Avatar>
        </Stack>
        <Stack direction='row' spacing={1}>
            <AvatarGroup >
            <Avatar sx={{ bgcolor: 'primary.light'}}>JP</Avatar>
            <Avatar sx={{ bgcolor: 'info.light'}}>AM</Avatar>
            <Avatar src='https://randomuser.me/api/portraits/women/17.jpg' alt='Chui Jung'/>
            <Avatar src='https://randomuser.me/api/portraits/women/92.jpg' alt='Big Nose'/>
            </AvatarGroup>
        </Stack>
        <Stack direction='row' spacing={1}>
            <Avatar variant='rounded' sx={{ bgcolor: 'error.light', width: 68, height: 68 }}>OP</Avatar>
            <Avatar variant='rounded' sx={{ bgcolor: 'warning.light', width: 68, height: 68 }}>LT</Avatar>
        </Stack>
    </Stack>
  )
}

export default AvatarPage;