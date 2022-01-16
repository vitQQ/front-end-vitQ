const calculate = [];

const handleCalculateReducers = (state = calculate, action) => {
  const food = action.payload;
  switch (action.type) {
    case "ADD_FOOD":
      const exist = state.find((e) => e.id === food.id);
      if (exist) {
        return state.map((e) =>
          e.id === food.id ? { ...e, jumlah: e.jumlah + 1 } : e
        );
      } else {
        return [
          ...state,
          {
            ...food,
            jumlah: 1,
          },
        ];
      }

    case "DELETE_FOOD":
      const isExist = state.find((e) => e.id === food.id);
      if (isExist.jumlah === 1) {
        return state.filter((e) => e.id !== isExist.id);
      } else {
        return state.map((e) =>
          e.id === food.id ? { ...e, jumlah: e.jumlah - 1 } : e
        );
      }
    default:
      return state;
  }
};

export default handleCalculateReducers;
