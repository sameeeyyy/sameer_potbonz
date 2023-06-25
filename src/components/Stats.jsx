import React from 'react';
import { Box, Skeleton, Container, Grid, Typography, CardMedia, styled, useTheme } from '@mui/material';
import customTheme from '../theme'
import statsData from '../api/statsData'
import { useQuery } from 'react-query';

export default function Banner() {

  const theme = useTheme();

  const { isLoading, isError, data } = useQuery('jsonData', fetchData);

  async function fetchData() {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return statsData;
  }

  if (isLoading) {
      return (
        <Box sx={{ width: '80%', margin: 'auto', marginBottom: '100px' }}>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
      );
  }

  if (isError) {
      return <div>Error loading data</div>;
  }

  const Heading = styled(Typography)(({ theme }) => ({
    fontFamily: customTheme.fonts.nunito,
    color: customTheme.color.bgWhite,
    fontSize: '46px',
    lineHeight: '46px',
    fontWeight: '800',
    letterSpacing: "unset",
    [theme.breakpoints.up('xs')]: {
      fontSize: '26px',
      lineHeight: '32px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '46px',
      lineHeight: '46px',
    },
  }));

  const Paragraph = styled(Typography)(({ theme }) => ({
    fontFamily: customTheme.fonts.lato,
    color: customTheme.color.bgWhite,
    fontSize: '18px',
    lineHeight: '26px',
    fontWeight: '400',
    letterSpacing: "unset",
    [theme.breakpoints.up('xs')]: {
      fontSize: '18px',
      lineHeight: '26px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '12px',
      lineHeight: '26px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '18px',
    lineHeight: '26px',
    },
  }));

  return (
    <Box>
      <Container sx={{maxWidth: "1418px !important"}}>
        <Box sx={{backgroundImage: "url(/Assets/images/statsBg.jpg)", 
                  backgroundRepeat: "no-repeat", 
                  backgroundPosition: "center", 
                  backgroundSize: "cover",
                  borderRadius: "8px", 
                  overflow: "hidden",
                  [theme.breakpoints.up('xs')]: {
                    padding: "40px",
                  },
                  [theme.breakpoints.up('sm')]: {
                    padding: "75px 61px",
                  },
                }}>
          <Grid container spacing={2} sx={{
            margin: "0px", 
            alignItems: "center", 
            width: "100%", 
            justifyContent: "space-between",
            [theme.breakpoints.up('xs')]: {
              rowGap: "30px"
            },
            [theme.breakpoints.up('lg')]: {
              rowGap: "0px"
            },
          }}>
            {data.map((stat, index) => (
              <Grid key={index} item sx={{
                padding: "0px !important",
                [theme.breakpoints.up('xs')]: {
                  width: "100%",
                  display: "flex",
                  justifyContent: "center"
                },
                [theme.breakpoints.up('sm')]: {
                  width: "50%",
                  display: "flex",
                  justifyContent: "center"
                },
                [theme.breakpoints.up('md')]: {
                  width: "unset",
                  display: "unset",
                  justifyContent: "unset",
                  padding: "75px 61px"
                },
              }}>
                <Grid container sx={{alignItems: "center", width: "fit-content"}}>
                  <Grid item>
                    <CardMedia
                        component= "img"
                        alt= {stat.alt}
                        image= {stat.icon}
                        sx={{
                          [theme.breakpoints.up('xs')]: {
                            width: "46px",
                            height: "46px"
                          },
                          [theme.breakpoints.up('lg')]: {
                            width: "56px",
                            height: "56px"
                          }
                        }}
                    />
                  </Grid>
                  <Grid item sx={{
                    [theme.breakpoints.up('xs')]: {
                      paddingLeft: "22px",
                    },
                    [theme.breakpoints.up('sm')]: {
                      paddingLeft: "12px",
                    },
                    [theme.breakpoints.up('lg')]: {
                      paddingLeft: "20px",
                    }
                  }}>
                    <Heading variant='h2'>{stat.count}+</Heading>
                    <Paragraph variant='p'>{stat.detail}</Paragraph>
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
