export const UPDATE_REDUX = "UPDATE_REDUX";

export const updateRedux = (data) => {
  return {
    type: UPDATE_REDUX,
    result: data,
  };
};