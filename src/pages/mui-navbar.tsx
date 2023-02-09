import { AppBar, 
    Toolbar, 
    IconButton, 
    Typography, 
    Stack, 
    Button,
    Menu,
    MenuItem,
 } from '@mui/material';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useState } from 'react';
const NavBarPage = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit' arial-label='logo'>
            <CatchingPokemonIcon/>
        </IconButton>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1}}>
            POKEMONAPP
        </Typography>
        <Stack direction='row' spacing={2}>
            <Button color='inherit'>Features</Button>
            <Button color='inherit'>Kaina</Button>
            <Button color='inherit'>Apie</Button>
            <Button color='inherit' 
            id='resources-button' 
            onClick={handleClick}
            aria-control={open ? 'resources-menu' : undefined}
            aria-haspopup='true' 
            aria-expanded={open ? 'true' : undefined}
            endIcon={<KeyboardArrowDownIcon/>}
            >
                Resources</Button>
            <Button color='inherit'>Prisijungti</Button>
        </Stack>
        <Menu id='resources-menu' anchorEl={anchorEl} open={open} MenuListProps={{
            'aria-labelledby' : 'resources-button',
        }}
         onClose={handleClose}
         anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
         }}
         transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
         }}
        >
            <MenuItem onClick={handleClose}>Blog</MenuItem>
            <MenuItem onClick={handleClose}>Podcast</MenuItem>
            <MenuItem onClick={handleClose}>Voice</MenuItem>
            <MenuItem onClick={handleClose}>Spam</MenuItem>
            <MenuItem onClick={handleClose}>Record</MenuItem>
            <MenuItem onClick={handleClose}>BTC</MenuItem>
        </Menu>
      </Toolbar>  
    </AppBar>
)}

export default NavBarPage;