import { Box, Typography, TextField, styled, Button, Link } from '@mui/material'
import { FaArrowRight, FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa6";
import customTheme from '../../theme'

export default function FooterFour() {

  const Heading = styled(Typography)(({ theme }) => ({
    fontFamily: customTheme.fonts.nunito,
    fontSize: '24px',
    lineHeight: '30px',
    fontWeight: '800',
    color: customTheme.color.bgPurple,
    marginBottom: '35px',
  }));

  const Paragraph = styled(Typography)(() => ({
    fontFamily: customTheme.fonts.lato,
    color: customTheme.color.paragraphColor,
    fontSize: '18px',
    lineHeight: '26px',
    fontWeight: '500'
  }));

  // For newsletter form
  const NewsletterContainer = styled('div')`
    display: flex;
    gap: 10px;
    align-items: flex-start;
    justify-content: flex-start;
    margin-top: 20px;
    z-index: 1;
    position: relative;
  `;
  const WhiteBorderedTextField = styled(TextField)`
    width: 100%;
    max-width: 319px;
    height: 70px;
    border-radius: 8px;
    color: #FBF9FF;
    font-size: 16px;
    font-family: Lato;
    line-height: 23px;
    background: '#FFF';
    .MuiOutlinedInput-root, 
    .css-1d3z3hw-MuiOutlinedInput-notchedOutline, 
    .css-1d3z3hw-MuiOutlinedInput-notchedOutline:hover {
      border-color: #CDCCCE !important;
    }
    .MuiOutlinedInput-input {
      color: '#CDCCCE';
      padding: 22px;
      height: 22px;
      &::placeholder {
        color: #675D6B;
      }
      &:focus {
        color: '#CDCCCE';
      }
    }
    .MuiInputLabel-root {
      color: #675D6B;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 24px;
      transition: all 0.3s;
      &.Mui-focused {
        color: #675D6B;
        top: -7px;
        left: 15px;
        font-size: 12px;
        transform: none;
      }
    }
  `;
  const SubscribeButton = styled(Button)`
    font-family: 'Nunito Variable';
    background-color: #7C58D3;
    width: '50px';
    height: '50px';
    border-radius: 8px;
    font-size: 23px;
    font-weight: 900;
    text-transform: capitalize;
    padding: 20px;
    margin-left: 6px;
    color: #0E081E;
    &:hover,
    &:active {
      background-color: yellow;
      color: black;
    }
  `;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  const StyledLink = styled(Link)(() => ({
    color: customTheme.color.tagColor,
    textDecoration: 'none',
    fontSize: '26px',
    lineHeight: '30px',
    '&:hover': {
      color: customTheme.color.bgYellow,
      transition: 'all 0.4s ease-out'
    },
  }));

  return (
    <Box sx={{ padding: { xs: '30px 32px', lg: '20px 0' } }}>
      <Heading variant='h3'>Newsletter</Heading>
      <Paragraph>Be first in the queue! Get our latest news straight to your inbox.</Paragraph>
      <form onSubmit={handleSubmit}>
        <NewsletterContainer>
          <WhiteBorderedTextField
            id="email"
            label="Email"
            variant="outlined"
            fullWidth
            InputLabelProps={{
              className: 'white-placeholder',
            }}
            InputProps={{
              classes: {
                root: 'white-placeholder',
              },
            }}
          />
          <SubscribeButton type="submit" variant="contained">
            <FaArrowRight color={customTheme.color.bgWhite}/>
          </SubscribeButton>
        </NewsletterContainer>
      </form>
      <Box sx={{ display: 'flex', gap: '19px', padding: '20px 0', justifyContent: { xs: 'center', md: 'unset'} }}>
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
    </Box>
  )
}
