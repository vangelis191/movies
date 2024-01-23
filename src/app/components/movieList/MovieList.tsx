import React, { useEffect } from "react";
import styled from "styled-components";
import Image from "next/image";
interface MovieListProps {
  movies: IMovies | undefined | any;
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
  }
  .mini-cards-wrapper {
    display: flex;
    justify-content: center;
  }
  .mini-card-wrapper {
    margin: 10px;
    height: 300px;
    width: 100px;
    border-radius: 20px;
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
  .mini-card-info{
    position: absolute;
    top: 70px;
  }

  .mini-card-title {
    font-size: 10px;
    color: white;
    margin: 20px 0;
  }
  .bg-color {
    color: yellow;
  }
  h3{
    margin: 0 220px;
    color: white;
  }
`;
const MovieList: React.FC<MovieListProps> = ({ movies }: MovieListProps) => {
  useEffect(() => {
    console.log(movies);
  }, [movies]);

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
      </div>
      {/* End of Main Cards */}
      <div className="genre-wrapper">
        {genreList.map((data) => {
          return (
            <div className="genre-items">
              <span className={data.class}>{data.text}</span>
              <span className="genre-text">{data.genre}</span>
            </div>
          );
        })}
      </div>
      {/* End of genre */}
      <>
      <h3>All Movies</h3>
        <div className="mini-cards-wrapper">
          {movies?.results.map((data: any) => {
            const year = data.release_date.slice(0, 4);
            return (
              <div className="mini-card-wrapper">
                <div className="image-background-wrapper">
                  <div className="image-background">
                    <Image
                      width={"100"}
                      height={"100"}
                      unoptimized
                      src={
                        "https://image.tmdb.org/t/p/w500" + data?.backdrop_path
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
            );
          })}
        </div>
      </>
    </MovieListStyle>
  );
};

export default MovieList;
