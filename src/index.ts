import express from "express";
import * as trpc from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "./routes";
import { Context, createContext } from "./context";

const app = express();

export const createRouter = () => {
  return trpc.router<Context>();
};

app.use(
  "/",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  }),
);

app.listen(8080, () => {
  console.log("🧀 Server running on http://0.0.0.0:8080");
});
