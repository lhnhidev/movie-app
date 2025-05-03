export const getUrlDetailsMovie = (id) => `https://api.themoviedb.org/3/movie/${id}?append_to_response=release_dates,credits`;

export const getUrlRelatedMovie = (id) => `https://api.themoviedb.org/3/movie/${id}/recommendations`;

export const formatCurrency = (number, currency = 'USD') => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: 'currency',
    currency
  });

  return formatter.format(number);
}