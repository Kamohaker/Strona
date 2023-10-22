import React,{ useEffect } from 'react';
import { Box,Typography,Card, Link} from '@mui/material';
import MyMenu from '../theme/MyMenu';
import LanguageIcon from '@mui/icons-material/Language';
import CollectionsIcon from '@mui/icons-material/Collections';
import '../../App.css'

const Website = () => {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    },[]);

  return (
    <Box className='BoxBackGround'>
        <MyMenu/>
        <Box className='BoxIconText'>
            <LanguageIcon className='Header'/>
            <Typography className='Header'>O stronie</Typography>
        </Box>
        <Card className='About'> 
            <Typography sx={{ fontSize:30, color: 'white'}}>
                Strona w całości została stworzona przeze mnie. Inspirowana na popularnym serwisie 
                <Link sx={{fontSize:30}} href='https://www.artstation.com/?sort_by=community&dimension=all'> "Artstation"</Link>.
                Napisana została za pomocą 
                <Link sx={{fontSize:30}} href='https://react.dev/'> "React"</Link>
                , biblioteki języka "JavaScript".
                Użyty framework to
                <Link sx={{fontSize:30}} href='https://mui.com/'> "MUI"</Link>.
            </Typography>
        </Card>
        <Box className='BoxIconText'>
            <CollectionsIcon className='Header'/>
            <Typography className='Header'>Zasoby</Typography>
           
        </Box>
       <Card className='About'>
            <Typography sx={{ fontSize:30, color: 'white'}}>
            Wszystkie zrzuty projektów są mojego autorstwa. 
            Grafiki elementów takich jak tło strony głównej pobrane z : 
            <Link 
            href='https://www.freepik.com/free-vector/3d-black-techno-abstract-background-overlap-layer_36325407.htm#query=futuristic%20geometric%20background&position=20&from_view=keyword&track=ais'> "FreePlik"</Link>
            , avatar :
            <Link href='https://wallpapers.com/picture/joker-pictures-ovdhxoqlnn0wytph.html'> "Wallpapers.com"</Link>. 
            Logo zostało zaprojektowane z pomocą strony:
            <Link href='https://www.brandcrowd.com/'> "BrandCrowd"</Link>.
            </Typography>
        </Card> 
    </Box>
  )
};
export default Website;