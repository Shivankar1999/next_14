'use client'
import React from 'react';
import { Backdrop, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from 'framer-motion';

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { opacity: 0, y: '-50%', x: '-50%', scale: 0.8 },
  visible: { opacity: 1, y: '-50%', x: '-50%', },
};

const ExpandedView = ({ item, open, onClose }) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          style={styles.backdrop}
          onClick={onClose}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3 }}
            style={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <IconButton style={styles.closeButton} onClick={onClose}>
              <CloseIcon />
            </IconButton>
            <Typography variant="h4" gutterBottom>
              {item.name}
            </Typography>
            <Typography variant="body1" sx={{mb:.5}}>
              <strong>Email:</strong> {item.email}
            </Typography>
            <Typography variant="body1" sx={{mb:.5}}>
              <strong>Phone:</strong> {item.phone}
            </Typography>
            <Typography variant="body1" sx={{mb:.5}}>
              <strong>Company:</strong> {item.company.name}
            </Typography>
            <Typography variant="body1" sx={{mb:.5}}>
              <strong>Website:</strong> {item.website}
            </Typography>
            <Typography variant="body1" sx={{mb:.5}}>
              <strong>Address:</strong> {`${item.address.street}, ${item.address.city}`}
            </Typography>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const styles = {
    backdrop: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1300,
    },
    modal: {
      position: 'fixed',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#fff',
      padding: '40px',
      borderRadius: '8px',
      width: '400px',
      textAlign: 'left',
      zIndex: 1400,
    },
    closeButton: {
      position: 'absolute',
      top: '10px',
      right: '10px',
    },
  };
  

export default ExpandedView;
