import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import Grid from '@mui/material/Grid';

const Footer = () => {
  return (
    <>
  <Box sx={{backgroundColor:'#ffffff'}}>
    <Container>
      <Grid container>
        <Grid item  lg={3} md={4} sm={6} xs={12} spacing={2}>
            <Typography sx={{fontWeight:'bold', fontSize:'2em',margin:'0.5em',display:'flex',justifyContent:{xs:'flex-start'},textAlign:{lg:'left',md:'left',sm:'left',xs:'center'},marginLeft:'1em'}}>Automic.</Typography>
            <Typography sx={{color:'#41a9f5',fontWeight:'bold', fontSize:'1.8em',marginBottom:'1em',display:'flex',justifyContent:{xs:'flex-start'},textAlign:{lg:'left',md:'left',sm:'left',xs:'left'},marginLeft:'0.8em'}}>We build startups from zero</Typography>
            <Typography sx={{fontWeight:'bold', fontSize:'1em',margin:'0.5em',display:'flex',justifyContent:{xs:'flex-start'},textAlign:{lg:'left',md:'left',sm:'left',xs:'center'},marginLeft:'1em'}}>Contact us</Typography>

            <Typography sx={{display:'flex',justifyContent:{xs:'flex-start'},textAlign:{lg:'left',md:'left',sm:'left',xs:'center'},marginLeft:'1em'}}>contact@company.com</Typography>
            <Typography sx={{display:'flex',justifyContent:{xs:'flex-start'},textAlign:{lg:'left',md:'left',sm:'left',xs:'center'},marginLeft:'1em'}}>020 -450 3456</Typography>
            <Typography sx={{fontWeight:'bold', fontSize:'1em',margin:'0.5em',display:'flex',justifyContent:{xs:'flex-start'},textAlign:{lg:'left',md:'left',sm:'left',xs:'center'},marginLeft:'1em'}}>Location </Typography>
            <Typography sx={{display:'flex',justifyContent:{xs:'flex-start'},textAlign:{lg:'left',md:'left',sm:'left',xs:'center'},marginLeft:'1em'}}>Worson, Poland </Typography>

        </Grid>
        <Grid item  lg={3} md={4} sm={6} xs={12}>
            <Typography sx={{fontWeight:'bold', fontSize:'1em',margin:'1em',display:'flex',justifyContent:{xs:'flex-start'},textAlign:{lg:'left',md:'left',sm:'left',xs:'center'}}}>Company</Typography>
            <Typography sx={{margin:'1em' ,display:'flex',justifyContent:{xs:'flex-start'},textAlign:{lg:'left',md:'left',sm:'left',xs:'center'}}}>Properties</Typography>

           <Typography sx={{margin:'1em' ,display:'flex',justifyContent:{xs:'flex-start'},textAlign:{lg:'left',md:'left',sm:'left',xs:'center'}}}>Carriers</Typography>
           <Typography sx={{margin:'1em' ,display:'flex',justifyContent:{xs:'flex-start'},textAlign:{lg:'left',md:'left',sm:'left',xs:'center'}}}>Blogs</Typography>
           <Typography sx={{margin:'1em' ,display:'flex',justifyContent:{xs:'flex-start'},textAlign:{lg:'left',md:'left',sm:'left',xs:'center'}}}>About us</Typography>
           <Typography sx={{margin:'1em' ,display:'flex',justifyContent:{xs:'flex-start'},textAlign:{lg:'left',md:'left',sm:'left',xs:'center'}}}>Blogs</Typography>
           <Typography sx={{margin:'1em' ,display:'flex',justifyContent:{xs:'flex-start'},textAlign:{lg:'left',md:'left',sm:'left',xs:'center'}}}>Pricing</Typography>
           <Typography sx={{margin:'1em' ,display:'flex',justifyContent:{xs:'flex-start'},textAlign:{lg:'left',md:'left',sm:'left',xs:'center'}}}>Partners</Typography>

        </Grid>
        <Grid item  lg={3} md={4} sm={6} xs={12}>
           <Typography sx={{fontWeight:'bold', fontSize:'1em',display:'flex',justifyContent:{xs:'flex-start'},textAlign:{lg:'left',md:'left',sm:'left',xs:'center'},margin:"1em"}}>Service</Typography>
           <Typography sx={{margin:'1em' ,display:'flex',justifyContent:{xs:'flex-start'},textAlign:{lg:'left',md:'left',sm:'left',xs:'center'}}}>Products</Typography>

           <Typography sx={{margin:'1em' ,display:'flex',justifyContent:{xs:'flex-start'},textAlign:{lg:'left',md:'left',sm:'left',xs:'center'}}}>Products Design</Typography>
           <Typography sx={{margin:'1em' ,display:'flex',justifyContent:{xs:'flex-start'},textAlign:{lg:'left',md:'left',sm:'left',xs:'center'}}}>Web Development</Typography>
           <Typography sx={{margin:'1em' ,display:'flex',justifyContent:{xs:'flex-start'},textAlign:{lg:'left',md:'left',sm:'left',xs:'center'}}}>User Testing</Typography>
           <Typography sx={{margin:'1em' ,display:'flex',justifyContent:{xs:'flex-start'},textAlign:{lg:'left',md:'left',sm:'left',xs:'center'}}}>Quality Assurance</Typography>
           <Typography sx={{margin:'1em' ,display:'flex',justifyContent:{xs:'flex-start'},textAlign:{lg:'left',md:'left',sm:'left',xs:'center'}}}>Cloud Application</Typography>
           <Typography sx={{margin:'1em' ,display:'flex',justifyContent:{xs:'flex-start'},textAlign:{lg:'left',md:'left',sm:'left',xs:'center'}}}>Mvp Development</Typography>
           <Typography sx={{margin:'1em' ,display:'flex',justifyContent:{xs:'flex-start'},textAlign:{lg:'left',md:'left',sm:'left',xs:'center'}}}>All Service</Typography>

        </Grid>

        <Grid item  lg={3} md={4} sm={6} xs={12}>
           <Typography sx={{fontWeight:'bold', fontSize:'1em',margin:'1em'}}>Workflow</Typography>
           <Typography sx={{margin:'1em' ,display:'flex',justifyContent:{xs:'flex-start'},textAlign:{lg:'left',md:'left',sm:'left',xs:'center'}}}>Startups</Typography>

           <Typography sx={{margin:'1em' ,display:'flex',justifyContent:{xs:'flex-start'},textAlign:{lg:'left',md:'left',sm:'left',xs:'center'}}}>Scaling </Typography>
           <Typography sx={{margin:'1em' ,display:'flex',justifyContent:{xs:'flex-start'},textAlign:{lg:'left',md:'left',sm:'left',xs:'center'}}}>Transformation</Typography>
           <Typography sx={{fontWeight:'bold', fontSize:'1em',display:'flex',justifyContent:{xs:'flex-start'},textAlign:{lg:'left',md:'left',sm:'left',xs:'center'},margin:"1em"}}>Technology</Typography>
           <Typography sx={{margin:'1em' ,display:'flex',justifyContent:{xs:'flex-start'},textAlign:{lg:'left',md:'left',sm:'left',xs:'center'}}}>React </Typography>
           <Typography sx={{margin:'1em' ,display:'flex',justifyContent:{xs:'flex-start'},textAlign:{lg:'left',md:'left',sm:'left',xs:'center'}}}>Node JS</Typography>
           <Typography sx={{margin:'1em' ,display:'flex',justifyContent:{xs:'flex-start'},textAlign:{lg:'left',md:'left',sm:'left',xs:'center'}}}>Angular</Typography>
       

        </Grid>

        </Grid>

        <Box sx={{width:'85%',borderTop:'1px  solid #E5E5E5',margin:'1em',minHeight:"10vh"}}>
          <Box sx={{display:'flex',justifyContent:'space-between',height:'8vh',flexDirection:{lg:'row',md:'row',sm:'column',xs:'column'}}}>
          <Typography sx={{padding:"1em",margin:'1em',textAlign:{xs:'center'}}}>©2020 uihut.com</Typography>
          <Box sx={{display:'flex',flexDirection:'row',justifyContent:{xs:'space-around'}}}>
            <Typography sx={{margin:"1em" ,padding:"1em"}}>Privacy Statement</Typography>
            <Typography  sx={{margin:"1em",padding:"1em"}}>terms and Conditions</Typography>
          </Box>
          </Box>
       
        </Box>



        </Container>
        </Box>
    </>

  )
}

export default Footer