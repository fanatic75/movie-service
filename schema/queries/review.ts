import { GraphQLInt, GraphQLList } from "graphql";
import { reviewType } from "../types/review";
import { Context } from "../../lib/context";
import { Review, ReviewsTable } from "../../lib/db";
import { eq } from "drizzle-orm";

export const getReview = {
  type: new GraphQLList(reviewType),
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (
    _: unknown,
    { id }: { id: number },
    context: Context
  ): Promise<Review[] | []> => {
    try {
      const data = await context.db
        .select()
        .from(ReviewsTable)
        .where(eq(ReviewsTable.movieId, id));
      return data;
    } catch (err) {
      return [];
    }
  },
};

