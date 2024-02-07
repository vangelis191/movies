"use client";

import MovieList from "@/app/components/movieList/MovieList";
import React, { useEffect, useState } from "react";
import DashboardStyle from "./dashboard.style";
import GlobalHeader from "@/app/components/globalHeader/GlobalHeader";
import { useAllMovies, useSearchMovies } from "@/app/api/movies-swr";
import { log } from "console";
import { GetStaticProps } from "next";

export default function DashboardPage() {

 
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);


  const { movies, isLoading, isError } = useAllMovies(page);
  
  const { searchMoviesData, isLoadingSearch, isErrorSearch  } = useSearchMovies(searchQuery, page)


  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

   const getStaticProps: GetStaticProps = async () => {
  
    return {
      props: {
        movies,
        searchMoviesData

      },
    };
  };

  
  useEffect(() => {
    setPage(1)
  }, [searchQuery]);

  return (
    <>
      <DashboardStyle>
        <div className="wrapper">
          <GlobalHeader setSearchQuery={setSearchQuery} />
          <MovieList movies={searchQuery ? searchMoviesData : movies} onPageChange={handlePageChange} searchQuery={searchQuery} />
        </div>
      </DashboardStyle>
    </>
  );
}
