
'use client';
import { getAllMovies,getMovieImageById } from '@/app/api/movies';
import MovieList from '@/app/components/movieList/MovieList';
import SearchBar from '@/app/components/searchBar/SearchBar'
import React, {  useEffect, useState } from 'react'
import DashboardStyle from"./dashboard.style";
import styled from "styled-components";
import GlobalHeader from '@/app/components/globalHeader/GlobalHeader';


export default function DashboardPage  (){

  

  const [movies, setMovies] = useState<IMovies>();

  useEffect(() => {
    const fetchData = async () => {
      try {
       const moviesData = await getAllMovies();    
       
       setMovies(moviesData);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchData();
  }, []);
  return (
   <>
   <DashboardStyle>
    <div className="wrapper" >
     <GlobalHeader />
      <MovieList movies={movies}/>
    </div>
    </DashboardStyle>
   </>
  )
}

