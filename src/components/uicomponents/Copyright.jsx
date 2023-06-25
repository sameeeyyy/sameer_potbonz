import { Box, Typography, styled } from '@mui/material'
import customTheme from '../../theme'

export default function Copyright() {

  const Paragraph = styled(Typography)(() => ({
    fontFamily: customTheme.fonts.lato,
    color: customTheme.color.copyrightColor,
    fontSize: '16px',
    lineHeight: '23px',
    fontWeight: '500'
  }));

  return (
    <Box sx={{ padding: '30px 0', textAlign: 'center' }}>
      <Paragraph>NOOT ©  All rights reserved Copyrights 2023</Paragraph>
    </Box>
  )
}
