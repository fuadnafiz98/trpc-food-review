import { z } from "zod";

import { createRouter } from "../createRouter";

export const foods = createRouter()
  .query("/", {
    async resolve(req) {
      return {
        name: "fuad",
      };
    },
  })
  .mutation("/create", {
    input: z.object({ name: z.string().min(5) }),
    async resolve(req) {
      return {
        id: 1,
        name: "fuadnafiz98",
      };
    },
  });