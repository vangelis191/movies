"use client";

import MovieList from "@/app/components/movieList/MovieList";
import React, { useState } from "react";
import DashboardStyle from "./dashboard.style";
import GlobalHeader from "@/app/components/globalHeader/GlobalHeader";
import { log } from "console";
import { useAllMovies, useSearchMovies } from "@/app/api/movies-swr";

export default function DashboardPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [page, setPage] = useState(1);


  const { movies, isLoading, isError } = useAllMovies(page);
  
  const { searchMoviesData, isLoadingSearch, isErrorSearch  } = useSearchMovies(searchQuery,page)

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  return (
    <>
      <DashboardStyle>
        <div className="wrapper">
          <GlobalHeader setSearchQuery={setSearchQuery} />
          <MovieList movies={searchQuery ? searchMoviesData : movies} onPageChange={handlePageChange} />
        </div>
      </DashboardStyle>
    </>
  );
}
