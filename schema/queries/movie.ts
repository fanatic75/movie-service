import { GraphQLInt, GraphQLNonNull, GraphQLString } from "graphql";
import { Context, TMDB_API_URL } from "../../lib/context";
import { Movie, PopularMovieResults, SearchMovieResults, movieType, popularMovieResultsType, searchMovieResultsType } from "../types/movie";


const getMovie = {
  type: movieType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  },
  resolve: async (_:unknown, { id }: { id: number }, context: Context):Promise<Movie | null> => {
    try{
      const data = await context.axios.get<Movie>(`${TMDB_API_URL}/movie/${id}?api_key=${process.env.TMDB_API_KEY}&language=en-US`)
      return data.data;
    }catch(err){
      return null;
    }
  },
};

const getPopularMovies = {
  type: popularMovieResultsType,
  args: {
    page: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  },
  resolve: async (_:unknown, { page }: { page: number }, context: Context):Promise<PopularMovieResults> => {
    try{
      const data = await context.axios.get<PopularMovieResults>(`${TMDB_API_URL}/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=${page}`)
      return data.data;
    }catch(err){
      return {
        results: [],
        page: 0,
        total_results: 0,
        total_pages: 0,
      };
    }
  },
};

const searchMovie = {
  type: searchMovieResultsType,
  args: {
    title: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: async (_:unknown, { title }: { title: string }, context: Context):Promise<SearchMovieResults> => {
    try{
      const data = await context.axios.get<SearchMovieResults>(`${TMDB_API_URL}/search/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&query=${title}`)
      return data.data;
    }catch(err){
      return {
        results: [],
        page: 0,
        total_results: 0,
        total_pages: 0,
      };
    }
  },
};

export { getMovie, getPopularMovies, searchMovie };
