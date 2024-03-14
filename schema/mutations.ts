import { GraphQLObjectType } from 'graphql';
import {createReview, editMovieReview} from './mutations/review';

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: ({
    createReview,
    editMovieReview
  })
});

export default mutation;