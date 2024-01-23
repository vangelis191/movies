

export const getAllMovies = async () => {
  const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzEyN2YwYWUwMTEwZmZkNGYyMDJiNzA3YzI0MDJkMCIsInN1YiI6IjY1YWZkZjMzZjhhZWU4MDBhZWFjZWYxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Lz87fDjeFFezYBL9JxaUs4VdPIkaUx1JC0bEd8QeHG0'
      }
    };
    
    const res = await fetch(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`, options);
    const movies:any = await res.json();

   return movies;
};

export const getMovieById = async (id:number) => {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMzEyN2YwYWUwMTEwZmZkNGYyMDJiNzA3YzI0MDJkMCIsInN1YiI6IjY1YWZkZjMzZjhhZWU4MDBhZWFjZWYxYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Lz87fDjeFFezYBL9JxaUs4VdPIkaUx1JC0bEd8QeHG0'
        }
      };
      
      const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options);
      const movies:IMovies = await res.json();

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