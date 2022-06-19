import { z } from "zod";

import { createRouter } from "../createRouter";

export const reviews = createRouter()
  .query("/", {
    async resolve() {
      return {
        name: "fuad",
      };
    },
  })
  .mutation("/create", {
    input: z.object({ name: z.string().min(5) }),
    async resolve() {
      return {
        id: 1,
        name: "fuadnafiz98",
      };
    },
  });
