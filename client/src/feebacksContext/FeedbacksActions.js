export const getFeedbacksStart = () => ({
  type: "GET_FEEDBACKS_START",
});

export const getFeedbacksSuccess = (feedbacks) => ({
  type: "GET_FEEDBACKS_SUCCESS",
  payload: feedbacks,
});

export const getFeedbacksFailure = () => ({
  type: "GET_FEEDBACKS_FAILURE",
});

export const createFeedbacksStart = () => ({
  type: "CREATE_FEEDBACKS_START",
});

export const createFeedbacksSuccess = (list) => ({
  type: "CREATE_FEEDBACKS_SUCCESS",
  payload: list,
});

export const createFeedbacksFailure = () => ({
  type: "CREATE_FEEDBACKS_FAILURE",
});

export const updateListStart = () => ({
  type: "UPDATE_LIST_START",
});

export const updateListSuccess = (movie) => ({
  type: "UPDATE_LIST_SUCCESS",
  payload: movie,
});

export const updateListFailure = () => ({
  type: "UPDATE_LIST_FAILURE",
});

export const deleteFeedbacksStart = () => ({
  type: "DELETE_FEEDBACKS_START",
});

export const deleteFeedbacksSuccess = (id) => ({
  type: "DELETE_FEEDBACKS_SUCCESS",
  payload: id,
});

export const deleteFeedbacksFailure = () => ({
  type: "DELETE_FEEDBACKS_FAILURE",
});
