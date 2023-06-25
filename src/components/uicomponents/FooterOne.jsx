import { Box, Typography, CardMedia, styled, Link } from '@mui/material'
import { FaPhone } from "react-icons/fa6";
import customTheme from '../../theme'

export default function FooterOne() {

  const Paragraph = styled(Typography)(() => ({
    fontFamily: customTheme.fonts.lato,
    color: customTheme.color.paragraphColor,
    fontSize: '16px',
    lineHeight: '23px',
  }));

  const StyledLink = styled(Link)(({ theme }) => ({
    color: customTheme.color.paragraphColor,
    textDecoration: 'none',
    cursor: 'pointer',
    fontSize: '24px',
    lineHeight: '30px',
    fontWeight: '800',
    '&:hover': {
      color: customTheme.color.bgYellow,
      transition: 'all 0.4s ease-out'
    },
  }));

  return (
    <Box sx={{ padding: '30px 32px' }}>
      <CardMedia
        component="img"
        alt="Pets Bonz"
        image="/Assets/images/footer__logo.png"
        sx={{ width: '95px', marginBottom: '21px' }}
      />
      <Paragraph>Tristique nulla aliquet enim tortor at auctor urna nunc. Massa enim nec dui nunc mattis enim ut tellus. Sed ut perspiciatis unde ...</Paragraph>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px', marginTop: '25px', flexDirection: { xs: 'column', md: 'row' } }}>
        <Box sx={{ fontSize: '52px', display: 'flex' }}>
          <FaPhone color={customTheme.color.bgPurple} />
        </Box>
        <Box>
          <StyledLink href='tel:9137563126'>(913) 756-3126</StyledLink>
          <Paragraph>Got Questions? Call us 24/7</Paragraph>
        </Box>
      </Box>
    </Box>
  )
}
