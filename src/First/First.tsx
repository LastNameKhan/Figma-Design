import React, { useState } from 'react';
import { Box, Typography, Button, Grid } from '@mui/material/';
import './First.css';
import mobile from '../img/mobile.png';
import store from '../img/store.jpg';
import MenuIcon from '@mui/icons-material/Menu';

const First = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Box className="main">
        <Box
          position="static"
          className="banner"
          sx={{
            bgcolor: '#289ff3',
            display: 'flex',
            justifyContent: 'space-around',
            p: '20px',
          }}
        >
          <Box>
            <Typography
              className="icon"
              sx={{ color: 'white', fontSize: '25px', fontWeight: '600' }}
            >
              Automic.
            </Typography>
          </Box>
          <Box
            className="option"
            sx={{
              color: 'white',
              display: { lg: 'block', md: 'block', sm: 'none', xs: 'none' },
            }}
          >
            <Button>Home</Button>
            <Button>About Us</Button>
            <Button>Features</Button>
            <Button>Pages</Button>
            <Button>Pricing</Button>
          </Box>
          <Box
            className="mobile"
            sx={{
              display: { lg: 'none', md: 'none', sm: 'block', xs: 'block' },
            }}
          >
            <Button onClick={handleOpen} sx={{ color: 'white' }}>
              <MenuIcon />
            </Button>
          </Box>

          <Box className="cart">
            <Button>Download Now</Button>
          </Box>
        </Box>
        <Box sx={{ height: '100vh' }}>
          <Grid
            container
            sx={{
              bgcolor: '#289ff3',
              height: '400px',
              width: '100%',
              borderRadius: '0% 0% 90% 0%',
              pt: '20px',
              // borderRadius: '100% 0% 100% 0% / 0% 22% 78% 100% ',
            }}
          >
            <Grid item lg={1} md={1}></Grid>
            <Grid item lg={5} md={5} sm={12} xs={12}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  textAlign: {
                    lg: 'left',
                    md: 'center',
                    sm: 'center',
                    xs: 'center',
                  },
                  height: '600px',
                }}
              >
                <Box>
                  <Typography sx={{ color: 'white', ml: '10px' }}>
                    <Button
                      className="Newbtn"
                      sx={{
                        bgcolor: '#14d2b0',
                        color: 'white',
                        borderRadius: '40px',
                        m: '10px',
                        fontWeight: '600',
                      }}
                    >
                      New
                    </Button>
                    Digital <b>strategies products</b> and services.
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '50px',
                      color: 'white',
                      fontWeight: '600',
                    }}
                  >
                    Create your next <br /> mobile app landing <br /> page in
                    minutes.
                  </Typography>
                  <Typography sx={{ fontSize: '10px', color: 'white' }}>
                    expound actual teaching of the great explorer of the truth,{' '}
                    <br />
                    the master builder of human happiness. No one rejects
                  </Typography>
                </Box>
                {/* Download our app---------------------- */}
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: {
                      lg: 'row',
                      md: 'row',
                      sm: 'column',
                      xs: 'column',
                    },
                  }}
                >
                  <Box>
                    <Typography
                      sx={{
                        color: 'black',
                        fontSize: '30px',
                        fontWeight: '600',
                      }}
                    >
                      Download our <br /> mobile app
                    </Typography>
                    <Typography sx={{ fontSize: '10px', color: 'black' }}>
                      The first list that you see on the <br /> next screen is
                      our your last
                    </Typography>
                  </Box>
                  {/* Playstore-------------- */}
                  <Box sx={{ width: 'auto' }}>
                    <img src={store} style={{ width: '150px' }} />
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item lg={5} md={5} sm={12} xs={12}>
              <Box
                sx={{
                  width: '100%',
                  // width: 'auto',
                  mt: '-100px',
                  overflow: 'hidden',
                  flexWrap: 'wrap',
                  display: { lg: 'block', md: 'block', sm: 'none', xs: 'none' },
                }}
              >
                <img src={mobile} style={{ width: '100%' }} />
              </Box>
            </Grid>
            <Grid item lg={1} md={1}></Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default First;
