'use client'
import React, { useState } from 'react';
import { Card, CardContent, Typography, IconButton, Alert } from '@mui/material';
import { Edit, Flag, Delete } from '@mui/icons-material';
import { motion } from 'framer-motion';

const tileVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.1 },
  }),
  hover: { scale: 1.02, boxShadow: '0px 8px 24px rgba(0,0,0,0.2)' },
};

const TileView = ({ data, onClick ,setData}) => {
  const [remove, setremove] = useState(false)
  return (
    <>
   {remove &&  <Alert  severity="info" >
  Student is removed!
</Alert>}
<div style={styles.tileContainer}>
      {data.map((item, index) => (
        <motion.div
          key={item.id}
          custom={index}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          variants={tileVariants}
          onClick={() => onClick(item)}
        >
          <Card style={styles.card}>
            <CardContent>
              <Typography variant="h6">{item.name}</Typography>
              <Typography variant="body2">{item.email}</Typography>
              <div style={styles.iconContainer}>
                <IconButton aria-label="edit">
                  <Edit />
                </IconButton>
                <IconButton aria-label="flag">
                  <Flag />
                </IconButton>
                <IconButton aria-label="delete" onClick={(event) => {
                       event.stopPropagation(); // Prevents the click event from propagating to parent elements
                       let res =  data.filter((d)=> d?.id !== item.id)
                        setData([...res])
                        setremove(true)
                        setTimeout(()=>{
                          setremove(false)
                        },2000)
                       }}>
                  <Delete />
                </IconButton>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
    </>
    
  );
};

const styles = {
  tileContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    padding: '20px',
    // justifyContent: {xs:"center",md:"flex-start"}
  },
  card: {
    width: '200px',
    height: "150px",
    cursor: 'pointer',
  },
  iconContainer: {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'space-around',
  },
};

export default TileView;
