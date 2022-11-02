import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function Mobile(){
    return(
        <>
       <Grid container>
        <Grid item lg={1} sm={1} md={1} xs={1}></Grid>
        <Grid item lg={10} sm={10} md={10} xs={10}>
            <Box sx={{display:'flex',flexDirection:'row', justifyContent:'space-around',flexWrap:{lg:'nowrap',md:'nowrap',sm:'wrap',xs:'wrap'}}}>
            <Box sx={{display:'flex',flexDirection:'column', justifyContent:'flex-start',marginTop:"200px",textAlign:'left'}}>
            <Typography sx={{fontSize:"15px",color:"skyblue",fontWeight:"bold"}}>WALLET PAGE</Typography>
            <Typography sx={{fontSize:"40px"}}>Customer Satisfacton,</Typography>
            <Typography sx={{fontSize:"40px"}}>Our primary goal</Typography>
            <Typography sx={{fontSize:"10px",marginTop:"50px"}}>To install the Material Icons font in your project using the Google Web Fonts CDN, add the following code snippet inside your project's</Typography>
            <Typography sx={{fontSize:"10px"}}>To install the Material Icons font in your project using the Google Web Fonts CDN, add the following code snippet inside your project's</Typography>
           <Button sx={{marginTop:"50px",width:"100px"}} variant="outlined">Download</Button>
            </Box>
            <Box sx={{width:'auto'}}>
            <img src={require("./image/1.png")} style={{width:"500px",height:"100%",marginTop:"100px"}} alt=""/>
        </Box>
            </Box>
        <Grid item lg={5} sm={10} md={5} xs={10}>
        </Grid>
        </Grid>
        <Grid item lg={1} sm={1} md={1} xs={1}></Grid>
       </Grid>


       <Grid container>
        <Grid item lg={1} sm={1} md={1} xs={1}></Grid>
        <Grid item lg={10} sm={10} md={10} xs={10}>
            <Box sx={{display:'flex',flexDirection:'row', justifyContent:'space-around',flexWrap:{lg:'nowrap',md:'nowrap',sm:'wrap',xs:'wrap'}}}>
            <img src={require("./image/2.png")} style={{width:"500px",height:"100%",marginTop:"100px"}} alt=""/>
            <Box sx={{width:'auto'}}>
            <Box sx={{display:'flex',flexDirection:'column', justifyContent:'flex-start',marginTop:"150px",textAlign:'left'}}>
            <Typography sx={{fontSize:"15px",color:"skyblue",fontWeight:"bold"}}>CLOUD STORAGE PAGE</Typography>
            <Typography sx={{fontSize:"40px"}}>Managment makes </Typography>
            <Typography sx={{fontSize:"40px"}}>you work easier</Typography>
            <Typography sx={{fontSize:"10px",marginTop:"50px"}}>To install the Material Icons font in your project using the Google Web Fonts CDN, add the following code snippet inside your project's</Typography>
            <Typography sx={{fontSize:"10px"}}>To install the Material Icons font in your project using the Google Web Fonts CDN, add the following code snippet inside your project's</Typography>
           <Button sx={{marginTop:"50px",width:"100px"}} variant="contained">Download</Button>
            </Box>
        </Box>
            </Box>
        </Grid>
        <Grid item lg={1} sm={1} md={1} xs={1}></Grid>
       </Grid>
      

       <Grid container>
        <Grid item lg={1} sm={1} md={1} xs={1}></Grid>
        <Grid item lg={10} sm={10} md={10} xs={10}>
            <Box sx={{display:'flex',flexDirection:'row', justifyContent:'space-around',flexWrap:{lg:'nowrap',md:'nowrap',sm:'wrap',xs:'wrap'}}}>
            <Box sx={{display:'flex',flexDirection:'column', justifyContent:'flex-start',marginTop:"200px",textAlign:'left'}}>
            <Typography sx={{fontSize:"15px",color:"skyblue",fontWeight:"bold"}}>WALLET PAGE</Typography>
            <Typography sx={{fontSize:"40px"}}>Customer Satisfacton,</Typography>
            <Typography sx={{fontSize:"40px"}}>Our primary goal</Typography>
            <Typography sx={{fontSize:"10px",marginTop:"50px"}}>To install the Material Icons font in your project using the Google Web Fonts CDN, add the following code snippet inside your project's</Typography>
            <Typography sx={{fontSize:"10px"}}>To install the Material Icons font in your project using the Google Web Fonts CDN, add the following code snippet inside your project's</Typography>
           <Button sx={{marginTop:"50px",width:"100px"}} variant="outlined">Download</Button>
            </Box>
            <Box sx={{width:'auto'}}>
            <img src={require("./image/3.png")} style={{width:"500px",height:"100%",marginTop:"10px"}} alt=""/>
        </Box>
            </Box>
        <Grid item lg={5} sm={10} md={5} xs={10}>
        </Grid>
        </Grid>
        <Grid item lg={1} sm={1} md={1} xs={1}></Grid>
       </Grid>
       </>
    )
}
export default Mobile;