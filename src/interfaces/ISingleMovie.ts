export interface ISingleMovie {
  id: number;
  title: string;
  original_title: string;
  overview: string;
  vote_average: string;
  poster_path: string;
  genre_ids: number[];
  genres?: { id: number; name: string }[];
  tagline?: string;
  runtime?: number;
  budget?: number;
  revenue?: number;
}
