import { createRouter } from "../createRouter";
import { foods } from "./food";
import { reviews } from "./review";

export const appRouter = createRouter()
  .merge("foods", foods)
  .merge("reviews", reviews);
export type AppRouter = typeof appRouter;
