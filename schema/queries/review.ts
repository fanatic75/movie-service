import { GraphQLInt } from "graphql";
import { reviewType } from "../types/review";
import { Context } from "../../lib/context";
import { Review, ReviewsTable } from "../../lib/db";
import { eq } from "drizzle-orm";

export const getReview = {
  type: reviewType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: async (
    _: unknown,
    { id }: { id: number },
    context: Context
  ): Promise<Review | null> => {
    try {
      console.log(id);
      const data = await context.db
        .select()
        .from(ReviewsTable)
        .where(eq(ReviewsTable.movieId, id));
        console.log(data);
      return data[0];
    } catch (err) {
      return null;
    }
  },
};

