import Box from '@mui/material/Box';
import { Container, Grid, Typography, CardMedia, styled, useTheme } from '@mui/material';
import customTheme from '../theme'
import contactData from '../api/contactData'
import { useQuery } from 'react-query';

export default function Contacts() {

  const theme = useTheme();

  const { isLoading, isError, data } = useQuery('jsonData', fetchData);

  async function fetchData() {
      await new Promise((resolve) => setTimeout(resolve, 10));
      return contactData;
  }

  if (isLoading) {
      return <div>Loading...</div>;
  }

  if (isError) {
      return <div>Error loading data</div>;
  }

  const TagLine = styled(Typography)(({ }) => ({
    fontFamily: customTheme.fonts.nunito,
    fontSize: '16px',
    lineHeight: '19px',
    fontWeight: '700',
    color: customTheme.color.tagColor,
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "18px"
  }));

  const Heading = styled(Typography)(({ }) => ({
    fontFamily: customTheme.fonts.nunito,
    color: customTheme.color.headingColor,
    fontWeight: '800',
    letterSpacing: "unset",
    marginBottom: "12px",
    textAlign: "center",
    [theme.breakpoints.up('xs')]: {
      fontSize: '26px',
      lineHeight: '32px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '46px',
      lineHeight: '46px',
    },
  }));

  const Paragraph = styled(Typography)(({ }) => ({
    fontFamily: customTheme.fonts.lato,
    color: customTheme.color.paragraphColor,
    fontSize: '18px',
    lineHeight: '25px',
    letterSpacing: "unset",
    textAlign: "center",
    marginBottom: "70px"
  }));

  const ContactHeading = styled(Typography)(({ }) => ({
    fontFamily: customTheme.fonts.nunito,
    color: customTheme.color.headingColor,
    fontSize: '22px',
    lineHeight: '30px',
    fontWeight: '700',
    letterSpacing: "unset",
    marginBottom: "9px",
    [theme.breakpoints.up('md')]: {
      // backgroundColor: 'black',
    },
  }));

  const ContactDetail = styled(Typography)(({ }) => ({
    fontFamily: customTheme.fonts.lato,
    color: customTheme.color.paragraphColor,
    fontSize: '18px',
    lineHeight: '26px',
    fontWeight: '400',
    letterSpacing: "unset",
    textAlign: "center",
  }));

  return (
    <Box sx={{background: "#FBF9FF"}}>
      <Container sx={{maxWidth: "1418px !important"}}>
        <Box sx={{overflow: "hidden", 
                  padding: "55px 0px 102px"
                }}>
          <TagLine>OUR CONTACTS</TagLine>
          <Heading variant='h2'>Contacts</Heading>
          <Paragraph>Massa enim nec dui nunc mattis enim ut tellus</Paragraph>
          <Grid container spacing={2} sx={{
              justifyContent: "space-between",
              margin: "0px",
              width: "100%",
              [theme.breakpoints.up('xs')]: {
                rowGap: "60px"
              },
              [theme.breakpoints.up('lg')]: {
                rowGap: "0px"
              },
            }}>
            {data.map((data, index) => (
              <Grid key={index} item sx={{
                padding: "0px !important",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "#FFFFFF",
                position: "relative",
                padding: "55px 23px 35px !important",
                border: "2px solid #FFFFFF",
                borderRadius: "8px",
                '&:hover': {
                  border: "2px solid #7C58D3",
                  transition: 'all 0.3s ease-out',
                  '& .css-mzlvw2': {
                    background: "#7C58D3", // Change the color of the heading
                    transition: 'all 0.3s ease-out'
                  },
                  '& .css-1tbw55j-MuiCardMedia-root': {
                    filter: "brightness(0) invert(1)", // Change the color of the paragraph
                    transition: 'all 0.3s ease-out'
                  },
                  '& a': {
                    color: `${customTheme.color.bgWhite}`, // Change the color of the paragraph
                    transition: 'all 0.3s ease-out'
                  },
                },
                [theme.breakpoints.up('xs')]: {
                  width: "100%",
                },
                [theme.breakpoints.up('sm')]: {
                  width: "calc(50% - 10px)",
                },
                [theme.breakpoints.up('lg')]: {
                  width: "calc(25% - 10px)",
                },
              }}>
                <Box sx={{
                  width: "80px",
                  height: "80px",
                  background: "#EBE5F7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  position: "absolute",
                  top: "0",
                  transform: "translateY(-50%)"
                }}>
                  <CardMedia
                      component= "img"
                      // alt= {data.alt}
                      image= {data.icon}
                      sx={{width: "30px"}}
                  />
                </Box>
                <ContactHeading variant='h3'>{data.heading}</ContactHeading>
                <ContactDetail variant='span'>{data.detail1}</ContactDetail>
                <ContactDetail variant='span'>{data.detail2}</ContactDetail>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
