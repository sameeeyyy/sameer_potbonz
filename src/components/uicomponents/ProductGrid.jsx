import React, { useEffect, useState } from 'react';
import { Box, Skeleton, styled, Typography } from '@mui/material';
import customTheme from '../../theme';
import ProductBox from './ProductBox';
import Slider from 'react-slick';
import productsData from '../../api/productsData'
import { useQuery } from 'react-query';

export default function ProductGrid(props) {
  const Heading = styled(Typography)(() => ({
    fontFamily: customTheme.fonts.nunito,
    fontSize: '32px',
    lineHeight: '36px',
    fontWeight: '800',
  }));

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  var settings = {
    responsive: [
      { 
        breakpoint: 1200, 
        settings: { 
          slidesToShow: 2, 
          slidesToScroll: 1
        } 
      },
      {
        breakpoint: 600,
        settings: { 
          slidesToShow: 1, 
          slidesToScroll: 1
        } 
      },
      { breakpoint: Infinity, settings: 'unslick' },
    ],
  };

  const { isLoading, isError, data } = useQuery('jsonData', fetchData);

  async function fetchData() {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return productsData;
  }

  if (isLoading) {
      return (
        <Box sx={{ width: '80%', margin: 'auto' }}>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
      );
  }

  if (isError) {
      return <div>Error loading data</div>;
  }


  return (
    <Box>
      <Heading variant="h2">{props.title}</Heading>
      {windowWidth <= 1199 ? (
        <Slider draggable={true} dots={true} arrows={false} infinite={false} speed={300} {...settings}>
          {productsData.map((item, i) => 
            item.productType === props.productType ? 
            (<ProductBox key={i} image={item.image} title={item.title} starRating={item.starRating} price={item.price} />) : null
          )}
        </Slider>
      ) : (
        <Box>
          {productsData.map((item, i) => 
            item.productType === props.productType ? 
            (<ProductBox key={i} image={item.image} title={item.title} starRating={item.starRating} price={item.price} />) : null
          )}
        </Box>
      )}
    </Box>
  );
}
