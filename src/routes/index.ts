import { createRouter } from "../createRouter";
import { reviews } from "./review";

export const appRouter = createRouter().merge("reviews", reviews);
export type AppRouter = typeof appRouter;
