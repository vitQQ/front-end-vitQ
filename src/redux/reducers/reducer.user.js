const initialState = {
  user: [],
  history: [],
  loading: false,
  error: null,
  token: localStorage.getItem("token") ? localStorage.getItem("token") : null
};

const userReducers = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_USER_SUCCESS":
      return {
        ...state,
        user: action.payload,
        history: action.payload2,
        loading: false,
      };
    case "GET_USER_FAIL":
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case "POST_USER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "POST_USER_SUCCESS":
      return {
        ...state,
        loading: false,
      };
    case "POST_USER_FAIL":
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default userReducers;
