import { Box, Container, Grid, useTheme } from '@mui/material'
import ProductGrid from './uicomponents/ProductGrid'
import { QueryClient, QueryClientProvider } from 'react-query';

export default function FeaturedGrid() {

  const theme = useTheme();
  const queryFeaturedPosts = new QueryClient();

  return (
    <Box sx={{padding: "74px 0 0"}}>
      <Container sx={{maxWidth: "1418px !important" }}>
        <Grid container sx={{columnGap: "30px"}}>
          <Grid item xs={12} lg={4} sx={{
              [theme.breakpoints.up('xs')]: {
              },
              [theme.breakpoints.up('lg')]: {
                maxWidth: "calc(33.33% - 20px)",
              },
            }}>
            <QueryClientProvider client={queryFeaturedPosts}>
              <ProductGrid productType={'feature'} title={'Featured Products'}/>
            </QueryClientProvider>
          </Grid>
          <Grid item xs={12} lg={4} sx={{
              [theme.breakpoints.up('xs')]: {
                marginTop: "80px"
              },
              [theme.breakpoints.up('lg')]: {
                maxWidth: "calc(33.33% - 20px)",
                marginTop: "0px"
              },
            }}>
            <QueryClientProvider client={queryFeaturedPosts}>
              <ProductGrid productType={'sale'} title={'On Sale Products'}/>
            </QueryClientProvider>
          </Grid>
          <Grid item xs={12} lg={4} sx={{
              [theme.breakpoints.up('xs')]: {
                marginTop: "80px"
              },
              [theme.breakpoints.up('lg')]: {
                maxWidth: "calc(33.33% - 20px)",
                marginTop: "0px"
              },
            }}>
            <QueryClientProvider client={queryFeaturedPosts}>
              <ProductGrid productType={'toprated'} title={'Top Rated Products'}/>
            </QueryClientProvider>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
