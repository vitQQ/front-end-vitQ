export const addFood = (food) => {
  return {
    type: "ADD_FOOD",
    payload: food,
  };
};

export const deleteFood = (food) => {
  return {
    type: "DELETE_FOOD",
    payload: food,
  };
};
