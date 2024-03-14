import { GraphQLObjectType } from 'graphql';
import { getMovie, getPopularMovies, searchMovie } from './queries/movie';
import { getReview } from './queries/review';
const query = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    getMovie,
    getPopularMovies,
    getReview,
    searchMovie
  }),
});

export default query;