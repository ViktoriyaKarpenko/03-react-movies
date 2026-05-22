export type MovieType =
  | 'id'
  | 'poster_path'
  | 'backdrop_path'
  | 'title'
  | 'overview'
  | 'release_date'
  | 'vote_average';

export interface Movie {
  id: number;
  poster_path: string;
  backdrop_path: string;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
}
