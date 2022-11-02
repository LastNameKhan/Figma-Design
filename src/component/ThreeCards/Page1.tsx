import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import React from "react";

function Page1(){
    return(
        <Grid container  sx={{backgroundColor:"#f4f5fa",height:"500px"}}>
            <Grid item lg={2} sm={2} md={2} xs={2} xl={2}></Grid>
            <Grid item lg={8} sm={12} md={12} xs={12} >
                <Box  sx={{marginTop:"100px"}}>
                    <Typography sx={{fontSize:"40px"}}>Experiance with perfection</Typography>
                    <Typography sx={{fontSize:"20px",color:"gray"}}>Heart of perfect bussiness management</Typography>
                </Box>
              <Grid container>
                <Grid item lg={4} md={12} sm={12} xs={12}>
                    <Box>
                        <img style={{width:100,marginTop:"60px",borderRadius:"60px"}} src="https://img.icons8.com/external-color-outline-adri-ansyah/2x/external-awards-awards-color-outline-adri-ansyah-52.png" alt=""/> 
                        <Typography sx={{fontSize:"25px",fontWeight:"bold",marginTop:"20px"}}>Work Best</Typography>
                        <Typography sx={{fontSize:"13px",color:"gray",marginTop:"5px"}}>recore podcast as</Typography>
                        <Typography sx={{fontSize:"13px",color:"gray"}}>creavity as possible</Typography>
                    </Box>
                </Grid>
                <Grid item lg={4} md={12} sm={12} xs={12}>
                    <Box>
                    <img style={{width:100,marginTop:"60px",borderRadius:"100px"}} src="https://img.icons8.com/nolan/2x/christmas-star.png" alt=""/> 
                        <Typography sx={{fontSize:"25px",fontWeight:"bold",marginTop:"20px"}}>Work Better</Typography>
                        <Typography sx={{fontSize:"13px",color:"gray",marginTop:"5px"}}>recore podcast as</Typography>
                        <Typography sx={{fontSize:"13px",color:"gray"}}>creavity as possible</Typography>
                    </Box>
                </Grid>
                <Grid item lg={4} md={12} sm={12} xs={12}>
                    <Box>
                    <img style={{width:100,marginTop:"60px",borderRadius:"60px"}} src="https://image.shutterstock.com/image-vector/golden-seal-ribbons-isolated-on-260nw-1210311619.jpg" alt=""/> 
                        <Typography sx={{fontSize:"25px",fontWeight:"bold",marginTop:"20px"}}>Work Easier</Typography>
                        <Typography sx={{fontSize:"13px",color:"gray",marginTop:"5px"}}>recore podcast as</Typography>
                        <Typography sx={{fontSize:"13px",color:"gray"}}>creavity as possible</Typography>
                    </Box>
                </Grid>
              </Grid>
               </Grid>
            <Grid item lg={2} sm={2} md={2} xs={2} xl={2}></Grid>
        </Grid>
    )
}
export default Page1;