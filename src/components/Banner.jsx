import React from 'react';
import { Box, Container, Grid, Typography, CardMedia, styled, useTheme } from '@mui/material';
import customTheme from '../theme'
import BannerFeature from './uicomponents/BannerFeature';
import { QueryClient, QueryClientProvider } from 'react-query';


// UI Components


export default function Banner() {
  const TagLine = styled(Typography)(({ theme }) => ({
    fontFamily: customTheme.fonts.nunito,
    fontSize: '16px',
    lineHeight: '19px',
    fontWeight: '700',
    color: customTheme.color.tagColor,
    textTransform: "uppercase",
    [theme.breakpoints.up('xs')]: {
      color: customTheme.color.headingColor,
      zIndex: "1",
      position: "relative"
    },
    [theme.breakpoints.up('md')]: {
      color: customTheme.color.tagColor,
      zIndex: "0",
      position: "relative"
    },
  }));

  const Heading = styled(Typography)(({ theme }) => ({
    fontFamily: customTheme.fonts.nunito,
    fontSize: '68px',
    lineHeight: '71px',
    fontWeight: '800',
    color: customTheme.color.headingColor,
    marginBottom: '20px',
    marginTop: '19px',
    [theme.breakpoints.up('xs')]: {
      fontSize: '40px',
      lineHeight: '40px',
      zIndex: "1",
      position: "relative",
      color: customTheme.color.bgWhite,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '48px',
      lineHeight: '48px',
      zIndex: "0",
      position: "relative",
      color: customTheme.color.headingColor,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '68px',
      lineHeight: '71px',
    },
  }));

  const Paragraph = styled(Typography)(({ theme }) => ({
    fontFamily: customTheme.fonts.lato,
    fontSize: '18px',
    lineHeight: '26px',
    fontWeight: '400',
    marginBottom: '50px',
    [theme.breakpoints.up('xs')]: {
      color: customTheme.color.bgWhite,
      zIndex: "1",
      position: "relative"
    },
    [theme.breakpoints.up('md')]: {
      color: customTheme.color.paragraphColor,
      zIndex: "0",
      position: "relative"
    },
  }));

  const theme = useTheme();
  const queryClient = new QueryClient();

  return (
    <Box sx={{
        backgroundImage: "url(/Assets/images/bannerBgNew.png)", 
        backgroundRepeat: "no-repeat", 
        backgroundPosition: "top right", 
        padding: "101px 0 43px",
        [theme.breakpoints.up('xs')]: {
          backgroundPositionY: "bottom",
          backgroundPositionX: "calc(100% + 200px)",
          padding: "40px 0 160px",
        },
        [theme.breakpoints.up('sm')]: {
          backgroundPositionY: "bottom",
          backgroundPositionX: "calc(100%)",
        },
        [theme.breakpoints.up('md')]: {
          backgroundPositionY: "bottom",
          backgroundPositionX: "calc(100% + 500px)",
          padding: "130px 0 43px",
        },
        [theme.breakpoints.up('lg')]: {
          backgroundPositionY: "top",
          backgroundPositionX: "calc(100% + 300px)",
          padding: "101px 0 43px",
        },
        [theme.breakpoints.up('xl')]: {
          backgroundPositionX: "calc(100% + 100px)"
        },
      }}>
      <Container sx={{position: "relative"}}>
        <Box>
          <Grid container spacing={2} sx={{
            margin: "0px", 
            minHeight: "830px",
            alignItems: "center",
            [theme.breakpoints.up('xs')]: {
              minHeight: "530px",
              paddingRight: "20px"
            },
            [theme.breakpoints.up('sm')]: {
              minHeight: "530px",
            },
            [theme.breakpoints.up('md')]: {
              minHeight: "630px",
            },
            [theme.breakpoints.up('lg')]: {
              minHeight: "830px",
            },
          }}>
            <Grid item md={6} sx={{
                padding: "0px !important",
                [theme.breakpoints.up('xs')]: {
                  maxWidth: "568px"
                },
                [theme.breakpoints.up('md')]: {
                  maxWidth: "unset"
                },
              }}>
              <TagLine variant="span">We care for your pets</TagLine>
              <Heading variant="h1">We Help You Care for Animals with Nutrition</Heading>
              <Paragraph variant="body1">All offers are subject to availability. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Consectetur a erat nam at. Potenti nullam ac tortor vitae purus faucibus ornare.</Paragraph>
              <Grid container spacing={2.5} sx={{
                [theme.breakpoints.up('xs')]: {
                  zIndex: "1",
                  position: "relative",
                },
                [theme.breakpoints.up('md')]: {
                  zIndex: "0",
                  position: "relative"
                },
              }}>
                <QueryClientProvider client={queryClient}>
                  <BannerFeature/>
                </QueryClientProvider>
              </Grid>
            </Grid>
            <Grid item md={6} sx={{padding: "0px !important"}}>
              <CardMedia
                    component="img"
                    alt="Pet Image"
                    image="/Assets/images/bannerDisplay.png"
                    sx={{
                      width: "100%", 
                      height: "100%", 
                      maxWidth: "761px",
                      position: "absolute", 
                      top: "50%", 
                      transform: "translateY(-50%)", 
                      maxHeight: "830px",
                      [theme.breakpoints.up('xs')]: {
                        pointerEvents: "none",
                        right: "-200px",
                        top: '388px',
                        maxWidth: "500px", 
                        maxHeight: "500px",
                      },
                      [theme.breakpoints.up('md')]: {
                        pointerEvents: "all",
                        maxWidth: "600px", 
                        maxHeight: "600px",
                        right: "unset",
                        top: 'unset'
                      },
                      [theme.breakpoints.up('lg')]: {
                        maxWidth: "761px", 
                        maxHeight: "830px",
                      },
                    }}
                  />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
