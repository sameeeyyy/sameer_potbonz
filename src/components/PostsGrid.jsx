import { Box, Skeleton, Container, Typography, CardMedia, styled } from '@mui/material';
import { FaUserLarge, FaCalendarDay } from "react-icons/fa6";
import Slider from "react-slick";
import customTheme from '../theme'
import { useQuery } from 'react-query';

export default function PostsGrid(props) {

  const { posts, ComponentTag, ComponentName, ComponentPostType } = props;

  const { isLoading, isError, data } = useQuery('jsonData', fetchData);

  async function fetchData() {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return posts;
  }

  if (isLoading) {
      return (
          <Box sx={{ width: '100%' }}>
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation={false} />
          </Box>
      );
  }

  if (isError) {
      return <div>Error loading data</div>;
  }

  const TagLine = styled(Typography)(({ theme }) => ({
    fontFamily: customTheme.fonts.nunito,
    fontSize: '16px',
    lineHeight: '19px',
    fontWeight: '700',
    color: customTheme.color.tagColor,
    textTransform: "uppercase"
  }));

  const Heading = styled(Typography)(({ theme }) => ({
    fontFamily: customTheme.fonts.nunito,
    textAlign: 'center',
    fontSize: '68px',
    lineHeight: '71px',
    fontWeight: '800',
    color: customTheme.color.headingColor,
    marginBottom: '30px',
    marginTop: '15px',
    [theme.breakpoints.up('xs')]: {
      fontSize: '28px',
      lineHeight: '28px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '48px',
      lineHeight: '48px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '68px',
      lineHeight: '71px',
    },
  }));

  const CategoryTag = styled(Typography)(({ theme }) => ({
    position: 'absolute',
    right: '20px',
    top: '-20px',
    zIndex: '999999',
    fontFamily: customTheme.fonts.nunito,
    fontSize: '16px',
    lineHeight: '19px',
    fontWeight: '700',
    color: customTheme.color.paragraphColor,
    textTransform: "uppercase",
    padding: '10px',
    background: customTheme.color.bgYellow,
    borderRadius: '8px'
  }));

  const Details = styled(Typography)(({ theme }) => ({
    fontFamily: customTheme.fonts.nunito,
    fontSize: '16px',
    lineHeight: '19px',
    fontWeight: '700',
    color: customTheme.color.paragraphColor,
    display: 'flex',
    gap: '5px'
  }));

  const PostTitle = styled(Typography)(({ theme }) => ({
    fontFamily: customTheme.fonts.nunito,
    fontSize: '24px',
    fontWeight: '700',
    color: customTheme.color.headingColor,
    marginTop: '20px',
    textAlign: 'left'
  }));

  const PostContent = styled(Typography)(({ theme }) => ({
    fontFamily: customTheme.fonts.lato,
    fontSize: '18px',
    lineHeight: '26px',
    color: customTheme.color.headingColor,
    marginTop: '10px',
    textAlign: 'left'
  }));

  var setting = {
    responsive: [
      { breakpoint: 680, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
    ]
  }
  
  return (
    <Box sx={{textAlign: "center", padding: "76px 0 74px"}}>
      <Container sx={{maxWidth: "1418px !important"}}>
        {ComponentTag && <TagLine variant='span'>{ComponentTag}</TagLine>}
        {ComponentName && <Heading variant='h2'>{ComponentName}</Heading>}

        <Slider draggable={true} dots={true} arrows={false} infinite={false} speed={300} slidesToShow={3} slidesToScroll={1} {...setting}>
          
          {data.map((post, i)=>
            post.postType === ComponentPostType ? 
            (
                <Box key={i} sx={{ padding: '20px 0' }}>
                  <Box sx={{ position: 'relative'}}>
                    <CategoryTag variant='span'>{post.categoryTag}</CategoryTag>
                    <CardMedia
                        component="img"
                        alt={post.title}
                        image={post.featuredImage}
                        sx={{ width: '100%' }}
                    />
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', margin: '15px 0' }}>
                    <Details><FaUserLarge color={customTheme.color.bgPurple}/>by {post.author}</Details>
                    <Details><FaCalendarDay color={customTheme.color.bgPurple}/>{post.publishDate}</Details>
                  </Box>
                  <Box>
                    <PostTitle variant='h2'>{post.title}</PostTitle>
                    <PostContent>{post.content}</PostContent>
                  </Box>
                </Box>
            ) : null
          )}

        </Slider>
      </Container>
    </Box>
  )
}
