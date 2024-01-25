"use client";
import { getMovieById } from "@/app/api/movies";

import { useEffect, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
import { useMovieById } from "@/app/api/movies-swr";

export const MovieDetailStyle = styled.div`
  .logo-wrapper {
    background-color: white;
  }
  .logo {
    position: absolute;
    margin: 20px;
    z-index: 1000;
    height: 30px;
    font-size: 2rem;
      background-color: white;
  }
  .card-wrapper {
    max-width: calc(100% - 20px);
    min-height: 1200px;
    border-radius: 10px;
    margin: 20px auto;
    background-color: #b7b7b7c8;
    position: relative;
  }

  .image-background,
  img {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    object-fit: cover;
    border-radius: 20px;
  }

  .image-background::before {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 20px;
  }

  .card-main {
    position: relative;
    margin: 200px;
  }

  .title {
    font-size: 2rem;
    color: white;
    font-family: "sans-serif";
    font-weight: 100;
  }

  .descr {
    font-size: 1.5rem;
    color: white;
    font-family: "sans-serif";
    font-weight: 100;
    margin-top: 15px;
  }

  .release {
    font-size: 1rem;
    color: white;
    font-family: "sans-serif";
    font-weight: 100;
    margin-top: 15px;
  }

  .play {
    display: flex;
    gap: 10px;
    align-items: flex-end;
    margin-top: 10px;
    height: 100%;
    position: relative;
    color: white;
  }

  @media (max-width: 600px) {
    .logo {
      position: absolute;
      top: 20px;
      left: 20px;
      z-index: 1000;
      height: 30px;
      font-size: 2rem;
      background-color: white;
    }

    .image-background,
    img {
      border-radius: 0 !important;
    }

    .card-wrapper {
      max-width: calc(100%);
      min-height: calc(100%);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center; /* Optional: If you want to center vertically and horizontally */
      height: 100vh;
      flex: 1;
      margin: 0;
    }
    .card-main {
      position: relative;
      margin: 500px 0 !important;
      padding: 20px;
    }

    .title {
      font-size: 1.5rem;
    }

    .descr {
      font-size: 1rem;
    }

    .release {
      font-size: 0.9rem;
    }
  }
`;

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
              <div>Let's Play the Movie</div>
            </div>
          </div>
        </div>
      </div>
    </MovieDetailStyle>
  );
};

export default MovieDetail;
