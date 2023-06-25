import { Box, Container, Grid } from '@mui/material'
import FooterOne from '../components/uicomponents/FooterOne'
import FooterTwo from '../components/uicomponents/FooterTwo'
import FooterThree from '../components/uicomponents/FooterThree'
import FooterFour from '../components/uicomponents/FooterFour'
import Copyright from '../components/uicomponents/Copyright'
import customTheme from '../theme'

export default function Footer() {
  return (
    <Box sx={{padding: "33px 0", background: customTheme.color.bgGray }}>
      <Container sx={{maxWidth: "1418px !important" }}>
        <Grid container sx={{ padding: '75px 0', borderBottom: `1px solid ${customTheme.color.serviceBorderColor}` }}>
          <Grid item xs={12} md={6} lg={3}>
            <FooterOne/>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <FooterTwo/>
          </Grid>
          <Grid item xs={12} sm={6} lg={3}>
            <FooterThree/>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <FooterFour/>
          </Grid>
        </Grid>
        <Copyright/>
      </Container>
    </Box>
  )
}
