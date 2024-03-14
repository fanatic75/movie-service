import { GraphQLObjectType } from 'graphql';
import {createReview, editReview} from './mutations/review';

const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: ({
    createReview,
    editReview
  })
});

export default mutation;