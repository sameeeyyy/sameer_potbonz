import { Box, Container, Grid, useTheme } from '@mui/material'
import FeaturedBanner from "./FeaturedBanner";
import Collection from './uicomponents/Collection';

export default function ShopNow() {
  const theme = useTheme();
  return (
    <Box>
      <Container sx={{maxWidth: "1418px !important", display: "flex"}}>
        <Grid container>
          <Grid item sx={{ 
              paddingRight: '30px',
              [theme.breakpoints.up('xs')]: {
                paddingRight: "0px"
              },
              [theme.breakpoints.up('lg')]: {
                width: "calc(100% - 434px)",
                paddingRight: "30px"
              },
              [theme.breakpoints.up('xl')]: {
                width: "calc(100% - 434px)"
              }
            }}>
              <FeaturedBanner/>
          </Grid>
          <Grid item sx={{
            height: "100%", 
            rowGap: "30px", 
            display: "flex", 
            flexDirection: "column", 
            justifyContent: "space-between",
            [theme.breakpoints.up('xs')]: {
              width: "100%",
              flexDirection: "column",
              height: "unset",
              margin: "30px 0"
            },
            [theme.breakpoints.up('sm')]: {
              width: "100%",
              flexDirection: "row",
              height: "235px",
              margin: "10px 0"
            },
            [theme.breakpoints.up('md')]: {
              margin: "60px 0"
            },
            [theme.breakpoints.up('lg')]: {
              width: "100%",
              maxWidth: "345px",
              marginTop: "0px",
              height: "100%",
              flexDirection: "column",
            }
          }}>
              <Box sx={{ 
                height: '50%', 
                display: "flex",
                position: "relative",
                width: "100%",
                maxWidth: "345px",
                [theme.breakpoints.up('xs')]: {
                  maxWidth: "100%",
                  height: "100%"
                },
                [theme.breakpoints.up('sm')]: {
                  maxWidth: "49%",
                  height: "100%"
                },
                [theme.breakpoints.up('md')]: {
                  maxWidth: "45%",
                  height: "100%"
                },
                [theme.breakpoints.up('lg')]: {
                  width: "100%",
                  maxWidth: "345px",
                }
              }}>
                <Collection title={'Luxury Fashion Collection'} link={'#'} image={'Assets/images/fashion-collection.png'}/>
              </Box>
              <Box sx={{ 
                height: '50%', 
                display: "flex",
                position: "relative",
                width: "100%",
                maxWidth: "345px",
                [theme.breakpoints.up('xs')]: {
                  maxWidth: "100%",
                  height: "100%"
                },
                [theme.breakpoints.up('sm')]: {
                  maxWidth: "49%",
                  height: "100%"
                },
                [theme.breakpoints.up('md')]: {
                  maxWidth: "45%",
                  height: "100%"
                },
                [theme.breakpoints.up('lg')]: {
                  width: "100%",
                  maxWidth: "345px",
                  marginLeft: "0px"
                }
              }}>
                <Collection title={'Shop What’s Trending'} link={'#'} image={'Assets/images/trending.png'}/>
              </Box>
          </Grid>
          </Grid>
      </Container>
    </Box>
  )
}
