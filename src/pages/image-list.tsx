import { 
    Stack, 
    ImageList, 
    ImageListItem, 
    Box, 
    ImageListItemBar,
 } from '@mui/material';

const ImageListPage = () =>(
    <Stack spacing={4}>
        <ImageList sx={{ 
            width: 600, 
            height: 450.}} 
            cols={3} 
            rowHeight={194}>
              {
                itemData.map(item => (
                    <ImageListItem key={item.img}>
                        <img src={`${item.img}?w=194&h=194&fit=crop&auto=format&dpr=2`} alt={item.title} loading='lazy'/>
                        <ImageListItemBar title={item.title}/>
                    </ImageListItem>
                ))
              }  
            </ImageList>
            <ImageList variant='woven' sx={{ 
            width: 600, 
            height: 300.}} 
            cols={3} 
            gap={8}>
              {
                itemData2.map(item => (
                    <ImageListItem key={item.img}>
                        <img src={`${item.img}?w=194&h=194&fit=crop&auto=format&dpr=2`} alt={item.title} loading='lazy'/>
                    </ImageListItem>
                ))
              }  
            </ImageList>
            <Box sx={{ 
            width: 600, 
            height: 300,
            overflowY: 'scroll'}} >
            <ImageList variant='masonry'
            cols={3} 
            gap={8}>
              {
                itemData3.map(item => (
                    <ImageListItem key={item.img}>
                        <img src={`${item.img}?w=248&fit=crop&auto=format&dpr=2`} alt={item.title} loading='lazy'/>
                    </ImageListItem>
                ))
              }  
            </ImageList>
            </Box>
    </Stack>
)
 const itemData = [
    {
        img:'https://images.unsplash.com/photo-1675792898349-0cbb309b96b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        title: 'Car'
    },
    {
        img:'https://images.unsplash.com/photo-1675790931901-f0ed5a4fd25f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        title: 'Cyti'
    },
    {
        img:'https://images.unsplash.com/photo-1675851816504-41e2afc1efb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80',
        title: 'Sky'
    },
    {
        img:'https://plus.unsplash.com/premium_photo-1672115680945-7fab8f469b55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        title: 'Forest'
    },
    {
        img:'https://images.unsplash.com/photo-1675774553115-35b94bffa988?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
        title: 'Winter'
    },
    {
        img:'https://images.unsplash.com/photo-1675747027273-1a55aa6976fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        title: 'Cactus'
    },
    {
        img:'https://plus.unsplash.com/premium_photo-1672115680945-7fab8f469b55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        title: 'Forest'
    },
    {
        img:'https://plus.unsplash.com/premium_photo-1672115680945-7fab8f469b55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        title: 'Forest'
    },
    {
        img:'https://plus.unsplash.com/premium_photo-1672115680945-7fab8f469b55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        title: 'Forest'
    },
    {
        img:'https://plus.unsplash.com/premium_photo-1672115680945-7fab8f469b55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        title: 'Forest'
    },
]
    const itemData2 = [
        {
            img:'https://images.unsplash.com/photo-1675792898349-0cbb309b96b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            title: 'Car'
        },
        {
            img:'https://images.unsplash.com/photo-1675790931901-f0ed5a4fd25f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            title: 'Cyti'
        },
        {
            img:'https://images.unsplash.com/photo-1675851816504-41e2afc1efb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80',
            title: 'Sky'
        },
        {
            img:'https://plus.unsplash.com/premium_photo-1672115680945-7fab8f469b55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            title: 'Forest'
        },
        {
            img:'https://images.unsplash.com/photo-1675774553115-35b94bffa988?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
            title: 'Winter'
        },
        {
            img:'https://images.unsplash.com/photo-1675747027273-1a55aa6976fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            title: 'Cactus'
        },
        {
            img:'https://plus.unsplash.com/premium_photo-1672115680945-7fab8f469b55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            title: 'Forest'
        },
        {
            img:'https://plus.unsplash.com/premium_photo-1672115680945-7fab8f469b55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            title: 'Forest'
        },
        {
            img:'https://plus.unsplash.com/premium_photo-1672115680945-7fab8f469b55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            title: 'Forest'
        },
        {
            img:'https://plus.unsplash.com/premium_photo-1672115680945-7fab8f469b55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            title: 'Forest'
        },
 ]
 const itemData3 = [
    {
        img:'https://images.unsplash.com/photo-1675792898349-0cbb309b96b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        title: 'Car'
    },
    {
        img:'https://images.unsplash.com/photo-1675790931901-f0ed5a4fd25f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        title: 'Cyti'
    },
    {
        img:'https://images.unsplash.com/photo-1675851816504-41e2afc1efb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=726&q=80',
        title: 'Sky'
    },
    {
        img:'https://plus.unsplash.com/premium_photo-1672115680945-7fab8f469b55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        title: 'Forest'
    },
    {
        img:'https://images.unsplash.com/photo-1675774553115-35b94bffa988?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
        title: 'Winter'
    },
    {
        img:'https://images.unsplash.com/photo-1675747027273-1a55aa6976fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        title: 'Cactus'
    },
    {
        img:'https://plus.unsplash.com/premium_photo-1672115680945-7fab8f469b55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        title: 'Forest'
    },
    {
        img:'https://plus.unsplash.com/premium_photo-1672115680945-7fab8f469b55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        title: 'Forest'
    },
    {
        img:'https://plus.unsplash.com/premium_photo-1672115680945-7fab8f469b55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        title: 'Forest'
    },
    {
        img:'https://plus.unsplash.com/premium_photo-1672115680945-7fab8f469b55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        title: 'Forest'
    },
]
export default ImageListPage;