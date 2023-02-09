import React from 'react';
import { Stack, Chip, Avatar } from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';
import { useState } from 'react';

const ChipPage = () => {
    const [chips, setChips] = React.useState(['Chip 1', 'Chip 2', 'Chip 3'])
    const handleDelete  = (chipToDelete: string) => {
        setChips(chips => chips.filter(chip => chip !== chipToDelete))
    }
  return (
    <Stack direction='row' spacing={1}>
        <Chip label='Chip' color='warning' size='medium' icon={<FaceIcon />} />
        <Chip 
        label='Chip outlined' 
        color='secondary' 
        size='medium' 
        variant='outlined'
        avatar={<Avatar>K</Avatar>}
        />
        <Chip 
        label='Click' 
        color='success' 
        onClick={() => alert('Clicked')}/>
        <Chip 
        label='Delete' 
        color='error' 
        onClick={() => alert('Clicked')} 
        onDelete={() => alert('Delete handler called')}/>
        {chips.map((chip) => (
            <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)}/>
        ))}
    </Stack>
  )
}

export default ChipPage;