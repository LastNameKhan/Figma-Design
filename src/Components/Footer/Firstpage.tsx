import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import Grid from '@mui/material/Grid';
import './Firstpage.css';

const Firstpage = () => {
  return (
   <>
   <Box sx={{backgroundColor:'#289ff3',width:'100%',minHeight:'30vh'}}>
    <Box sx={{padding:{lg:'5em 0em 1em 0em',md:'5em 0em 1em 0em',sm:'5em 1em 1em 1em',xs:'5em 1em 1em 1em'}}}>
  
    <Box sx={{color:'#f7fbff',textAlign:'center'}}>
        <Typography sx={{fontSize:{lg:'2em',md:'2em',sm:'1.6em',xs:'1.6em'}}}>Remotely  maintain your data,</Typography>
        <Typography sx={{fontSize:{lg:'2em',md:'2em',sm:'1.6em',xs:'1.6em'}}}>from anywhere, anytime.</Typography>
    </Box>
    <Box sx={{color:'#f7fbff',textAlign:'center',margin:"2em auto"}}>
        <Typography>There are many  variation of passes of Lorem ipsum dolor sit  </Typography>
        <Typography>amet consectetur adipisicing elit consequuntur.</Typography>
        <Box sx={{margin:'2em'}}>
            <Button id='btndownload' >Download Now</Button>
        </Box>
    </Box>
    </Box>
   </Box>
   
   </>
  )
}

export default Firstpage