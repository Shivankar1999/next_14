'use-client'
import React from 'react';
import { Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 },
  }),
  hover: { scale: 1.05 },
};

const GridView = ({ data }) => {
  return (
    <div style={styles.gridContainer}>
      {data.map((item, index) => (
        <motion.div
          key={item.id}
          custom={index}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={itemVariants}
        >
          <Paper style={styles.paper}>
            <Typography variant="h6">{item.name}</Typography>
            <Typography variant="body2">{item.email}</Typography>
            <Typography variant="body2">{item.phone}</Typography>
            <Typography variant="body2">{item.company.name}</Typography>
          </Paper>
        </motion.div>
      ))}
    </div>
  );
};

const styles = {
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
    padding: '20px',
  },
  paper: {
    padding: '20px',
    textAlign: 'center',
  },
};

export default GridView;
