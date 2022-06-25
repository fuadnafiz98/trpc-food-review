import { prisma } from "../../prisma";

export const createReview = async (req: any) => {
  const review = await prisma.review.create({ data: req.input });
  return {
    review,
  };
};

export const getFoodReview = async (req: any) => {
  const reviews = await prisma.review.findMany({
    where: {
      foodId: req.input,
    },
  });
  return {
    reviews,
  };
};
