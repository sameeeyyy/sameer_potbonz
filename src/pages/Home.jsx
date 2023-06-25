import React from 'react'
import TopBar from '../components/TopBar'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Stats from '../components/Stats'
import Services from '../components/Services'
import ShopNow from '../components/ShopNow'
import FeaturedGrid from '../components/FeaturedGrid'
import Newsletter from '../components/Newsletter'
import PostsGrid from '../components/PostsGrid'
import Contacts from '../components/Contacts'
import Footer from '../components/Footer'
import posts from '../api/Posts.json'
import NavDrawer from '../components/NavDrawer'
import { QueryClient, QueryClientProvider } from 'react-query';

const queryStats = new QueryClient();
const queryServices = new QueryClient();
const queryContacts = new QueryClient();
const queryPosts = new QueryClient();

export default function Home() {
  return (
    <>
        <NavDrawer/>
        <TopBar/>
        <Navbar/>
        <Banner/>
        <QueryClientProvider client={queryStats}>
          <Stats/>
        </QueryClientProvider>
        <QueryClientProvider client={queryServices}>
          <Services/>
        </QueryClientProvider>
        <ShopNow/>
        <FeaturedGrid/>
        <Newsletter/>
        <QueryClientProvider client={queryPosts}>
          <PostsGrid ComponentTag={'Our Blog'} ComponentName={'Latest Post'} ComponentPostType={'latest'} posts={posts}/>
        </QueryClientProvider>
        <QueryClientProvider client={queryContacts}>
          <Contacts/>
        </QueryClientProvider>
        <QueryClientProvider client={queryPosts}>
        <PostsGrid ComponentTag={''} ComponentName={'Other Post'} ComponentPostType={'other'} posts={posts}/>
        </QueryClientProvider>
        <Footer/>
    </>
  )
}
