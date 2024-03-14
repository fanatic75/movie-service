import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLInputObjectType } from "graphql";

export const newReviewType = new GraphQLInputObjectType({
  name: "NewReview",
  fields: {
    author: { type: GraphQLString },
    content: { type: GraphQLString },
    movieId: { type: GraphQLInt },
  },
});

export const reviewType = new GraphQLObjectType({
  name: "Review",
  fields: {
    id : {type: GraphQLInt},
    author: { type: GraphQLString },
    content: { type: GraphQLString },
    movieId: { type: GraphQLInt },
  },
});