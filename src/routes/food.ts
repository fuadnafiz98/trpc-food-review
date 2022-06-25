import { z } from "zod";
import { foodsResolver } from "../resolvers";

import { createRouter } from "../createRouter";

export const foods = createRouter()
  .query("/", {
    resolve: foodsResolver.getAllFoods,
  })
  .mutation("/create", {
    input: z.object({
      name: z.string(),
      description: z.string().optional(),
      imageURL: z.string().optional(),
    }),
    resolve: foodsResolver.createFood,
  });
