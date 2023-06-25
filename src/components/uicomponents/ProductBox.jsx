import { Grid, Rating, Stack, styled, CardMedia, Typography } from '@mui/material'
import customTheme from '../../theme'

export default function ProductBox(props) {

    const { image, title, starRating, price } = props

    const Heading = styled(Typography)(() => ({
        fontFamily: customTheme.fonts.nunito,
        fontSize: '24px',
        lineHeight: '30px',
        fontWeight: '800',
        marginBottom: '10px',
    }));
    
    const StyledLink = styled(Typography)(() => ({
        fontFamily: customTheme.fonts.nunito,
        color: customTheme.color.tagColor,
        fontSize: "22px",
        lineHeight: "30px",
        fontWeight: "800",
        display: "flex",
        alignItems: "center",
        gap: "11px",
        marginTop: "10px",
    }));

  return (
    <Grid container sx={{ 
            padding: '30px 0',
            '&:not(:last-child)':{
                borderBottom: `1px solid ${customTheme.color.serviceBorderColor}`
            }
        }}>
        <Grid item xs={12} md={4}>
            <CardMedia
                component="img"
                alt={title}
                image={image}
            />
        </Grid>
        <Grid item xs={12} md={8} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingLeft: '30px'}}>
            <Heading variant='h2'>{title}</Heading>
            <Stack spacing={1}>
                <Rating name="half-rating" defaultValue={starRating} precision={0.5} sx={{ fontSize: '16px'}} />
            </Stack>
            <StyledLink>{price}</StyledLink>
        </Grid>
    </Grid>
  )
}
