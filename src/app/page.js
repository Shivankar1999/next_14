// import Image from "next/image";
'use client'
import React, { useEffect, useState } from 'react';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import CameraIcon from '@mui/icons-material/Camera';
import axios from 'axios';
import { Box, Button, CircularProgress, Container, Typography } from '@mui/material';
import { color, motion } from 'framer-motion';
import HamburgerMenu from '@/Components/Hamburger';
import GridView from '@/Components/GridView';
import TileView from '@/Components/TitleView';
import ExpandedView from '@/Components/ExpendView';
import HorizontalMenu from '@/Components/HorizontalMenu';
const toggleButtonVariants = {
  rotate: {
    rotate: 360,
    transition: { duration: 0.5, ease: "easeInOut" },
  },
};
const Home = () => {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'tile'
  const [isRotating, setIsRotating] = useState(false);
  const [dataLoaded, setdataLoaded] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setdataLoaded(true)
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setdataLoaded(false)
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleTileClick = (item) => {
    setSelectedItem(item);
    setExpanded(true);
  };

  const toggleViewMode = () => {
    setIsRotating(true);
    setViewMode((prev) => (prev === 'grid' ? 'tile' : 'grid'));
     // Reset rotation state after animation completes
     setTimeout(() => {
      setIsRotating(false);
    }, 500); // Matches the duration of the rotation animation
  };

  return (
    <Container maxWidth="xl">
     <HamburgerMenu />
    
     
      <div style={styles.toggleButtonContainer}>
        <Button onClick={toggleViewMode} style={styles.toggleButton}>
            <motion.span
        animate={isRotating ? { rotate: 360 } : { rotate: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        style={{ display: 'inline-block' }}
      >
        <CameraIcon />
      </motion.span>
        </Button>
      </div>
{
  dataLoaded ? (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          sx={{ color: 'text.secondary' }}
        >
         Loading Students
        </Typography>
      </Box>
    </Box>
  ): (
    viewMode === 'grid' ? (
        <GridView data={data} />
      ) : (
        <TileView data={data} onClick={handleTileClick} setData ={setData}/>
      )
  )
}
      
      <ExpandedView item={selectedItem} open={expanded} onClose={() => setExpanded(false)} />
    </Container>
  );
};

const styles = {
  toggleButtonContainer: {
    textAlign: 'right',
    margin: '20px 0',
 
  },
  toggleButton: {
    padding: '10px 20px',
       textTransform: "capitalize",
    fontSize: '16px',
    color:"#000",
    cursor: 'pointer',
  },
};

export default Home;

