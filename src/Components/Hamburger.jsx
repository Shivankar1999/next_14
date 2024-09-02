'use client'
import React, { useState } from 'react';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { IconButton, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion, AnimatePresence } from 'framer-motion';
import HorizontalMenu from './HorizontalMenu';

const menuVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -20 },
};

const subMenuVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: 'auto', transition: { duration: 0.3 } },
};

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    setIsSubMenuOpen(false); // Close sub-menu when main menu is toggled
  };

  const toggleSubMenu = () => {
    setIsSubMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div className='flex'>
        <div className='mr-auto'>
          <IconButton onClick={toggleMenu}>
            {isOpen ? <ArrowCircleLeftIcon /> : <MenuIcon />}
          </IconButton>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={menuVariants}
                transition={{ duration: 0.3 }}
                style={styles.menuContainer}
              >
                <MenuItem onClick={toggleMenu}  sx={{color:"#000",mx:{xs:.5,md:2}, fontSize: { xs: '0.65rem', sm: '1rem' }}}>Dashboard</MenuItem>
                <MenuItem onClick={toggleMenu}  sx={{color:"#000",mx:{xs:.5,md:2}, fontSize: { xs: '0.65rem', sm: '1rem' }}}>Profile</MenuItem>
                <MenuItem onClick={toggleSubMenu}  sx={{color:"#000",mx:{xs:.5,md:2}, fontSize: { xs: '0.65rem', sm: '1rem' }}}>
                  Services
                </MenuItem>
                <AnimatePresence>
                  {isSubMenuOpen && (
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={subMenuVariants}
                      transition={{ duration: 0.3 }}
                      style={styles.subMenuContainer}
                    >
                      <MenuItem onClick={toggleMenu}  sx={{color:"#000",mx:{xs:.5,md:2}, fontSize: { xs: '0.65rem', sm: '1rem' }}}>Service 1</MenuItem>
                      <MenuItem onClick={toggleMenu}  sx={{color:"#000",mx:{xs:.5,md:2}, fontSize: { xs: '0.65rem', sm: '1rem' }}}>Service 2</MenuItem>
                    </motion.div>
                  )}
                </AnimatePresence>
                <MenuItem onClick={toggleMenu}  sx={{color:"#000",mx:{xs:.5,md:2}, fontSize: { xs: '0.65rem', sm: '1rem' }}}>Settings</MenuItem>
                <MenuItem onClick={toggleMenu}  sx={{color:"#000",mx:{xs:.5,md:2}, fontSize: { xs: '0.65rem', sm: '1rem' }}}>Logout</MenuItem>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <HorizontalMenu />
      </div>
    </>
  );
};

const styles = {
  menuContainer: {
    position: 'absolute',
    top: '60px',
    left: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
    borderRadius: '8px',
    overflow: 'hidden',
    zIndex: 1000,
  },
  subMenuContainer: {
    paddingLeft: '20px',
    backgroundColor: '#f9f9f9', // Optional: to differentiate sub-menu

  },
};

export default Hamburger;
