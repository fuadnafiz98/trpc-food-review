import * as trpc from "@trpc/server";
import { z } from "zod";

export const appRouter = trpc
  .router()
  .query("reviews", {
    async resolve(req) {
      console.log("REQUEST", req);
      return {
        name: "fuad",
      };
    },
  })
  .mutation("reviews/create", {
    input: z.object({ name: z.string().min(5) }),
    async resolve(req) {
      return {
        id: 1,
        name: "fuadnafiz98",
      };
    },
  });

export type AppRouter = typeof appRouter;
