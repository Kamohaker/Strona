import React,{ useEffect } from 'react';
import {useLocation} from "react-router-dom"
import {Box,Typography,Card ,CardMedia,List,ListItem,ImageList,ImageListItem,ImageListItemBar,AppBar,} from '@mui/material';
import MyMenu from '../theme/MyMenu';
import '../../App.css'

const Project = () => {
  
  useEffect(() => {
   
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  },[]);

  const location = useLocation();
  const list = location.state.names

  return (
    <Box >
      <MyMenu/>
      <Box  sx={{ 
        bgcolor:'#101014',
        display: 'grid', 
        gap: 2,
        gridAutoColumns: '1fr',
        textAlign: 'center',
        paddingTop:10
        }}>
          <Box sx={{  bgcolor:'#101014',display: 'flex',  
            flexDirection: 'column',
            alignItems: 'center', 
            textAlign: 'center',
            paddingTop:5 ,
            gridRow: '1', gridColumn: 'span 3'
          }} >
            <Typography sx={{ fontSize:50, color: '#A7D129'}}>{location.state.tit}</Typography>
            <List>
              <ListItem alignItems="center">
                <ImageList sx={{  display: 'flex',  flexDirection: 'column',alignItems: 'center' }}>
                  {list.map((item) => (
                    <Card sx={{borderRadius:10,marginBottom:2,}}>
                      <ImageListItem >
                        <CardMedia
                          component="img"
                          height="750"
                          image={item.img}
                          alt="green iguana"
                        />
                        <ImageListItemBar
                          title= {item.title}
                          sx={{textAlign:'center'}}
                          />
                        </ImageListItem>
                    </Card>
                  ))}
                </ImageList>
              </ListItem>
            </List>
          </Box>
          <Box sx={{gridRow: '1', gridColumn: '4 / 5',}} >
            <AppBar   position="fixed"   sx={{marginTop:20,maxWidth:350,bgcolor:"#101014",borderRadius:5,marginRight:5,zIndex:'fab' }}>
              <Card sx={{ maxWidth: 345,minHeight:700,bgcolor:'#282c34',borderRadius:5,paddingTop:2,padding:2,overflow: 'auto', }}>
              <Typography sx={{ fontSize:40, color: '#A7D129', textAlign: 'center',}}>
                  {location.state.tit}
                </Typography>
                <Typography sx={{ fontSize:20, color: 'white', textAlign:'left',}}>
                {location.state.detail}
                </Typography>
              </Card>
            </AppBar>
          </Box>
      </Box>
    </Box>
  )
};
  
export default Project;