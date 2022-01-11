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
      localStorage.setItem("token", data);
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
        `${process.env.REACT_APP_URL}/history`,
      ];

      const getData = await axios.all(endpoints.map((e) => axios.get(e), config))
      const data = await getData.spread(({data: user}, {data: history})=> {
        return {user, history}
      })

      console.log(data)

      // axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then(
      //   axios.spread(({data: user}, {data:repos}, {data:followers}, {data:following}) => {
      //     console.log({ user, repos, followers, following });
      //   })
      // );

      dispatch({
        type: "GET_USER_SUCCESS",
        payload: data
      });
    } catch (error) {
      dispatch({
        type: "GET_USER_FAIL",
        error: error,
      });
    }
  };
};
