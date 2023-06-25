import { Box, Typography, styled, List, ListItem } from '@mui/material'
import customTheme from '../../theme'

export default function FooterThree() {

  const Heading = styled(Typography)(({ theme }) => ({
    fontFamily: customTheme.fonts.nunito,
    fontSize: '24px',
    lineHeight: '30px',
    fontWeight: '800',
    color: customTheme.color.bgPurple,
    marginBottom: '35px',
  }));
  
  const StyledListItem = styled(ListItem)(({ theme }) => ({
    fontFamily: customTheme.fonts.nunito,
    fontSize: '18px',
    lineHeight: '26px',
    fontWeight: '600',
    color: customTheme.color.paragraphColor,
    width: '50%',
    display: 'list-item',
    listStylePosition: 'inside',
    padding: '0 0 20px 0',
    cursor: 'pointer',
    "&:first-of-type::before": {
      backgroundColor: customTheme.color.bgDarkPink,
    },
    "&::marker, &::before": {
      content: '""',
      display: 'inline-block',
      backgroundColor: customTheme.color.bgDullPink,
      width: '8px',
      height: '8px',
      marginRight: '8px',
      borderRadius: '100%'
    },
  }));

  return (
    <Box sx={{ padding: '30px 32px' }}>
      <Heading variant='h3'>Useful Links</Heading>
        <List  sx={{ display: 'flex', flexWrap: 'wrap', p: 0 }}>

          <StyledListItem>Home</StyledListItem>
          <StyledListItem>FAQ</StyledListItem>
          <StyledListItem>About</StyledListItem>
          <StyledListItem>Gallery</StyledListItem>
          <StyledListItem>Services</StyledListItem>
          <StyledListItem>Delivery</StyledListItem>
          <StyledListItem>Shop</StyledListItem>
          <StyledListItem>Sales</StyledListItem>

        </List>
    </Box>
  )
}
