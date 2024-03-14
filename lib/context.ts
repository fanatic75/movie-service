import { db } from "./db";
import axios from "axios";

export const TMDB_API_URL = process.env.TMDB_API_URL;

const context = {
  db,
  axios,
};

export type Context = typeof context;

export default context;
