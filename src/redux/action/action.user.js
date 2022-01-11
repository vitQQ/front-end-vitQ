import axios from "axios";

export const getUser = () => {
  return async (dispatch) => {
    dispatch({
      type: "GET_USER_REQUEST",
    });
    try {
      const config = {
        headers: {
          Authorization: "Bearer" + localStorage.getItem("token"),
        },
      };
      const { data } = await axios.get(
        `${process.env.REACT_APP_URL}/user`,
        config
      );
      dispatch({
        type: "GET_USER_SUCCESS",
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: "GET_USER_FAIL",
        error: error,
      });
    }
  };
};

export const registerUser = (user) => {
  return async (dispatch) => {
    dispatch({
      type: "POST_USER_REQUEST",
    });
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_URL}/register`,
        user
      );
      console.log(data);
      dispatch({
        type: "POST_USER_SUCCESS",
      });
    } catch (error) {
      dispatch({
        type: "POST_USER_FAIL",
        error: error,
      });
    }
  };
};

export const loginUser = (user) => {
  return async (dispatch) => {
    dispatch({
      type: "POST_USER_REQUEST",
    });
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_URL}/login`,
        user
      );
      localStorage.setItem("token", data.result);
      dispatch({
        type: "POST_USER_SUCCESS",
      });
    } catch (error) {
      dispatch({
        type: "POST_USER_FAIL",
        error: error,
      });
    }
  };
};

export const home = () => {
  return async (dispatch) => {
    dispatch({
      type: "GET_USER_REQUEST",
    });
    try {
      const config = {
        headers: {
          Authorization: "Bearer" + localStorage.getItem("token"),
        },
      };
      const endpoints = [
        `${process.env.REACT_APP_URL}/user`,
        `${process.env.REACT_APP_URL}/user-activity`,
      ];

      const getData = await axios.all(endpoints.map((e) => axios.get(e), config))
      const data = getData.map((e) => e.data)
      const user = data[0]
      const history = data[1]
      console.log(user)

      dispatch({
        type: "GET_USER_SUCCESS",
        payload: data,
        payload2: history
      });
    } catch (error) {
      dispatch({
        type: "GET_USER_FAIL",
        error: error,
      });
    }
  };
};
