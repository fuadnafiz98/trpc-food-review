import { prisma } from "../../prisma";

const getAllFoods = async (req: any) => {
  const foods = await prisma.food.findMany();
  return {
    foods,
  };
};

const createFood = async (req: any) => {
  const data = req.input;
  console.log(data);
  let food = {};
  try {
    food = await prisma.food.create({
      data: { ...data },
    });
  } catch (error) {
    console.log(error);
  }
  return {
    food,
  };
};

export { getAllFoods, createFood };
