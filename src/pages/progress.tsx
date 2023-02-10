import React from 'react'
import { Stack, CircularProgress, LinearProgress } from '@mui/material'

const ProgressPage = () => {
  return (
    <Stack spacing={2}>
        <CircularProgress/>
        <CircularProgress color='warning'/>
        <CircularProgress color='success'/>
        <CircularProgress variant='determinate' value={60}/>
        
        <LinearProgress color='warning'/>
        <LinearProgress color='success'/>
        <LinearProgress variant='determinate' value={60}/>

    </Stack>
    
  )
}

export default ProgressPage;