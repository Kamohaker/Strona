import React,{ useEffect } from 'react';
import { Avatar,Box,Card,Typography,Link} from '@mui/material';
import MyMenu from '../theme/MyMenu';
import EmailIcon from '@mui/icons-material/Email';
import Artstation from '../../referenc/A3D/artstation.png'
import Mail from '../../referenc/A3D/mail.jpg'
import '../../App.css'

const Contact = () => {

  useEffect(() => {
   
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  },[]);
 
  return (
    <Box>
      <MyMenu></MyMenu>
      <Box className='BoxBackGround'>
        <Box className='BoxIconText'>
          <EmailIcon className='Header'/>
          <Typography className='Header'>Kontakt</Typography>
        </Box>
        <Card className='BoxColumn'>
          <Typography className='Description'>
            Podobają Ci się moje prace? Nie krępuj się napisz do mnie:  
          </Typography>
          <Box className='BoxIconText'>
            <Avatar src={Mail} variant='rounded' sx={{marginRight:2}}/>
            <Typography className='Description'>
             Mail: 
            </Typography>
          </Box>
          <Link sx={{ fontSize:30,marginBottom:2}}>Kama12345678xd@gmail.com</Link>
          <Box className='BoxIconText' >
            <Avatar src={Artstation} variant='rounded' sx={{marginRight:2}}/>
            <Typography className='Description'>
              ArtStation:  
            </Typography>
          </Box>
          <Link href="https://user-634216.artstation.com/"sx={{ fontSize:30}}>https://user-634216.artstation.com/</Link>
        </Card>
      </Box>
    </Box>
  )
};
export default Contact;