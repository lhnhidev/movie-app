export const URL_POPULAR_MOVIES = "https://api.themoviedb.org/3/movie/popular";

export const OPTIONS_GET = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MDc2OGExMTZkMTA2ZDgwNWI0NjdiYzVmYTcwN2UwZSIsIm5iZiI6MTc0NTg1NzYzOC41NDMsInN1YiI6IjY4MGZhYzY2YTkwYWNhZjZlZWVhZTBmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qfLXEhFU67ZpVdb4mPiYW0PWFZhUopzjGpeGWATHSOI",
  },
};

export const getUrlDetailsMovie = (id) => `https://api.themoviedb.org/3/movie/${id}?append_to_response=release_dates,credits`;

export const TABS_TRENDING = [
  {
    id: 'all',
    label: 'All',
    url: `https://api.themoviedb.org/3/trending/all/day?language=en-US`
  },
  {
    id: 'movie',
    label: 'Movie',
    url: `https://api.themoviedb.org/3/trending/movie/day?language=en-US`
  },
  {
    id: 'tv',
    label: 'Tv show',
    url: `https://api.themoviedb.org/3/trending/tv/day?language=en-US`
  }
]

export const TABS_RATED = [
  {
    id: 'movie',
    label: 'Movie',
    url: `https://api.themoviedb.org/3/movie/top_rated`
  },
  {
    id: 'tv',
    label: 'Tv show',
    url: `https://api.themoviedb.org/3/tv/top_rated`
  }
]