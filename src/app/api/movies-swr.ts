import useSWR from "swr";
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

export const useAllMovies = (page = 1): { movies: Response | null; isLoading: boolean; isError: any } => {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`,
    fetcher,
    {
      onSuccess: (response: Response) => response,
      onError: (error) => error,
    }
  );
  return {
    movies: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const useSearchMovies = (search: string, id: number): { searchMoviesData: Response | null; isLoadingSearch: boolean; isErrorSearch: any } => {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/search/movie?language=en-US&page=${id}&query=${search}`,
    fetcher,
    {
      onSuccess: (response: Response) => response,
      onError: (error) => error,
    }
  );
  return {
    searchMoviesData: data,
    isLoadingSearch: !error && !data,
    isErrorSearch: error,
  };
};

export const useMovieById = (id: string) : { movie: IMovie | null; isLoading: boolean; isError: any } => {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    fetcher,
    {
      onSuccess: (response: Response) => response,
      onError: (error) => error,
    }
  );
  return {
    movie: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export const useMovieImageById = (imageId: number) => {
  const { data, error } = useSWR(
    `https://api.themoviedb.org/3/movie/${imageId}/images`,
    fetcher
  );

  return {
    image: data,
    isLoading: !error && !data,
    isError: error,
  };
};
