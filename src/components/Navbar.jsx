import { Box, Container, Grid, Link, styled, CardMedia } from '@mui/material'
import { FaCartShopping } from "react-icons/fa6";
import customTheme from '../theme'

export default function Navbar() {

  const StyledLink = styled(Link)(() => ({
    color: customTheme.color.bgWhite,
    textDecoration: 'none',
    '&:hover': {
      color: customTheme.color.bgYellow,
      transition: 'all 0.4s ease-out'
    },
  }));

  const StyledCart = styled(Box)(() => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: customTheme.color.paragraphColor,
    background: customTheme.color.bgWhite,
    padding: '14px 17px',
    fontSize: '16px',
    borderRadius: '8px',
    '&:hover': {
      background: customTheme.color.bgYellow,
      transition: 'all 0.4s ease-out',
      cursor: 'pointer'
    },
  }));

  return (
    <Box sx={{ position: 'absolute', width: '100%', top: '35px', padding: '20px 0', fontWeight: '700', display: { xs: 'none', md: 'Block' } }}>
      <Container>
        <Grid container sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Box>
            <Link href="#">
              <CardMedia
                component="img"
                alt="Petbonz Logo"
                image="Assets/images/logo.png"
              />
            </Link>
          </Box>
          <Box sx={{ display: 'flex', gap: '60px', fontSize: '18px'}}>
            <StyledLink variant="a" href='#'>
              Home
            </StyledLink>
            <StyledLink variant="a" href='#'>
              Services
            </StyledLink>
            <StyledLink variant="a" href='#'>
              Shop
            </StyledLink>
            <StyledLink variant="a" href='#'>
              Blog
            </StyledLink>
            <StyledLink variant="a" href='#'>
              Pages
            </StyledLink>
          </Box>
          <Box>
              <StyledCart>
                <FaCartShopping color={customTheme.color.bgPurple}/> (1 Item)
              </StyledCart>
          </Box>
        </Grid>
      </Container>
    </Box>
  )
}
