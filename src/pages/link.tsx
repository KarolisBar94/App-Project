import { Stack, Link, Typography } from '@mui/material';

const LinkPages = () => {
    return (
        <Stack spacing={2} direction='row' m={4}>
            <Link href='https://www.ea.com/games/apex-legends' variant='body2' target='_blank' >Apex Legends</Link>
            <Typography variant='h6'>
            <Link href='https://www.ea.com/games/apex-legends' color='secondary' underline='none' target='_blank' >Apex Legends</Link>
            </Typography>
        </Stack>
    )
}
export default LinkPages;