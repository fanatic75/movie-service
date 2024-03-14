import {
  pgTable,
  serial,
  text,
  integer,
} from 'drizzle-orm/pg-core'
import { InferSelectModel, InferInsertModel } from 'drizzle-orm'
import { Pool } from 'pg'
import { drizzle } from 'drizzle-orm/node-postgres'

export const ReviewsTable = pgTable(
  'reviews',
  {
    id: serial('id').primaryKey(),
    author: text('author').notNull(),
    content: text('content').notNull(),
    movieId: integer('movie_id').notNull(),
  },
)

export type Review = InferSelectModel<typeof ReviewsTable>
export type NewReview = InferInsertModel<typeof ReviewsTable>

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool);
