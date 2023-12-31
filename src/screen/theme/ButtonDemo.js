import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import code from "../../referenc/code.png"
import art3d from "../../referenc/A3D/helm/art3d.png"
import { useNavigate } from "react-router-dom"
import { itemData } from '../../data/ProjectArt3D';
import { itemData2 } from '../../data/ProjectProgramming';

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 240,
  marginBottom:50,
  
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', 
    height: 100,
    
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
      
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
      borderRadius:20,
      color:"#A7D129"
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
  borderRadius:20 
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
  
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
  border: 2, borderRadius:50 ,borderColor:"white",
}));

const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: theme.palette.common.white,
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: theme.transitions.create('opacity'),
}));

export default function ButtonBaseDemo() {

    const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between',flexDirection:"column", alignItems: 'center', 
    textAlign: 'center', minWidth: 300, width: '100%'}}>
      
      <ImageButton onClick={()=>navigate("/Works",{state:{tab:itemData}})}>
      <Box
      sx={{ 
        height: 220, 
        width:580,
        display: 'flex',  
        flexDirection: 'column',
        alignItems: 'center', 
        textAlign: 'center',

        
        }}
      > 
      <ImageSrc style={{ backgroundImage: `url(${art3d})` }} />
        <ImageBackdrop className="MuiImageBackdrop-root" />
        <Image>
          <Typography
            component="span"
            variant="subtitle1"
            color="inherit"
            fontSize={30}
            sx={{
              position: 'relative',
              p: 4,
              pt: 2,
              pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
            }}
          >
           Modelowanie
            <ImageMarked className="MuiImageMarked-root" />
          </Typography>
        </Image>
        </Box>
    </ImageButton>

    <ImageButton  onClick={()=>navigate("/Works",{state:{tab:itemData2}})}>
      <Box
      sx={{ 
        height: 250, 
        width:580,
        display: 'flex',  
        flexDirection: 'column',
        alignItems: 'center', 
        textAlign: 'center',
        }}
      > 
      <ImageSrc style={{ backgroundImage: `url(${code})` }} />
        <ImageBackdrop className="MuiImageBackdrop-root" />
        <Image>
          <Typography
            component="span"
            variant="subtitle1"
            color="inherit"
            fontSize={30}
            sx={{
              position: 'relative',
              p: 4,
              pt: 2,
              pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
            }}
          >
          Programowanie
            <ImageMarked className="MuiImageMarked-root" />
          </Typography>
        </Image>
        </Box>
    </ImageButton>
      
      
    </Box>
  );
}