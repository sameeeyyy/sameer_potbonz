import React from 'react';
import Box from '@mui/material/Box';
import { Container, CardMedia, Grid, Typography, styled, TextField, Button, useTheme } from '@mui/material';
import customTheme from '../theme'

export default function Newsletter() {

  const Heading = styled(Typography)(({ theme }) => ({
    fontFamily: customTheme.fonts.nunito,
    fontSize: '46px',
    lineHeight: '46px',
    fontWeight: '800',
    letterSpacing: "unset",
    color: customTheme.color.bgWhite,
    padding: "0 40px",
    textAlign: "center",
    marginBottom: "15px",
    zIndex: "1",
    position: "relative",
    [theme.breakpoints.up('xs')]: {
      fontSize: '32px',
      lineHeight: '32px',
      padding: "0 0px",
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '46px',
      lineHeight: '46px',
      padding: "0 40px",
    },
    [theme.breakpoints.up('lg')]: {
      width: "100%",
      maxWidth: "844px",
      margin: "0 auto 15px"
    },
  }));

  const Paragraph = styled(Typography)(({ theme }) => ({
    fontFamily: customTheme.fonts.lato,
    color: customTheme.color.bgWhite,
    fontSize: '18px',
    lineHeight: '25px',
    fontWeight: '400',
    letterSpacing: "unset",
    width: "100% !important", 
    maxWidth: "651px",
    margin: "0 auto",
    zIndex: "1",
    position: "relative",
    [theme.breakpoints.up('xs')]: {
      fontSize: '16px',
      lineHeight: '22px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '18px',
      lineHeight: '25px',
    },
  }));

  // For newsletter form
  const NewsletterContainer = styled('div')`
    display: flex;
    gap: 10px;
    align-items: flex-start;
    justify-content: center;
    margin-top: 40px;
    z-index: 1;
    position: relative;
  `;
  const WhiteBorderedTextField = styled(TextField)`
    width: 100%;
    max-width: 319px;
    height: 70px;
    border-radius: 8px;
    color: #FBF9FF;
    font-size: 16px;
    font-family: Lato;
    line-height: 23px;

    .MuiOutlinedInput-root, 
    .css-1d3z3hw-MuiOutlinedInput-notchedOutline, 
    .css-1d3z3hw-MuiOutlinedInput-notchedOutline:hover {
      border-color: white !important;
    }
    .MuiOutlinedInput-input {
      color: white;
      padding: 24px;
      height: 22px;
      &::placeholder {
        color: white;
      }
      &:focus {
        color: white;
      }
    }
    .MuiInputLabel-root {
      color: white;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 24px;
      transition: all 0.3s;
      &.Mui-focused {
        color: white;
        top: -7px;
        left: 15px;
        font-size: 12px;
        transform: none;
      }
    }
  `;
  const YellowButton = styled(Button)`
    font-family: 'Nunito Variable';
    background-color: #FFDA47;
    color: black;
    width: 133px;
    height: 70px;
    border-radius: 8px;
    text-transform: capitalize;
    padding: 20px;
    margin-left: 20px;
    color: #0E081E;
    font-size: 20px;
    line-height: 30px;
    font-weight: 800;
    &:hover,
    &:active {
      background-color: yellow;
      color: black;
    }
  `;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const theme = useTheme();

  return (
    <Box sx={{
        [theme.breakpoints.up('xs')]: {
          padding: "120px 0 74px",
        },
        [theme.breakpoints.up('lg')]: {
          padding: "76px 0 74px",
        },
      }}>
      <Container sx={{maxWidth: "1418px !important"}}>
        <Box sx={{backgroundImage: "url(Assets/images/newsletterBg.jpg)", 
                  backgroundRepeat: "no-repeat", 
                  backgroundPosition: "center", 
                  borderRadius: "8px",
                  padding: "120px 40px",
                  overflow: "visible",
                  position: "relative",
                  [theme.breakpoints.up('xs')]: {
                    padding: "120px 20px 140px",
                    backgroundSize: "cover",
                    backgroundPosition: "right bottom", 
                  },
                  [theme.breakpoints.up('md')]: {
                    padding: "120px 40px",
                    backgroundSize: "100% 100%",
                    backgroundPosition: "center", 
                  },
                }}>
          <Grid container spacing={2} sx={{margin: "0px", alignItems: "center", justifyContent: "center", width: "100%"}}>
            <Grid item sx={{padding: "0px !important"}}>
              <Grid container sx={{alignItems: "center", textAlign: "center", width: "fit-content"}}>
                <Grid item>
                  <CardMedia
                      component= "img"
                      alt= ""
                      image= "Assets/images/newsletterDisplay1.png"
                      sx={{
                        position: "absolute",
                        width: "423px",
                        height: "310px",
                        bottom: "25px",
                        left: "0px",
                        transformOrigin: "left bottom",
                        [theme.breakpoints.up('xs')]: {
                          bottom: "unset",
                          top: "0px",
                          transform: "scale(0.5)  translateX(-30%) translateY(-130%)"
                        },
                        [theme.breakpoints.up('md')]: {
                          bottom: "unset",
                          top: "0px",
                          transform: "scale(0.7) translateX(-30%) translateY(-70%)"
                        },
                        [theme.breakpoints.up('lg')]: {
                            top: "unset",
                            transform: "scale(0.7) translateY(0) translateX(-30%)"
                        },
                        [theme.breakpoints.up('xl')]: {
                            transform: "scale(1) translateX(-30%)"
                        },
                      }}  
                  />
                </Grid>
                <Grid item xs={12}>
                  <Heading variant='h2'>Get 20% Off Your First Purchase When You Use Petco Credit Card </Heading>
                  <Paragraph>Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit.</Paragraph>
                </Grid>
                <Grid item xs={12}>
                  <form onSubmit={handleSubmit}>
                    <NewsletterContainer sx={{
                      [theme.breakpoints.up('xs')]: {
                        gap: "0px"
                      },
                      [theme.breakpoints.up('sm')]: {
                        gap: "10px"
                      },
                    }}>
                      <WhiteBorderedTextField
                        id="email"
                        label="Email Address"
                        variant="outlined"
                        fullWidth
                        InputLabelProps={{
                          className: 'white-placeholder',
                        }}
                        InputProps={{
                          classes: {
                            root: 'white-placeholder',
                          },
                        }}
                      />
                      <YellowButton type="submit" variant="contained" sx={{
                        [theme.breakpoints.up('xs')]: {
                          fontSize: "16px",
                          lineHeight: "30px"
                        },
                        [theme.breakpoints.up('sm')]: {
                          fontSize: "20px",
                          lineHeight: "30px"
                        },
                      }}>
                        Subscribe
                      </YellowButton>
                    </NewsletterContainer>
                  </form>
                </Grid>
                <Grid item>
                  <CardMedia
                      component= "img"
                      alt= ""
                      image= "Assets/images/newsletterDisplay2.png"
                      sx={{
                        position: "absolute",
                        width: "341px",
                        height: "317px",
                        right: "0px",
                        bottom: "51px",
                        transformOrigin: "right bottom",
                        [theme.breakpoints.up('xs')]: {
                          transform: "scale(0.5) translateY(50%)  translateX(30%)"
                        },
                        [theme.breakpoints.up('md')]: {
                          bottom: "0px",
                          transform: "scale(0.7) translateX(30%) translateY(30%)"
                        },
                        [theme.breakpoints.up('lg')]: {
                            bottom: "51px",
                            transform: "scale(0.7) translateX(0)"
                        },
                        [theme.breakpoints.up('xl')]: {
                            transform: "scale(1)"
                        },
                      }}  
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
