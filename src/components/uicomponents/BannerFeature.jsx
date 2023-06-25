import React from 'react'
import { styled } from '@mui/material/styles';
import { Box, Skeleton, Grid, Typography, CardMedia, useTheme } from '@mui/material';
import customTheme from '../../theme'
import featuresData from '../../api/featuresData'
import { useQuery } from 'react-query';

export default function BannerFeature() {

    const theme = useTheme();

    const { isLoading, isError, data } = useQuery('jsonData', fetchData);

    async function fetchData() {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        return featuresData;
    }

    if (isLoading) {
        return (
            <Box sx={{ width: '100%' }}>
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
        fontSize: '22px',
        lineHeight: '30px',
        fontWeight: '700',
        color: customTheme.color.headingColor,
        marginBottom: '0px',
        [theme.breakpoints.up('xs')]: {
            fontSize: '16px',
            lineHeight: '20px',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '18px',
            lineHeight: '22px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '22px',
            lineHeight: '30px',
        },
    }));

    const Paragraph = styled(Typography)(({ theme }) => ({
        fontFamily: customTheme.fonts.lato,
        fontSize: '16px',
        lineHeight: '23px',
        fontWeight: '400',
        [theme.breakpoints.up('md')]: {
            fontSize: '11px',
            lineHeight: '18px',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '16px',
            lineHeight: '23px',
        },
    }));

    return (
        <>
            {data.map((item, index) => (
                <Grid key={index} item sx={{
                    width: "50%",
                    [theme.breakpoints.up('xs')]: {
                        width: "100%",
                    },
                    [theme.breakpoints.up('sm')]: {
                        width: "50%",
                    },
                }}>
                    <Grid container sx={{alignItems: "center"}}>
                        <Grid item md={12} sx={{
                                maxWidth: "60px",
                                [theme.breakpoints.up('xs')]: {
                                    maxWidth: "40px"
                                },
                                [theme.breakpoints.up('md')]: {
                                    maxWidth: "45px"
                                },
                                [theme.breakpoints.up('lg')]: {
                                    maxWidth: "60px"
                                }
                            }}>
                            <CardMedia
                                component= "img"
                                alt= {item.alt}
                                image= {item.icon}
                            />
                        </Grid>
                        <Grid item sx={{paddingLeft: "15px"}}>
                            <Heading variant="h2">{item.heading}</Heading>
                            <Paragraph variant="p">{item.detail}</Paragraph>
                        </Grid>
                    </Grid>
                </Grid>
            ))}
        </>
    )
}
