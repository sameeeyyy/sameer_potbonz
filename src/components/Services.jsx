import React from 'react'
import { Box, Skeleton, Container, Grid, Typography, CardMedia, styled, Link, useTheme } from '@mui/material';
import customTheme from '../theme'
import serviceData from '../api/serviceData'
import { useQuery } from 'react-query';

import { FaArrowRight } from "react-icons/fa6";

export default function Services() {
  const theme = useTheme();
  
  const { isLoading, isError, data } = useQuery('jsonData', fetchData);

  async function fetchData() {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return serviceData;
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

  

  const TagLine = styled(Typography)(({ }) => ({
    fontFamily: customTheme.fonts.nunito,
    fontSize: '16px',
    lineHeight: '19px',
    fontWeight: '700',
    color: customTheme.color.tagColor,
    textTransform: "uppercase"
  }));

  const Heading = styled(Typography)(({ }) => ({
    fontFamily: customTheme.fonts.nunito,
    fontSize: '68px',
    lineHeight: '71px',
    fontWeight: '800',
    color: customTheme.color.headingColor,
    marginBottom: '30px',
    marginTop: '15px',
    [theme.breakpoints.up('xs')]: {
      fontSize: '28px',
      lineHeight: '28px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '48px',
      lineHeight: '48px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '68px',
      lineHeight: '71px',
    },
  }));

  const ServiceHeading = styled(Typography)(({ }) => ({
    fontFamily: customTheme.fonts.nunito,
    color: customTheme.color.headingColor,
    fontSize: "24px",
    fontWeight: "800",
    lineHeight: "30px",
    paddingLeft: "15px",
    [theme.breakpoints.up('xs')]: {
      fontSize: "16px",
      lineHeight: "20px",
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: "20px",
      lineHeight: "26px",
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: "24px",
      lineHeight: "30px",
    },
  }));

  const ServiceParagraph = styled(Typography)(({ }) => ({
    fontFamily: customTheme.fonts.lato,
    color: customTheme.color.paragraphColor,
    fontSize: "18px !important",
    lineHeight: "26px",
    letterSpacing: "unset",
    [theme.breakpoints.up('xs')]: {
      fontSize: "16px !important",
      lineHeight: "22px",
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: "18px !important",
      lineHeight: "26px",
    },
  }));

  const ServiceRates = styled(Typography)(({ }) => ({
    fontFamily: customTheme.fonts.lato,
    color: customTheme.color.paragraphColor,
    fontSize: "18px",
    fontWeight: "700",
    lineHeight: "26px",
    marginTop: "15px",
    [theme.breakpoints.up('xs')]: {
      fontSize: "16px",
      fontWeight: "700",
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: "18px",
      fontWeight: "700",
    },
  }));

  const StyledLink = styled(Link)(() => ({
    fontFamily: customTheme.fonts.nunito,
    color: customTheme.color.tagColor,
    fontSize: "20px",
    lineHeight: "30px",
    fontWeight: "800",
    textDecoration: 'none',
    display: "flex",
    alignItems: "center",
    gap: "11px",
    marginTop: "20px",
    '&:hover': {
      color: customTheme.color.bgYellow + "!important",
      transition: 'all 0.4s ease-out'
    },
    [theme.breakpoints.up('xs')]: {
      fontSize: "16px",
      lineHeight: "22px",
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: "20px",
      lineHeight: "30px",
    },
  }));
  
  return (
    <Box sx={{
        textAlign: "center", 
        padding: "76px 0 74px",
      }}>
      <Container sx={{maxWidth: "1418px !important"}}>
        <TagLine variant='span'>OUR SERVICES</TagLine>
        <Heading variant='h2'>All Pet Care Services</Heading>
        <Grid container sx={{textAlign: "left", gap: "28px"}}>
          {data.map((service, index) => (
            <Grid item key={index} sx={{
              border: "1px solid",
              borderColor: `${customTheme.color.serviceBorderColor}`,
              borderRadius: "8px",
              backgroundImage: "url(/Assets/images/serviceBg.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "bottom right",
              width: "100%",
              maxWidth: "calc(33.33% - 19px) !important",
              '&:hover': {
                backgroundImage: "url(/Assets/images/serviceBgHover.jpg)",
                transition: 'all 0.3s ease-out',
                '& h2': {
                  color: `${customTheme.color.bgWhite}`, // Change the color of the heading
                },
                '& p': {
                  color: `${customTheme.color.bgWhite}`, // Change the color of the paragraph
                },
                '& a': {
                  color: `${customTheme.color.bgWhite}`, // Change the color of the paragraph
                },
              },
              [theme.breakpoints.up('xs')]: {
                maxWidth: "100% !important",
                padding: "30px",
              },
              [theme.breakpoints.up('sm')]: {
                padding: "40px 40px 42px",
              },
              [theme.breakpoints.up('md')]: {
                maxWidth: "calc(50% - 19px) !important",
              },
              [theme.breakpoints.up('lg')]: {
                maxWidth: "calc(33.33% - 19px) !important",
              },
            }}>
              <Grid container sx={{alignItems: "center"}}>
                <Grid item>
                  <CardMedia
                      component= "img"
                      alt= {service.alt}
                      image= {service.icon}
                      sx={{width: "60px", height: "60px", objectFit: "contain"}}
                  />
                </Grid>
                <Grid item>
                  <ServiceHeading variant='h2'>{service.heading}</ServiceHeading>
                </Grid>
              </Grid>
              <Grid item sx={{marginTop: "15px"}}>
                <ServiceParagraph>{service.detail}</ServiceParagraph>
                <ServiceRates>{service.rates}</ServiceRates>
                <StyledLink variant="a" href='#'>
                  Get Service <FaArrowRight/>
                </StyledLink>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
