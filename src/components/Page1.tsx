import React from 'react'
import { Button, Grid, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import './style.css'
import arrow from './images/arrow.png';
import bot from './images/bot.png';
import grid from './images/grid.png';
import school from './images/school.png';
import skype from './images/skype.png';
import slack from './images/slack.png';
import CheckIcon from '@mui/icons-material/Check';
import file from "./images/file.png"

const Page1 = () => {
    return (
        <>
            <Container>

                {/* -------------------------First page----------------------------------------------------------- */}
                <Grid container sx={{ mt: 18 }}>
                    <Grid item lg={3} md={3} sm={12} xs={12}></Grid>

                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Typography sx={{ fontSize: '40px', textAlign: "center", fontWeight: 650 }} variant='h3'>Remotely maintain your data, from anywhere, anytime.</Typography>
                        <Typography sx={{ color: "#424242", textAlign: 'center', mt: 5 }}>There are many variations of passages of lorem ipsum available, but the majority have suffred alteration in some form.</Typography>
                    </Grid>

                    <Grid item lg={3} md={3} sm={12} xs={12}></Grid>
                </Grid>

                <Grid container sx={{ mt: 5 }} spacing={15}>
                    <Grid item lg={1} md={1} sm={12} xs={12}></Grid>

                    <Grid item lg={5} md={5} sm={12} xs={12} sx={{ padding: '10px' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Box>
                                <img src={slack} alt="slack" />
                            </Box>
                            <Box>
                                <img src={grid} alt="grid" />
                            </Box>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                            <img src={bot} alt="bot" />
                        </Box>
                    </Grid>

                    <Grid item lg={5} md={5} sm={12} xs={12} >
                        <Box sx={{ display: 'flex', justifyContent: 'center', }}>
                            <img src={school} alt="bot" />
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 5 }}>
                            <Box>
                                <img src={skype} alt="slack" />
                            </Box>
                            <Box>
                                <img src={arrow} alt="grid" />
                            </Box>
                        </Box>

                    </Grid>


                    <Grid item lg={1} md={1} sm={12} xs={12}></Grid>

                </Grid>


                {/* -----------------------------------Second Page--------------------------------------------------- */}
                <Grid container sx={{}} spacing={6}>
                    {/* <Grid item lg={1} md={1} sm={12} xs={12}></Grid> */}

                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: "120%", width: "100%", padding: '10px' }} >
                            <Box className="hello" sx={{ 
                            // height: "60%", width: '60%',
                            display:{lg:"block", md:'block', sm:'flex', xs:"flex"}, flexDirection:'column' }}>
                                <Grid container spacing={5}>
                                    <Grid item lg={6} md={6} sm={12} xs={12}>
                                        <Box className="box-card1" sx={{position:{lg:"static", md:"absolute", sm:'static', xs:'static'}, left:{lg:'-60px', md:'-60px', sm:'0px', xs:'0px'}}}>
                                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                                                <Box sx={{ backgroundColor: '#DBA800', height: '60px', width: '60px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
                                                    <CheckIcon />
                                                </Box>
                                            </Box>
                                            <Typography sx={{ color: "#424242", textAlign: 'center', mt: 5, fontSize: '18px' }}>Payment Pending</Typography>
                                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                                                <Box sx={{ height: '20px', width: '70%', background: 'rgb(218, 218, 218)', mt: 2 }}></Box>
                                            </Box>
                                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                                                <Box sx={{ height: '20px', width: '70%', background: 'rgb(218, 218, 218)', mt: 2 }}></Box>
                                            </Box>
                                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                                                <Box sx={{ height: '20px', width: '70%', background: 'rgb(218, 218, 218)', mt: 2, md: 3 }}></Box>
                                            </Box>



                                            <Button sx={{ mt: 5 }} variant="contained">See Details</Button>

                                        </Box>
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={12} xs={12}>
                                        <Box className="box-card2">
                                            <Box >
                                                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                    <Box sx={{ height: '60px', width: '60px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
                                                        <img style={{ width: '100%', height: '100%', borderRadius: '50%', }} src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg&_gl=1*1meyv0q*_ga*ODI4Mjg2NjU5LjE2NjczMTAwNjY.*_ga_8JE65Q40S6*MTY2NzM4MzU1Ni4zLjEuMTY2NzM4MzU2My4wLjAuMA.." alt="man" />
                                                    </Box>
                                                </Box>
                                                <Typography sx={{ textAlign: 'center', mt: 3, fontSize: '18px' }}>John Marbella</Typography>
                                                <Typography sx={{ color: "#424242", textAlign: 'center', fontSize: '15px' }}>Transfer was successfull</Typography>

                                                <Typography sx={{ color: '#1976d2', textAlign: 'center', mt: 3, fontSize: '15px' }}>See Invoice</Typography>
                                            </Box>
                                        </Box>


                                        <Box className="box-card3">
                                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                                                <Box sx={{ backgroundColor: "white", height: '60px', width: '60px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#1976d2' }}>
                                                    <CheckIcon />
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Typography sx={{ textAlign: 'center', mt: 3, fontSize: '22px', color: 'white', }}>DEF Limited</Typography>
                                                <Typography sx={{ color: "white", textAlign: 'center', fontSize: '15px' }}>You received transfer from Automic bank</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Typography variant='h6' sx={{ color: '#1976d2', letterSpacing: '5px', mb: 5, fontWeight: 600 }}>EASY AND FASTER</Typography>
                        <Typography sx={{ fontSize: '40px', fontWeight: 650 }} variant='h3'>we provide excellent management services.</Typography>

                        <Typography sx={{ color: "#424242", mt: 5 }}>There are many variations of passages of lorem ipsum available, but the majority have suffred alteration in some form. There are many variations of passages of lorem ipsum available, but the majority have suffred alteration in some form.</Typography>

                        <Typography sx={{ color: "#424242", mt: 5 }}>There are many variations of passages of lorem ipsum available, but the majority have suffred alteration in some form. There are many variations of passages of lorem ipsum available, but the majority have suffred alteration in some form.</Typography>
                    </Grid>

                    {/* <Grid item lg={1} md={1} sm={12} xs={12}></Grid> */}

                </Grid>

                {/* -------------------------------Third page------------------------------------------------------------ */}
                <Grid container sx={{ mt: 15 }} spacing={10}>
                    {/* <Grid item lg={1} md={1} sm={12} xs={12}></Grid> */}
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Typography variant='h6' sx={{ color: '#1976d2', letterSpacing: '5px', mb: 5, fontWeight: 600 }}>WEB PLATEFORM</Typography>
                        <Typography sx={{ fontSize: '40px', fontWeight: 650 }} variant='h3'>Customer satisfactoion, our primary goal.</Typography>

                        <Typography sx={{ color: "#424242", mt: 5 }}>There are many variations of passages of lorem ipsum available, but the majority have suffred alteration in some form. There are many variations of passages of lorem ipsum available, but the majority have suffred alteration in some form.</Typography>

                        <Typography sx={{ color: "#424242", mt: 5 }}>There are many variations of passages of lorem ipsum available, but the majority have suffred alteration in some form. There are many variations of passages of lorem ipsum available, but the majority have suffred alteration in some form.</Typography>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>
                        <Box sx={{ width: '100%', height: '100%' }}>
                            <img style={{ height: '100%', width: '100%' }} src={file} alt="file" />
                        </Box>
                    </Grid>
                    {/* <Grid item lg={1} md={1} sm={12} xs={12}></Grid> */}

                </Grid>


            </Container>
        </>
    )
}

export default Page1