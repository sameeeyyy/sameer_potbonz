import { Box, Container, Grid, Link, styled } from '@mui/material'
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa6";
import customTheme from '../theme'

export default function TopBar() {
  const StyledLink = styled(Link)(({ theme }) => ({
    color: customTheme.color.bgWhite,
    textDecoration: 'none',
    '&:hover': {
      color: customTheme.color.bgYellow,
      transition: 'all 0.4s ease-out'
    },
  }));

  return (
    <Box sx={{ position: 'absolute', width: '100%', padding: '6px 0', backgroundColor: customTheme.color.bgPurple, display: { xs: 'none', md: 'Block' } }}>
      <Container>
        <Grid container sx={{ display: 'flex', justifyContent: 'space-between', fontSize: '15px', fontWeight: '700' }}>
          <Grid item md={6} sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', gap: '19px' }}>
              <StyledLink variant="a" href='#'>
                <FaFacebookF/>
              </StyledLink>
              <StyledLink variant="a" href='#'>
                <FaInstagram/>
              </StyledLink>
              <StyledLink variant="a" href='#'>
                <FaTwitter/>
              </StyledLink>
              <StyledLink variant="a" href='#'>
                <FaWhatsapp/>
              </StyledLink>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: '40px'}}>
                <StyledLink href="tel:123456789" sx={{ display: 'flex', alignItems: 'center', gap: '10px', color: customTheme.color.bgWhite }}>
                  <FaPhone/> 0000 - 123456789
                </StyledLink>
                <StyledLink href="mailto:info@example.com" sx={{ display: 'flex', alignItems: 'center', gap: '10px', color: customTheme.color.bgWhite }}>
                  <FaEnvelope/>info@example.com
                </StyledLink>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
