

export const getAllMovies = async (page = 1) => {
  const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzEyN2YwYWUwMTEwZmZkNGYyMDJiNzA3YzI0MDJkMCIsInN1YiI6IjY1YWZkZjMzZjhhZWU4MDBhZWFjZWYxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Lz87fDjeFFezYBL9JxaUs4VdPIkaUx1JC0bEd8QeHG0'
      }
    };
    
    const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=${page}`, options);
    const movies:any = await res.json();

   return movies;
};

export const searchMovies = async (search:string,id:number) => {
  const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzEyN2YwYWUwMTEwZmZkNGYyMDJiNzA3YzI0MDJkMCIsInN1YiI6IjY1YWZkZjMzZjhhZWU4MDBhZWFjZWYxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Lz87fDjeFFezYBL9JxaUs4VdPIkaUx1JC0bEd8QeHG0'
      }
    };
    
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?language=en-US&page=${id}&query=${search}'`, options);
    const movies:any = await res.json();

   return movies;
};

export const getMovieById = async (id:string) => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzEyN2YwYWUwMTEwZmZkNGYyMDJiNzA3YzI0MDJkMCIsInN1YiI6IjY1YWZkZjMzZjhhZWU4MDBhZWFjZWYxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Lz87fDjeFFezYBL9JxaUs4VdPIkaUx1JC0bEd8QeHG0'
        }
      };
      
      const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options);
      const movies:IMovie = await res.json();

     return movies;
  };

  export const getMovieImageById = async (imageId:number) => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzEyN2YwYWUwMTEwZmZkNGYyMDJiNzA3YzI0MDJkMCIsInN1YiI6IjY1YWZkZjMzZjhhZWU4MDBhZWFjZWYxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Lz87fDjeFFezYBL9JxaUs4VdPIkaUx1JC0bEd8QeHG0'
        }
      };
      
      const res = await fetch(`https://api.themoviedb.org/3/movie/${imageId}/images`, options);
      const image:any = await res.json();

     return image;
  };