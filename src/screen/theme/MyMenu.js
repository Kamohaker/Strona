import React from 'react';
import { useNavigate } from "react-router-dom"
import {Box,Input,InputAdornment, Button ,AppBar,List,ListItem,ListItemButton,ListItemText,Autocomplete,Collapse} from '@mui/material';
import {Search} from '@mui/icons-material';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import EmailIcon from '@mui/icons-material/Email';
import logo from '../../referenc/logo_m.png'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { itemData } from '../../data/ProjectArt3D';
import { itemData2 } from '../../data/ProjectProgramming';
import LanguageIcon from '@mui/icons-material/Language';
import '../../App.css'

export default function MyMenu() {

    const navigate = useNavigate();
    const [color, setColor] = React.useState('#808080')
    const [filter, setFilter] = React.useState('');
    const [openL, setOpenL] = React.useState(false);
    const joined = itemData.concat(itemData2);

    const clearString = (p) => {
        return p?.replace(/\s/g, '').toLowerCase();
    }

    const checkTitles = (p) => {
        var a = clearString(p.title).indexOf(clearString(filter)) >= 0;
        console.log(a);
        return a;
    }

    const isEmpty = str => !str.trim().length;

    const toggleClicked = (e) => 
    {  
    if(!isEmpty(e.target.value)){
        setColor('white')
        setFilter(e.target.value)
    }
    else{
        setColor('#808080')
        setFilter('')
    }
    }

    const handleClicks = () => {
        setOpenL(!openL);
    };
    const handleCloses = () => {
        setOpenL(false);
    };

  return (
    <AppBar component="nav" >
        <Box className='BoxMenu'>
            <Box sx={{ 
                backgroundImage: `url(${logo})`, 
                backgroundPosition:'center', 
                backgroundSize:'cover',    
                height: '65px',
                width: '65px',
                marginLeft:1,
                borderRadius:5, 
                '&:hover': {boxShadow: 8}
            }} 
                onClick={()=>navigate("/")}>
            </Box>
            <Box className='BoxMenuItem'>      
                <Breadcrumbs  sx={{color:"#A7D129"}}>
                    <Button 
                        onClick={()=>navigate("/About")}
                        startIcon={<EmojiPeopleIcon />}
                        sx={{
                        fontSize:17,
                        bgcolor:'#282c34',
                        color:"white",
                        borderRadius:5,
                        '&:hover': {boxShadow: 8, color:"#A7D129"}
                    }}>O MNIE
                    </Button>
                    <Button 
                        onClick={()=>navigate("/Contact")}
                        startIcon={<EmailIcon />}
                        sx={{
                        fontSize:17,
                        bgcolor:'#282c34',
                        color:"white",
                        borderRadius:5,
                        '&:hover': {boxShadow: 8,color:"#A7D129"}
                        }}>KONTAKT
                    </Button>
                    <Button 
                        onClick={()=>navigate("/Website")}
                        startIcon={<LanguageIcon />}
                        sx={{
                        fontSize:17,
                        bgcolor:'#282c34',
                        color:"white",
                        borderRadius:5,
                        '&:hover': {boxShadow: 8, color:"#A7D129"}
                    }}>O STRONIE
                    </Button>
                </Breadcrumbs>
                <Autocomplete
                    options={joined}
                    getOptionLabel={(option) => option.title}
                    sx={{ width: 250 , marginRight:2 ,marginLeft:2}}
                    renderInput={(params) =>
                    <List>
                        <Input {...params} 
                            onFocus={handleClicks}
                            onBlur={handleCloses}
                            disableUnderline={ true}
                            placeholder="Szukaj"
                            onChange={toggleClicked}
                            sx={{
                            border:3,
                            borderRadius:10,
                            paddingTop:1,
                            paddingLeft:2,
                            borderColor:"white",
                            '&:hover': {borderColor: '#9e9e9e'},
                            '&.Mui-focused':{borderColor:"#A7D129"},
                            input: { 
                                marginBottom:1,
                                color: color,
                                "&::placeholder": {opacity: 1},
                            },     
                            }}
                            endAdornment={
                            <InputAdornment position="start">
                                <Search sx={{color:"white", marginBottom:1,}}/>
                            </InputAdornment>
                        }
                        />
                        <ListItem sx={{  display: 'flex',  flexDirection: 'column',position:'absolute'}}>
                            <Collapse in={openL} timeout="auto"  sx={{bgcolor:'#282c34',borderRadius:4,minWidth:250,boxShadow:8 }}>  
                                <List  
                                    sx={{
                                    overflow: 'auto',
                                    maxHeight: 300,}}> 
                                    <ListItem sx={{  display: 'flex',  flexDirection: 'column',alignItems: 'center' }}>
                                        {
                                            joined.filter(checkTitles).map((item) => (
                                                <ListItemText/>
                                            )).length!==0? 
                                            <ListItem>{ 
                                                <ListItemText>{ 
                                                    joined.filter(checkTitles).map((item) => (
                                                        <ListItemButton 
                                                            sx={{
                                                            borderRadius:2,
                                                            '&:hover': {boxShadow: 8}}} 
                                                            onClick={()=>navigate("/Project",{state:{names:item.file,tit:item.title,detail:item.describedetail}})
                                                        }>
                                                            <ListItemText 
                                                                sx={{color:'white','&:hover': {color:"#A7D129"}}}>
                                                                { item.title }
                                                            </ListItemText>
                                                        </ListItemButton>
                                            ))}</ListItemText> }
                                            </ListItem>:
                                            <ListItem>
                                                <ListItemText>Brak wyników</ListItemText>
                                            </ListItem>
                                        }
                                    </ListItem>    
                                </List>
                            </Collapse>
                        </ListItem>
                    </List>
                }/> 
            </Box>     
        </Box> 
    </AppBar>
  );
}