export interface IMovies {
  results: {
    id: number;
    title: string;
    original_title: string;
    overview: string;
    vote_average: string;
    poster_path: string;
    genre_ids: number[];
  }[];
  total_pages?: number;
}
