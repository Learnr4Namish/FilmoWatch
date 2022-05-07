import logo from './logo.svg';
import './App.css';
import './index.css'
import React from 'react';
import { useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn'
  import brandName from './brandName.js';
import { Home } from '@mui/icons-material';
import { Box, fontWeight, textAlign } from '@mui/system';
import { MusicNote } from '@mui/icons-material';
import { Person } from '@mui/icons-material';
import { Search } from '@mui/icons-material';
import { CircularProgress } from '@mui/material';
async function getData() {
 /* const docRef = doc(db, "allVideos", "allVideos");
  const docSnap = getDoc(docRef);
if (docSnap.exists()) {
  for (var keyDat in docSnap.data()) {
    if (docSnap.data().hasOwnProperty(keyDat)) {
        console.log(doc.data()[keyDat]);
        var ulFor = doc.data()[keyDat];
        var tokenFor = keyDat;
        console.log(tokenFor)
       
     }
    
}
} else {
  console.log("No such document!");
}*/
}
const circluarProgressStyle = {
  height:'100%',
  textAlign: 'center',
  alignSelf: 'center'
};
export function App() {
  const [value, setValue] = React.useState(0);
  const styleOfBotomBox= {
    bottom: '0',
    position: 'absolute',
    width: '100%',
    fontSize: '18px',
    fontWeight: 'bold'
  };
  const botomStyle = {
    fontSize: '18px',
  };
  return (
    <Box sx={{ width: 500 }} style={styleOfBotomBox}>
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction style={botomStyle} label="Home" icon={<Home />} />
      <BottomNavigationAction label="Musics" icon={<MusicNote />} />
      <BottomNavigationAction label="Search" icon={<Search />} />
    </BottomNavigation>
  </Box>
  );
}
export function HomeApp() {
           return (
              <div className='homePageFragment'>
                <p className='brandText'>{String(brandName)}</p>
                <CircularProgress id='circluarProgressVideoLoading' style={circluarProgressStyle}/>
                <div id="videoZone" className='videoZone'>
                </div>
              </div>
           );
          }
