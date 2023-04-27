export const getReqStart = () => ({
  type: "GET_MOVIES_START",
});

export const getReqSuccess = (movies) => ({
  type: "GET_MOVIES_SUCCESS",
  payload: movies,
});

export const getReqFailure = () => ({
  type: "GET_MOVIES_FAILURE",
});

export const createReqStart = () => ({
  type: "CREATE_MOVIE_START",
});

export const createReqSuccess = (movie) => ({
  type: "CREATE_MOVIE_SUCCESS",
  payload: movie,
});

export const createReqFailure = () => ({
  type: "CREATE_MOVIE_FAILURE",
});

export const updateReqStart = () => ({ // UPLOAD WAS UPDATE
  type: "UPDATE_MOVIE_START",
});

export const updateReqSuccess = (movie) => ({
  type: "UPDATE_MOVIE_SUCCESS",
  payload: movie,
});

export const updateReqFailure = () => ({
  type: "UPDATE_MOVIE_FAILURE",
});

export const deleteReqStart = () => ({
  type: "DELETE_MOVIE_START",
});

export const deleteReqSuccess = (id) => ({
  type: "DELETE_MOVIE_SUCCESS",
  payload: id,
});

export const deleteReqFailure = () => ({
  type: "DELETE_MOVIE_FAILURE",
});
