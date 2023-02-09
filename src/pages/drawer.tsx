import { Drawer, Box, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'
import { useState } from 'react'
export const DrawerPage = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <>
    <IconButton size='large' edge='start' color='inherit' aria-label='logo'
    onClick={() => setIsDrawerOpen(true)}>
        <MenuIcon/>
    </IconButton>
    <Drawer 
    anchor='left' 
    open={isDrawerOpen} 
    onClose={() => setIsDrawerOpen(false)}
    >
       <Box 
            p={2} 
            width='250px' role='presentation'>
        <Typography variant='h5'component='div'>Side Panel</Typography>
       </Box>
    </Drawer>
    </>
  )
}
 export default DrawerPage;