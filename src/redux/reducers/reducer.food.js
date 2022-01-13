const initialState = {
    food: [],
    loading: false,
    error: null,
  };

  const foodReducers = (state = initialState, action) => {
    switch (action.type) {
      case "GET_FOOD_REQUEST":
        return {
          ...state,
          loading: true,
        };
      case "GET_FOOD_SUCCESS":
        return {
          ...state,
          food: action.payload,
          loading: false,
        };
      case "GET_FOOD_FAIL":
        return {
          ...state,
          loading: false,
          error: action.error,
        };
      case "POST_FOOD_REQUEST":
        return {
          ...state,
          loading: true,
        };
      case "POST_FOOD_SUCCESS":
        return {
          ...state,
          loading: false,
        };
      case "POST_FOOD_FAIL":
        return {
          ...state,
          loading: false,
          error: action.error,
        };
  
      default:
        return state;
    }
  };
  
  export default foodReducers;