CREATE TABLE IF NOT EXISTS "reviews" (
	"id" serial PRIMARY KEY NOT NULL,
	"author" text NOT NULL,
	"content" text NOT NULL,
	"movie_id" integer NOT NULL
);
