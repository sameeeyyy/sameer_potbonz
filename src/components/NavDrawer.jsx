import React, { useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import { CardMedia, Typography, styled, Grid, Link } from '@mui/material'
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { FaXmark, FaBarsStaggered, FaCartShopping, FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaPhone, FaEnvelope } from "react-icons/fa6";
import customTheme from '../theme'


//drawer elements used
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";

export default function NavDrawer() {

    const [open, setState] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (
          event.type === "keydown" &&
          (event.key === "Tab" || event.key === "Shift")
        ) {
          return;
        }
        //changes the function state according to the value of open
        setState(open);
    };

    const MenuList = styled(Typography)(() => ({
        fontFamily: customTheme.fonts.nunito,
        fontSize: '30px',
        lineHeight: '36px',
        color: customTheme.color.bgWhite,
        textDecoration: 'none',
        cursor: 'pointer',
        '&:hover': {
        color: customTheme.color.bgYellow,
        transition: 'all 0.4s ease-out'
        },
    }));

    const StyledCart = styled(Box)(() => ({
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        color: customTheme.color.paragraphColor,
        background: customTheme.color.bgWhite,
        padding: '14px 17px',
        fontSize: '16px',
        borderRadius: '8px',
        '&:hover': {
          background: customTheme.color.bgYellow,
          transition: 'all 0.4s ease-out',
          cursor: 'pointer'
        },
    }));

    const StyledLink = styled(Link)(({ theme }) => ({
        color: customTheme.color.bgWhite,
        textDecoration: 'none',
        '&:hover': {
          color: customTheme.color.bgYellow,
          transition: 'all 0.4s ease-out'
        },
    }));

  return (
      <Container maxWidth="lg" disableGutters={true} sx={{ display: { xs: 'block', md: 'none' } }}>

        <Toolbar>
            
            <CardMedia
                component="img"
                alt="Petbonz Logo"
                image="Assets/images/logo.png"
                sx={{ width: '26%'}}
            />

            <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer(true)}
                sx={{
                mr: 2,
                ml: 'auto',
                display: {
                    xs: "block",
                    md: "none"
                }
                }}
            >
                <FaBarsStaggered/>
            </IconButton>

          <Drawer
            anchor="right"
            open={open}
            onClose={toggleDrawer(false)}
          >
            <Box
              sx={{
                px: 2,
                height: 1,
                backgroundColor: customTheme.color.bgPurple,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              
              <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', py: 3}}>
                    <IconButton>
                        <FaXmark onClick={toggleDrawer(false)}/>
                    </IconButton>

                    <StyledCart>
                        <FaCartShopping color={customTheme.color.bgPurple}/> (1 Item)
                    </StyledCart>
                </Box>

                <Divider sx={{ mb: 2 }} />
              </Box>

              <Box sx={{ pr: 18, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <MenuList>Home</MenuList>
                <MenuList>Services</MenuList>
                <MenuList>Shop</MenuList>
                <MenuList>Blog</MenuList>
                <MenuList>Pages</MenuList>
              </Box>

              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px', mb: 6 }}>
                <Box sx={{ display: 'flex', gap: '19px', justifyContent: 'center' }}>
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
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <StyledLink href="tel:123456789" sx={{ display: 'flex', alignItems: 'center', gap: '10px', color: customTheme.color.bgWhite }}>
                        <FaPhone/> 0000 - 123456789
                        </StyledLink>
                        <StyledLink href="mailto:info@example.com" sx={{ display: 'flex', alignItems: 'center', gap: '10px', color: customTheme.color.bgWhite }}>
                        <FaEnvelope/>info@example.com
                        </StyledLink>
                    </Box>
              </Box>

            </Box>
          </Drawer>
        </Toolbar>

      </Container>
  )
}
