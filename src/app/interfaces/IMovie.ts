interface IMovie {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection?: any;
    budget: number;
    genres: IGenre[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: IProductioncompany[];
    production_countries: IProductioncountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: ISpokenlanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }
  
  interface ISpokenlanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
  }
  
  interface IProductioncountry {
    iso_3166_1: string;
    name: string;
  }
  
  interface IProductioncompany {
    id: number;
    logo_path?: string;
    name: string;
    origin_country: string;
  }
  
  interface IGenre {
    id: number;
    name: string;
  }