import {
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export const movieType = new GraphQLObjectType({
  name: "Movie",
  fields: {
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    overview: { type: GraphQLString },
    poster_path: { type: GraphQLString },
    release_date: { type: GraphQLString },
    vote_average: { type: GraphQLInt },
    vote_count: { type: GraphQLInt },
    original_language: { type: GraphQLString },
    original_title: { type: GraphQLString },
    adult: { type: GraphQLBoolean },
    backdrop_path: { type: GraphQLString },
    genre_ids: { type: new GraphQLList(GraphQLInt) },
    video: { type: GraphQLBoolean },
    popularity: { type: GraphQLInt },
  },
});

export type SearchMovieResults = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export const searchMovieResultsType = new GraphQLObjectType({
  name: "SearchMovieResults",
  fields: {
    page: { type: GraphQLInt },
    results: { type: new GraphQLList(movieType) },
    total_pages: { type: GraphQLInt },
    total_results: { type: GraphQLInt },
  },
});

export const popularMovieResultsType = new GraphQLObjectType({
  name: "PopularMovieResults",
  fields: {
    results: { type: new GraphQLList(movieType) },
    page: { type: GraphQLInt },
    total_results: { type: GraphQLInt },
    total_pages: { type: GraphQLInt },
  },
});

export type PopularMovieResults = {
  results: Movie[];
  page: number;
  total_results: number;
  total_pages: number;
};
