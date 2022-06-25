import { reviewResolver } from "../resolvers";
import { z } from "zod";

import { createRouter } from "../createRouter";

export const reviews = createRouter()
  .query("/", {
    input: z.number(),
    resolve: reviewResolver.getFoodReview,
  })
  .mutation("/create", {
    input: z.object({ text: z.string(), foodId: z.number() }),
    resolve: reviewResolver.createReview,
  });
