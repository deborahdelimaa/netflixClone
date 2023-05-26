const API_KEY = "f817ba39a6ce9fdc2f2a3f09b5420af9";
const API_BASE = "https://api.themoviedb.org/3";

/* 
originais netflix, 
recomendados,
mais votados
ação
comedia
terror
romance
documentarios
*/

const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getHomeList: async () => {
    return [
      {
        slug: "original",
        title: "Netflix Originals",
        items: await basicFetch(
          `/discover/tv?with_network=213=eng&api_key=${API_KEY}`
        ),
      },
      {
        slug: "Trending",
        title: "Trending",
        items: await basicFetch(
          `/trending/all/week?language=eng&api_key=${API_KEY}`
        ),
      },
      {
        slug: "Top rated",
        title: "Top rated",
        items: await basicFetch(
          `/movie/top_rated?language=eng&api_key=${API_KEY}`
        ),
      },
      {
        slug: "Action",
        title: "Action",
        items: await basicFetch(
          `/discover/movie?with_genre=28&language=eng&api_key=${API_KEY}`
        ),
      },
      {
        slug: "Romance",
        title: "Romance",
        items: await basicFetch(
          `/discover/movie?with_genre=10749&language=eng&api_key=${API_KEY}`
        ),
      },
      {
        slug: "Comedy",
        title: "Comedy",
        items: await basicFetch(
          `/discover/movie?with_genre=35&language=eng&api_key=${API_KEY}`
        ),
      },
      {
        slug: "Documentary",
        title: "Documentary",
        items: await basicFetch(
          `/discover/movie?with_genre=99&language=eng&api_key=${API_KEY}`
        ),
      },
      {
        slug: "Horror",
        title: "Horror",
        items: await basicFetch(
          `/discover/movie?with_genre=27&language=eng&api_key=${API_KEY}`
        ),
      },
    ];
  },
};
