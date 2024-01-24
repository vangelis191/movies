
'use client';
import { getAllMovies,getMovieImageById, searchMovies } from '@/app/api/movies';
import MovieList from '@/app/components/movieList/MovieList';
import SearchBar from '@/app/components/searchBar/SearchBar'
import React, {  useEffect, useState } from 'react'
import DashboardStyle from"./dashboard.style";
import styled from "styled-components";
import GlobalHeader from '@/app/components/globalHeader/GlobalHeader';

import {Response} from "../../interfaces/Response"

export default function DashboardPage  (){

  

  const [movies, setMovies] = useState<Response>();
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    const fetchData = async () => {
       
      try {
       const moviesData = await getAllMovies(page);           
       setMovies(moviesData);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
      };      
      if(searchQuery.length <= 0 ) fetchData()
  }, [page,movies]);

  useEffect(() => {
    const fetchData = async () => {
      try {
       const moviesData = await searchMovies(searchQuery,page);    
       
       setMovies(moviesData);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
      };
  
      console.log(searchQuery);
      console.log(movies);
      
      
    fetchData();
  }, [searchQuery,page]);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    
  };
  return (
   <>
   <DashboardStyle>
    <div className="wrapper" >
     <GlobalHeader setSearchQuery={setSearchQuery} />
      <MovieList movies={movies}  onPageChange={handlePageChange}/>
    </div>
    </DashboardStyle>
   </>
  )
}

