import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material/';
import mobile from '../img/mobile.png';
import store from '../img/store.jpg';
import mobile2 from '../img/mobile2.png';
import fb from '../img/facebook.png';
import yt from '../img/youtube.png';
import ig from '../img/instagram.png';
import ld from '../img/linkedin.png';
import wa from '../img/whatsapp.png';
import tw from '../img/twitter.png';

const Bottom = () => {
  return (
    <Box sx={{ bgcolor: '#f4f5fa' }}>
      <Box sx={{ pt: '20px' }}>
        <Grid container sx={{}}>
          <Grid
            item
            lg={5}
            md={5}
            sm={10}
            xs={10}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-around',
                flexDirection: 'row',
              }}
            >
              <Box>
                <Typography sx={{ fontWeight: '800', fontSize: '40px' }}>
                  Download our <br /> mobile app
                </Typography>
                <Typography sx={{ fontSize: '12px' }}>
                  The first list that you seen on the
                  <br /> next screen is your last
                </Typography>
              </Box>
              <Box sx={{ width: 'auto' }}>
                <img src={store} style={{ width: '150px' }} />
              </Box>
            </Box>
            {/* icon_____________________________ */}
            <Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
                <Box sx={{}}>
                  <img
                    src={fb}
                    style={{
                      width: '20px',
                      backgroundColor: 'white',
                      padding: '20px',
                      borderRadius: '20px',
                    }}
                  />
                </Box>
                <Box sx={{}}>
                  <img
                    src={tw}
                    style={{
                      width: '20px',
                      backgroundColor: 'white',
                      padding: '20px',
                      borderRadius: '20px',
                    }}
                  />
                </Box>
                <Box sx={{}}>
                  <img
                    src={ld}
                    style={{
                      width: '20px',
                      backgroundColor: 'white',
                      padding: '20px',
                      borderRadius: '20px',
                    }}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  ml: '150px',
                  display: 'flex',
                  justifyContent: 'space-around',
                }}
              >
                <Box sx={{}}>
                  <img
                    src={ig}
                    style={{
                      width: '20px',
                      backgroundColor: 'white',
                      padding: '20px',
                      borderRadius: '20px',
                    }}
                  />
                </Box>
                <Box sx={{ ml: '100px' }}>
                  <img
                    src={wa}
                    style={{
                      width: '20px',
                      backgroundColor: 'white',
                      padding: '20px',
                      borderRadius: '20px',
                    }}
                  />
                </Box>
                <Box sx={{ ml: '100px' }}>
                  <img
                    src={yt}
                    style={{
                      width: '20px',
                      backgroundColor: 'white',
                      padding: '20px',
                      borderRadius: '20px',
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid item lg={5} md={5} sm={10} xs={10}>
            <Box
              sx={{
                mt: { lg: '-100px', md: '-100px', sm: '10px', xs: '10px' },
                width: '100%',
                height: 'auto',
              }}
            >
              <img src={mobile2} style={{ height: 'auto', width: '100%' }} />
            </Box>
          </Grid>
        </Grid>
      </Box>
      ;
    </Box>
  );
};

export default Bottom;
