'use client'
import React from 'react';
import { Box, Button } from '@mui/material';

const HorizontalMenu = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: 'space-around' }}>
      <Button variant="text" sx={{color:"#000",mx:{xs:.5,md:2}, fontSize: { xs: '0.65rem', sm: '1rem' }}} size='small'>Home</Button>
      <Button variant="text" sx={{color:"#000",mx:{xs:.5,md:2}, fontSize: { xs: '0.65rem', sm: '1rem' }}} size='small'>About</Button>
      <Button variant="text" sx={{color:"#000",mx:{xs:.5,md:2}, fontSize: { xs: '0.65rem', sm: '1rem' }}} size='small'>Services</Button>
      <Button variant="text" sx={{color:"#000",mx:{xs:.5,md:2}, fontSize: { xs: '0.65rem', sm: '1rem' }}} size='small'>Contact</Button>
    </Box>
  );
};

export default HorizontalMenu;
