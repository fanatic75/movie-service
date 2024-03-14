import {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString,
} from "graphql";
import { newReviewType, reviewType } from "../types/review";
import { NewReview, Review, ReviewsTable } from "../../lib/db";
import { eq } from "drizzle-orm";
import { Context } from "../../lib/context";

const createReview = {
  type: reviewType,
  args: {
    input: {
      type: new GraphQLNonNull(newReviewType),
    },
  },
  resolve: async (
    _: unknown,
    { input }: { input: NewReview },
    context: Context
  ):Promise<Review | null> => {
    try {
      const data = await context.db.insert(ReviewsTable).values(input).returning();
      return data[0];
    } catch (err) {
      return null;
    }
  },
};

const editReview = {
  type: reviewType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    content: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: async (
    _: unknown,
    { id, content }: { id: number; content: string },
    context: Context
  ):Promise<Review|null> => {
    try{
      const data = await context.db.update(ReviewsTable).set({content}).where(eq(ReviewsTable.id, id)).returning();
      return data[0];
    }catch(err){
      return null;
    }
  },
};

export { createReview, editReview };
