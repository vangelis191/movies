import React, { useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
import Paginator from "../paginator/paginator";
import Link from "next/link";
import { Response } from "../../interfaces/Response";

interface MovieListProps {
  movies: Response | undefined;
  onPageChange: (newPage: number) => void;
}

export const MovieListStyle = styled.div`
  .card-container-big {
    display: flex;
    gap: 16px;
    justify-content: center;
    position: relative;
  }

  .card-big {
    position: relative;
    border: 1px solid #ccc;
    border-radius: 20px;
    padding: 16px;
    width: 800px;
    height: 300px;
    margin: 0px 0px 40px 0px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    z-index: 1000 !important;
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
  .card-title {
    font-size: 3rem;
    color: white;
    position: absolute;
    left: 20px;
  }

  span {
    /* position: absolute;
    bottom: 30px; */
    color: white;
  }

  .play {
    display: flex;
    gap: 20px;
    align-items: flex-end;
    height: 100%;
    position: relative;
  }

  .genre-wrapper {
    display: flex;
    gap: 50px;
    justify-content: center;
  }

  .genre-items {
    display: flex;
    gap: 20px;
    background-color: #cfcece;
    padding: 20px 40px;
    border-radius: 10px;
    margin: 0 0 20px 0;
    overflow: hidden;
    align-items: center;
    justify-content: center;
  }
  .mini-cards-wrapper {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    place-items: center;
    overflow: hidden;
    grid-gap: 0px;
  }
  .mini-card-wrapper {
    margin: 10px;
    height: 400px;
    width: 400px;
    border-radius: 20px;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
  }

  .mini-card-wrapper:hover {
    cursor: pointer;
    transform: scale(1.2);
  }

  .image-background-wrapper {
    position: relative;
    height: 70%;
  }

  .mini-card-body {
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .mini-card-info {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 40px;
  }

  .mini-card-title {
    font-size: 10px;
    color: white;
    margin: 20px 0;
  }
  .bg-color {
    color: yellow;
  }
  .all-movies-titles {
    color: white;
    margin: 0 20px;
  }

  @media only screen and (max-width: 2500px) {
    .mini-cards-wrapper {
      grid-template-columns: auto auto auto auto;
    }

    .mini-card-wrapper {
      /* max-width: 150px; */
    }

    @media only screen and (max-width: 1600px) {
      .genre-wrapper {
        gap: 20px;
      }

      .mini-cards-wrapper {
        grid-template-columns: auto auto auto;
      }
    }
    @media only screen and (max-width: 1400px) {
      .genre-items {
        padding: 10px 30px;
        overflow: hidden;
        gap: 5px;
      }
    }

    @media only screen and (max-width: 1239px) {
      .mini-cards-wrapper {
        grid-template-columns: auto auto;
      }
    }

    @media only screen and (max-width: 1170px) {
      .genre-items {
        padding: 10px 20px;
        overflow: hidden;
        gap: 5px;
      }
    }

    @media only screen and (max-width: 1000px) {
      .genre-wrapper {
        display: grid;
        grid-template-columns: auto auto auto auto auto;
        place-items: center;
      }
    }

    @media only screen and (max-width: 944px) {
      .genre-wrapper {
        display: grid;
        grid-template-columns: auto auto auto auto;
        margin-left: 100px;
      }

      .genre-items {
        padding: 5px 5px;
        overflow: hidden;
        gap: 5px;
      }

      .mini-cards-wrapper {
        grid-template-columns: auto;
      }

      .mini-card-wrapper {
        width: 800px;
        height: 800px;
      }

      .mini-card-body {
        justify-content: center;
        align-items: center;
      }
      .mini-card-title {
        font-size: 1rem;
      }
    }

    @media only screen and (max-width: 600px) {
      .genre-wrapper {
        display: grid;
        grid-template-columns: auto auto auto;
        margin-left: 100px;
      }

      .genre-items {
        padding: 10px 15px;
        overflow: hidden;
        gap: 5px;
      }

      .genre-text{
        font-size:13px;
      }
    }
  }
`;
const MovieList: React.FC<MovieListProps> = ({
  movies,
  onPageChange,
}: MovieListProps) => {
  useEffect(() => {}, [movies]);

  const genreList = [
    {
      genre: "Trending",
      text: "local_fire_department",
      class: "material-symbols-outlined",
    },
    {
      genre: "Action",
      text: "interests",
      class: "material-symbols-outlined",
    },
    {
      genre: "Romance",
      text: "favorite",
      class: "material-symbols-outlined",
    },
    {
      genre: "Animation",
      text: "comic_bubble",
      class: "material-symbols-outlined",
    },
    {
      genre: "Horor",
      text: "fit_screen",
      class: "material-symbols-outlined",
    },
    {
      genre: "Special",
      text: "start",
      class: "material-symbols-outlined",
    },
    {
      genre: "Moon",
      text: "dark_mode",
      class: "material-symbols-outlined",
    },
  ];

  return (
    <MovieListStyle>
      <div className="card-container-big">
        {movies?.results[1]?.backdrop_path && (
          <div className="card-big">
            <div className="image-background">
              <Image
                width={"100"}
                height={"100"}
                unoptimized
                src={
                  "https://image.tmdb.org/t/p/w500" +
                  movies?.results[1]?.backdrop_path
                }
                alt=""
              />
            </div>
            <h3 className="card-title"> {movies?.results[1]?.title}</h3>

            <div className="play">
              <span className="material-symbols-outlined">play_circle</span>
              <span>Let Play Moview</span>
            </div>
          </div>
        )}
        {movies?.results[0]?.backdrop_path && (
          <div className="card-big">
            <div className="image-background">
              <Image
                width={"100"}
                height={"100"}
                unoptimized
                src={
                  "https://image.tmdb.org/t/p/w500" +
                  movies?.results[0]?.backdrop_path
                }
                alt=""
              />
            </div>
            <h3 className="card-title"> {movies?.results[0]?.title}</h3>

            <div className="play">
              <span className="material-symbols-outlined">play_circle</span>
              <span>Let Play Moview</span>
            </div>
          </div>
        )}
      </div>
      {/* End of Main Cards */}
      <div className="genre-wrapper">
        {genreList.map((data) => {
          return (
            <div key={data.genre} className="genre-items">
              <span className={data.class}>{data.text}</span>
              <span className="genre-text">{data.genre}</span>
            </div>
          );
        })}
      </div>
      {/* End of genre */}
      <>
        <h3 className="all-movies-titles">All Movies</h3>
        <div className="mini-cards-wrapper">
          {movies &&
            movies?.results.map((data: any) => {
              const year = data.release_date.slice(0, 4);
              return (
                <Link
                  key={data.id}
                  href={`/pages/dashboard/movie-details/${data.id}`}
                >
                  <div className="mini-card-wrapper">
                    <div className="image-background-wrapper">
                      <div className="image-background">
                        <Image
                          width={"100"}
                          height={"100"}
                          unoptimized
                          src={
                            "https://image.tmdb.org/t/p/w500" +
                            data?.backdrop_path
                          }
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="mini-card-body">
                      <div className="mini-card-title">{data?.title}</div>
                      <div className="mini-card-info">
                        <span className="material-symbols-outlined bg-color">
                          star
                        </span>
                        <span className="year">{year}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
        <Paginator
          results={movies?.results}
          total_pages={movies?.total_pages}
          total_results={movies?.total_results}
          onPageChange={onPageChange}
        />
      </>
      {/* End of mini cards */}
    </MovieListStyle>
  );
};

export default MovieList;
