import { Box, Typography, styled } from '@mui/material'
import customTheme from '../../theme'

export default function FooterTwo() {

  const Heading = styled(Typography)(({ theme }) => ({
    fontFamily: customTheme.fonts.nunito,
    fontSize: '24px',
    lineHeight: '30px',
    fontWeight: '800',
    color: customTheme.color.bgPurple,
    marginBottom: '35px',
  }));
  
  const StyledDays = styled(Typography)(({ theme }) => ({
    fontFamily: customTheme.fonts.nunito,
    fontSize: '18px',
    lineHeight: '26px',
    fontWeight: '600',
    color: customTheme.color.paragraphColor,
  }));

  const StyledHours = styled(Typography)(({ theme }) => ({
    fontFamily: customTheme.fonts.nunito,
    fontSize: '18px',
    lineHeight: '26px',
    fontWeight: '700',
    color: customTheme.color.paragraphColor,
  }));
  
  return (
    <Box sx={{ padding: '30px 32px' }}>
      <Heading variant='h3'>Working Hours</Heading>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <StyledDays>Mon - Fri:</StyledDays>
          <StyledHours>7am – 6pm</StyledHours>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <StyledDays>Saturday:</StyledDays>
          <StyledHours>9am – 4pm</StyledHours>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <StyledDays>Sunday:</StyledDays>
          <StyledHours>Closed</StyledHours>
        </Box>

      </Box>
    </Box>
  )
}
