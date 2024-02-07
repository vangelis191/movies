import { Response } from "../interfaces/Response";

const fetcher = async (url: string) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzEyN2YwYWUwMTEwZmZkNGYyMDJiNzA3YzI0MDJkMCIsInN1YiI6IjY1YWZkZjMzZjhhZWU4MDBhZWFjZWYxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Lz87fDjeFFezYBL9JxaUs4VdPIkaUx1JC0bEd8QeHG0",
    },
  };

  const res = await fetch(url, options);
  return res.json();
};

export const getStaticProps = async () => {
  const page = 1;
  const search = ""; 
  const id = 1; 

  const useAllMovies = await fetcher(
    `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`
  );
  const searchMoviesResponse = await fetcher(
    `https://api.themoviedb.org/3/search/movie?language=en-US&page=${id}&query=${search}`
  );
  const movieByIdResponse = await fetcher(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`
  );
  const movieImageByIdResponse = await fetcher(
    `https://api.themoviedb.org/3/movie/${id}/images`
  );

  return {
    props: {
        useAllMovies,
      searchMoviesResponse,
      movieByIdResponse,
      movieImageByIdResponse,
    },
  };
};
