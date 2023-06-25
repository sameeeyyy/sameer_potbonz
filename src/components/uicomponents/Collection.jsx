import { Box, Typography, Grid, CardMedia, styled, Link, useTheme } from '@mui/material'
import { FaArrowRight } from "react-icons/fa6";
import customTheme from '../../theme'

export default function Collection(props) {

    const { title, image, link } = props

    const theme = useTheme();

    const Heading = styled(Typography)(() => ({
        fontFamily: customTheme.fonts.nunito,
        fontSize: '30px',
        lineHeight: '36px',
        fontWeight: '800',
        marginBottom: '15px',
        [theme.breakpoints.up('xs')]: {
            fontSize: '22px',
            lineHeight: '28px',
            paddingRight: "10px"
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '30px',
            lineHeight: '36px',
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
        cursor: 'pointer',
        '&:hover': {
          color: customTheme.color.bgDarkPink,
          transition: 'all 0.4s ease-out'
        },
        [theme.breakpoints.up('xs')]: {
            fontSize: "16px",
            lineHeight: "22px",
        },
        [theme.breakpoints.up('md')]: {
            fontSize: "20px",
            lineHeight: "30px",
        },
    }));

  return (
    <Box sx={{ 
            background: customTheme.color.bgYellow, 
            borderRadius: '8px', 
            paddingLeft: "30px", 
            display: "flex", 
            alignItems: "center",
            [theme.breakpoints.up('xs')]: {
                width: "100%"
            },
            [theme.breakpoints.up('sm')]: {
                width: "unset"
            },
        }}>
        <Grid container>
            <Grid item xs={6} lg={8} sx={{ display: 'flex', alignItems: 'center'}}>
                <Box>
                    <Heading variant='h2'>{title}</Heading>
                    <StyledLink href={link}>Shop Now <FaArrowRight/></StyledLink>
                </Box>
            </Grid>
            <Grid item xs={6} lg={4}>
                <Box>
                    <CardMedia
                        component="img"
                        alt={title}
                        image={image}
                        sx={{
                            [theme.breakpoints.up('lg')]: {
                                position: "absolute",
                                top: "50%",
                                transform: "translateY(-50%)",
                                width: "194px",
                                height: "260px",
                            }
                        }}
                    />
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}
