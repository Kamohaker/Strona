import React,{ useEffect } from 'react';
import { Avatar,Box,Typography,Card, Button} from '@mui/material';
import MyMenu from '../theme/MyMenu';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import HailIcon from '@mui/icons-material/Hail';
import SchoolIcon from '@mui/icons-material/School';
import BrushIcon from '@mui/icons-material/Brush';
import AppsIcon from '@mui/icons-material/Apps';
import DownloadIcon from '@mui/icons-material/Download';
import blender from '../../referenc/A3D/blender.png'
import ZbrushCore from '../../referenc/A3D/zbrushcore.jpg'
import Substance from '../../referenc/A3D/substancePainter.jpeg'
import Quixel from '../../referenc/A3D/quixel mixer.png'
import Photoshop from '../../referenc/A3D/photoshop.jpg'
import flaga_polska from '../../referenc/flaga_polska.png'
import flaga_anglia from '../../referenc/flaga_anglia.jpg'
import cv_pol from '../../data/cv.pdf'
import cv_ang from '../../data/cv_english.pdf'
import '../../App.css'

const About = () => {

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    },[]);

  return (
    <Box className='BoxBackGround'>
        <MyMenu/>
        <Box className='BoxIconText'>
            <EmojiPeopleIcon className='Header'/>
            <Typography className='Header'>O mnie</Typography>
        </Box>
        <Card className='About'> 
            <Typography className='Description'>
                Jestem osobą po studiach aktywnie poszukującą pracy w IT. 
                Moim głównym celem jest zostanie Artystą 3D  lub Web Designerem.
                Od dawna interesuję się grami oraz projektowaniem. Chcę rozwijać swoje umiejętności oraz być częścią zespołu.
            </Typography>
        </Card>
        <Box className='BoxIconText'>
            <HailIcon className='Header'/>
            <Typography className='Header'>
                Doświadczenie
            </Typography>
        </Box>
        <Card className='About'> 
            <Typography className='Description'>
                W 2022 roku podjełam praktyki w firmie Pappal Games. Moja praca polegała na rzeźbieniu oraz teksturowaniu obiektów 3D do gry. 
                Importowałam je również do silnika Unreal Engine 5, w którym przygotowywałam materiał modelu.
            </Typography>
        </Card>
        <Box className='BoxIconText'>
            <SchoolIcon className='Header'/>
            <Typography className='Header'>
                Wykształcenie
            </Typography>
        </Box>
        <Card className='About'> 
            <Typography className='Description'>
                W 2023 roku ukończyłam Politechnikę Świętokrzyską w Kielcach. Zdobyłam tytuł inżyniera na kierunku informatyka, specjalizacja grafik komputerowy. 
            </Typography>
        </Card>
        <Box className='BoxIconText'>
            <BrushIcon className='Header'/>
            <Typography className='Header'>
                Umiejętności
            </Typography>
        </Box>
        <Card className='About'>
            <Typography className='Description'>
                Posiadam umiejętności rzeźbienia, modelowania oraz teksurowania obiektów 3d.  
                Obsługa programów graficznych takich jak: „ZbrushCore”, „Blender”, „Substance Painter” oraz „Photoshop”, nie stanowi dla mnie problemu. 
                Posiadam również znajomość projektowania i tworzenia stron internetowych oraz aplikacji. Moim głównym językiem programowania jest JavaScript.
                Opanowałąm także język angielski na poziomie B2. 
            </Typography>
        </Card>
        <Box className='BoxIconText'>
            <AppsIcon className='Header'/>
            <Typography className='Header'>
                Programy
            </Typography>
        </Box>
        <Card className='About'>
            <Box display={'flex'} alignItems={'center'}marginRight={2}>
                <Avatar src={blender} variant='rounded'/>
                <Typography sx={{ fontSize:20, color: 'white',marginLeft:1}}>
                    Blender
                </Typography>
            </Box>
            <Box display={'flex'} alignItems={'center'}marginRight={2}>
                <Avatar src={ZbrushCore} variant='rounded'/>
                <Typography sx={{ fontSize:20, color: 'white',marginLeft:1}}>
                    ZbrushCore
                </Typography>
            </Box>
            <Box display={'flex'} alignItems={'center'}marginRight={2}>
                <Avatar src={Substance} variant='rounded'/>
                <Typography sx={{ fontSize:20, color: 'white',marginLeft:1}}>
                    Substance Painter
                </Typography>
            </Box>
            <Box display={'flex'} alignItems={'center'}marginRight={2}>
                <Avatar src={Quixel} variant='rounded'/>
                <Typography sx={{ fontSize:20, color: 'white',marginLeft:1}}>
                   Quixel Mixer
                </Typography>
            </Box>
            <Box display={'flex'} alignItems={'center'}marginRight={2}>
                <Avatar src={Photoshop} variant='rounded'/>
                <Typography sx={{ fontSize:20, color: 'white',marginLeft:1}}>
                    Photoshop
                </Typography>
            </Box>
        </Card>
        <Box className='BoxIconText'>
            <DownloadIcon className='Header'/>
            <Typography className='Header'>
                Do pobrania
            </Typography>
        </Box>
        <Card  className='BoxColumn'>
            <Typography sx={{ fontSize:30, color: 'white',marginBottom:2}}>
               Pobierz pełną wersję CV:
            </Typography>
            <Box className='BoxIconText'>
                <Avatar src={flaga_polska} variant='rounded' sx={{marginRight:1}}/>
                <Typography sx={{ fontSize:30, color: 'white',marginRight:1}}>
                    Wersja Polska:
                </Typography>
                <Button   
                    href={cv_pol} 
                    startIcon={<DownloadIcon />}
                    download="CV_Pol"
                    sx={{borderRadius:8}}
                    >Pobierz CV Polskie
                </Button>
            </Box>
            <Box className='BoxIconText'>
                <Avatar src={flaga_anglia} variant='rounded' sx={{marginRight:1}}/>
                <Typography sx={{ fontSize:30, color: 'white',marginRight:1}}>
                    Wersja Angielska:
                </Typography>
                <Button   
                    href={cv_ang} 
                    startIcon={<DownloadIcon />}
                    download="CV_Ang"
                    sx={{borderRadius:8}}
                    >Pobierz CV Angielskie
                </Button>
            </Box>
        </Card>

    </Box>
  )
};
export default About;