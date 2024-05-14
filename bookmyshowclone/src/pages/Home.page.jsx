import React, { useState, useEffect } from 'react'

//Layout Hoc
import DefaultLayoutHoc from '../layout/Default.Layout'


//Components
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.Component'
import PosterSlider from '../components/posterSlider/PosterSlider.Component'
import EntertainmentCardSlider from '../components/Entertainment/EntertainmentCard.Component'

import axios from 'axios';

const Homepage = () => {
   const [recommendedMovies, setRecommendedMovies] = useState([]);
   const [premierMovies, setPMovies] = useState([]);
   const [onlineStreamEvents, setOnlineStrameEvents] = useState([]);

   useEffect(() => {
    const requestTopRatedMovies = async () => {
      const getTopRatedMovies = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=de49450678a2bdacaac2f299186f1a68"
      );
      setRecommendedMovies(getTopRatedMovies.data.results);
    };
    requestTopRatedMovies();
  }, []);

  useEffect(() => {
    const requestUpcomingMovies = async () => {
      const getUpcomingMovies = await axios.get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=de49450678a2bdacaac2f299186f1a68"
      );
      setPMovies(getUpcomingMovies.data.results);
    };
    requestUpcomingMovies();
  }, []);


  useEffect(() => {
    const requestOnlineStreamMoviesMovies = async () => {
      const getOnlineStreamMovies = await axios.get(
        "https://api.themoviedb.org/3/movie/popular?api_key=de49450678a2bdacaac2f299186f1a68"
      );
      setOnlineStrameEvents(getOnlineStreamMovies.data.results);
    };
    requestOnlineStreamMoviesMovies();
  }, []);



  return (
    <>
        <HeroCarousel />
       <div className='container mx-auto px-4 md:px-12 my-8'>
        <h1 className='text-2xl font-bold text-gray-800 sm:ml-3 my-3'>The Best of Entertainment</h1>
        <EntertainmentCardSlider />
       </div>

       <div className='container mx-auto px-4 md:px-12 my-8'>
        <PosterSlider
        title = "Recommended Movies"
        subtitle = "List of Recommended Movies"
        posters = {recommendedMovies}
        isDark = {false}
        />
       </div>

       <div className='bg-[#2B3149] py-12'>
            <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
                <div className='hidden md:flex'>
                    <img src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png" alt="RuPay"  className='w-full h-full'
                    />
                </div>
                 <PosterSlider 
            title = "Premiers"
            subtitle = "Brand new release every Friday"
            posters= {premierMovies}
            isDark = {true}
            />
            </div>
        </div>

       <div className='container mx-auto px-4 md:px-12 my-8 flex flex-col gap-3'>
       <PosterSlider 
        title = "Online Streaming Events"
        subtitle = "Online Streaming Events"
        posters = {onlineStreamEvents}
        isDark = {false}
        />
       </div>
    </>
    
  )
}

export default DefaultLayoutHoc(Homepage)