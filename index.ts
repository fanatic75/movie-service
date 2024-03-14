import 'dotenv/config'
import express from "express";
import { createHandler } from "graphql-http/lib/use/express";
import context from "./lib/context";
import schema from "./schema";
import { rateLimit } from "express-rate-limit";
import { ruruHTML } from "ruru/server";


const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: "draft-7", // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
});

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(limiter);

if (process.env.NODE_ENV === "development") {
  app.get("/", (req, res, next) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    return res.end(
      ruruHTML({
        endpoint: "/graphql",
      }),
    );
  });
}

app.all(
  "/graphql",
  createHandler({
    schema,
    context: context,
  })
);

async function start(): Promise<void> {
  try {
    app.listen(process.env.PORT, () => {
      console.log(`Server started at ${process.env.PORT}`);
    });
  } catch (error) {
    process.exit(1);
  }
}

start();
