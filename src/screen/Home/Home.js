import React, {useEffect} from 'react';
import { Avatar,Box,Typography} from '@mui/material';
import back from '../../referenc/backg.jpg'
import joker from '../../referenc/joker.jpg'
import BaseButtonDemo from "../theme/ButtonDemo"
import MyMenu from '../theme/MyMenu';
import '../../App.css'

const Home = () => {
  
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  },[]
  );

  return (
    <Box className='BoxPage'>
       <MyMenu></MyMenu>
        <Box  sx={{ 
                height: 300, 
                backgroundImage: `url(${back})`,
                backgroundPosition:'center', 
                backgroundSize:'cover',
                display: 'flex',  
                flexDirection: 'column',
                alignItems: 'center', 
                textAlign: 'center',
                paddingTop:20 }}>
                <Avatar src={joker} sx={{ width: 150, height: 150 }}/> 
                <Typography sx={{ fontSize:45, color: 'white' ,}}>Kamila Wójcik</Typography>
                <Box sx={{ display: 'flex',  flexDirection: 'row',}}>
                  <Typography sx={{ fontSize:45, color:"#A7D129" ,marginRight:1}}>3D Artist</Typography>
                  <Typography sx={{ fontSize:45, color:"white" ,marginRight:1}}> / </Typography>
                  <Typography sx={{ fontSize:45, color: '#29b6f6' }}> Web designer</Typography>
                </Box>
        </Box>
        <Box sx={{paddingTop:10}}>
          <BaseButtonDemo/>
        </Box>
    </Box>
  )
};
export default Home;