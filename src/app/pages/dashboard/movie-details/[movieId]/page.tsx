"use client";
import { getMovieById } from "@/app/api/movies";

import { useEffect, useState } from "react";
import Image from "next/image";

import Link from "next/link";
import { useMovieById } from "@/app/api/movies-swr";
import MovieDetailStyle from "./MovieDetails.style";



const MovieDetail = ({ params }: { params: { movieId: String } }) => {

  const { movie, isLoading, isError } = useMovieById(params?.movieId as string);
  
  return (
    <MovieDetailStyle>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <div className="card-wrapper">
        <Link href="/">
          <div className="logo-wrapper">
            <span className="material-symbols-outlined logo">home</span>
          </div>{" "}
        </Link>
        <div className="image-background">
          <Image
            width={"100"}
            height={"100"}
            unoptimized
            src={"https://image.tmdb.org/t/p/w500" + movie?.backdrop_path}
            alt=""
          />
          <div className="card-main">
            <h2 className="title">{movie?.original_title}</h2>
            <p className="descr">{movie?.overview}</p>
            <div className="release">Release Day - {movie?.release_date}</div>
            <div className="play">
              <span className="material-symbols-outlined">play_circle</span>
              <div>Let&apos;s Play the Movie</div>
            </div>
          </div>
        </div>
      </div>
    </MovieDetailStyle>
  );
};

export default MovieDetail;
