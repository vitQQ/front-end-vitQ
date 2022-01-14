import axios from "axios";

export const getFood = () => {
  return async (dispatch) => {
    dispatch({
      type: "GET_FOOD_REQUEST",
    });
    try {
      const config = {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      };
      const {data} = await axios.get(
        `${process.env.REACT_APP_URL}/makanan`, config
      );
      dispatch({
        type: "GET_FOOD_SUCCESS",
        payload: data.result,
      });
    } catch (error) {
      dispatch({
        type: "GET_FOOD_FAIL",
        error: error.message,
      });
    }
  };
};

export const postFood = () => {
  return async (dispatch) => {
    dispatch({
      type: "POST_FOOD_REQUEST",
    });
    try {
      const config = {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      };
      await axios.post(`${process.env.REACT_APP_URL}/user-makanan`, config);
      dispatch({
        type: "POST_FOOD_SUCCESS",
      });
    } catch (error) {
      dispatch({
        type: "POST_FOOD_FAIL",
        error: error,
      });
    }
  };
};
