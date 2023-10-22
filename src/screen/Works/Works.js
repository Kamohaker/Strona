import React,{ useEffect } from 'react';
import {useNavigate,useLocation} from "react-router-dom"
import {Box,Typography,Card ,CardContent ,CardMedia,CardActionArea ,List,ListItem} from '@mui/material';
import MyMenu from '../theme/MyMenu';
import '../../App.css'

const Works = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
   
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  },[]);

  return (

    <Box>
      <MyMenu></MyMenu>
      <Box className='BoxBackGround'>
        <Typography className='Header'>Projekty</Typography>
        <List>
          {location.state.tab.map((item) => (
            <ListItem>
              <Card sx={{borderRadius:5}}>
                <CardActionArea 
                  onClick={()=>navigate("/Project",{state:{names:item.file,tit:item.title,detail:item.describedetail}})
                }
                sx={{ 
                  display: 'flex',  
                  flexDirection: 'row',
                  height:400,
                  width:700,
                  backgroundColor:'#282c34 ',
                  }}>
                    <CardMedia
                      component="img"
                      height="440"
                      image={`${item.img}`}
                      sx={{ width: '50%'}}/>
                    <CardContent   sx={{ color:'#A7D129' }}>
                      <Typography sx={{fontSize:25}}>
                        {item.title}
                      </Typography>
                      <Typography sx={{fontSize:18,color:"white"}} >
                        {item.describe}
                      </Typography>
                    </CardContent>
                </CardActionArea>
              </Card>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  )
};
  
export default Works;