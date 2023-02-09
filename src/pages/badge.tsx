import React from 'react'
import { Stack, Badge } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

const BadgePage = () => {
  return (
    <Stack spacing={2} direction='row'>
        <Badge badgeContent={9} color='primary'>
            <MailIcon/>
        </Badge>
        <Badge badgeContent={0} color='secondary' showZero>
            <MailIcon/>
        </Badge>
        <Badge badgeContent={77777} color='primary'max={999}>
            <MailIcon/>
        </Badge>
        <Badge variant='dot' color='primary'>
            <MailIcon/>
        </Badge>
    </Stack>
  )
}

export default BadgePage;