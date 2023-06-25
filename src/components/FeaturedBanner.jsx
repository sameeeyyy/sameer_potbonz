import { Box, Typography, Grid, CardMedia, styled, Link, useTheme } from '@mui/material'
import { FaArrowRight } from "react-icons/fa6";
import customTheme from '../theme'

export default function FeaturedBanner() {
    const theme = useTheme();
    const DiscountTag = styled(Box)(() => ({
        padding: '20px 30px',
        background: customTheme.color.bgPurple,
        width: 'fit-content',
        fontWeight: '800',
        
        borderRadius: '8px',
        color: customTheme.color.bgWhite,
        marginLeft: 'auto',
        [theme.breakpoints.up('md')]: {
                                
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: "24px",
            lineHeight: "30px",
        },
    }));

    const Heading = styled(Typography)(() => ({
        fontFamily: customTheme.fonts.nunito,
        fontWeight: '800',
        marginBottom: '15px',
        [theme.breakpoints.up('xs')]: {
            fontSize: '28px',
            lineHeight: '28px',
            marginTop: "30px"
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '46px',
            lineHeight: '46px',
            marginTop: "0px"
        },
    }));

    const Paragraph = styled(Typography)(() => ({
        fontFamily: customTheme.fonts.lato,
        fontSize: '18px',
        lineHeight: '26px',
        fontWeight: '400',
        marginBottom: '30px'
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
        cursor: 'pointer',
        '&:hover': {
          color: customTheme.color.bgDarkPink,
          transition: 'all 0.4s ease-out'
        },
    }));

  return (
    <Box sx={{ 
        background: customTheme.color.bgPink, 
        boxSizing: "inherit", 
        padding: '60px', 
        height: "500px",
        [theme.breakpoints.up('xs')]: {
            height: "unset",
            padding: "30px"
        },
        [theme.breakpoints.up('sm')]: {
            height: "500px",
            padding: "60px"
        },
    }}>
        <Grid container>
            <Grid item xs={12}>
                <DiscountTag>
                    Up to 40% Off
                </DiscountTag>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ display: 'flex', alignItems: 'center'}}>
                <Box>
                    <Heading variant='h2'>Сheck Out Our Specials</Heading>
                    <Paragraph>Massa placerat duis ultricies lacus. Aliquet bibendum enim facilisis gravida neque convallis</Paragraph>
                    <StyledLink>Shop Now <FaArrowRight/></StyledLink>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Box>
                    <CardMedia
                        component="img"
                        alt="Сheck Out Our Specials"
                        image="/Assets/images/our-specials.jpg"
                    />
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}
